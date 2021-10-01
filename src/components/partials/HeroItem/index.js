import React, {useEffect} from 'react';
import { HeroItemArea } from './styled';
import {Link} from 'react-router-dom';

export default (props)=>{
    let favorites = JSON.parse(localStorage.getItem('grupo')) || [];

    const handleAdd = (e)=>{
        let url = e.target.parentElement.href;
        let id = url.replace('http://localhost:3000/hero/','');
        let src = e.target.previousElementSibling.children[1].src;
        let tempObj = {id, src};
        
        if(localStorage.getItem('grupo') !== null){
            favorites.push(tempObj);
            localStorage.setItem('grupo', JSON.stringify(favorites));
        } else {
            favorites.push(tempObj);
            localStorage.setItem('grupo', JSON.stringify(favorites));
        }
    }

    const handleRemove = (e)=>{
        let url = e.target.parentElement.href;
        let id = url.replace('http://localhost:3000/hero/','');
        let src = e.target.previousElementSibling.previousElementSibling.children[1].src;
        console.log(src);
        
        //const index = favorites.indexOf(src);
        for(let i=0;i<=favorites.length; i++){
            let index = favorites[i].src.indexOf(src);
            if(index === 0){
                favorites.splice(favorites[i],1);
                localStorage.setItem('grupo', JSON.stringify(favorites));
            } else{
                alert('naruto');
            }
        }
    }

    //console.log(favorites);
    return(
        <HeroItemArea className="itemHero">
            <Link to={`/hero/${props.data.id}`} >
                <div className="resultItem">
                    <p>{props.data.name}</p>
                    <img className="heroImg" src={props.data.images.md} alt={props.data.name} />
                </div>
                <div onClick={handleAdd} className="add" title="Adicionar ao grupo">+</div>
                <div onClick={handleRemove} className="remove" title="Remover do grupo">-</div>
            </Link>
        </HeroItemArea>
    );
}