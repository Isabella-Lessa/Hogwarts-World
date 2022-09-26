import React from 'react';
import { Link } from 'react-router-dom';
import HogwartsImg from '../data/assets-pages/hogwarts.png';
import GryIcon from '../data/assets-pages/gryf-icon.png';
import HuffleIcon from '../data/assets-pages/huffle-icon.png';
import RavenIcon from '../data/assets-pages/raven-icon.png';
import SlyIcon from '../data/assets-pages/sly-icon.png';
import Arrow from '../data/assets-services/arrow.png';
import * as S from '../styles/FooterStyle.js';

const Footer = () => {
  return (
            <S.Footer>
                <S.BoxFooter>
                    <S.BoxIcons>
                        <Link to='/'><S.ImgHogwarts src={HogwartsImg}/></Link>
                        <Link to='/gryffindor'><S.ImgIcon src={GryIcon}/></Link>
                        <Link to='/slytherin'><S.ImgIcon src={SlyIcon}/></Link>
                        <Link to='/ravenclaw'><S.ImgRavenclaw src={RavenIcon}/></Link>
                        <Link to='/hufflepuff'><S.ImgIcon src={HuffleIcon}/></Link>
                    </S.BoxIcons>
                    <S.Copy>
                        ©  Copyright 2022 - Desenvolvido por Isabella Lessa.
                    </S.Copy>
                    <S.BTN>
                        <a href='#'><S.Arrow src={Arrow}/></a>
                    </S.BTN>
                </S.BoxFooter>
            </S.Footer>
  )
}

export default Footer