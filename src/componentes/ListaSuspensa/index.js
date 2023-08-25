import './ListaSuspensa.css';

const ListaSuspensa = ({ label, valor, itens, aoAlterado, obrigatorio }) => {
    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select onChange={evento => aoAlterado(evento.target.value)} value={valor} required={obrigatorio}>
                {itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa;