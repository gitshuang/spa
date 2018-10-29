import React from 'react';
import './index.less';
import Main from '../main/index.js';
import Header from '../header/index.js';


export default class App extends React.Component {

        constructor(props) {
            super(props);
            this.changeColor=this.changeColor.bind(this);
            this.state={
              themeColor:['#f00','#008000','#250080'],
              now:0,
            }
           }
           changeColor(){
            let now = this.state.now;
            now+=1;
            if(now>=3){
              now=0;
            }
             this.setState({now:now})
            
           }
           getSnapshotBeforeUpdate(){

           }
            render(){
                console.log('render',this.state.now)
                return (
                  <>
                    <Header themeColor={this.state.themeColor[this.state.now]}></Header>
                    <Main></Main>  
                    <button onClick={this.changeColor} style={{color:this.state.themeColor[this.state.now]}}>改变主题颜色</button>                    
                  </>
                );
            }
        }


