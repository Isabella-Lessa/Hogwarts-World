import React, { useEffect, useState } from 'react';
import Header from '../services/Header.jsx';
import Footer from '../services/Footer.jsx';
import SlyIcon from '../data/assets-pages/sly-icon.png';
import SlytherinImg from '../data/assets-pages/slytherin.png';
import * as S from '../styles/SlytherinStyle.js';
import axios from 'axios'

const Slytherin = () => {

    const [sly, setSly] = useState([])

    const slyAPI = ('https://hp-api.herokuapp.com/api/characters/house/slytherin')


    useEffect( () => {

        axios
        .get(slyAPI)
        .then( (res) => {
            setSly(res.data)
        } )
    }, [] )

  return (
    <S.SlyContainer>
      <Header/>
      <S.SlyAll>
        <S.SlyBox>
            <S.SlyIntro>
              <S.Title>Sonserina</S.Title>
              <S.P>Nesta sessão você encontra os personagens pertencentes à casa Sonserina</S.P>
            </S.SlyIntro>
            <S.SlyPic>
              <S.Icon src={SlyIcon} ></S.Icon>
            </S.SlyPic>
        </S.SlyBox>
        <S.Box>
          {sly.map( item => (
            <S.SlyCard>
            { item.image && (<S.IMG src={item.image}/>)
             || (<S.IMG src={SlytherinImg}/>)}
            <S.UL>
              <S.LI>Nome: {item.name}</S.LI>
              <S.LI>Ator: {item.actor}</S.LI>
              <S.LI>Espécie: {item.species}</S.LI>
            </S.UL>
          </S.SlyCard>
          ) )}
        </S.Box>
      </S.SlyAll>
      <Footer/>
    </S.SlyContainer>
  )
}

export default Slytherin
