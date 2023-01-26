import React from 'react';
import {Line} from 'react-chartjs-2';
import {Chart, CategoryScale,LinearScale,PointElement,LineElement} from 'chart.js'; 
Chart.register(LinearScale,CategoryScale,PointElement,LineElement);

const LineChart=(props)=>{
  const data = {
    labels: props.label,
    datasets: [
      {
        label:props.title,
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192)',
        borderColor: 'rgba(252, 186, 3)',
        borderWidth: 2,
        data:props.data
      }
    ]
  }
  return(
    <div>
      <Line
        data={data}
        height={100}
        options={{
            title:{
            display:true,
            text:props.title,
            fontSize:20,
            },
            legend:{
            display:true,
            position:'right'
            }
        }}
      />
    </div>
  )
}
export default LineChart