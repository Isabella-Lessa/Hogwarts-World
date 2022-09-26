import React, { useEffect, useState } from 'react'
import Header from '../services/Header.jsx';
import Footer from '../services/Footer.jsx';
import HuffleIcon from '../data/assets-pages/huffle-icon.png';
import HuffleImg from '../data/assets-pages/hufflepuff.png';
import * as S from '../styles/HufflepuffStyle.js';
import axios from 'axios';

const Hufflepuff = () => {

    const [huffle, sethuffle] = useState([])

    const huffleAPI = ('https://hp-api.herokuapp.com/api/characters/house/hufflepuff')

    useEffect( () => {

      axios
      .get(huffleAPI)
      .then( (res) => {
        sethuffle(res.data)
      } )

    }, [] )

  return (
    <S.HuffleContainer>
      <Header/>
      <S.HuffleAll>
        <S.HuffleBox>
            <S.HuffleIntro>
              <S.Title>Lufa-Lufa</S.Title>
              <S.P>Nesta sessão você encontra os personagens pertencentes à casa Lufa-Lufa</S.P>
            </S.HuffleIntro>
            <S.HufflePic>
              <S.Icon src={HuffleIcon} />
            </S.HufflePic>
        </S.HuffleBox>
        
        <S.Box>
          {huffle.map( item => (
            <S.HuffleCard>
            { item.image && (<S.IMG src={item.image}/>)
            || (<S.IMG src={HuffleImg}/>)}
            <S.UL>
              <S.LI>Nome: {item.name}</S.LI>
              <S.LI>Ator: {item.actor}</S.LI>
              <S.LI>Espécie: {item.species}</S.LI>
            </S.UL>
          </S.HuffleCard>
          ) )}
        </S.Box>
      </S.HuffleAll>
      <Footer/>
    </S.HuffleContainer>
  )
}

export default Hufflepuff