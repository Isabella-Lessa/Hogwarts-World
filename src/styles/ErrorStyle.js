import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const ErrorContainer = styled.section`
    width: 100%;
    height: 100vh;
    background-color: #c5c1b0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
`

export const ErrorTxt = styled.div`
    background-color: #730404;
    width: 80%;
    height: 20em;
    padding: 40px;
    box-shadow: -5px 2px 15px 6px rgba(0,0,0,0.41);
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: column;
    @media screen and (max-width: 900px){
        width: 60%;
        height: 14em;
        padding: 30px
    }
    @media screen and (max-width: 620px){
        width: 50%;
        height: 250px;
        flex-direction: column;
    }
    @media screen and (max-width: 500px){
        height: 15em;
    }
    @media screen and (max-width: 450px){
        height: 
    }
`

export const ErrorTitle = styled.h1`
    font-size: 24px;
    font-family:'Montserrat';
    color: white;
    @media screen and (max-width: 900px){
        font-size: 19px
    }
    @media screen and (max-width: 620px){
        font-size: 15px
    }
    @media screen and (max-width: 450px){
        font-size: 13px
    }
`

export const ErrorMsg = styled.p`
    font-size: 18px;
    font-family:'Montserrat';
    color: white;
    @media screen and (max-width: 900px){
        font-size: 15px
    }
    @media screen and (max-width: 620px){
        font-size: 14px
    }
    @media screen and (max-width: 450px){
        font-size: 12px
    }
`

export const BTN = styled.button`
    background-color: black;
    width: 120px;
    height: 3em;
    border-radius: 10px;
    border: none;
    box-shadow: -3px 3px 10px 0px rgba(0,0,0,0.82);
    transition: 0.5s all;
    &:hover{
        background-color: white;
        cursor: pointer;
    }
    @media screen and (max-width: 900px){
        width: 100px;
        height: 2.3em;       
    }
    @media screen and (max-width: 620px){
        align-self: center
    }
    @media screen and (max-width: 450px){
        width: 80px;
        height: 2em;
    }
`

export const LINK = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 14px;
    font-family:'Montserrat';
    font-weight: 700;
    &:hover{
        color: black;
    }
    @media screen and (max-width: 620px){
        font-size: 13px
    }
    @media screen and (max-width: 450px){
        font-size: 11px
    }
`

export const FIG = styled.figure`
    width: 400px;
    height: 15em;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: -5px 2px 15px 6px rgba(0,0,0,0.41);
    @media screen and (max-width: 900px){
        width: 40%;
        height: 12em
    }
`

export const IMG = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`