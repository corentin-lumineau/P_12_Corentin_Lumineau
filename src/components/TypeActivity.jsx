import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { fetchTypeActivityData, fetchTypeActivityDataMocked } from '../services/UserServices'
import PropTypes from 'prop-types'

/**
 * Display the radial chart wich contains the value of each kind of current user's activities
 * @component
 * @param {string} userId - The id of the current user
 * @returns {JSX.Element} TypeActivity component
 */

function TypeActivity({userId}) {

    const [typeActivityData, setTypeActivityData] = useState([])
    const location = useLocation();
    const { mockedVersion } = location.state

    useEffect(() => {
        if(mockedVersion === false) {
            fetchTypeActivityData(userId).then((response) => {
                setTypeActivityData(response)
            })
        } else {
            fetchTypeActivityDataMocked(userId).then((response) => {
                setTypeActivityData(response)
            })
        }
       
    }, [userId, mockedVersion])





    return(
        <ResponsiveContainer width={"32%"} height="100%">
            <RadarChart outerRadius="75%" data={typeActivityData.data} id={'radar-chart'} margin={{right: 35, left: 35}}>
                <PolarGrid radialLines={false}/>
                <PolarAngleAxis dataKey="kind" tick={{fill: 'white', fontSize:"0.7em"}} />
                <PolarRadiusAxis angle={80} domain={[0, 200]} axisLine={false} tick={false} />
                <Radar dataKey="value" fill="#FE0301" fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>
    )
}

TypeActivity.propTypes = {
    userId: PropTypes.string
}

export default TypeActivity