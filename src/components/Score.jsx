import { RadialBarChart, RadialBar, Tooltip, PolarAngleAxis, ResponsiveContainer } from "recharts"
import "../style/Components/Score.css"
import PropTypes from 'prop-types'

/**
 * Display the radial barchart wich contains the score of the user
 * @component
 * @param {array} score - The array containing the data to display the radialbar chart
 * @returns {JSX.Element} Score component
 */


function Score({score}) {

    /**
     * Display the customize label to display into the middle of the chart
     * @component
     * @param {object} data - The object containing the value of the label
     * @returns {JSX.Element} CustomizeLabel component
     */

    const CustomizedLabel = (data) => {
     return(
        <text  x="50%" y="55%" fill="black" textAnchor="middle" fontWeight={700} >
            <tspan x="51%" y="40%" className="title-score"  >{data.value}%</tspan>
            <tspan x="50%" y="53%" className="legend-score-chart" >de votre</tspan>
            <tspan x="50%" y="65%" className="legend-score-chart">objectif</tspan>
        </text>
     )
    }

    return(
        <ResponsiveContainer width={"32%"} height="100%">
            <RadialBarChart cx="50%" cy="50%" style={{ backgroundColor: "#FBFBFB" }} margin={{ top: 30, right: 30, bottom: 30, left: 30 }} innerRadius={100} outerRadius={75} barSize={10} data={score} startAngle={90} endAngle={460}>
                <PolarAngleAxis type='number' domain={[0, 100]} angleAxisId={1} tick={false} />
                <RadialBar background={{fill: 'white'}} dataKey="uv" angleAxisId={1} cornerRadius="10" data={score} label={<CustomizedLabel/>} />
                <Tooltip /> 
            </RadialBarChart>
        </ResponsiveContainer>
        
    )
}

Score.propTypes = {
    score: PropTypes.array
}

export default Score