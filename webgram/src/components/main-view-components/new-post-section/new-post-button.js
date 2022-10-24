import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function NewPostButton(props) {
    if (props.isImage) {
        return (
            <div className={"new-post-button"}>
                <FontAwesomeIcon icon={props.imageIcon} className={"new-post-button-icon"}/>
                <text className={"new-post-button-text"}>
                    Image
                </text>
            </div>
        );
    } else {
        return (
            <div className={"new-post-button"}>
                <FontAwesomeIcon icon={props.videoIcon} className={"new-post-button-icon"}/>
                <text className={"new-post-button-text"}>
                    Video
                </text>
            </div>
        );
    }
}
