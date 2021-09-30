import React, {useState, useEffect} from 'react';
import {HomeArea} from './styled';
import {PageContainer} from '../../partials';
import SuperheroAPI from '../../../helpers/SuperheroAPI';
import HeroItem from '../../partials/HeroItem';


const Home = ()=>{
    const api = SuperheroAPI();
    
    const [herosList, setHerosList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cursor, setCursor] = useState(false);

    useEffect(()=>{
        const getAllHeroes = async()=>{
            const req = await api.getAllHeroes();
            setHerosList(req);
            setLoading(false);
        }
        getAllHeroes();
    },[])
    
    useEffect(()=>{
        const handleToTop = ()=> {
            if(window.scrollY > 400){
                setCursor(true);
            } else {
                setCursor(false);
            }
        }
        window.addEventListener('scroll', handleToTop);
    },[])
    
    useEffect(()=>{
        const handleClick = ()=>{
            window.scrollTo(0,0);
        }
        document.querySelector('.toTop').addEventListener('click', handleClick);
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
                {loading === true &&
                    <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="loading" className="loading" />
                }
                <div className="allHeroes">
                    {herosList && 
                        herosList.map((i,k)=>
                            <HeroItem data={i} key={k} />
                        )
                    }
                </div>
                <div className={cursor ? "toTop active" : "toTop"}>
                    <img src="/goTop.png" alt="goTop" />
                </div>
            </HomeArea>
        </PageContainer>
    )
}

export default Home;