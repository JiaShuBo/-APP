import React, { Component } from 'react'
import { WingBlank } from 'antd-mobile';
import { IP } from '../../../api/api'
import { connect } from 'react-redux'

// 引入css
import './Chat.css'

class Chat extends Component {
    render() {
        return (
            <WingBlank size="lg">
                <div style={{ padding: '20px 0' }}>
                    <h3 style={{ fontSize: '18px' }}>历史足迹</h3>
                    <h2 style={this.props.footprint.length===0 ? {display:'block'}: {display:'none'}}>您还没有浏览记录哟！</h2>
                    {

                        this.props.footprint.map(obj =>

                            <div key={obj.id} className='list'>
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
            </WingBlank>
        )
    }
    componentDidMount() {
        console.log(this.props.footprint.length)
    }

}
export default connect((state) => {
    return {
        footprint: state.footprints
    }
})(Chat)
