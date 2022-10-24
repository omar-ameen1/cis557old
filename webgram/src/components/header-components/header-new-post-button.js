import React from 'react';

export default function HeaderNewPostButton(props) {
    return (
        <a className={"header-new-post-button"} href={props.newPostLink}>
            + New Post
        </a>
    );
}
