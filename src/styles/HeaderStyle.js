import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.div`
    width: 100%;
    height: 8em;
    background-color: #2E2E33;
    box-shadow: 0px 8px 10px 0px rgba(0,0,0,0.44);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: fixed;
    z-index: 9999
`

export const FigMenu = styled.figure`
    width: 13%;
    height: 6em;
    display: none;

    @media screen and (max-width: 840px){
        display: flex;
        align-items: center;
        justify-content: center; 
    }
`

export const ImgMenu = styled.img`
    width: 100px;

    @media screen and (max-width: 570px){
        width: 80px;
    }
`

export const FigLogo = styled.figure`
    width: 80%;
    height: 6em;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 1s all;
    background-color: #730404;
    border-radius: 20px;
    border: 4px solid #ebbb33;
    &:hover{
        transform: scale(1.1)
    }

    @media screen and (max-width: 980px){
        width: 98%;
        height: 6.5em
    }
    @media screen and (max-width: 840px){
        width: 90%;
    }
    @media screen and (max-width: 600px){
        width: 95%;
    }
    @media screen and (max-width: 460px){
        height: 6em
    }
`

export const ImgLogo = styled.img`
    width: 80px;

    @media screen and (max-width: 570px){
        width: 60px;
    }
    @media screen and (max-width: 460px){
        width: 55px
    }
`

export const Title = styled.h1`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;   
    font-size: 28px;
    font-weight: 600;
    color: white;
    cursor: pointer;

    @media screen and (max-width: 1194px){
        font-size: 170%
    }
    @media screen and (max-width: 1066px){
        width: 100%;
        font-size: 130%
    }
    @media screen and (max-width: 570px){
        font-size: 110%
    }
`

export const NAV = styled.nav`
    width: 60%;

    @media screen and (max-width: 900px){
        width: 50%;
    }
    @media screen and (max-width: 840px){
        display: none
    }
`

export const UL = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-evenly
`

export const NAV2 = styled.nav`
    position: absolute;
    display: flex;
    align-items: flex-end;
    top: 0;
    right: 0;
    width: 20vw;
    height: 200px;
    background-color: white;
    
    @media screen and (max-width: 840px){
        width: 50%;
    }

`

export const UL2 = styled.ul`
    display: flex;
    height: 20vh;
    width: 100%;
    align-items: center;
    flex-direction: column;
`

export const LI = styled.li`
    width: 16%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center
`

export const LI2 = styled.li`
    width: 16%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center
`

export const LINK1 = styled(Link)`
    width: 10%;
    height: 6em;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 840px){
        width: 15%
    }
    @media screen and (max-width: 614px){
        width: 20%;
    }
    @media screen and (max-width: 460px){
        width: 25%
    }
`

export const LINK2 = styled(Link)`
    width: 25%;
    height: 3em;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 642px){
        width: 30%;
    }
    @media screen and (max-width: 570px){
        width: 40%
    }
`

export const LINK3 = styled(Link)`
    font-size: 20px;
    font-weight: 300;
    text-decoration: none;
    color: white;
    cursor: pointer;
    &:hover{
        font-weight: 600
    }

    @media screen and (max-width: 900px){
        font-size: 17px;
    }
`