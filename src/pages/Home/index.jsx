import '../../style/Pages/Home.css'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'

function Home() {
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
                    <div className='charts-container'></div>
                    <div className='synthesis-container'></div>
                </div>
            </div>
        </main>
    )
}

export default Home