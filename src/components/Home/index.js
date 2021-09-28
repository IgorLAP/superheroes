import React, {useState, useEffect} from 'react';
import {HomeArea} from './styled';
import {PageContainer} from '../partials';
import SuperheroAPI from '../../helpers/SuperheroAPI';


const Home = ()=>{
    const api = SuperheroAPI();

    const [herosList, setHerosList] = useState([]);

    useEffect(()=>{
        
    },[])
    

    return (
        <PageContainer>
            <HomeArea>
                <form method="GET" action="/search">
                    <label>
                        <input type="text" name="q" placeholder="Digite o nome de um personagem"></input>
                    </label>
                    <button>Pesquisar</button>
                </form>

            </HomeArea>
        </PageContainer>
    )
}

export default Home;