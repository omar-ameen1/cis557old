import React from 'react';

export default function TaggedSwitcherButton(props) {
    if (props.selected) {
        return (
            <a className={"switcher-button"} href={props.linkTo}>
                <text>
                    {props.linkText}
                </text>
                <div className={"switcher-button-underline"} />
            </a>
        );
    } else {
        return (
            <a className={"switcher-button-unselected"} href={props.linkTo}>
                <text>
                    {props.linkText}
                </text>
            </a>
        );
    }
}
