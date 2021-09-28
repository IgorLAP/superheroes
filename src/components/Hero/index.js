import React, {useState, useEffect} from 'react';
import {HeroArea} from './styled';
import {useParams} from 'react-router-dom';
import SuperheroAPI from '../../helpers/SuperheroAPI';


const Hero = ()=>{
    const api = SuperheroAPI();
    const { id } = useParams();
    const [heroInfo, setHeroInfo] = useState([]);

    useEffect(()=>{
        const getHero = async( id )=>{
            const json = await api.getHero(id);
            setHeroInfo(json);
        }
        getHero( id );
    },[])

    return (
        <HeroArea>
            {heroInfo &&
                <div>{heroInfo.name}</div>
            }
        </HeroArea>
    );
}


export default Hero;