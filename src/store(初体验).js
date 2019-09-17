import { createStore } from "redux";

// 创建仓库
// store:当前store存放的所有值
// action:本次通知对象
let store = createStore(function(state="赵无极",action){

    switch (action.type) {
        case "changename":return action.name
    
        default: return state
           
    }

})


// action发送
let msg={
    type:'changename',
    name:'里二狗子'
}

// 发送action
store.dispatch(msg)

// 获取store中的数据
console.log(store.getState())

export default store