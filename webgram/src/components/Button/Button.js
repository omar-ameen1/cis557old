import React from "react";
import { ButtonControl, ButtonLabel } from "./styles";

export default function Button(props) {
    return (
        <ButtonControl onClick={props.loginHandler}>
            <ButtonLabel>{props.text}</ButtonLabel>
        </ButtonControl>
    )
}