import { BarChart } from "recharts"
import { CartesianGrid } from "recharts"
import { XAxis, YAxis } from 'recharts'
import { Tooltip } from 'recharts'
import { Bar } from 'recharts'
import { Legend } from 'recharts'

function DailyActivity() {

    const data = [  {name: "1", poids: 280, calories: 100 }, 
                    {name: "2", poids: 400, calories: 200 },
                    {name: "3", poids: 234, calories: 200 },
                    {name: "4", poids: 400, calories: 123 },
                    {name: "5", poids: 209, calories: 200 },
                    {name: "6", poids: 300, calories: 200 },
                    {name: "7", poids: 234, calories: 122 },
                    {name: "8", poids: 344, calories: 200 },
                    {name: "9", poids: 100, calories: 200 },
                    {name: "10", poids: 23, calories: 200 },]

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
        <BarChart width={650} height={250} data={data} barGap={10} barCategoryGap={5} id={'bar-chart'} > 
            <CartesianGrid strokeDasharray="2" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis orientation="right" axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />}/>
            <Legend verticalAlign="top" align="right" height={70} content={renderLegend}/>
            <Bar dataKey="poids" fill="#282D30" barSize={10} radius={[10,10,0,0]}   />
            <Bar dataKey="calories" fill="#E60000" barSize={10}   />
        </BarChart>
    )
}

export default DailyActivity