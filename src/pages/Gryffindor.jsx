import React, { useEffect, useState } from 'react'
import Header from '../services/Header.jsx';
import Footer from '../services/Footer.jsx';
import GryIcon from '../data/assets-pages/gryf-icon.png';
import GryfImg from '../data/assets-pages/gryffindor.png';
import * as S from '../styles/GryffindorStyle.js';
import axios from 'axios';

const Gryffindor = () => {

    const [gryf, setGryf] = useState([])

    const gryfAPI = ('https://hp-api.herokuapp.com/api/characters/house/gryffindor')

    useEffect( () => {

      axios
      .get(gryfAPI)
      .then( (res) => {
        setGryf(res.data)
      } )

    }, [] )

  return (
    <S.GryfContainer>
      <Header/>
      <S.GryfAll>
        <S.GryfBox>
            <S.GryfIntro>
              <S.Title>Grifinória</S.Title>
              <S.P>Nesta sessão você encontra os personagens pertencentes à casa Grifinória</S.P>
            </S.GryfIntro>
            <S.GryfPic>
              <S.Icon src={GryIcon} />
            </S.GryfPic>
        </S.GryfBox>
        
        <S.Box>
          {gryf.map( item => (
            <S.GryfCard>
            { item.image ? (<S.IMG src={item.image} alt={item.name}/>)
            : (<S.IMG src={GryfImg} alt="Gryffindor symbol"/>)}
            <S.UL>
              <S.LI>Nome: {item.name}</S.LI>
              <S.LI>Ator: {item.actor}</S.LI>
              <S.LI>Espécie: {item.species}</S.LI>
            </S.UL>
          </S.GryfCard>
          ) )}
        </S.Box>
      </S.GryfAll>
      <Footer/>
    </S.GryfContainer>
  )
}

export default Gryffindor