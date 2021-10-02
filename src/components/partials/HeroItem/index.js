import React from 'react';
import { HeroItemArea } from './styled';
import {Link} from 'react-router-dom';

export default (props)=>{
    let favorites = JSON.parse(localStorage.getItem('grupo')) || [];
    const handleAdd = (e)=>{
        let url = e.target.parentElement.href;
        let id = url.replace('http://localhost:3000/hero/','');
        let src = e.target.previousElementSibling.children[1].src;
        let tempObj = {id, src};
        
        if(localStorage.getItem('grupo') === null || localStorage.getItem('grupo') === "[]"){
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
        
        for(let i=0;i<favorites.length; i++){
            if(favorites[i].src === src){
                let index = favorites.indexOf(favorites[i]);
                favorites.splice(index,1);
                localStorage.setItem('grupo', JSON.stringify(favorites));
            } else{
                console.log(favorites[i].src === src)
            }
        }
    }

    
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