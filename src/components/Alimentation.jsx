import AlimentationCard from "./AlimentationCard"
import PropTypes from 'prop-types'

/**
 * Display all the cards wich contains alimentation data
 * @component
 * @param {array} alimentationData - The array wich contains all the alimentation data of the user
 * @returns {JSX.Element} AlimentationComponent
 */


function Alimentation({alimentationData}) {

    return(
        <div className="synthesis-container">
            {alimentationData.map(el => <AlimentationCard  dataAlimentationCard={el} key={el[Object.keys(el)[0]]}/>) }
        </div>
    )
}

Alimentation.propTypes = {
    alimentationData: PropTypes.array
}

export default Alimentation