import axios from "axios";

const getPokemon = async value => {
    try {
        const respons = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`);
        console.log(respons)
        return respons;
    }
    catch (error) {
        console.log(error)
    }
}

getPokemon("ditto")