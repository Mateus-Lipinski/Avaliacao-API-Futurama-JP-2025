import { getCharacters } from '../../api/characters'
import { useState, useEffect } from 'react'
import './style.css'

export default function Futurama() {

    const [conteudo, setConteudo] = useState(<>Carregando...</>)

    async function TransformaEmLista() {

        const params = { }

        const todosPersonagens = await getCharacters(params)

        return todosPersonagens.map(personagem =>  //.map Não utiliza chaves'{}'
            <div className='card' key={personagem.id}>
                <img src={personagem.image} alt={personagem.name}></img>
                <h2>{personagem.name}</h2>
                <div>
                    <p>Espécie: {personagem.species}</p>
                    <p>Gênero: {personagem.gender}</p>
                </div>
            </div>
        )
    }

    async function carregar() {
        setConteudo(await TransformaEmLista())
    }

    useEffect(() => {
        carregar()
    }, [])

    return(
        <main>
            <div className='container'>
                {conteudo}
            </div>
        </main>
    )
}