import React from 'react';
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PostLikesDislikesBar(props) {
    return (
        <div className={"post-likes-dislikes-bar"}>
            <div className={"likes-dislikes-counter"}>
                220 Likes | 10 Dislikes
            </div>
            <div className={"likes-dislikes-buttons"}>
                <button className={"like-button"}>
                    <FontAwesomeIcon icon={faHeart} className={"like-button-icon"}/>
                </button>
                <button className={"dislike-button"}>
                    <FontAwesomeIcon icon={faHeartBroken} className={"dislike-button-icon"}/>
                </button>
            </div>
        </div>
    );
}
