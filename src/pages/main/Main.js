import React, { Component } from 'react'
import FirstPage from './FirstPage/FirstPage'
import Chat from './Chat/Chat'
import Recommend from './Recommend/Recommend'
import My from './my/My'
import { TabBar } from 'antd-mobile';

// 二级页面-首页
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'life',
            iconlist: [{ title: '首页', key: 'life', url: 'icon_index.png', selectUrl: 'icon_index_s.png' },
            { title: '足迹', key: 'chat', url: 'icon_foot.png', selectUrl: 'icon_foot_s.png' },
            { title: '微聊', key: 'recommend', url: 'icon_chat.png', selectUrl: 'icon_chat_s.png' },
            { title: '我的', key: 'my', url: 'icon_my.png', selectUrl: 'icon_my_s.png' },
            ]
        };
    }

    renderContent() {
        switch (this.state.selectedTab) {
            case 'life': return < FirstPage history={this.props.history} />
            case 'chat': return <Chat />
            case 'recommend': return <Recommend />
            case 'my': return <My history={this.props.history}/>
        }
    }
    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#00BC5B"
                    barTintColor="white"
                >
                    {
                        this.state.iconlist.map(obj =>
                            <TabBar.Item
                                title={obj.title}
                                key={obj.key}
                                icon={<div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `url(${require('../../assets/images/' + obj.url)}) center center /  21px 21px no-repeat`
                                }}
                                />
                                }
                                selectedIcon={<div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `url(${require('../../assets/images/' + obj.selectUrl)}) center center /  21px 21px no-repeat`
                                }}
                                />
                                }
                                selected={this.state.selectedTab === obj.key}
                                onPress={() => {
                                    this.setState({
                                        selectedTab: obj.key,
                                    });
                                }}

                            >
                                {this.renderContent()}
                            </TabBar.Item>
                        )
                    }
                </TabBar>
            </div>
        )
    }


}
