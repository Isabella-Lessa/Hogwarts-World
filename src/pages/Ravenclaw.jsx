import React, { useEffect, useState } from 'react'
import Header from '../services/Header.jsx';
import Footer from '../services/Footer.jsx';
import RavenIcon from '../data/assets-pages/raven-icon.png';
import RavenImg from '../data/assets-pages/ravenclaw.png';
import * as S from '../styles/RavenclawStyle.js';
import axios from 'axios';

const Ravenclaw = () => {

    const [raven, setraven] = useState([])

    const ravenAPI = ('https://hp-api.herokuapp.com/api/characters/house/ravenclaw')

    useEffect( () => {

      axios
      .get(ravenAPI)
      .then( (res) => {
        setraven(res.data)
      } )

    }, [] )

  return (
    <S.RavenContainer>
      <Header/>
      <S.RavenAll>
        <S.RavenBox>
            <S.RavenIntro>
              <S.Title>Corvinal</S.Title>
              <S.P>Nesta sessão você encontra os personagens pertencentes à casa Lufa-Lufa</S.P>
            </S.RavenIntro>
            <S.RavenPic>
              <S.Icon src={RavenIcon} />
            </S.RavenPic>
        </S.RavenBox>
        
        <S.Box>
          {raven.map( item => (
            <S.RavenCard>
            { item.image ? (<S.IMG src={item.image}/>)
            : (<S.IMG src={RavenImg}/>) }
            <S.UL>
              <S.LI>Nome: {item.name}</S.LI>
              <S.LI>Ator: {item.actor}</S.LI>
              <S.LI>Espécie: {item.species}</S.LI>
            </S.UL>
          </S.RavenCard>
          ) )}
        </S.Box>
      </S.RavenAll>
      <Footer/>
    </S.RavenContainer>
  )
}

export default Ravenclaw