import React, {useEffect, useState} from 'react';
import ProfileHeaderBox from "./profile-header-self/profile-header-box";
import NewPostSectionWrapper from "./new-post-section/new-post-section-wrapper";
import PostsTaggedSwitcher from './new-post-section/posts-tagged-switcher';
import PostBox from "./profile-post/post-box";
import postImage from "./profile-post/Rectangle 36.png";
import {getUser} from "../../scripts/get-user";
import {getUserPosts} from "../../scripts/get-user-posts";

export default function MainBody(props) {
    // TODO: Get all posts for the user and load them in dynamically
    // TODO: Must pass in all comments and also the likes and dislikes for each post

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

    useEffect(() => {
        async function getUserIcon() {
            let user = await getUser(props.userID);
            setUserIcon(user.profilepic);
        }
        getUserIcon();

        async function getUserName() {
            let user = await getUser(props.userID);
            setUserName(user.name);
        }

        getUserName();

        async function getUserBio() {
            let user = await getUser(props.userID);
            setUserBio(user.bio);
        }

        getUserBio();

        async function fetchPosts() {
            let posts = await getUserPosts(props.userID);
            setUserPosts(posts);
        }

        fetchPosts();
    }, []);

    console.log(props.userID);
    console.log(userPosts);

    function postBoxes() {
        return userPosts.map((post) => {
            return <PostBox postImage={post.images} postBio={post.bio} userName={userName} profileImage={userIcon}/>
        })
    }

    return (
        <div className={"main-body"}>
            <ProfileHeaderBox userBio={userBio} profileImage={userIcon} userName={userName}/>
            <PostsTaggedSwitcher />
            <NewPostSectionWrapper profileImage={userIcon} videoIcon={props.videoIcon} imageIcon={props.imageIcon}/>
            {postBoxes()}
        </div>
    );
}
