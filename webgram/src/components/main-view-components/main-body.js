import React from 'react';
import ProfileHeaderBox from "./profile-header-self/profile-header-box";
import NewPostSectionWrapper from "./new-post-section/new-post-section-wrapper";
import userIcon from "./profile-header-self/anon-user-icon.jpg";
import PostsTaggedSwitcher from './new-post-section/posts-tagged-switcher';
import PostBox from "./profile-post/post-box";
import postImage from "./profile-post/Rectangle 36.png";

export default function MainBody(props) {
    return (
        <div className={"main-body"}>
            <ProfileHeaderBox profileImage={userIcon} userName={props.userName}/>
            <PostsTaggedSwitcher />
            <NewPostSectionWrapper profileImage={userIcon} videoIcon={props.videoIcon} imageIcon={props.imageIcon}/>
            <PostBox profileImage={userIcon} userName={props.userName} postImage={postImage} postBio={props.postBio}/>
        </div>
    );
}
