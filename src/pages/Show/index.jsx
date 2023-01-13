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
import { useState, useEffect } from 'react'
import { fetchUserInformations } from '../../services/UserServices'

/**
 * Display the show for the selected user
 * @component
 * @returns {JSX.Element} Show component
 */


function Show() {

    const [currentDayScore, setCurrentDayScore] = useState([])
    const [currentUser, setCurrentUser] = useState([])
    const [keyData, setKeyData] = useState([])


    const { userId } = useParams()
    
    useEffect(() => {
       
        fetchUserInformations(userId).then((({todayScore, score, userInfos, keyData}) => {
            if(todayScore) {
                setCurrentDayScore(todayScore)
            }
            else {
                setCurrentDayScore(score)
            }
            setCurrentUser(userInfos)
            setKeyData(keyData)
        }))
    }, [userId])

    

    return(
        <main>
            <aside>
                <div className='icon-container'>
                    <img src={icon1} alt='icon'></img>
                    <img src={icon2} alt='icon'></img>
                    <img src={icon3} alt='icon'></img>
                    <img src={icon4} alt='icon'></img>
                </div>
                <div className='copiryght'>
                    <p>Copyryght, SportSee 2020</p>
                </div>
            </aside>
            <div className='main-wrapper'>
                <div className='main-title'>
                    <h1>
                        <p>Bonjour</p>
                        <p className='red-text'>{currentUser.firstName}</p> 
                    </h1>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
                <div className='stats-wrapper'>
                    <div className='charts-container'>
                        <DailyActivity userId={userId}/>
                        <div className='other-charts-container'>
                            <SessionDuration userId={userId}/>
                            <TypeActivity userId={userId}/>
                            <Score score={currentDayScore}/>
                        </div>
                    </div>
                        <Alimentation alimentationData={keyData}/>
                </div>
            </div>
        </main>
    )
}

export default Show