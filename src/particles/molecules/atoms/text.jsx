import styled from "styled-components";

export const Text = styled.p`
    font-family: 'Space Mono', monospace;
    font-weight: 400;
    font-size: ${props => props.smol? "13px": "15px"};
    color: ${props => props.color? props.color : props.theme.text};
    margin:0;

    &:hover{
        text-decoration: ${props => props.url? "underline" : "none"};
        cursor: ${props => props.url? "pointer" : "default"};
    }
`;

export const TextBox = styled.input`
    background-color: transparent;
    color: ${props => props.theme.text};
    border: none;
    width: 100%;
    height: 100%;
    font-size: 15px;
    font-family: 'Space Mono', monospace;
`;