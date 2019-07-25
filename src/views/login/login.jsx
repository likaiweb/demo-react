import React, {Component} from 'react'
import './login.less'
import {Form ,Input, Icon, Button, Tooltip, Radio,Checkbox} from 'antd'

import configApi from '@/libs/config'
import WrappedNormalLoginForm from './loginFrom'
import {$login} from '@/api/login'
class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            codeImg:configApi.baseURL+'/captcha.jpg',
            name:'',
            password:'',
            code:'',
            promptMessage:'我是提示'
        }
    }
    // 登录
    loginCLick() {
        if(this.messageSuccess()){

        }
        // this.props.history.push('/')
    }
    messageSuccess(){
        let flag=true;
        if(!this.state.name){

        }
    }
    // 认证、注册
    supplierClick(){
        this.props.history.push('/supplier')
    }
    // 忘记密码
    forget(){
        this.props.history.push('/forget')
    }
    onCheck(e) {
        console.log(`checked = ${!e.target.checked}`);
    }
    getCode(){
        this.setState({
            codeImg:configApi.baseURL+'/captcha.jpg?'+new Date().getTime()
        })
    }
    render() {
        return (
            <div className="login">
                <img className="bg" src={require('@/img/login/login-img.png')} alt=""/>
                <div className="box">
                    <WrappedNormalLoginForm></WrappedNormalLoginForm>
                    {/* <b>后台管理系统</b>
                    <div className="inputArr">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                allowClear
                                placeholder="请输入账号"
                                value={this.state.name}
                                prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                />,
                            )}
                        </Form.Item>
                        <Input
                            allowClear
                            placeholder="请输入账号"
                            value={this.state.name}
                            prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                        />
                        <Input.Password
                            value={this.state.password}
                            placeholder="请输入密码"
                            prefix={<Icon type="unlock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                        />
                        <Input
                            allowClear
                            value={this.state.code}
                            placeholder="请输入验证码"
                            prefix={<Icon type="safety-certificate" style={{color: 'rgba(0,0,0,.25)'}}/>}
                        />
                    </Form>
                    </div>
                    <div className="verification-code flex justify-between align-center">
                        <img src={this.state.codeImg} alt=""/>
                        <span onClick={this.getCode.bind(this)}>点击刷新</span>
                    </div>
                    <p className="errInfo">{this.state.promptMessage}</p>
                    <div className="btnArr">
                    <Button size="large" type="primary" color="#4D88FE" onClick={this.loginCLick.bind(this)} shape="round" block>
                        登录
                    </Button>
                    <Button  size="large" className="attestation" type="default" onClick={this.supplierClick.bind(this)} shape="round" block>
                        供应商认证
                    </Button>
                    <div className="remember flex justify-between">
                        <Checkbox  onClick={this.onCheck.bind(this)} >记住密码</Checkbox>
                        <span className="forget-password" onClick={this.forget.bind(this)}>忘记密码?</span>
                    </div>
                    </div> */}
                </div>
                <p className="page-info">一个为供应商提供更快捷，更高效的后台的后台管理系统</p>
            </div>
        );
    }
}

export default Login;
