import { getCharacters } from '../../api/random'
import { useEffect, useState } from 'react'
import './style.css'

export default function Random() {

    const [conteudo, setConteudo] = useState(<>Carregando...</>)

    async function TransformaEmLista() {

        const personagem = await getCharacters()

        return <div className='card' key={personagem.id}>
            <img src={personagem.image} alt={personagem.name}></img>
            <h2>{personagem.name}</h2>
            <div>
                <p>Espécie: {personagem.species}</p>
                <p>Gênero: {personagem.gender}</p>
            </div>
        </div>
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