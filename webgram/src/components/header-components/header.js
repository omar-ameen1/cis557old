import React, {useEffect, useState} from 'react';
import HeaderNavButton from "./header-nav-button";
import HeaderNewPostButton from "./header-new-post-button";
import logo from './Text logo.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {getUser} from "../../scripts/get-user";


export default function Header(props) {

    const [userIcon, setUserIcon] = useState("");

    useEffect(() => {
        async function getUserIcon() {
            let user = await getUser(props.userID);
            setUserIcon(user.profilepic);
        }
        getUserIcon();
    }, []);

    return (
        <header className={"header"}>
            <img className={"header-logo"} src={logo} alt={"logo"}/>
            <div className={"header-nav"}>
                <HeaderNavButton linkTo={"#"} linkText={"Profile"} selected={true}/>
                <HeaderNavButton linkTo={"#"} linkText={"Feed"} selected={false}/>
                <HeaderNavButton linkTo={"#"} linkText={"Help"} selected={false}/>
            </div>
            <HeaderNewPostButton newPostLink={"#"}/>
            <form className={"header-search"}>
                <button type={"submit"} className={"header-search-button"}>
                    <FontAwesomeIcon icon={props.searchIcon} />
                </button>
                <input type={"text"} className={"header-search"} placeholder={"Search"}/>
            </form>
            <img className={"header-user-icon"} src={userIcon} alt={"user-icon"}/>
        </header>
    );
}
