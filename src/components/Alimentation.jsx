import AlimentationCard from "./AlimentationCard"

function Alimentation({alimentationData}) {

    return(
        <div className="synthesis-container">
            {alimentationData.map(el => <AlimentationCard  dataAlimentationCard={el} key={el[Object.keys(el)[0]]}/>) }
        </div>
    )
}

export default Alimentation