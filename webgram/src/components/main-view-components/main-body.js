import React from 'react';
import ProfileHeaderBox from "./profile-header-self/profile-header-box";
import NewPostSectionWrapper from "./new-post-section/new-post-section-wrapper";
import userIcon from "./profile-header-self/anon-user-icon.jpg";
import PostsTaggedSwitcher from './new-post-section/posts-tagged-switcher';

export default function MainBody(props) {
    return (
        <div className={"main-body"}>
            <ProfileHeaderBox profileImage={userIcon} userName={props.userName}/>
            <PostsTaggedSwitcher />
            <NewPostSectionWrapper profileImage={userIcon} videoIcon={props.videoIcon} imageIcon={props.imageIcon}/>
        </div>
    );
}
