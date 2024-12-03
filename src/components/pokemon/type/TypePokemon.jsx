import './TypePokemon.css'
export const TypePokemon = ({data}) => {

    return (
        <div className={`type border-pixel type-${data?.type?.name}`}>{data?.type?.name}</div>
    )
}
