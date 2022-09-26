import React, { useEffect, useState } from 'react';
import Header from '../services/Header.jsx';
import Footer from '../services/Footer.jsx';
import axios from 'axios';
import CastellImg from '../data/assets-pages/hogwarts-castell.png';
import HogwartsImg from '../data/assets-pages/hogwarts.png';
import * as S from '../styles/CharactersStyle.js';

const Characters = () => {

    const [persons, setPersons] = useState([])

    const API = 'http://hp-api.herokuapp.com/api/characters'

    useEffect( () => {
        axios
            .get(API)
            .then( res => {
                setPersons(res.data.slice(0,200))
            })
    }
        ,[])

    return(
        <S.ContainerPersons>
            <Header />
            <S.Characters>
                <S.PersonsBox>
                <S.Intro>
                    <S.TitleTxt>Seja bem vindo(a), ao mundo de Hogwats!</S.TitleTxt>
                    <S.P>Aqui você encontra todos os personagens da saga Harry Potter:</S.P>
                </S.Intro>
                <S.Castell>
                    <S.Icon src={CastellImg} />
                </S.Castell>
                </S.PersonsBox>
                <S.Box>
                {persons.map( item => (
                    <S.CardInfo>
                            { (item.image && (<S.Imgs src={item.image} alt={item.name}/>))
                            || (<S.Imgs src={HogwartsImg} alt="Hogwarts symbol"/>)}
                        <S.Ul>
                            <S.Li>Nome: {item.name}</S.Li>
                            <S.Li>Ator: {item.actor}</S.Li>
                            <S.Li>Espécie: {item.species}</S.Li>
                        </S.Ul>
                    </S.CardInfo>
                        ) )}  
                </S.Box>
            </S.Characters>
            <Footer/>
        </S.ContainerPersons>
    )
}

export default Characters