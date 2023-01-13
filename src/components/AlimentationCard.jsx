import '../style/Components/AlimentationCard.css'
import PropTypes from 'prop-types'

/**
 * Display an alimentation card with its name, value and style
 * @component
 * @param {object} dataAlimentationCard - The array wich contains all the alimentation data of the user
 * @returns {JSX.Element} AlimentationCardComponent
 */

function AlimentationCard({dataAlimentationCard}) {
    return(
        
        <div className='alimentation-card'>
            <div className={`picto-container picto-container--${dataAlimentationCard.background}`}>
                <img src={dataAlimentationCard.picto} alt='picto' />
            </div>
            <div className='details'>
                <p className="bold">{dataAlimentationCard[Object.keys(dataAlimentationCard)[1]]} {dataAlimentationCard.unit}</p>
                <p>{dataAlimentationCard[Object.keys(dataAlimentationCard)[0]]}</p>
            </div>
            
        </div>
    )
}

AlimentationCard.propTypes = {
    dataAlimentationCard: PropTypes.object
}

export default AlimentationCard