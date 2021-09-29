import React, {useState, useEffect} from 'react';
import {HomeArea} from './styled';
import {PageContainer} from '../partials';
import SuperheroAPI from '../../helpers/SuperheroAPI';
import HeroItem from '../HeroItem';


const Home = ()=>{
    const api = SuperheroAPI();
    
    const [adsTotal, setAdsTotal] = useState(0);
    const [herosList, setHerosList] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const getAllHeroes = async()=>{
            const req = await api.getAllHeroes();
            setHerosList(req);
            setLoading(false);
        }
        getAllHeroes();
    },[])
    
    useEffect(()=>{
        if(herosList.length > 0 ){
            setPageCount( Math.ceil( adsTotal / (herosList.length / 2) ) );
        } else {
            setPageCount( 0 );
        }
    },[adsTotal])

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
                <div className="toTop"></div>
            </HomeArea>
        </PageContainer>
    )
}

export default Home;