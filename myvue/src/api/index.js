import ajax from './ajax.js';

//定义一个全局路径
const base_url = '/api';
export const gethomeswipe = () => ajax(base_url + "/v1/index/swipe")
