import React, {Component} from 'react'
import './supplier.less'

/* 滚动计数 */
import CountUp from 'react-countup';

class Supplier extends Component{

    constructor(props) {
        super(props)
        this.state = { }
    }

    render(){
        return(
            <div className="Supplier">
                企业认证
                <CountUp start={0} end={30} style={{color:"red"}}/>业认证
                <CountUp start={300} end={10000} />业认证
                <CountUp start={300} end={10000} />
            </div>

        )
    }

}

export default Supplier;
