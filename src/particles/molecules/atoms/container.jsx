import styled from 'styled-components';

export const  AppCont = styled.div`
    background-color: ${props => props.theme.secondary};
    width: 50vw;
    height: calc(100vh - 32vh);
    padding-left: 25%;
    padding-right: 25%;
    padding-top: 16vh;
    padding-bottom: 16vh;
    display: flex;
    align-items: center;
    justify-items: center;

`;

export const Cont = styled.div`
    background-color: ${props => props.darker? props.theme.secondary: props.lighter? props.theme.primary: 'none'};
    width: ${props => props.init? "inherit": props.width? props.width: props.fullwidth? "calc(50vw - (50vw *.05))":"auto"};
    height: ${props => props.init? "inherit": "auto"};
    display: ${props => props.flex || props.flextablet || props.flexphone? "flex": "block"};
    justify-content: ${props => props.flex || props.flextablet || props.flexphone? props.startend? "space-between": props.onlystart? "flex-start": "space-around" :"unset"};
    margin-top: ${props => props.margin || props.margin_top? "24px": "0"};
    margin-bottom: ${props => props.margin || props.margin_bottom? "24px": "0"}; 
    margin-left: ${props => props.margin_left? "10px": "0"}; 
    margin-right: ${props => props.margin_right? "10px": "0"}; 
    border-radius: 15px;
    align-items: ${props => props.flex? "center": "unset"};
    padding: ${props => props.pad? props.pad: '0'};
    opacity: ${props=> props.fade? "50%": "100%"};
    position: ${props=> props.fullwidth? "relative": "unset"};
    left: ${props=> props.fullwidth? "-42%": "0"};
    transition: 0.2s;

    &:hover{
        opacity: ${props => props.hover || props.fade? "50%": "100px"};
        cursor: ${props => props.hover? "pointer": "default"};
    }

`;

export const ImgCont = styled.div`
    width: 10%;
    height: 0;
    padding-bottom: 10%;
    position: relative;
    background-color: #000;
    background-image: ${props => "url("+props.src+")"};
    background-size: cover;
    transform: scale(2,2);
    top: 30px;
    left: 15px;
    border-radius:50%;
`;