// 引入redux
import { createStore, combineReducers } from 'redux'

// 测试
function text(state = '测试', action) {
    switch (action.type) {
        default: return state
    }
}
function footprints(state=[],action){
    switch(action.type){
        case 'footprint':return [action.obj,...state.filter(obj=>obj.name!=action.obj.name)]
        default:return state
    }
}

// 暴露
export default createStore(combineReducers({
    text,
    footprints
}))

