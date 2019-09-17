import React, { Component } from 'react'
import { WingBlank} from 'antd-mobile';
// 引入BS
import BScroll from 'better-scroll'

// 引入
import city from '../../json/City.json'


export default class City extends Component {
    
    render() {
        return (
            <div id="selectCity" style={{backgroundColor:'#F8F8F9',height:'100%',overflow:'auto'}}>
                <div>
                    <ul style={{padding:0}} className='container'>
                        <WingBlank style={{paddingTop:'10px'}} size="lg">
                            {/* 热门城市 */}
                            <p style={{fontSize:'18px'}}>热门城市</p>
                            {
                                city.hotcity.map(obj=><div key={obj} style={{backgroundColor:'#fff'}}>
                                        <p style={{margin:0,lineHeight:'45px',borderBottom:'1px solid #ccc',paddingLeft:'10px'}}>{obj}</p>
                                    </div>
                                )
                            }
                            {/* 所有城市 */}
                            {
                                city.allcity.map(obj=><div key={obj.title} id={obj.title}>
                                    <p style={{fontSize:'18px'}}>{obj.title}</p>
                                    {
                                        obj.child.map(res=><p key={res} style={{margin:0,lineHeight:'45px',borderBottom:'1px solid #ccc',paddingLeft:'10px',backgroundColor:'#fff'}}>{res}</p>)
                                    }
                                </div>)
                            }
                        </WingBlank>
                    </ul>
                </div>
                <div style={{position:'fixed',right:'2px',top:'90px',width: '15px', height: '100px'}}>
                    {
                        city.allcity.map(obj=><p key={obj.title} onClick={this.changeCity.bind(this,obj.title)} style={{fontSize:'14px'}}>{obj.title}</p>)
                    }
                </div>
            </div>
        )
    }
    changeCity(city){
        // 点击字母到指定位置
        this.myscroll.scrollToElement('#'+city,300)
    }
    componentDidMount(){
        // 初始化
        this.myscroll=new BScroll('#selectCity',{
            click:'true'
        })
    }
}
