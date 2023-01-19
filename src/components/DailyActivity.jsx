import { useEffect } from "react"
import { BarChart, ResponsiveContainer } from "recharts"
import { CartesianGrid } from "recharts"
import { XAxis, YAxis } from 'recharts'
import { Tooltip } from 'recharts'
import { Bar } from 'recharts'
import { Legend } from 'recharts'
import { fetchDailyActivity, fetchDailyActivityMocked } from "../services/UserServices"
import { useLocation } from 'react-router-dom'
import { useState } from "react"
import PropTypes from 'prop-types'

/**
 * Display the barchart to illustrate the activity of the user for each day
 * @component
 * @param {string} userId - The id of the current user
 * @returns {JSX.Element} DailyActivity component
 */


function DailyActivity({userId}) {

    const [dailyActivityData, setDailyActivityData] = useState([]);
    const location = useLocation();
    const { mockedVersion } = location.state

    useEffect(() => {
        if (mockedVersion === false) {
            fetchDailyActivity(userId).then(({sessions}) =>  {
                setDailyActivityData(sessions)
                
            })
        } else {
            fetchDailyActivityMocked(userId).then(({sessions}) => {
                setDailyActivityData(sessions)
            })
        }
      
    }, [userId, mockedVersion])
   
    /**
     * Display a custom tooltip for the barchart
     * @param {boolean} active - The boolean to determine if the tooltip mich be active or not
     * @param {array} payload - The array wich contains the data to display in the tooltip
     * @returns {JSX.Element} CustomTooltip component
     */

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
            <div className="barchart-tooltip">
                <p className="label">{`${payload[0].value}`}kg</p>
                <p className="label">{`${payload[1].value}`}Kcal</p>
            </div>
            );
        }
        return null;
        };

     /**
     * Display a custom legend for the barchart
     * @param {object} props - The object wich contains all the datas of the chart
     * @returns {JSX.Element} Custom legend component
     */

    const renderLegend = () => {
     
        return (
            <div className="legend-wrapper">
                    <p>Activité quotidienne</p>
                <ul className='barchart-legend'>
                    <li>Poids(kg)</li>
                    <li>Calories brulées(kCal)</li>
                </ul>
            </div>
        );
        }

    return(
        <ResponsiveContainer width="100%" height="50%" >
            <BarChart data={dailyActivityData} barGap={10} barCategoryGap={5} id={'bar-chart'} stackOffset="sign"> 
                <CartesianGrid strokeDasharray="1 1" vertical={false} />
                <XAxis dataKey="day" axisLine={false} tickLine={false} />
                <YAxis yAxisId={1} orientation="right" axisLine={false} tickLine={false} dataKey="kilogram" domain={['dataMin - 2', 'dataMax + 2']}  />
                <YAxis yAxisId ={2} axisLine={false} tickLine={false} dataKey="calories" hide={true} />
                
                <Tooltip content={<CustomTooltip />}/>
                <Legend verticalAlign="top" align="right" height={70} content={renderLegend}/>
                <Bar yAxisId={1} dataKey="kilogram" fill="#282D30" barSize={10} radius={[10,10,0,0]}   />
                <Bar yAxisId={2} dataKey="calories" fill="#E60000" barSize={10} radius={[10,10,0,0]}  />
            </BarChart>
        </ResponsiveContainer>
    )
}

DailyActivity.propTypes = {
    userId: PropTypes.string 
}

export default DailyActivity