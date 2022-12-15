import DailyActivity from '../../components/DailyActivity'
import '../../style/Pages/Show.css'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'
import SessionDuration from '../../components/SessionDuration'
import TypeActivity from '../../components/TypeActivity'
import Score from '../../components/Score'
import Alimentation from '../../components/Alimentation'
import { useParams } from 'react-router-dom'

function Show() {

    const { userId } = useParams()

    return(
        <main>
            <aside>
                <img src={icon1} alt='icon'></img>
                <img src={icon2} alt='icon'></img>
                <img src={icon3} alt='icon'></img>
                <img src={icon4} alt='icon'></img>
            </aside>
            <div className='main-wrapper'>
                <div className='main-title'>
                    <h1>
                        <p>Bonjour</p>
                        <p className='red-text'>Thomas</p> 
                    </h1>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
                <div className='stats-wrapper'>
                    <div className='charts-container'>
                        <DailyActivity userId={userId}/>
                        <div className='other-charts-container'>
                            <SessionDuration userId={userId}/>
                            <TypeActivity userId={userId}/>
                            <Score userId={userId}/>
                        </div>
                    </div>
                    
                        <Alimentation userId={userId}/>
                    
                </div>
            </div>
        </main>
    )
}

export default Show