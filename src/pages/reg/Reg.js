import React, { Component } from 'react'
import {InputItem,Checkbox, Flex,WhiteSpace,Button,WingBlank,Toast } from 'antd-mobile';
import {Link} from 'react-router-dom'
import './Reg.css'

// 解构API
import {valitecode,register} from '../../api/api'
const AgreeItem = Checkbox.AgreeItem;

// 二级页面-注册
export default class Reg extends Component {
    constructor(){
        super()
        this.state={
            name:'',        //用户名
            pwd:'',         //密码
            oldcode:'',     //输入的验证码
            code:'',        //通过后台获取到的验证码
            show:'none'     //是否显示错误提示
        }
    }

    render() {
        return (
            <div>
                <WingBlank size="lg">
                    <InputItem
                    clear
                    placeholder="请输入用户名"
                    value={this.state.name}
                    onChange={(val)=>{this.setState({name:val})}}
                    onBlur={this.name.bind(this)}
                    ></InputItem>
                    <p style={{display:this.state.show,color:'red',margin:0,marginLeft:'12px'}}>用户名不能为空</p>
                    <InputItem
                        clear
                        placeholder="请输入密码"
                        type='password'
                        value={this.state.pwd}
                        onChange={(val)=>{this.setState({pwd:val})}}
                    ></InputItem>
                    <div className='code'>
                        <InputItem
                            clear
                            placeholder="请输入验证码"
                            value={this.state.oldcode}
                            onChange={(val)=>{this.setState({oldcode:val})}}
                        ></InputItem>
                       <button onClick={this.code.bind(this)} className="code-btn">获取验证码</button>
                    </div>
                    <Flex>
                        <Flex.Item>
                        <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>
                        <span style={{fontSize:'14px',color:'#ccc'}}>我已同意 <a style={{color:'#00BC5B'}}>《用户服务协议》及《隐私权政策》</a></span> 
                        </AgreeItem>
                        </Flex.Item>
                    </Flex>
                    <WhiteSpace size="md" />
                    <Button onClick={this.registerbtn.bind(this)} style={{backgroundColor:'#00BC5B',color:'#fff'}}>注册</Button>
                    <WhiteSpace size="md" />
                    <Link style={{color:'#00BC5B',fontSize:'14px'}} to='/login'>已有账号</Link>
                </WingBlank>
            </div>
        )
    }
    // 表单验证
    name(){
        if(this.state.name===''){
            this.setState({
                show:'block'
            })
           
        }else{
            this.setState({
                show:'none'
            })
        }
    }
    // 获取验证码
    async code(){
        let code=await valitecode().then((res)=>{
            console.log(res.data)
            this.setState({
                code:res.data
            })
        })
       
    }
    // 注册用户
    async registerbtn(){
        // 解构
        let {name,pwd,oldcode,code} =this.state
        register(name,pwd).then((res)=>{
            if(res.data==='ok'&&oldcode==code){
                function successToast() {
                    Toast.success('注册成功!!!', 1);
                }
                successToast()
                this.props.history.push('/login')
            }else{
                function failToast() {
                    Toast.fail('注册失败!!!', 1);
                }
                failToast()
            }
        })
    }
}
