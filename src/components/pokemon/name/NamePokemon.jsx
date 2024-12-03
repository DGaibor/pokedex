import {useContext} from "react";
import PokemonContext from "../../../context/pokemonContext";
import './NamePokemon.css'
export const NamePokemon = () => {
    const pokemon = useContext(PokemonContext);
    return (
        <div className="card-name border-pixel">
            <div className={'column-icon'}>
                <img className={'icon'} src={'/images/pokebola-icon.png'} width={100}/>
            </div>
            <div className={'column-data'}>
                <div className={'name'}>
                    Name: {pokemon.name}

                </div>
                <div className={'number'}>
                    Number: {pokemon.id}
                </div>
            </div>
        </div>
    )
}
