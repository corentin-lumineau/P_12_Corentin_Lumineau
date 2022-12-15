import '../style/Components/AlimentationCard.css'

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

export default AlimentationCard