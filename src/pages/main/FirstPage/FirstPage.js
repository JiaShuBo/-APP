import React, { Component } from 'react'
import { Flex, WingBlank, Carousel, WhiteSpace,Toast } from 'antd-mobile';
import {connect} from 'react-redux'
import './FirstPage.css'
// 解构API
import { houselist,IP } from '../../../api/api'



class FirstPage extends Component {
    constructor() {
        super()
        this.state = {
            value: '',
            data: ['banner1.jpg', 'banner2.jpg'],
            imgHeight: 180,
            icon: [{
                url: 'icon_house07.png',
                name: '新房',
                bgc: '#E56858'
            },
            {
                url: 'icon_house02.png',
                name: '二手房',
                bgc: '#4DB0E4'
            },
            {
                url: 'icon_house08.png',
                name: '租房',
                bgc: '#D4267B'
            },
            {
                url: 'icon_house05.png',
                name: '商铺写字楼',
                bgc: '#804000'
            },
            {
                url: 'icon_house04.png',
                name: '卖房',
                bgc: '#F5EC35'
            },
            {
                url: 'icon_house03.png',
                name: '海外房产',
                bgc: '#FF8141'
            },
            {
                url: 'icon_house06.png',
                name: '小区房价',
                bgc: '#6D77AD'
            },
            {
                url: 'icon_house01.png',
                name: '问答',
                bgc: '#658CB2'
            },
            ],
            houselist: [],
            city: '定位中'

        }
    }

    render() {
        return (
            <div className="search" style={{ height: '100%' }}>
                <div style={{ backgroundColor: " #00BC5B" }}>
                    <WingBlank size="md" className='searchBox'>
                        <Flex justify="between">
                            <span onClick={this.change.bind(this, '/city')}>{this.state.city}▼</span>
                            <div className="searchInput">
                                <img style={{ width: '20px' }} src={`${require('../../../assets/images/icon_search.png')}`} alt='' />
                                <label onClick={this.change.bind(this, 'search')}>挑好房,上源码房产APP</label>
                            </div>
                            <img onClick={this.change.bind(this, 'maps')} src={`${require('../../../assets/images/icon_map.png')}`} alt=''></img>
                        </Flex>
                    </WingBlank>
                </div>
                <Carousel
                    autoplay={true}
                    infinite
                >
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            href='true'
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={require('../../../assets/images/'+val)}
                                alt=""
                                style={{ width: '100%', height: 180 }}
                            />
                        </a>
                    ))}
                </Carousel>
                <WingBlank size="md">
                    <ul className='icon'>

                        {
                            this.state.icon.map(obj => <li key={obj.name} className='listMes'>
                                <div style={{ backgroundColor: obj.bgc }} className='listImg'>
                                    <img src={require('../../../assets/images/' + obj.url)} alt=''></img>
                                </div>
                                <span style={{ marginTop: '5px' }}>{obj.name}</span>
                            </li>
                            )
                        }

                    </ul>
                </WingBlank>
                <WhiteSpace style={{ backgroundColor: '#F5F5F9' }} size="md" />
                <WingBlank size="lg">
                    <Flex justify="start">
                        <h3 style={{ color: '#00BC5B', fontSize: '20px' }}>房产全百科</h3>
                        <span style={{ fontSize: '14px', color: '#949494', marginLeft: '10px' }}>专业的买房功略</span>
                    </Flex>
                    <Flex justify="between">
                        <div className='listMes'>
                            <img src={`${require('../../../assets/images/icon_loan.png')}`} alt='' />
                            <span style={{ marginTop: '5px' }}>我要贷款</span>
                        </div>
                        <div className='listMes'>
                            <img src={`${require('../../../assets/images/icon_count.png')}`} alt='' />
                            <span style={{ marginTop: '5px' }}>房贷计算</span>
                        </div>
                        <div className='listMes'>
                            <img src={`${require('../../../assets/images/icon_knowladge.png')}`} alt='' />
                            <span style={{ marginTop: '5px' }}>知识</span>
                        </div>
                        <div className='listMes'>
                            <img src={`${require('../../../assets/images/icon_scan.png')}`} alt='' />
                            <span style={{ marginTop: '5px' }}>扫一扫</span>
                        </div>
                    </Flex>
                </WingBlank>
                <WhiteSpace style={{ backgroundColor: '#F5F5F9' }} size="md" />
                <WingBlank size="lg">
                    <Flex align="start">
                        <h3 style={{ marginLeft: '10px', fontSize: '20px' }}>猜你喜欢</h3>
                    </Flex>
                    <Flex style={{ marginBottom: '10px' }} justify="between" >
                        <div className='house'>
                            {
                                this.state.houselist.map(obj => <div key={obj.id} onClick={this.listmsg.bind(this,obj)} className='list'>
                                    <div className='houseList'>
                                        <img style={{ width: '100px', height: '80px' }} src={IP + obj.imgs} alt='' />
                                        <div style={{ marginLeft: '10px' }}>
                                            <h3 style={{ margin: 0, fontSize: '18px' }}>{obj.name}</h3>
                                            <p style={{ margin: 0, lineHeight: '30px', fontSize: '14px', color: '#949494' }}><span style={{ marginRight: '10px' }}>{obj.area}</span><span>{obj.range}</span></p>
                                            <p style={{ margin: 0, fontSize: '14px', color: '#949494' }}><span style={{ marginRight: '10px' }}>{obj.type}</span><span>{obj.point}平</span></p>
                                        </div>
                                    </div>
                                    <h3 style={{ color: 'red' }}>{obj.price}/平</h3>
                                </div>
                                )
                            }
                        </div>
                    </Flex>
                </WingBlank>
            </div>
        )
    }
    listmsg(obj){
        Toast.info('您浏览了' + obj.name + '房源!!!');
        
        this.props.dispatch({
            type:'footprint',
            obj
        })
    }
    change(url) {
        this.props.history.push(url)
    }
    async componentDidMount() {
        let This=this
        // 实例化城市查询类
        var citysearch = new window.AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                    This.setState({
                        city:cityinfo
                    })
                    
                }else {
                    // document.getElementById('info').innerHTML = result.info;
                }
            } 
        });
        
        let houselists=await houselist()
        this.setState({
            houselist:houselists.data
        })
    }
}
export default connect()(FirstPage)
