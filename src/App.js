import React, { Component } from 'react'
import {HashRouter,Switch,Route} from 'react-router-dom' 
// 引入redux
import store from './store'
import {Provider} from 'react-redux'


import Login from './pages/login/Login'
import Main from './pages/main/Main'
import Reg from './pages/reg/Reg'
import Maps from './pages/Map/Map'
import Search from './pages/Search/Search'
import City from './pages/City/City'
import Forgetpwd from './pages/Forgetpwd/Forgetpwd'
import Error from './pages/error404/Error404'

export default class App extends Component {
    render() {
        return (
            <div style={{height:"100%"}}>
                <Provider store={store}>
                    <HashRouter>
                        <Switch>
                            <Route path='/' exact component={Main} />
                            <Route path='/login' component={Login} />
                            <Route path='/reg' component={Reg} />
                            <Route path='/maps' component={Maps} />
                            <Route path='/search' component={Search} />
                            <Route path='/city' component={City} />
                            <Route path='/forgetpwd' component={Forgetpwd} />
                            <Route  component={Main} />
                        
                        </Switch>
                    </HashRouter>
                </Provider>
            </div>
        )
    }
}
