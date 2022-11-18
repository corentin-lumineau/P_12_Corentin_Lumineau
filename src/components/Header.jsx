import logo from '../assets/logo_sport_see.png'
import '../style/Components/Header.css'

function Header() {
    return(
        <header>
            <img src={logo} alt="logo" />
            <nav>
                <div className="nav-element">Accueil</div>
                <div className="nav-element">Profil</div>
                <div className="nav-element">Réglage</div>
                <div className="nav-element">Communauté</div>
            </nav>
        </header>
    )
}

export default Header;