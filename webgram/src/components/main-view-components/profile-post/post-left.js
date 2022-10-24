import React from 'react';
import PostLikesDislikesBar from "./post-likes-dislikes-bar";

export default function PostLeft(props) {
    return (
        <div className={"post-box-body-left"}>
            <div className={"post-image"}>
                <img src={props.postImage} className={"post-image"} alt={"post"}/>
            </div>
            <div className={"post-image-bio"}>
                {props.postBio}
            </div>
            <PostLikesDislikesBar />
        </div>
    );
}
