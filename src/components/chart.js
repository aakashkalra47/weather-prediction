import React from 'react';
import _ from 'lodash';
import {Sparklines,SparklinesLine,SparklinesReferenceLine} from 'react-sparklines';
function average(data){
    return _.round(_.sum(data)/data.length);
}
export default (props)=>{
    return (
        <div style={{height:300,width:400,overflow:"hidden"}}>
            <Sparklines height={300} width={300} data={props.data}>
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type="avg"/> 
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>    
        </div>
    )
}