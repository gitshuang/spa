import React from 'react';
import './index.less';
import { connect } from 'react-redux';
import {DragSource ,DragDropContextProvider} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Group from './group.js'
const spec = {
        beginDrag(props){
            console.log("group begin drag")
        }
}
@DragSource("aa",spec,(connect,monitor)=>{
    return {
        connectDragSource:connect.dragSource(),
    }
})
class Management extends React.Component {

    constructor(props) {
        super(props);
        this.renderGroup = this.renderGroup.bind(this);
    }
    renderGroup(){
        const Groups = [];
        this.props.groupLists.forEach(function(item,index){
            Groups.push(<Group item = {item} key={index} />);
        })
        return Groups;
    }
    render() {
        const connectDragSource = this.props.connectDragSource;
        console.log(connectDragSource,'connectDragSource');
        return <DragDropContextProvider backend={HTML5Backend} >{this.renderGroup()}</DragDropContextProvider>
    }
}
const mapStateToProps = (state) => {
    return ({
        groupLists: state.groupLists
    })
}

export default  connect(mapStateToProps)(Management)