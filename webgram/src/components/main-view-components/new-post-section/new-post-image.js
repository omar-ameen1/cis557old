import React from 'react';

export default function NewPostImage(props) {

    if (props.img) {
        return (
            <div className={"new-post-image"}>
                <img src={props.img} className={"new-post-image-img"} alt={"pic"}/>
            </div>
        );
    }

    return null;
}
