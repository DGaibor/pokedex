import {useContext} from "react";
import PokemonContext from "../../../context/pokemonContext";
import "./ImagePokemon.css"

export const ImagePokemon = () => {
    const pokemon = useContext(PokemonContext);
    return (
        <div className="image">
            <img className="pokemon-image" src={ pokemon.image } />
        </div>
    )
}
