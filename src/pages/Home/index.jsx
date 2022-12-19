import { Link } from "react-router-dom"
import UserCard from "../../components/UserCard"
import '../../style/Components/UserCard.css'

import '../../style/Pages/Home.css'

function Home() {

    return(
        <div className="home-container">
            <Link to="/show/12" className="user-card"><UserCard name="Karl" /></Link>
            <Link to="/show/18" className="user-card"><UserCard name="Cecilia"/></Link> 
        </div>
     
    )
}

export default Home