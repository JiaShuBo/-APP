import React, { Component } from 'react'
import { WingBlank, WhiteSpace } from 'antd-mobile';
import { Link } from 'react-router-dom'

import './My.css'

// 三级页面-我的
export default class My extends Component {
    constructor() {
        super()
        this.state = {
            msg:'登录/注册',
            userList: [{ url: 'icon_integral_s.png', text: '我的积分' },
            { url: 'icon_look.png', text: '我的订阅' },
            {},
            { url: 'icon_link.png', text: '微聊联系人' },
            { url: 'icon_counter.png', text: '房贷计算器' },
            { url: 'icon_myhouse.png', text: '我的房子' },
            {},
            { url: 'icon_record.png', text: '我的看房记录' },
            { url: 'icon_answers.png', text: '我的问答' },
            {},
            { url: 'icon_install_s.png', text: '设置' },
            { url: 'icon_opinion.png', text: '意见反馈' }]
        }
    }
    render() {
        return (
            <div style={{ height: "100%" }}>
                <div className="myTop">
                    <div className='operation'>
                        <div style={{ display: 'flex' }}>
                            <img style={{ width: "90px", height: "90px", borderRadius: "50%" }} alt='' src={require('../../../assets/images/icon_user.jpg')}></img>
                            <div style={{ marginLeft: '10px', marginTop: '10px' }}>
                                <h2 onClick={this.login.bind(this)} style={{ fontSize: '20px', color: '#fff' }}>{this.state.msg}</h2>
                                
                                <p style={{ fontSize: '16px', color: '#fff' }}>可以与经纪人发起聊天</p>
                            </div>
                        </div>
                        <img alt='' src={require('../../../assets/images/icon_install.png')} style={{ width: '30px', marginTop: '20px' }}></img>
                    </div>
                    <div className="myBottom">
                        <div className="myicon">
                            <label>0</label>
                            <p style={{ margin: 0, marginTop: '10px', display: 'flex', alignItems: 'center' }}>
                                <img alt='' src={require('../../../assets/images/icon_money.png')} style={{ width: '30px', marginRight: '10px' }} />
                                <label>钱包</label>
                            </p>
                        </div>
                        <div className="myicon">
                            <label>0</label>
                            <p style={{ margin: 0, marginTop: '10px', display: 'flex', alignItems: 'center' }}>
                                <img alt='' src={require('../../../assets/images/icon_dicsount.png')} style={{ width: '30px', marginRight: '10px' }} />
                                <label>优惠</label>
                            </p>
                        </div>
                        <div className="myicon">
                            <label>0</label>
                            <p style={{ margin: 0, marginTop: '10px', display: 'flex', alignItems: 'center' }}>
                                <img alt='' src={require('../../../assets/images/icon_integral.png')} style={{ width: '30px', marginRight: '10px' }} />
                                <label>积分</label>
                            </p>
                        </div>
                    </div>
                </div>
                <WhiteSpace style={{ backgroundColor: '#F5F5F9' }} size="lg" />
                <WingBlank size="md">
                    {
                        this.state.userList.map((obj) => {
                            if (obj.url) {
                                return <div key={obj.text} className="userlist">
                                    <div>
                                        <img alt='' src={require('../../../assets/images/' + obj.url)} style={{ width: '20px', marginRight: '10px' }} />
                                        <label>{obj.text}</label>
                                    </div>
                                    <label>></label>
                                </div>

                            } else {
                                return <div key={obj.text} style={{ height: '10px', backgroundColor: '#F5F5F9' }}></div>
                            }
                        })
                    }

                </WingBlank>
            </div>
        )
    }
    componentDidMount(){
        let name=localStorage.getItem('name')
        this.setState({
            msg:name
        })
    }
    login(){
        this.props.history.push('/login')
    }
}
