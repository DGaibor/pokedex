import axios from "axios";

class pokemonService {
    constructor(
    ) {
        this.baseUrl = "https://pokeapi.co/api/v2/";
    }
    
    async get(id) {
        try {
            const response = await axios.get(`${this.baseUrl}pokemon/${id}`);
            return this.manageInfo(response?.data);
        } catch (e) {
            console.error(e);
            return null;
        }

    }
    
    manageInfo(pokemon) {
        return {
            id: pokemon.id,
            abilities: pokemon.abilities ?? [],
            types: pokemon.types ?? [],
            name: pokemon.name ?? '',
            stats: pokemon.stats ?? [],
            image: pokemon?.sprites?.front_default ?? '',
        }
    }
}

export default pokemonService;
