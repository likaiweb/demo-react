import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import Index from '@/views/index/index'
import Login from '@/views/login/login'
import Forget from '@/views/login/forget/forget'
import Supplier from '@/views/login/supplier/supplier'

export default class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
            /*登陆*/
            <Route exact path="/login" component={Login}></Route>
            /*忘记密码*/
            <Route  path="/forget" component={Forget}></Route>
            /*企业认证*/
            <Route  path="/supplier" component={Supplier}></Route>
            /*首页*/
            <Index path="/" component={Index} />
        </Switch>
      </Router>
    )
  }
}
