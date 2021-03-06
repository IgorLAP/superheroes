import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { HeroArea } from './styled';
import SuperheroAPI from '../../lib/SuperheroAPI';
import { PageContainer } from '../../components';
import ProgressBar from '../../components/ProgressBar';

const Hero = () => {
    const api = SuperheroAPI();
    const { id } = useParams();
    const [heroInfo, setHeroInfo] = useState({});
    const [loading, setLoading] = useState(true);
    const [bioObject, setBioObject] = useState({});
    const [conObject, setConObject] = useState({});
    const [appObject, setAppObject] = useState({});
    const [inWidth, setInWidth] = useState(false);

    useEffect(() => {
        const getHero = async (id) => {
            const json = await api.getHero(id);
            setHeroInfo(json);
            setBioObject(json.biography);
            setConObject(json.connections);
            setAppObject(json.appearance);
            setLoading(false);
        }
        getHero(id);
    }, [])


    //Desestruturadores
    const {
        "first-appearance": firstAppearance,
        "full-name": fullName,
        "alter-egos": alterEgos,
        "place-of-birth": placeBirth,
    } = bioObject;

    const { "group-affiliation": groups } = conObject;

    const {
        "eye-color": eyeColor,
        "hair-color": hairColor,
    } = appObject;



    return (
        <PageContainer>
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
                                        <span>Habilidades</span>
                                        <p>Intelig??ncia</p><ProgressBar data={heroInfo.powerstats.intelligence}></ProgressBar>
                                        <p>For??a</p><ProgressBar data={heroInfo.powerstats.strength}></ProgressBar>
                                        <p>Velocidade</p><ProgressBar data={heroInfo.powerstats.speed}></ProgressBar>
                                        <p>Durabilidade</p><ProgressBar data={heroInfo.powerstats.durability}></ProgressBar>
                                        <p>Poder</p><ProgressBar data={heroInfo.powerstats.power}></ProgressBar>
                                        <p>Combate</p><ProgressBar data={heroInfo.powerstats.combat}></ProgressBar>
                                    </div>
                                }
                                <div className="biography">
                                    <span>Informa????es principais</span>
                                    {heroInfo.biography &&
                                        <>
                                            <div className="bioInfo"><strong>Nome Completo:</strong> {fullName}</div>
                                            <div className="bioInfo"><strong>Primeira apari????o:</strong> {firstAppearance}</div>
                                            <div className="bioInfo"><strong>Alter-Ego:</strong> {alterEgos !== "No alter egos found" ? "Nenhum alter ego encontrado" : alterEgos}</div>
                                            <div className="bioInfo"><strong>Local de Nascimento:</strong> {placeBirth}</div>
                                            <div className="bioInfo"><strong>Editora: </strong>{heroInfo.biography.publisher}</div>
                                            <div className="bioInfo"><strong>Aliados: </strong>{heroInfo.biography.aliases.join(', ')}</div>
                                            <div className="bioInfo"><strong>Alinhamento: </strong>{heroInfo.biography.alignment === "good" ? "Bom" : "Mau"}</div>
                                        </>
                                    }
                                </div>
                            </div>
                            <div className="rightSide">
                                {heroInfo.image &&
                                    <img src={heroInfo.image.url} alt={heroInfo.name} />
                                }
                                {heroInfo.appearance &&
                                    <div className="appearance">
                                        <span>Apar??ncia</span>
                                        <div><strong>Cor do olho: </strong>{eyeColor}</div>
                                        <div><strong>Cor do cabelo: </strong>{hairColor}</div>
                                        <div><strong>Gen??ro: </strong>{heroInfo.appearance.gender}</div>
                                        <div><strong>Altura: </strong>{heroInfo.appearance.height.join(', ')}</div>
                                        <div><strong>Peso: </strong>{heroInfo.appearance.weight.join(', ')}</div>
                                        <div><strong>Ra??a: </strong>{heroInfo.appearance.race}</div>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="bottomInfos">
                            <div className="moreInfos">
                                <span>Mais informa????es</span>
                                <div className="work">
                                    {heroInfo.work &&
                                        <>
                                            <div className="occupation"><strong>Ocupa????o: </strong>{heroInfo.work.occupation}</div>
                                            <div className="base"><strong>Base: </strong>{heroInfo.work.base}</div>
                                        </>
                                    }
                                </div>
                                <div className="connection">
                                    {heroInfo.connections &&
                                        <>
                                            <div className="group-affiliation"><strong>Grupos afiliados: </strong>{groups}</div>
                                            <div className="relatives"><strong>Parentes: </strong>{heroInfo.connections.relatives}</div>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </HeroArea>
        </PageContainer>
    );
}


export default Hero;