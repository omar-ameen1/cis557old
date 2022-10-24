import React from "react";
import { ButtonControl, ButtonLabel } from "./styles";

export default function Button({
    text = "Log In",
}) {
    return (
        <ButtonControl>
            <ButtonLabel>{text}</ButtonLabel>
        </ButtonControl>
    )
}