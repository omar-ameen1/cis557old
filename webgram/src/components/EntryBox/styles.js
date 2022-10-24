import React from "react";
import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width:100%;
`;
export const InputBox = styled.input`
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 6px;
    gap: 10px;


    background: #FFFFFF;
    /* Border */

    border: 2px solid #C6C4F5;
    border-radius: 4px;
    width:100%;
`
export const InputLabel = styled.label`
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;

    color: #6B778C;
`;