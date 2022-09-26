import React from 'react';
import RonImg from '../data/assets-services/error-ron.gif';
import * as S from "../styles/ErrorStyle.js";

const Error = () => {

    return (
        <S.ErrorContainer>
            <S.ErrorTxt>
                <S.ErrorTitle>Error 404 - Not Found</S.ErrorTitle>
                <S.ErrorMsg>Ops! Parece que você errou o caminho do site, potterhead...</S.ErrorMsg>
                <S.ErrorMsg>Para voltar para o "Hogwart's World" clique no botão abaixo:</S.ErrorMsg>
                <S.BTN><S.LINK to='/'>Voltar</S.LINK></S.BTN>
            </S.ErrorTxt>
            <S.FIG>
                <S.IMG src={RonImg}/>
            </S.FIG>
        </S.ErrorContainer>
    )
}

export default Error