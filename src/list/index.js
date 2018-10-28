import React from 'react';
import ReactDOM from 'react-dom';
import './index.less'


export default class List extends React.Component{
	constructor(props){
		super(props)
		this.classify = ['主页','javascript','css','html'];
		this.props.history.push(this.props.match.url);
	}

	render(){
		console.log("=====",this.props)

		const num = this.props.match.params.num;
		
		return <div className="list">
		   <h2>{this.classify[num]}</h2>
		   {num==0?<p>在这里我们可以学到很多！</p>:null}
		</div>
	}
}

