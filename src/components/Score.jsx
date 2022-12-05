import { RadialBarChart, RadialBar, Legend, Tooltip } from "recharts"

function Score() {

    const data = [
   
        {
            "name": "unknow",
            "value": 50,
            "fill": "#FF0000"
        }
      ]

    return(
        <RadialBarChart 
        width={250} 
        height={200} 
        innerRadius="100%" 
        outerRadius="90%" 
        data={data} 
        startAngle={0} 
        endAngle={280}
        >
            <RadialBar minAngle={25} label={{ fill: '#666', position: 'insideStart' }} background={true} dataKey='value' />
            <Tooltip />
        </RadialBarChart>
    )
}

export default Score