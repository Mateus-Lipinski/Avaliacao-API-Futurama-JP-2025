import './style.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <h1>Avaliação - API Futurama</h1>
            <nav>
                <Link to={'/'}>Futurama</Link>
                <Link to={'/about'}>Sobre</Link>
                <Link to={'/random'}>Aleatório</Link>
            </nav>
        </header>
    )
}
