//uni配置文件
export default {
    baseUrl: process.env.NODE_ENV === 'development' ? '/api' : 'http://localhost:9872',
    mqttMy: process.env.NODE_ENV === 'development' ? 'ws://81.70.45.115:5883/mqtt' : 'ws://81.70.45.115:5883/mqtt',
    //微信pc扫码登录
    redirect_url: process.env.NODE_ENV === 'development' ? 'http://chatgpt.dev.mj.ink:9900' : 'http://localhost:9872',

    apiRequestHead: 'open-chat',
    key: 'uni-chatgpt-pc-ky', //配置主键,目前用于存储
    tokenHeader: 'Blade-Auth',
    Authorization: 'c2FiZXI6c2FiZXJfc2VjcmV0',
    mqttUserName: 'MJKJ_OPEN', // rabbitmq连接用户名
    mqttPassword: 'MJKJ_OPEN', // rabbitmq连接密码
}