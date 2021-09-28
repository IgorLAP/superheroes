import React from 'react';
import {HeaderArea} from './styled';

const Header = ()=>{
    return (
        <HeaderArea>
            <header>
            <div className="leftSide">
                <a href="/">
                    <img src="https://foobarpow.files.wordpress.com/2015/04/pow-e1428800619426.png" alt="" />
                </a>
            </div>
            <div className="rightSide">
                <span>SuperHeros Info</span>
            </div>
            </header>
        </HeaderArea>
    );
}

export default Header;