import { useEffect } from "react"
import { fetchUserInformations } from "../services/UserServices"
import AlimentationCard from "./AlimentationCard"
import { useState } from "react"

function Alimentation({userId}) {

    const [keyData, setKeyData] = useState([])

    useEffect(() => {
        fetchUserInformations(userId).then((({keyData}) => {
            setKeyData(keyData)
        }))
    }, [])

    return(
        <div className="synthesis-container">
            {keyData.map(el => <AlimentationCard  dataAlimentationCard={el} key={el[Object.keys(el)[0]]}/>) }
        </div>
    )
}


export default Alimentation