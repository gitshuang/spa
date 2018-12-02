import React from 'react';
import './index.less';
import {  Link } from 'react-router-dom';
import { connect, Provider } from 'react-redux';




 class HeaderCom extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            headers: ['主页','javascript', 'css', 'html']
        }
    }
    static getDerivedStateFromProps(props){
      console.log('getDerivedStateFromProps',props)
    }

    render() {

        return (
            <ul className="headerUrl" >
                     {
                      this.state.headers.map((item,index)=>{
                        return <li style={{backgroundColor:this.props.themeColor}}><Link to={`/classify/${index}`}>{item}</Link></li>
                      })
                   }                  
            </ul>
        );
    }
}


const mapStateToProps = (state) => {
  console.log(state,'state=======================')
    return {
        count: state.count
    }
}
const Header = connect(
    mapStateToProps
)(HeaderCom)
export default  Header ;