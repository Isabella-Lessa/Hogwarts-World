import styled from 'styled-components';

export const HuffleContainer = styled.section`
    width: 100%;
    height: 100vh
`

export const HuffleAll = styled.div`
    background-color: #c5c1b0;
    width: 100%;
    height: 170em;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 1163px){
        height: 660vh
    }
    @media screen and (max-width: 980px){
        height: 700vh;
    }
    @media screen and (max-width: 887px){
        height: 960vh;
    }
    @media screen and (max-width: 611px){
        height: 1790vh;
    }
`

export const HuffleBox = styled.div`
    width: 75%;
    height: 10em;
    display: flex;
    justify-content: space-evenly;
    align-items: center
`

export const HuffleIntro = styled.div`
    width: 60%;
    height: 8em;
    background-color: #ECB939;
    box-shadow: -5px 2px 15px 6px rgba(0,0,0,0.41);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 980px){
        width: 40%;
        height: 15em;
        padding: 10px
    }
    @media screen and (max-width: 460px){
        width: 50%
    }
`

export const HufflePic = styled.figure`
    width: 12%;
    height: 6em;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 1s all;
    background-color: #ECB939;
    border-radius: 20px;
    border: 4px solid #372E29;
    &:hover{
        transform: scale(1.1)
    }

    @media screen and (max-width: 1279px){
        width: 15%;
        height: 6.5em
    }
    @media screen and (max-width: 980px){
        width: 18%;
        height: 7em
    }
    @media screen and (max-width: 840px){
        width: 23%;
    }
    @media screen and (max-width: 625px){
        width: 30%;
    }
    @media screen and (max-width: 570px){
        width: 35%;
    }
`

export const Icon = styled.img`
    width: 90px;

    @media screen and (max-width: 570px){
        width: 75px;
    }
`

export const Title = styled.h2`
    color: white;
    font-size: 22px;

    @media screen and (max-width: 980px){
        font-size: 110%;
        line-height: 30px;
    }
    @media screen and (max-width: 980px){
        font-size: 110%;
        line-height: 30px;
    }
    @media screen and (max-width: 625px){
        font-size: 90%;
        line-height: 25px;
    }
    @media screen and (max-width: 443px){
        font-size: 80%
    }
`

export const P = styled.p`
    color: white;
    font-size: 17px;
    line-height: 40px;

    @media screen and (max-width: 1183px){
        font-size: 90%;
    }
    @media screen and (max-width: 980px){
        font-size: 100%;
        line-height: 30px;
    }
    @media screen and (max-width: 625px){
        font-size: 80%
    }
    @media screen and (max-width: 443px){
        font-size: 70%
    }
`

export const Box = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px;

    @media screen and (max-width: 980px){
        margin: 50px
    }
`

export const HuffleCard = styled.div`
    background-color: #ECB939;
    width: 15em;
    height: 26em;
    margin: 18px;
    transition: 1s all;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: -5px 2px 15px 6px rgba(0,0,0,0.41);
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
`

export const IMG = styled.img`
    width: 250px;
    height: 300px;
    object-fit: cover;
`

export const UL = styled.ul`
    padding: 10px
`

export const LI = styled.li`
    list-style: none;
    color: white;
    font-size: 16px;
    line-height: 25px
`