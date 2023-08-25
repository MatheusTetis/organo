import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = ({ aoColaboradorCadastrado, times }) => {

    // O que o React está fazendo aqui é criando 2 funções para a gente
    // o getter e o setter, que vão servir para o React ficar sempre
    // de olho para renderizar o local onde nosso getter estiver sendo usado
    // Dentro do useState, passamos o estado iniciar, se quisermos, do nosso getter
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState(times[0])

    const aoSalvar = (evento) => {
        evento.preventDefault();
        aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime(times[0])
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome" 
                    placeholder="Digite o seu nome" 
                    // Forma de passar para o componente o valor padrão
                    valor={nome} 
                    // Forma de passar para o componente a função para
                    // modificação do estado do valor nome
                    // Incrivekmente esse parametro é o valor do campo,
                    // mas eu n sei como ;-;
                    // Entendi tudo agora, kcta
                    // Esse parametro é o evento.target.value que vem
                    // de dentro do Componente, porque ele é o parametro
                    // que a gente tá passando lá para o aoAlterado
                    // aí aqui, o aoAlterado recebe o evento.target.value
                    // e coloca dentro do "parametro"
                    // Vou renomear entao para valor_evento_componente
                    // A gente precisa fazer isso, pq o valor do evento
                    // vem de dentro do onChange do componente, então
                    // precisamos pegar esse valor e passar para o nosso Setter
                    // para que a gente possa mandar o React renderizar o elemento
                    // a cada alteração que o usuário fizer no elemento
                    aoAlterado={valor_evento_componente => setNome(valor_evento_componente)}
                />
                <CampoTexto
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite o seu cargo" 
                    valor={cargo} 
                    // Isso é igual a:
                    // const aoDigitado = (valor_evento_componente) => setCargo(valor_evento_componente)
                    aoAlterado={valor_evento_componente => setCargo(valor_evento_componente)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem} 
                    aoAlterado={valor_evento_componente => setImagem(valor_evento_componente)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    itens={times} 
                    valor={time} 
                    aoAlterado={valor_evento_componente => setTime(valor_evento_componente)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;