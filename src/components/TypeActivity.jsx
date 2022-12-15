
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts'
import { useEffect, useState } from 'react'
import { fetchTypeActivityData } from '../services/UserServices'

function TypeActivity({userId}) {

    const [typeActivityData, setTypeActivityData] = useState([])

    useEffect(() => {
       
        
        fetchTypeActivityData(userId).then((response) => {
            setTypeActivityData(response)
        })
    }, [])


    return(
        <ResponsiveContainer width="32%" height={230}>
            <RadarChart outerRadius={90} data={typeActivityData.data} id={'radar-chart'}>
                <PolarGrid radialLines={false}/>
                <PolarAngleAxis dataKey="kind" tick={{fill: 'white', fontSize: 12}} />
                <PolarRadiusAxis angle={80} domain={[0, 200]} axisLine={false} tick={false} />
                <Radar dataKey="value" fill="#FE0301" fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>
    )
}

export default TypeActivity