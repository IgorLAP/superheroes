import React, {useState, useEffect} from 'react';
import {ModalBackground, ModalArea} from './styled';
import {Link} from 'react-router-dom';

const Modal = (props)=> {
    //var naruto;
    //let Stor = localStorage.getItem(`${naruto}`, null);

    //const [group, setGroup] = useState( localStorage.setItem(`${naruto}`, null) );
    const [ groupsList, setGroupsList] = useState( JSON.parse(localStorage.getItem('grupo')));


    const handleBack = ()=>{
        props.setCreate(false);
        props.setView(false);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        //setGroupsList(group);
    } 

    console.log(groupsList)

    return (
        <>
        {props.createVisbile &&
            <ModalBackground>
                <ModalArea>
                    <div className="closeBtn" onClick={handleBack}><span>X</span></div>
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
                            <Link to={`/hero/${i.id}`}>
                            <img className="modalImg" src={i.src} key={k} alt="" />
                            </Link>   
                        )
                    }
                    </div>
                </ModalArea>
            </ModalBackground>
        }
        </>
    );
}

export default Modal;