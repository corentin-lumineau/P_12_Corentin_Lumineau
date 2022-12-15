import { useEffect } from "react"
import { BarChart, ResponsiveContainer } from "recharts"
import { CartesianGrid } from "recharts"
import { XAxis, YAxis } from 'recharts'
import { Tooltip } from 'recharts'
import { Bar } from 'recharts'
import { Legend } from 'recharts'
import { fetchDailyActivity } from "../services/UserServices"
import { useState } from "react"

function DailyActivity({userId}) {

    const [dailyActivityData, setDailyActivityData] = useState([]);

    useEffect(() => {
        fetchDailyActivity(userId).then(({sessions}) =>  {
            setDailyActivityData(sessions)
        })
    }, [])

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

    const renderLegend = (props) => {
        const { payload } = props;
        
        return (
            <div className="legend-wrapper">
                    <p>Activité quotidienne</p>
                <ul className='barchart-legend'>
                {
                    payload.map((entry, index) => (
                    <li key={`item-${index}`}>{entry.value}</li>
                    ))
                }
                </ul>
            </div>
        );
        }

    return(
        <ResponsiveContainer width="100%" height={250} >
            <BarChart data={dailyActivityData} barGap={10} barCategoryGap={5} id={'bar-chart'} > 
                <CartesianGrid strokeDasharray="2" vertical={false} />
                <XAxis dataKey="day" axisLine={false} tickLine={false} />
                <YAxis orientation="right" axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />}/>
                <Legend verticalAlign="top" align="right" height={70} content={renderLegend}/>
                <Bar dataKey="kilogram" fill="#282D30" barSize={10} radius={[10,10,0,0]}   />
                <Bar dataKey="calories" fill="#E60000" barSize={10} radius={[10,10,0,0]}  />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default DailyActivity