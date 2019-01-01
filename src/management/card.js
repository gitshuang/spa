import React from 'react';
import {DragSource,DropTarget } from 'react-dnd';


const spec = {
    beginDrag:(props)=>{
        console.log("card begin drag",props);

        return {type:"group",id:props.item.index}
    }
}
const dropSpec = {

}
 class Card extends React.Component{
    constructor(props){
        super(props);

    }
    renderCard=()=>{
        let li;
        const {over,canDrop,item} = this.props;
        console.log(over,'over');
        console.log(canDrop,'candrop')

        if(over&&canDrop){
            li = <li className="card shadow" style={{backgroundColor:'red'}}>
            {"我是阴影"}</li>
        }else{

            li = <li className="card">
            {item.name}</li>
        }
        return li
    }
    
    render(){
        const {connectDragSource,connectDropTarget} = this.props;
        return connectDropTarget(connectDragSource(this.renderCard()))
    }
}

export default Card =  DragSource('aa',spec,(connect,monitor)=>{
    return {
        connectDragSource:connect.dragSource(),
    }
})(DropTarget('aa',dropSpec,(connect,monitor)=>{
    console.log("drop ");
    return {
        connectDropTarget:connect.dropTarget(),
        over:monitor.isOver(),
        canDrop:monitor.canDrop()
    }
})(Card));

