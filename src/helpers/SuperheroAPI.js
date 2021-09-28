const API_KEY = '4006464432799541';
const BASE_URL = 'https://superheroapi.com/api/';
const proxyUrl = "https://cors-anywhere.herokuapp.com/";


const superheroapi = {
    search : async (nome) => {
        const req = await fetch(`${proxyUrl+BASE_URL+API_KEY}/search/${nome}`);
        const json = await req.json();
        return json;
    },
    getAllHeroes: async() => {

    },
    getHero: async (id) => {
        const req = await fetch(`${proxyUrl+BASE_URL+API_KEY}/${id}`);
        const json = await req.json();
        return json;
    }
} 


export default ()=> superheroapi;