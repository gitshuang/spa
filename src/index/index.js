import React from 'react';
import './index.less';
import Main from '../main/index.js';
import Header from '../header/index.js';


export default class App extends React.Component {

        constructor(props) {
            super(props);
        
           }
           
            render(){

                return (
                  <>
                    <Header></Header>
                    <Main></Main>                      
                  </>
                );
            }
        }


