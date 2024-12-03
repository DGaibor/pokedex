import {ImagePokemon} from "./image/ImagePokemon";
import {NamePokemon} from "./name/NamePokemon";
import {useEffect, useState} from "react";
import pokemonService from "../../services/pokemon";
import PokemonContext from "../../context/pokemonContext";
import {Loading} from "../loading/Loading";
import {ButtonsNavigation} from "./buttons/ButtonsNavigation";
import './Pokemon.css'
import {CardAttributePokemon} from "./cardAttribute/CardAttributePokemon";
import {StatPokemon} from "./stat/StatPokemon";
import {AbilityPokemon} from "./ability/AbilityPokemon";
import {TypePokemon} from "./type/TypePokemon";


export const Pokemon = () => {
    const [pokemon, setPokemon] = useState(null);
    const [id, setId] = useState(1);
    const [loading, setLoading] = useState(true);
    
    const getPokemon = async () => {
        setLoading(true);
        const service = new pokemonService();
        const result = await service.get(id);
        if (result){
            setPokemon(result);
        }
        setLoading(false);
        
    }
    

    useEffect(() => {
        getPokemon();
    }, [id]);
    
    return (
        <div className="container pokemon-container">
            
            {loading && <Loading/>}
            {!loading && <>
            <PokemonContext.Provider value={ pokemon }>
                <div className="row">
                    <div className="column small">
                        <ImagePokemon/>
                        <NamePokemon/>
                        <ButtonsNavigation id={id} setId={setId} />
                    </div>
                    <div className="column large">
                        <CardAttributePokemon title={'Stats'} Component={StatPokemon} type={'stats'}/>
                        <CardAttributePokemon title={'Abilities'} Component={AbilityPokemon} type={'abilities'}/>
                        <CardAttributePokemon title={'Types'} Component={TypePokemon} type={'types'}/>
                    </div>
                </div>
            </PokemonContext.Provider>
            </>
            }
        </div>
    )
}
