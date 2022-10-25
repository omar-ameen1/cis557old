import React from 'react';

export default function NewPostPopupNextButton(props) {
    return (
        <button className={"new-post-popup-next"} onClick={props.onClick}>
            Post
        </button>
    );
}
