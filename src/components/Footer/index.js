import React from 'react';
import {FooterArea} from './styled';

const Header = ()=>{
    return (
        <FooterArea>
            Projeto faz parte do portfólio de <a target="_blank" href="https://github.com/igorlap">Igor Pedrosa <img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="github icon"/></a>
            <br/> <span>Direitos de imagens da Netflix</span>
        </FooterArea>
    );
}

export default Header;