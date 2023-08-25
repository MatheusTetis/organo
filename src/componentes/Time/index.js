import Colaborador from '../Colaborador';
import './Time.css';

const Time = ({ nome, colaboradores, corSecundaria, corPrimaria }) => {

    const section_css = {
        backgroundColor: corSecundaria
    }
    const h3_css = {
        borderColor: corPrimaria
    }

    return (
        // Condição, se colaboradores.length > 0, então ele vai renderizar a
        // direita do &&
        colaboradores.length > 0 &&
        <section className='time' style={section_css}>
            <h3 style={h3_css}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map(colaborador => {
                    return (
                        <Colaborador 
                            key={colaborador.nome} 
                            nome={colaborador.nome} 
                            cargo={colaborador.cargo} 
                            imagem={colaborador.imagem} 
                            corDeFundo={corPrimaria}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Time;