import { useEffect } from "react";
import { LineChart, XAxis, Tooltip, Line, Rectangle, Legend, ResponsiveContainer  } from "recharts"
import { fetchSessionDuration } from "../services/UserServices";
import { useState } from "react";
import '../style/Components/SessionDuration.css'

function SessionDuration({userId}) {

    const [sessionDurationData, setSessionDurationData] = useState([])

    useEffect(() => {
        fetchSessionDuration(userId).then(({sessions}) => setSessionDurationData(sessions))
    }, [])
    

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
            <div className="linechart-tooltip">
                <p className="label">{`${payload[0].value}`}min</p>
            </div>
            );
        }
        return null;
        };

    const CustomCursor = ({points}) => {
        return <Rectangle opacity={0.2} x={points[1].x} width={500} height={300} />
    }

    const renderLegend = () => {
        return (
            <div className="legend-wrapper-duration">
                <p>Durée moyenne des sessions</p>
            </div>
        )
    }

 
    return(
        <ResponsiveContainer width="32%" height={230}>
            <LineChart data={sessionDurationData} padding={{ top: 0, right: 0, left: 5, bottom: 0 }} id={'line-chart'}>
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: 'white', fontSize: 12, opacity: 0.5 }} />
                <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />}/>
                <Legend verticalAlign='top' align="left" content={renderLegend} />
                <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF"  dot={false} />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default SessionDuration