import React, { Component } from 'react'
import './Login.css'
import {Flex, WhiteSpace, Button, WingBlank,InputItem } from 'antd-mobile';
import {Link} from 'react-router-dom'
// 解构请求
import {login} from '../../api/api'

// 二级页面-登录
export default class Login extends Component {
    constructor(){
        super()
        this.state={
           username:'',
           password:'',
           oldname:'',
           oldpwd:'',
           show:'none'  //是否显示提示
        }
    }
    render() {
        return (
            <div className="login">
                <Flex justify="center">
                   <img alt='' className="image" src={`${require('../../assets/images/logo.png')}`}></img>
                </Flex>

                <WingBlank size="lg">
                    <InputItem
                        clear
                        placeholder="请输入用户名"
                        value={this.state.username}
                        onChange={(val)=>{this.setState({username:val})}}
                    >
                    <div style={{ backgroundImage: `url(${require('../../assets/images/icon_username.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <InputItem
                        clear
                        placeholder="请输入密码"
                        type="password"
                        value={this.state.password}
                        onChange={(val)=>{this.setState({password:val})}}
                    ><div style={{ backgroundImage: `url(${require('../../assets/images/icon_pwd.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <p style={{fontSize:'16px',color:'red',margin:0,display:this.state.show}}>账号或密码错误</p>
                    <WhiteSpace size="xl" />
                    <Button onClick={this.login.bind(this)} style={{backgroundColor:'#00BC5B',color:'#fff'}}>登录</Button>
                    <WhiteSpace size="xl" />
                    <Flex justify="between">
                        <Link style={{color:'#00BC5B'}} to='/reg'>手机快速注册</Link>
                        <Link style={{color:'#00BC5B'}} to='/forgetpwd'>忘记密码?</Link>
                    </Flex>
                   
                   
                </WingBlank>
                    <p className="bottom">登录/注册即代表同意《源码房产用户协议》</p>
            </div>
            
        )
    }
    login(){
        // 解构
        let {username,password,oldname,oldpwd} =this.state
        // 判断新旧用户名密码是否相等
        if(username===oldname&&password===oldpwd){
            return
        }
        // 将点击后的登录名及密码保存至老的
        this.setState({
            oldname:username,
            oldpwd:password
        })
        login(username,password).then((res)=>{
            if(res.data==='ok'){
                this.props.history.push('/')
                localStorage.setItem('name',username)

            }else{
                this.setState({
                    show:'block'
                })
            }
        })
    }
}
