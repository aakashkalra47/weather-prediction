import React,{Component} from 'react';
import {Line} from 'react-chartjs-2';
import _ from 'lodash';
export default class chart extends Component{
    render(){
        const data = {
            labels: this.props.label,
            datasets: [
              {
                label:this.props.title,
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192)',
                borderColor: 'rgba(252, 186, 3)',
                borderWidth: 2,
                data:this.props.data
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
                    text:this.props.title,
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
}