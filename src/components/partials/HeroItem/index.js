import React from 'react';
import { HeroItemArea } from './styled';
import {Link} from 'react-router-dom';

export default (props)=>{


    return(
        <HeroItemArea className="itemHero">
            <Link to={`/hero/${props.data.id}`} >
                <div className="resultItem">
                    <p>{props.data.name}</p>
                    <img className="heroImg" src={props.data.images.md} alt={props.data.name} />
                </div>
            </Link>
        </HeroItemArea>
    );
}