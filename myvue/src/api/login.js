import ajax from './ajax.js';

//定义一个全局路径
const base_url = '/api';

//export const loginuser = (user_name, pass, captcha) => ajax(base_url+"/v1/users/login", { user_name, login_password: pass, captcha},'post')
export const loginuser = (user_name, pass, captcha) => ajax(base_url + "/v1/users/login", { user_name, login_password: pass, captcha }, "post")
