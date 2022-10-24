import React from 'react';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PostLeft from "./post-left";
import PostRight from "./post-right";

export default function PostBox(props) {
    return (
        <div className={"post-box"}>
            <div className={"post-box-header"}>
                <div className={"post-user-info"}>
                    <img src={props.profileImage} className={"post-box-profile-image"} alt={"pfp"}/>
                    <text className={"post-box-username"}>
                        {props.userName}
                    </text>
                </div>
                <FontAwesomeIcon icon={faEllipsis} className={"post-box-ellipsis"}/>
            </div>
            <div className={"post-box-body"}>
                <PostLeft postImage={props.postImage} postBio={props.postBio}/>
                <PostRight profileImage={props.profileImage} />
            </div>
        </div>
    );
}
