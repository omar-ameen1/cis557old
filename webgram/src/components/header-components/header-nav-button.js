import React from 'react';

export default function HeaderNavButton(props) {
    if (props.selected) {
        return (
            <a className={"header-nav-button"} href={props.linkTo}>
                    {props.linkText}
                <div className={"header-nav-button-underline"} />
            </a>
        );
    } else {
        return (
            <a className={"header-nav-button-unselected"} href={props.linkTo}>
                <span>
                    {props.linkText}
                </span>
            </a>
        );
    }
}
