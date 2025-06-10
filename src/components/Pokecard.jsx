const Pokecard = ({Nomepkmn, Tipo, Ataque, Poder, imagem}) => {
    return (
        <div className="card">
            <img src={imagem} alt={`imagem de ${Nomepkmn}`} />
            <h2>{Nomepkmn}</h2>
            <p><strong>Tipo: </strong>{Tipo}</p>
            <p><strong>Ataque: </strong>{Ataque}</p>
            <p><strong>Poder: </strong>{Poder}</p>
        </div>
    )
}

export default Pokecard