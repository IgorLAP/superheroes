import React, {useState} from 'react';
import {ModalBackground, ModalArea} from './styled';
import {Link} from 'react-router-dom';

const Modal = (props)=> {
    const [ groupsList, setGroupsList] = useState( JSON.parse(localStorage.getItem('grupo')));


    const handleBack = ()=>{
        props.setCreate(false);
        props.setView(false);
    }
    const handleBackNew = ()=>{
        props.setModalMsg(false);
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
                    <p>{props.alertMessage}</p>
                    {/*<p>Criar/Editar Grupo</p>
                    <form onClick={handleSubmit}>
                        <input type="text" value={group} onChange={e=>setGroup(e.target.value)} placeholder="Nome do grupo:" />
                        <button onClick={handleBack}>Confirmar</button>
                    </form>*/}
                </ModalArea>
            </ModalBackground>
        }
        {props.viewVisible &&
            <ModalBackground>
                <ModalArea>
                    <div className="closeBtn" onClick={handleBack}><span>X</span></div>
                    <p>Grupo:</p> <br />
                    <div className="modalHeros">
                    {groupsList &&
                        groupsList.map((i,k)=>
                            <Link key={k} to={`/hero/${i.id}`}>
                            <img className="modalImg" src={i.src} key={k} alt="" />
                            </Link>   
                        )
                    }
                    </div>
                </ModalArea>
            </ModalBackground>
        }
        {props.alertMessage &&
            <ModalBackground>
                <ModalArea>
                    <div className="closeBtn" onClick={handleBackNew}><span>X</span></div>
                    <p>{props.alertMessage}</p>
                </ModalArea>
            </ModalBackground>
        }
        </>
    );
}

export default Modal;