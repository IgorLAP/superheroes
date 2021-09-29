import React, {useState, useEffect} from 'react';
import {SearchArea} from './styled';
import {PageContainer} from '../partials';
import SuperheroAPI from '../../helpers/SuperheroAPI';
import {useLocation, Link} from 'react-router-dom';


const Search = ()=>{
    const api = SuperheroAPI();

    const useQueryString = ()=>{
        return new URLSearchParams( useLocation().search );
    }
    const query = useQueryString();

    const [herosList, setHerosList] = useState('');
    const [loading, setLoading] = useState(true);
    

    useEffect(()=>{
        const getSearch = async()=>{
            const req = await api.search( query.get('q') );
            setHerosList(req.results);
        }
        getSearch();
    },[])


    return (
        <PageContainer>
            <SearchArea>
                <form method="GET" action="/search">
                    <label>
                        <input type="text" name="q" placeholder="Digite o nome de um personagem"></input>
                    </label>
                    <button>Pesquisar</button>
                </form>
                <h1>Resultado:</h1>
                <div className="results">
                    {herosList === '' &&
                        <img className="loading" src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="loading" />
                    }
                    {herosList && herosList.map((i,k)=>
                        <Link to={`/hero/${i.id}`} key={k}>
                            <div className="resultItem">
                                <p>{i.name}</p>
                                <img src={i.image.url} alt={i.name} />
                            </div>
                        </Link>
                    )
                    }
                    {herosList === undefined &&
                        <p>Não encontrado</p>
                    }
                </div>
            </SearchArea>
        </PageContainer>
    )
}

export default Search;