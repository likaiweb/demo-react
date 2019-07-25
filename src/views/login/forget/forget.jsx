import React, {Component} from 'react'
import './forget.less'
import {Input, Icon, Button, Tooltip, Radio,Checkbox} from 'antd'

class Login extends Component {
    state = {}

    submit() {
        this.props.history.push('/login')
    }

    onCheck(e) {
        console.log(`checked = ${e.target.checked}`);
    }
    getCode(){
        console.log("点击刷新验证码")
    }
    render() {
        return (
            <div className="login">
                <img className="bg" src={require('@/img/login/login-img.png')} alt=""/>
                <div className="box">
                    <b>忘记密码</b>
                    <div className="inputArr">
                        <Input
                            placeholder="请输入账号"
                            prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                        />

                        <Input
                            placeholder="请输入验证码"
                            prefix={<Icon type="safety-certificate" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            suffix={
                                <Button  type="primary" color="#4D88FE" onClick={this.getCode.bind(this)}  block>
                                    获取验证码
                                </Button>
                            }
                        />
                        <Input
                            placeholder="请输入密码"
                            prefix={<Icon type="unlock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                        />
                        <Input
                            placeholder="请再次输入密码"
                            prefix={<Icon type="unlock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                        />
                    </div>
                    <p className="errInfo">错误信息提示位置</p>
                    <div className="btnArr">
                        <Button size="large" type="primary" color="#4D88FE" onClick={this.submit.bind(this)} shape="round" block>
                            提交
                        </Button>
                        <div className="remember flex justify-between">
                            <Checkbox  onClick={this.onCheck.bind(this)} checked>记住密码</Checkbox>
                        </div>
                    </div>
                </div>
                <p className="page-info">一个为供应商提供更快捷，更高效的后台的后台管理系统</p>
            </div>
        );
    }
}

export default Login;
