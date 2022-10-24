import React from 'react';
import ProfileHeaderBoxFollowers from "./profile-header-box-followers";

export default function ProfileHeaderBox(props) {
    return (
        <div className={"profile-header-box"}>
            <div className={"profile-header-box-left"}>
                <img className={"profile-header-box-left-image"} src={props.profileImage} alt={"profile pic"} />
                <div className={"profile-header-box-left-bio"}>
                    <text className={"profile-header-box-left-bio-username"}>
                        {props.userName}
                    </text>
                    <text className={"profile-header-box-left-bio-bio"}>
                        {props.userBio}
                    </text>
                </div>
            </div>
            <div className={"profile-header-box-right"}>
                <ProfileHeaderBoxFollowers followingCount={300} followerCount={400} />
                <button className={"profile-header-box-right-edit-button"}>
                    Edit Profile
                </button>
            </div>
        </div>
    );
}
