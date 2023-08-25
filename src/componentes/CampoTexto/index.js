import './CampoTexto.css';

const CampoTexto = ({ label, aoAlterado, valor, placeholder, obrigatorio }) => {

    return (
        <div className='campo-texto'>
            <label>{label}</label>
            <input
                onChange={evento => aoAlterado(evento.target.value)} 
                value={valor} 
                placeholder={placeholder} 
                required={obrigatorio} 
            />
        </div>
    )
}

export default CampoTexto;