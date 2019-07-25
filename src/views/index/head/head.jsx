
import React, { Component } from 'react'
import {Layout,Input, Tooltip, Icon,Avatar, Badge } from 'antd';
import "./head.less"
const { Header } = Layout;

class MyHeader extends Component {
  state = {  }
  render() {
    return (
      <Header className="head flex justify-between align-center" style={{ background: '#fff', padding: 0,height:'80px' }} >
        <div className="head-left flex align-center">
            <Input
                placeholder="请输入查询内容"
                prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
            />
        </div>
        <div className="head-right flex justify-between align-center">
            <div>
                <Icon type="question-circle" theme="filled" />
                <span>帮助中心</span>
            </div>
            <div>
                <Badge dot>
                <Icon type="bell" theme="filled" />
                </Badge>
                <span>导航目录</span>
            </div>
            <div className="avator flex justify-between align-center">
                <Avatar size={25} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
               <span> 欢迎您，manager</span>
            </div>
        </div>
      </Header>
     );
  }
}

export default MyHeader;
