import React from 'react';
import NewPostButton from "./new-post-button";
import NewPostPopup from "./new-post-popup";

export default function NewPostBox(props) {

    const [newPostPopup, setNewPostPopup] = React.useState(false);

    const togglePopupState = () => {
        setNewPostPopup(!newPostPopup);
    }

    return (
        <>
        <div className={"new-post-box"}>
            <div className={"new-post-box-left"} >
                <img className={"new-post-box-profile-picture"} src={props.profileIcon} alt={"pfp"}/>
            </div>
            <div className={"new-post-box-right"} >
                <input className={"new-post-box-textarea"} placeholder={"What's happening here?"} />
                <div className={"new-post-box-right-bottom"} >
                    <div className={"new-post-box-right-bottom-left"} >
                        <NewPostButton isImage={true} videoIcon={props.videoIcon} imageIcon={props.imageIcon} onClick={togglePopupState}/>
                        <NewPostButton isImage={false} videoIcon={props.videoIcon} imageIcon={props.imageIcon} onClick={togglePopupState}/>
                    </div>
                    <div className={"new-post-box-right-bottom-right"} >
                        <button className={"new-post-box-right-bottom-right-button"}>Post</button>
                    </div>
                </div>
            </div>
        </div>
            <NewPostPopup userID={props.userID} isOpen={newPostPopup} onClose={togglePopupState} />
        </>
    );
}
