import React from 'react';
import './index.less';
//import Main from '../main/index.js';
import Header from '../header/index.js';
import { Provider } from 'react-redux';
import store from '../store';
import Management from '../management/index.js';
import Container from '../Simple/index.js';
import {DragSource ,DragDropContextProvider} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DropEffects from '../DropEffects/index.js';
import StressTest from '../StressTest/index.js';
import NestingDragSources from '../Nesting/DragSources/index.js';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            themeColor: ['#f00', '#008000', '#250080'],
            now: 0,
        }
    }
   
    componentDidUpdate() {

    }
    render() {
        return (
            <Provider store={store}>
                  <DragDropContextProvider backend={HTML5Backend} >
                    <Header themeColor={this.state.themeColor[this.state.now]}></Header>
                    {/* <Management></Management>   */}
                    {/* <Container /> */}
                    {/* <DropEffects /> */}
                    {/* <StressTest /> */}
                    <NestingDragSources />
                   </DragDropContextProvider>
            </Provider>
        );
    }
}



