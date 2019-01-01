import React from 'react';
import './index.less';
import {  Link } from 'react-router-dom';
import { connect, Provider } from 'react-redux';




 class HeaderCom extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            headers: ['主页','javascript', 'css', 'html','management']
        }
    }
    static getDerivedStateFromProps(props,state){
        return null
    }

    render() {

        return (
            <ul className="headerUrl" >
                     {
                      this.state.headers.map((item,index)=>{
                          if(item=='management'){
                              return <li style={{backgroundColor:"green"}} key={index}><Link to="/manage">{item}</Link></li>
                          }
                        return <li style={{backgroundColor:this.props.themeColor}} key={index}><Link to={`/classify/${index}`}>{item}</Link></li>
                      })
                   }                  
            </ul>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}
const Header = connect(
    mapStateToProps
)(HeaderCom)
export default  Header ;