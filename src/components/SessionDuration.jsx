import { useEffect } from "react";
import { LineChart, XAxis, Tooltip, Line, Rectangle, Legend, ResponsiveContainer  } from "recharts"
import { fetchSessionDuration } from "../services/UserServices";
import { useState } from "react";
import '../style/Components/SessionDuration.css'
import PropTypes from 'prop-types'

/**
 * Display the linechart wich contains the duration of each session
 * @component
 * @param {string} userId - The id of the current user
 * @returns {JSX.Element} SessionDuration component
 */

function SessionDuration({userId}) {

    const [sessionDurationData, setSessionDurationData] = useState([])

    useEffect(() => {
        fetchSessionDuration(userId).then(({sessions}) => setSessionDurationData(sessions))
    }, [userId])
    

    /**
     * Display a custom tooltip for the linechart
     * @param {boolean} active - The boolean to determine if the tooltip mich be active or not
     * @param {array} payload - The array wich contains the data to display in the tooltip
     * @returns {JSX.Element} CustomTooltip component
     */

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

    /**
     * Display a custom cursor for the barchart
     * @param {array} points - The array wich contains the coordinates for the component
     * @returns {JSX.Element} CustomTooltip component
     */

    const CustomCursor = ({points}) => {
        return <Rectangle opacity={0.2} x={points[1].x} width={500} height={300} />
    }

    /**
     * Display a custom legend for the linechart
     * @returns {JSX.Element} Custom legend component
     */

    const renderLegend = () => {
        return (
            <div className="legend-wrapper-duration">
                <p>Durée moyenne des sessions</p>
            </div>
        )
    }

 
    return(
        <ResponsiveContainer width={"32%"} height="100%">
            <LineChart data={sessionDurationData} padding={{ top: 0, right: 0, left: 5, bottom: 0 }} id={'line-chart'}>
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: 'white', fontSize: 12, opacity: 0.5 }} />
                <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />}/>
                <Legend verticalAlign='top' align="left" content={renderLegend} />
                <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF"  dot={false} />
            </LineChart>
        </ResponsiveContainer>
    )
}

SessionDuration.propTypes = {
    userId: PropTypes.string
}

export default SessionDuration