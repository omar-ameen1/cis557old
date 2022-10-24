import React from 'react';
import NewPostButton from "./new-post-button";

export default function NewPostBox(props) {
    return (
        <div className={"new-post-box"}>
            <div className={"new-post-box-left"} >
                <img className={"new-post-box-profile-picture"} src={props.profileIcon} alt={"pfp"}/>
            </div>
            <div className={"new-post-box-right"} >
                <input className={"new-post-box-textarea"} placeholder={"What's happening here?"} />
                <div className={"new-post-box-right-bottom"} >
                    <div className={"new-post-box-right-bottom-left"} >
                        <NewPostButton isImage={true} videoIcon={props.videoIcon} imageIcon={props.imageIcon} />
                        <NewPostButton isImage={false} videoIcon={props.videoIcon} imageIcon={props.imageIcon} />
                    </div>
                    <div className={"new-post-box-right-bottom-right"} >
                        <button className={"new-post-box-right-bottom-right-button"}>Post</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
