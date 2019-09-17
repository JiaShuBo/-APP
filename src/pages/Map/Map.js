import React, { Component } from 'react'

export default class Map extends Component {
    constructor(){
        super()
        this.state={
            city:''
        }
    }
    render() {
        return (
            <div style={{width:'100%',height:'100%'}}>
                <div style={{width:'100%',height:'100%'}} id='container'>

                </div>
            </div>
        )
    }
    componentDidMount(){
        let This=this

        var mymap = new window.AMap.Map("container", {
            resizeEnable: true,
            center: [116.397428, 39.90923],
            zoom: 10
        });
        // 实例化城市查询类
        var citysearch = new window.AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                    var citybounds = result.bounds;
                    This.setState({
                        city:cityinfo
                    })
                    //地图显示当前城市
                    mymap.setBounds(citybounds);
                }else {
                    // document.getElementById('info').innerHTML = result.info;
                }
            } 
        });
    }
}
