import React from 'react';

export default function ProfileHeaderBoxFollowers(props) {
    return (
        <div className={"profile-header-box-right-followers"}>
            <div className={"profile-header-box-right-followers-text"}>
                <text>
                    {props.followingCount}
                </text>
                <text>
                    Following
                </text>
            </div>
            <div className={"follower-divider"} />
            <div className={"profile-header-box-right-followers-text"}>
                <text>
                    {props.followerCount}
                </text>
                <text>  
                    Followers
                </text>
            </div>
        </div>
    );
}
