import React, {useEffect, useState} from 'react';
import ProfileHeaderBox from "./profile-header-self/profile-header-box";
import NewPostSectionWrapper from "./new-post-section/new-post-section-wrapper";
import PostsTaggedSwitcher from './new-post-section/posts-tagged-switcher';
import PostBox from "./profile-post/post-box";
import getUserByName from "../../scripts/get-user-by-name";
import {useParams} from "react-router-dom";
import Header from "../header-components/header";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import getUserPostsByName from "../../scripts/get-user-posts-by-name";

export default function MainBody(props) {
    // TODO: Must pass in all the likes and dislikes for each post

    // TODO: Make it possible to add a new post
    // TODO: Make it possible to add a new comment

    // TODO: Make it possible to like and dislike a post

    // TODO: Make it possible to follow and unfollow a user

    // TODO: Add functionality to search bar and make it possible to search for users using Redux

    // TODO: Make it possible to view a user's profile by clicking on their username

    // TODO: Add functionality to the profile picture and make it possible to change it

    // TODO: Add functionality to the edit profile button and make it possible to edit the user's profile

    const [userIcon, setUserIcon] = useState("");
    const [userName, setUserName] = useState("");
    const [userBio, setUserBio] = useState("");
    const [userPosts, setUserPosts] = useState([]);

    const params = useParams();
    const username = params.username;

    const [userID, setUserID] = React.useState("");

    console.log("username: " + username);
    console.log("userID: " + props.userID);

    React.useEffect(() => {
        async function getUserID() {
            let user = await getUserByName(props.userName);
            setUserID(user[0].id);
        }
        getUserID();
    }, []);

    useEffect(() => {
        async function getUserIcon() {
            let user = await getUserByName(username);
            setUserIcon(user[0].profilepic);
        }
        getUserIcon();

        async function getUserName() {
            let user = await getUserByName(username);
            setUserName(user[0].name);
        }
        getUserName();

        async function getUserBio() {
            let user = await getUserByName(username);
            setUserBio(user[0].bio);
        }
        getUserBio();

        async function fetchPosts() {
            let posts = await getUserPostsByName(username);
            setUserPosts(posts);
        }

        fetchPosts();
    }, []);

    function postBoxes() {
        return userPosts.map((post) => {
            return <PostBox postImage={post.images} postBio={post.bio} userName={userName} profileImage={userIcon}/>
        })
    }

    const newPost = () => {
        if (props.userID === userID) {
            return (
                <>
                    <PostsTaggedSwitcher />
                    <NewPostSectionWrapper profileImage={userIcon} videoIcon={props.videoIcon} imageIcon={props.imageIcon}/>
                </>
            );
        }
    }

    return (
        <>
            <Header searchIcon={faMagnifyingGlass} userName={username} />
            <div className={"main-body"}>
                <ProfileHeaderBox userBio={userBio} profileImage={userIcon} userName={userName} userID={props.userID}/>
                {newPost()}
                {postBoxes()}
            </div>
        </>
    );
}
