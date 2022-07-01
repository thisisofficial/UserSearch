import styled from "styled-components";

export const Title = styled.h1`
    font-family: 'Space Mono', monospace;
    font-weight: 700;
    font-size: ${props=> props.smol? "16px":"26px"};
    color: ${props => props.color? props.color:props.theme.title};
    margin-block-start: 0em;
    margin-block-end: ${props => props.plain? "0em": "0.67em"};
    transition: 0.2s;
    opacity: 100%;
    letter-spacing: ${props => props.hover? "2.5px":"unset"};

    &:hover{
        text-decoration: ${props => props.url? "underline" : "none"};
        cursor: ${props => props.url || props.hover? "pointer" : "default"};
        opacity: ${props => props.hover? "55%":"100%"};
    }
`;