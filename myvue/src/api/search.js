import ajax from './ajax.js';

//定义一个全局路径
//const base_url = '/api';
export const searchFn = (params) => ajax('http://39.101.210.136:3000/api' + "/v1/search", params);
