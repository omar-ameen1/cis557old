import React from 'react';
import CommentObject from "./comment-object";

export default function PostRight(props) {
    return (
        <div className={"post-box-body-right"}>
            <div className={"comments-box"}>
                <CommentObject profileImage={props.profileImage} />
            </div>
            <div className={"add-comment-box"}>
                <img className={"new-comment-profile-pic"} src={props.profileImage} alt={"pfp"}/>
                <input className={"add-comment-box-textarea"} placeholder={"Add a comment..."} />
            </div>
        </div>
    );
}
