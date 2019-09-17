// 引入插件
import axios from 'axios'
import qs from 'qs'

// 定IP 
// export const IP='http://127.0.0.1:8080'
export const IP='http://192.168.31.245:8080'
// const IP='http://172.20.10.3:8080'

// 封装axios
// 用户登录接口
export function login(acc,pwd){
    return axios.post(IP+'/login.php',qs.stringify({acc,pwd}))
}
// 用户验证码接口
export function valitecode(){
    return axios.get(IP+'/valitecode.php')
}
// 猜你喜欢接口
export function houselist(){
    return axios.get(IP+'/gethouselist.php')
}
// 用户注册接口
export function register(acc,pwd){
    return axios.post(IP+'/reg.php',qs.stringify({acc,pwd}))
}