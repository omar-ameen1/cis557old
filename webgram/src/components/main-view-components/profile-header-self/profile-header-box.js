import React from 'react';
import ProfileHeaderBoxFollowers from "./profile-header-box-followers";
import getUserByName from "../../../scripts/get-user-by-name";

export default function ProfileHeaderBox(props) {

    const [userID, setUserID] = React.useState("");

    React.useEffect(() => {
        async function getUserID() {
            let user = await getUserByName(props.userName);
            setUserID(user[0].id);
        }
        getUserID();
    }, []);

    const editButton = () => {
        if (window.location.pathname === "/") {
            return (
                <button className={"profile-header-box-right-edit-button"}>
                    Edit Profile
                </button>
            );
        } else {
            return (
                <button className={"profile-header-box-right-follow-button"}>
                    Follow
                </button>
            );
        }
    }

    return (
        <div className={"profile-header-box"}>
            <div className={"profile-header-box-left"}>
                <img className={"profile-header-box-left-image"} src={props.profileImage} alt={"profile pic"} />
                <div className={"profile-header-box-left-bio"}>
                    <span className={"profile-header-box-left-bio-username"}>
                        {props.userName}
                    </span>
                    <span className={"profile-header-box-left-bio-bio"}>
                        {props.userBio}
                    </span>
                </div>
            </div>
            <div className={"profile-header-box-right"}>
                <ProfileHeaderBoxFollowers followingCount={300} followerCount={400} />
                {editButton()}
            </div>
        </div>
    );
}
