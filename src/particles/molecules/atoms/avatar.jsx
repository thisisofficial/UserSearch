import styled from "styled-components";

export const SVG = styled.img`
    height: 20px;
    width: ${props => props.loc? "15px": "20px"};
    filter: ${props => !props.dark? "invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100) contrast(100%)": "invert(37%) sepia(77%) saturate(329%) hue-rotate(178deg) brightness(90%) contrast(88%)"};
    margin-right: 16px;
`;

export const SearchSVG = styled(SVG)`
    height: 23px;
    width: 23px;
    filter: none;
`;

export const LightSVG = styled.img`
    height: 20px;
    width:  "20px";
    margin-left: "10px";
`;
