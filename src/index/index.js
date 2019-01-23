import React from "react";
import "./index.less";
//import Main from '../main/index.js';
import Header from "../header/index.js";
import { Provider } from "react-redux";
import store from "../store";
import Management from "../management/index.js";
import Container from "../Simple/index.js";
import { DragSource, DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import DropEffects from "../DropEffects/index.js";
import StressTest from "../StressTest/index.js";
import NestingDragSources from "../Nesting/DragSources/index.js";
import { Menu } from "tinper-bee";
import Simple from '../Simple'

const SubMenu = Menu.SubMenu;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "1",
      openKeys: []
    };
  }

  handleClick = e => {
    console.log("Clicked: ", e);
    this.setState({ current: e.key });
  };
  onOpenChange = openKeys => {
    const state = this.state;

    const latestOpenKey = this.myfilter(openKeys, state.openKeys);
    const latestCloseKey = this.myfilter(state.openKeys, openKeys);

    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    this.setState({ openKeys: nextOpenKeys });
  };

  //IE下 array.find（）方法不可用
  myfilter = (arr1, arr2) => {
    if (arr2.length === 0 || !arr2) {
      return arr1[0];
    }

    for (var i = 0; i < arr1.length; i++) {
      if (arr2.indexOf(arr1[i].toString()) === -1) {
        return arr1[i];
      }
    }
    return false;
  };

  getAncestorKeys = key => {
    const map = {
      sub3: ["sub2"]
    };
    return map[key] || [];
  };

  render() {
    return (
      <Provider store={store}>
        <div>
          <DragDropContextProvider backend={HTML5Backend}>
            <Header />
            {/* <Management></Management>   */}
            {/* <Container /> */}
            {/* <DropEffects /> */}
            <StressTest />
            {/* <NestingDragSources /> */}
            {/* <Simple /> */}
          </DragDropContextProvider>
             
        </div>
      </Provider>
    );
  }
}
