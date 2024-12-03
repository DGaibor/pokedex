import './StatPokemon.css'
export const StatPokemon = ({data}) => {
    
    return (
        <div className={'stat'}>
            <div className={'name'}> {data?.stat?.name}</div>
            <div className={'value'} > 
                <div className={`bar`} style={{width: `${Math.min(data?.base_stat, 100)}%`}}>
                    {data?.base_stat}
                </div>
            </div>
        </div>
    )
}
