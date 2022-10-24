import React from 'react';
import TaggedSwitcherButton from "./tagged-switcher-button";

export default function PostsTaggedSwitcher(props) {
    return (
        <div className={"posts-tagged-switcher"}>
            <TaggedSwitcherButton linkTo={"/"} linkText={"Posts"} selected={true} />
            <TaggedSwitcherButton linkTo={"/"} linkText={"Tagged"} selected={false} />
        </div>
    );
}
