import React, { useState } from 'react';
import * as S from '../styles/HeaderStyle.js';
import ImgLogo from '../data/assets-services/hp-logo.png';
import MenuClosed from '../data//assets-services/hp-menu.png';
import MenuOpen from '../data/assets-services/open-menu.png'

const Header = () => {

    const [menu, setMenu] = useState(false)
    
    const handleMenu = () => {
        setMenu(!menu)
    }

    const handleList = () => {
        <S.NAV2>
            <S.UL2>
                <S.LI2><S.LINK3 to='/'>Personagens</S.LINK3></S.LI2>
                <S.LI2><S.LINK3 to='/gryffindor'>Grifinória</S.LINK3></S.LI2>
                <S.LI2><S.LINK3 to='/slytherin'>Sonserina</S.LINK3></S.LI2>
                <S.LI2><S.LINK3 to='/hufflepuff'>Lufa-Lufa</S.LINK3></S.LI2>
                <S.LI2><S.LINK3 to='/ravenclaw'>Corvinal</S.LINK3></S.LI2>
            </S.UL2>
        </S.NAV2>
    }

    return (
            <S.Header>
                <S.FigMenu onClick={  handleMenu }>
                    <S.ImgMenu src={ menu ? MenuOpen : MenuClosed }/>
                </S.FigMenu>
                { menu && handleList() }
                <S.LINK1 to='/'>
                    <S.FigLogo>
                        <S.ImgLogo src={ImgLogo}></S.ImgLogo>
                    </S.FigLogo>
                </S.LINK1>
                <S.LINK2 to='/'><S.Title>Hogwart's World</S.Title></S.LINK2>
                <S.NAV>
                    <S.UL>
                        <S.LI><S.LINK3 to='/'>Personagens</S.LINK3></S.LI>
                        <S.LI><S.LINK3 to='/gryffindor'>Grifinória</S.LINK3></S.LI>
                        <S.LI><S.LINK3 to='/slytherin'>Sonserina</S.LINK3></S.LI>
                        <S.LI><S.LINK3 to='/hufflepuff'>Lufa-Lufa</S.LINK3></S.LI>
                        <S.LI><S.LINK3 to='/ravenclaw'>Corvinal</S.LINK3></S.LI>
                    </S.UL>
                </S.NAV>
            </S.Header>    
  )
}

export default Header
