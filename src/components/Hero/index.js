import React, {useState, useEffect} from 'react';
import {HeroArea} from './styled';
import {useParams} from 'react-router-dom';
import SuperheroAPI from '../../helpers/SuperheroAPI';


const Hero = ()=>{
    const api = SuperheroAPI();
    const { id } = useParams();
    const [heroInfo, setHeroInfo] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const getHero = async( id )=>{
            const json = await api.getHero(id);
            setHeroInfo(json);
            setLoading(false);
        }
        getHero( id );
    },[])

    //Desestruturadores
    let bioObject = {};
    bioObject = heroInfo.biography;
    const { 
        "first-appearance" : firstAppearance, 
        "full-name" : fullName,
        "alter-egos" : alterEgos,
        "place-of-birth" : placeBirth,

    } = bioObject;


    /*
    let conObject = {};
    conObject = heroInfo.connections;
    const {"group-affiliation" : groups} = conObject;
    */
    
    return (
        <HeroArea>
            {loading === true &&
                <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="loading" className="loading" />
             }
            {heroInfo && loading === false &&
                <div className="hero">
                    <h1 className="heroName">{heroInfo.name}</h1>
                    <div className="heroInfos">
                    <div className="leftSide">
                        {heroInfo.powerstats &&
                        <div className="powerStats">
                            <span>Powerstats</span> 
                            <div>{heroInfo.powerstats.intelligence}</div>
                            <div>{heroInfo.powerstats.strength}</div>
                            <div>{heroInfo.powerstats.speed}</div>
                            <div>{heroInfo.powerstats.durability}</div>
                            <div>{heroInfo.powerstats.power}</div>
                            <div>{heroInfo.powerstats.combat}</div>
                        </div>
                        }
                    </div>
                    <div className="rightSide">
                        {heroInfo.image &&
                            <img src={heroInfo.image.url} alt={heroInfo.name} />
                        }
                        <div className="rightInfos">
                            <div className="work">
                            {heroInfo.work && 
                                <>
                                <div className="occupation">{heroInfo.work.occupation}</div>
                                <div className="base">{heroInfo.work.base}</div>
                                </>
                            }
                            </div>
                            <div className="connection">
                                {heroInfo.connections &&
                                <>
                                <div className="group-affiliation"><strong>Grupos afiliados: </strong></div>
                                <div className="relatives">{heroInfo.connections.relatives}</div>
                                </>
                                }
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="bottomInfos">
                        <div className="biography">
                            {heroInfo.biography &&
                                <>
                                    <div className="full-name"><strong>Nome Completo:</strong> {fullName}</div>
                                    <div className=""><strong>Primeira aparição:</strong> {firstAppearance}</div>
                                    <div className=""><strong>Alter-Ego:</strong> {alterEgos !== "No alter egos found" ? "Nenhum alter ego encontrado" : alterEgos}</div>
                                    <div className=""><strong>Local de Nascimento:</strong> {placeBirth}</div>
                                    <div className=""></div>
                                    <div className=""></div>
                                </>
                            }
                        </div>
                    </div>
                </div>
            }
        </HeroArea>
    );
}


export default Hero;