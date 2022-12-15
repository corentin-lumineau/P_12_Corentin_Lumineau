import { Link } from "react-router-dom"
import '../../style/Pages/Home.css'

function Home() {
    return(
        <div className="home-container">
            <Link to="/show/12">User 1</Link>
            <Link to="/show/18">User 2</Link> 
        </div>
     
    )
}

export default Home