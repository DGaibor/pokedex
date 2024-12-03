import {useContext} from "react";
import PokemonContext from "../../../context/pokemonContext";
import './CardAttributePokemon.css'

export const CardAttributePokemon = ({ title, Component, type }) => {

    const pokemon = useContext(PokemonContext);

    return (
        <div className={'border-pixel'}>
            <h2 className={'card-title'}>{title}</h2>
            <div className={'card-body'}>
                {pokemon?.[type].map((data, index) => <Component data={data} key={index} />)}

            </div>
        </div>
    )
}
