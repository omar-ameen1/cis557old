import React from 'react';

export default function CommentObject(props) {
    return (
        <div className={"comment-object"}>
            <div className={"comment-user-identifier"}>
                <img className={"comment-object-profile-pic"} src={props.profileImage} alt={"pfp"}/>
                <div className={"comment-object-name"}>
                    John Wang
                </div>
            </div>
            <div className={"comment-object-text"}>
                This is a comment This is a comment This is a comment This is a comment This is a comment
            </div>
        </div>
    );
}
