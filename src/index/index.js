import React from 'react';
import './index.less';
import Main from '../main/index.js';
import Header from '../header/index.js';
import { connect, Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import store from '../store';


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.changeColor = this.changeColor.bind(this);
        this.state = {
            themeColor: ['#f00', '#008000', '#250080'],
            now: 0,
        }
        console.log("=============", this.props)
    }
    changeColor() {
        let now = this.state.now;
        now += 1;
        if (now >= 3) {
            now = 0;
        }
        this.setState({ now: now })

    }
    getSnapshotBeforeUpdate() {

    }
    componentDidUpdate() {

    }
    render() {
        console.log('render', this.state.now)
        return (
            <Provider store={store}>
                  <div>
                    <Header themeColor={this.state.themeColor[this.state.now]}></Header>
                    <Main></Main>  
                    <button onClick={this.changeColor} style={{color:this.state.themeColor[this.state.now]}}>改变主题颜色</button>                    
                   </div>
            </Provider>
        );
    }
}

