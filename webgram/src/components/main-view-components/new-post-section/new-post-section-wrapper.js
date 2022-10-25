import React from 'react';
import NewPostBox from './new-post-box';

export default function NewPostSectionWrapper(props) {
    return (
        <NewPostBox userID={props.userID} profileIcon={props.profileImage} imageIcon={props.imageIcon} videoIcon={props.videoIcon}/>
    );
}
