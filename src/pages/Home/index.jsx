import { Link } from "react-router-dom"
import UserCard from "../../components/UserCard"
import { useState } from "react"
import '../../style/Components/UserCard.css'

import '../../style/Pages/Home.css'

/**
 * Display the homepage
 * @component
 * @returns {JSX.Element} Home component
 */


function Home() {

    const [mockedVersion, setMockedVersion ] = useState(false)

    return(
        <div className="home-container">
            <div className="home-container-router">
                <Link to="/show/12"  state={{mockedVersion: mockedVersion}} className="user-card"  ><UserCard name="Karl" /></Link>
                <Link to="/show/18"  state={{mockedVersion: mockedVersion}} className="user-card"><UserCard name="Cecilia" /></Link>
            </div>
            <div className="home-container-mocked-button">
                { mockedVersion === false ? <button className="mocked-button" onClick= {() => setMockedVersion(true)}>Changer vers version mockée</button> : <button className="mocked-button" onClick= {() => setMockedVersion(false)}>Changer vers version non mockée</button> }
            </div>
        </div>
    )
}

export default Home