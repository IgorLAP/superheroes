import React, { useState, useEffect } from 'react';

import { HomeArea } from './styled';
import { PageContainer } from '../../components';
import SuperheroAPI from '../../lib/SuperheroAPI';
import HeroItem from '../../components/HeroItem';
import Modal from '../../components/Modal';
import goTopImg from '../../assets/goTop.png'
import eyeIconImg from '../../assets/eyeIcon.png'
import plushIconImg from '../../assets/plusIcon.png'

const Home = () => {
  const api = SuperheroAPI();

  const [herosList, setHerosList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cursor, setCursor] = useState(false);
  const [modalCreateVisible, setModalCreateVisible] = useState(false);
  const [modalViewVisible, setModalViewVisible] = useState(false);

  useEffect(() => {
    const getAllHeroes = async () => {
      const req = await api.getAllHeroes();
      setHerosList(req);
      setLoading(false);
    }
    getAllHeroes();
  }, [])

  useEffect(() => {
    const handleToTop = () => {
      if (window.scrollY > 400) {
        setCursor(true);
      } else {
        setCursor(false);
      }
    }
    window.addEventListener('scroll', handleToTop);
  }, [])

  useEffect(() => {
    const handleClick = () => {
      window.scrollTo(0, 0);
    }
    document.querySelector('.toTop').addEventListener('click', handleClick);
  }, [])

  const handleCreateGroup = () => {
    setModalCreateVisible(true);
  }

  const handleViewGroup = () => {
    setModalViewVisible(true);
  }

  return (
    <PageContainer>
      <HomeArea>
        <form method="GET" action="/search">
          <label>
            <input type="text" name="q" placeholder="Digite o nome de um personagem"></input>
          </label>
          <button>Pesquisar</button>
        </form>
        <div className="groups">
          <button onClick={handleCreateGroup}>
            <div className="createGroup"><img src={plushIconImg} alt="add group" /> Criar grupo(s)</div>
          </button>
          <button onClick={handleViewGroup}>
            <div className="viewGroups"><img src={eyeIconImg} alt="see groups" /> Visualizar grupo</div>
          </button>
        </div>
        {loading === true &&
          <img
            src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
            alt="loading"
            className="loading"
          />
        }
        <div className="allHeroes">
          {herosList &&
            herosList.map((i, k) =>
              <HeroItem data={i} key={k} />
            )
          }
        </div>
        <div className={cursor ? "toTop active" : "toTop"}>
          <img src={goTopImg} alt="goTop" />
        </div>
      </HomeArea>
      <Modal createVisbile={modalCreateVisible} setCreate={setModalCreateVisible} viewVisible={modalViewVisible} setView={setModalViewVisible} />
    </PageContainer>
  )
}

export default Home;