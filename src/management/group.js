import React from 'react';
import {DragSource } from 'react-dnd';
import Card from './card';

const spec = {
    beginDrag:(props)=>{
        console.log("group begin drag",props);
        return {type:"group",id:props.item.index}
    }
}

 class Group extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return this.props.connectDragSource(<ul className="groupLists">
        {this.props.item.apps.map(function(a,index){
            return <Card item={a} />
        })}
    </ul>)
    }
}

export default Group =  DragSource('aa',spec,(connect,monitor)=>{
    return {
        connectDragSource:connect.dragSource(),
    }
})(Group);