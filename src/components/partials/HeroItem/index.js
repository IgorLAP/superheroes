import React, {useState, useEffect} from 'react';
import { HeroItemArea } from './styled';
import {Link} from 'react-router-dom';
import Modal from '../Modal';

export default (props)=>{
    let favorites = JSON.parse(localStorage.getItem('grupo')) || [];

    const [hover, setHover] = useState(false);
    const [msg, setMsg] = useState('');
    const [modalMsg, setModalMsg] = useState(true);

    const handleModalMsg = ()=>{
        setModalMsg(true);
    }

    
    useEffect(()=>{
        const resize = ()=>{
        if(window.innerWidth <= 768){
            setHover(true);
        } else {
            setHover(false);
        }
    }
    window.addEventListener('resize', resize);    
    },[]);

    const handleAdd = (e)=>{
        let url = e.target.parentElement.href;
        let currentUrl = window.location.href.toString();
        let id = url.replace(currentUrl+'hero/','');
        let src = e.target.previousElementSibling.children[1].src;
        let tempObj = {id, src};
        
        if(localStorage.getItem('grupo') === null || localStorage.getItem('grupo') === "[]"){
            favorites.push(tempObj);
            localStorage.setItem('grupo', JSON.stringify(favorites));
            window.location.href = '/';
        } else {
            let exits = [];
            for(let i=0; i<favorites.length;i++){
                if(favorites[i].src.includes(tempObj.src) === false){
                    exits.push(false);
                } else {
                    exits.push(true);
                }   
            }
            if(exits.includes(true)){
                e.preventDefault();
                setMsg('Personagem já está na sua lista!');
                window.location.href = '/';
            } else {
                e.preventDefault();
                favorites.push(tempObj);
                setMsg('Personagem adicionado à sua lista!');
                localStorage.setItem('grupo', JSON.stringify(favorites));
                window.location.href = '/';
            }
        }
    }

    const handleRemove = (e)=>{
        e.preventDefault();
        let url = e.target.parentElement.href;
        let currentUrl = window.location.href.toString();
        let id = url.replace(currentUrl+'hero/','');
        let src = e.target.previousElementSibling.previousElementSibling.children[1].src;
        
        let exits = [];
        for(let i=0;i<favorites.length; i++){
            if(favorites[i].src !== src){
                exits.push(false);
            } else {
                exits.push(true);
            }
        }
        if(exits.every(i=>i===false)){
            setMsg('Personagem não está na sua lista!');
            window.location.href = '/';
        }
        if(exits.includes(true)){
            let index = exits.indexOf(true);
            favorites.splice(index,1);
            setMsg('Personagem excluido da sua lista!');
            localStorage.setItem('grupo', JSON.stringify(favorites));
            window.location.href = '/';  
        }  
    }

    
    return(
        <>
        <HeroItemArea className="itemHero">
            <Link to={`/hero/${props.data.id}`} >
                <div className="resultItem">
                    <p>{props.data.name}</p>
                    <img className="heroImg" src={props.data.images.md} alt={props.data.name} />
                </div>
                <div onClick={handleAdd} className={hover ? 'add mobile' : 'add'} title="Adicionar ao grupo">+</div>
                <div onClick={handleRemove} className={hover ? 'remove mobile' : 'remove'} title="Remover do grupo">-</div>
            </Link>
        </HeroItemArea>
        {msg !== '' &&
            <Modal setModalMsg={setModalMsg} alertMessage={msg} />
        }
        </>
    );
}