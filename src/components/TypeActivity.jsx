
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'

function TypeActivity() {

    const data = [ 
        {
            "type": "Intensité",
            "A": 50,
            "B": 110,
            "fullMark": 150
        },
        {
            "type": "Cardio",
            "A": 120,
            "B": 110,
            "fullMark": 150
        },
        {
            "type": "Vitesse",
            "A": 120,
            "B": 110,
            "fullMark": 150
        },
        {
            "type": "Energie",
            "A": 120,
            "B": 110,
            "fullMark": 150
        },
        {
            "type": "Force",
            "A": 120,
            "B": 110,
            "fullMark": 150
        },
        {
            "type": "Endurance",
            "A": 120,
            "B": 110,
            "fullMark": 150
        },
    ]

    return(
        <RadarChart outerRadius={90} width={250} height={200} data={data} id={'radar-chart'}>
            <PolarGrid />
            <PolarAngleAxis dataKey="type" />
            <PolarRadiusAxis angle={80} domain={[0, 200]} axisLine={false} tick={false} />
            <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            
        </RadarChart>
    )
}

export default TypeActivity