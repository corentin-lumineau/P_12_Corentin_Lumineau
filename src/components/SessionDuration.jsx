import { LineChart, XAxis, Tooltip, Line, Area  } from "recharts"

function SessionDuration() {

    const data = [
        {name: "L", value: 280 }, 
        {name: "M", value: 100 },
        {name: "M", value: 150 },
        {name: "J", value: 50 },
        {name: "V", value: 320 },
        {name: "S", value: 200 },
        {name: "D", value: 400 },
    ]

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

    return(
        <LineChart data={data} width={250} height={200} margin={{ top: 5, right: 30, left: 20, bottom: 5 }} id={'line-chart'}>
            <XAxis dataKey="name" axisLine={false} tickLine={false}/>
            <Tooltip content={<CustomTooltip />}/>
            <Line type="monotone" dataKey="value" stroke="#FFFFFF"  dot={false} />
            
        </LineChart>
    )
}

export default SessionDuration