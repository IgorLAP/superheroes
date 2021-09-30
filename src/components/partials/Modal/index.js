import React, {useState, useEffect} from 'react';
import {ModalBackground, ModalArea} from './styled';

const Modal = (props)=> {

    const [name, setName] = useState( localStorage.getItem('name') );
    useEffect(()=>{
        localStorage.setItem('name', name);
    },[name])

    const handleBack = ()=>{
        props.setCreate(false);
        props.setView(false);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    return (
        <>
        {props.createVisbile &&
            <ModalBackground>
                <ModalArea>
                    <div className="closeBtn" onClick={handleBack}><span>X</span></div>
                    <p>Criar grupo(s)</p>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="Nome do grupo:" />
                        <button>Confirmar</button>
                    </form>
                </ModalArea>
            </ModalBackground>
        }
        {props.viewVisible &&
            <ModalBackground>
                <ModalArea>
                    <div className="closeBtn" onClick={handleBack}><span>X</span></div>
                    Visualizar grupo(s)
                    {name}
                </ModalArea>
            </ModalBackground>
        }
        </>
    );
}

export default Modal;