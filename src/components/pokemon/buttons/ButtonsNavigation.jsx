import './ButtonsNavigation.css'
export const ButtonsNavigation = ({id,setId}) => {
    
    const minId = 1;
    const maxId = 1025;
    
    
    const getNextPokemon = () => {
        const nextPokemonId = id + 1
        if (nextPokemonId >= minId && nextPokemonId <= maxId) {
            setId(nextPokemonId);
        }
    }
    const getPreviousPokemon = () => {
        const nextPokemonId = id - 1
        if (nextPokemonId >= minId && nextPokemonId <= maxId) {
            setId(nextPokemonId);
        }
    }
    const getRandomPokemon = () => {
        const nextPokemonId = Math.floor(Math.random() * maxId) + minId;
        setId(nextPokemonId);

    }
    
    return (
        <div className={'buttons-container'}>
            <button className={'border-pixel'} onClick={getRandomPokemon}>Get Random</button>
            <button className={'border-pixel'} onClick={getNextPokemon}>Next ></button>
            <button className={'border-pixel'} onClick={getPreviousPokemon}> &lt; Previous </button>
        </div>
    )
}
