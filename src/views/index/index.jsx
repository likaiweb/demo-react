import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import {Layout, Breadcrumb} from 'antd'

import MyHeader from './head/head'
import MyMenu from './menu/menu'
import Home from './home/home'
import DataCenter from './dataCenter/dataCenter'

import {$getIndexData} from '@/api/index'


const {Content, Sider } = Layout;

const logo=require("@/img/main/icon.png")


function Logo(props){
  let text;
  if(!props.collapsed){
    text="后台管理系统";
  }
  return (
    <div className="logo flex align-center justify-center"
      style={{width:'100%',height:80,color:'#fff',fontSize:20,fontWeight:600}}>
        <img src={logo} height="28" style={{margin:5}} alt=""/>
        {text}
        </div>
  )
}


class Index extends Component {
  constructor(props){
    super(props)
    this.state = {
      collapsed: false,
      breadcrumbData:[{
        key:'home',
        name:'首页'
      }]
    };
  }
  // 设置收起展开
  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  // 组件挂载到DOM后调用
  componentDidMount(){
    this.getIndexData()
  }
  async getIndexData(){
    const data=await $getIndexData();
    console.log(data)
  }
  // 在组件挂载到DOM前调用
  componentWillMount(){
    const pathname = this.props.location.pathname
    if (pathname === '/') {
        this.props.history.replace('/home')
    }
  }

  onMenuClick(obj){
    this.setState({
      path:obj[obj.length-1].key,
      breadcrumbData:obj
    })
    this.props.history.push(obj[obj.length-1].key);
  }
  render() {
    return (
      <div className="index">
        <Layout style={{ minHeight: '100vh' }}>
          {/* 菜单 */}
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse.bind(this)}>
          <Logo collapsed={this.state.collapsed} />
          <MyMenu onMenuClick={this.onMenuClick.bind(this)}></MyMenu>
        </Sider>
        <Layout>
          {/* 头部 */}
          <MyHeader />
          <Content style={{ margin: '0 16px' }}>
            {/* 面包屑 */}
            <Breadcrumb className="flex align-center" style={{fontSize:24,height:60 }}>
              <Breadcrumb.Item>当前位置</Breadcrumb.Item>
              {this.state.breadcrumbData.map(val=>(
                <Breadcrumb.Item key={val.key}>{val.name}</Breadcrumb.Item>
              ))}
            </Breadcrumb>
            <div style={{ padding: 20, background: '#fff', height: 'calc(100% - 60px)',overflow:'auto' }}>
              <Switch>
                <Route exact path="/home" component={Home}></Route>
                <Route exact path="/dataCenter" component={DataCenter}></Route>
                <Route exact path="/addGoods" component={DataCenter}></Route>
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
      </div>
     );
  }
}

export default withRouter(Index);
