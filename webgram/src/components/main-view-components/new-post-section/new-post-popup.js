import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faX, faUser, faChevronRight, faEye, faComment } from "@fortawesome/free-solid-svg-icons";
import NewPostPopupNextButton from "./new-post-popup-next-button";
import createPost from "../../../scripts/create-post";

export default function NewPostPopup(props) {

    const [uploadedImage, setUploadedImage] = React.useState(null);

    const loadImage = event => {
        setUploadedImage(URL.createObjectURL(event.target.files[0]));
    }

    const imageUploadSection = () => {
        if (uploadedImage) {
            return (
                <div className={"new-post-image"}>
                    <img src={uploadedImage} className={"new-post-image-img"} alt={"pic"}/>
                </div>
            );
        } else {
            return (
                <div className={"new-post-image"}>
                    <input id={"new-post-image-input"} type={"file"} onChange={loadImage} className={"new-post-image-input"}/>
                </div>
            );
        }
    }

    const createPost = () => {
        console.log(document);
        const img = document.getElementById("new-post-image-img");
        console.log("img: " + img);
        const caption = document.getElementById("new-post-popup-text-input");
        console.log("caption: " + caption);
        const user = props.userID;
        const data = new FormData();
        data.append("image", img);
        data.append("caption", caption);
        data.append("user", user);
        createPost(data, user).then(() => {
            console.log("Post created");
            props.onClose();
        });
    }

    if (props.isOpen) {
        return (
            <div className={"new-post-popup-background"}>
                <div className={"new-post-popup-body"}>
                    <div className={"new-post-popup-body-top"}>
                        <div className={"new-post-popup-header"}>
                            Upload Media
                        </div>
                        <a className={"new-post-popup-body-top-close-icon"} onClick={() => {
                            props.onClose();
                            setUploadedImage(null);
                        }}>
                            <FontAwesomeIcon icon={faX}/>
                        </a>
                    </div>
                    <div className={"new-post-popup-body-bottom"}>
                        {imageUploadSection()}
                    </div>
                    <input className={"new-post-popup-text-input"} placeholder={"Caption your post."} />
                    <div className={"new-post-popup-tag-people"}>
                        <div className={"new-post-popup-tag-people-text"}>
                            <FontAwesomeIcon icon={faUser} className={"fa-user"}/>
                            Tag People
                        </div>
                        <div className={"new-post-popup-allow-comments-toggle"}>
                            <FontAwesomeIcon icon={faChevronRight} className={"fa-chevron-right"}/>
                        </div>
                    </div>
                    <div className={"new-post-popup-visibility"}>
                        <div className={"new-post-popup-visibility-text"}>
                            <div className={"visibility-left"}>
                                <FontAwesomeIcon icon={faEye} className={"fa-eye"}/>
                                Who can see this?
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faChevronRight} color={"white"}/>
                            </div>
                        </div>
                        <div className={"new-post-popup-visibility-select"}>
                            <div className={"visibility-selector"}>
                                <input type={"radio"} id={"public"} name={"visibility"} value={"public"} />
                                <label htmlFor={"public"} className={"visibility-selector-label"}>Everyone</label>
                            </div>
                            <div className={"visibility-selector"}>
                                <input type={"radio"} id={"private"} name={"visibility"} value={"private"} />
                                <label htmlFor={"private"} className={"visibility-selector-label"}>Friends Only</label>
                            </div>
                        </div>
                    </div>
                    <div className={"new-post-popup-allow-comments"}>
                        <div className={"new-post-popup-allow-comments-text"}>
                            <FontAwesomeIcon icon={faComment} className={"fa-comment"}/>
                            Allow Comments
                        </div>
                        <label className={"new-post-popup-allow-comments-toggle"}>
                            <input type={"checkbox"} />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className={"next-button-wrapper"}>
                        <NewPostPopupNextButton onClick={() => {
                            props.onClose();
                        }} />
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
}
