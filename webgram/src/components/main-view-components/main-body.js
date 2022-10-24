import React from 'react';
import ProfileHeaderBox from "./profile-header-self/profile-header-box";
import NewPostSectionWrapper from "./new-post-section/new-post-section-wrapper";
import userIcon from "./profile-header-self/anon-user-icon.jpg";
import PostsTaggedSwitcher from './new-post-section/posts-tagged-switcher';
import PostBox from "./profile-post/post-box";
import postImage from "./profile-post/Rectangle 36.png";

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
    return (
        <div className={"main-body"}>
            <ProfileHeaderBox profileImage={userIcon} userName={props.userName}/>
            <PostsTaggedSwitcher />
            <NewPostSectionWrapper profileImage={userIcon} videoIcon={props.videoIcon} imageIcon={props.imageIcon}/>
            <PostBox profileImage={userIcon} userName={props.userName} postImage={postImage} postBio={props.postBio}/>
            <PostBox profileImage={userIcon} userName={props.userName} postImage={postImage} postBio={props.postBio}/>
            <PostBox profileImage={userIcon} userName={props.userName} postImage={postImage} postBio={props.postBio}/>
        </div>
    );
}
