import styled from "styled-components";
import React from "react";
import { Title } from "./title";

const ButtonCont = styled.button`
    width: auto;
    border-radius: 15px;
    justify-content: center;
    display: flex;
    align-items: center;
    padding: 14px 18px 14px 18px;
    background-color: #0079FF;
    cursor: pointer;
    transition: 0.2s;
    border: none;

    &:hover{
        background-color: #60ABFF;
    }
`;

export function Button(props){

    const {text, onClick} = props;

    return(
        <ButtonCont onClick={onClick}>
            <Title smol plain color="#FFFFFF">
                {text}
            </Title>
        </ButtonCont>
    )
}