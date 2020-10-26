import axios from 'axios';

export default function ajax(url = '', params = {},type = 'get') {
	let promise;
	return new Promise((resolve, reject) => {
		if('get' == type) {
			let paramsstr = '';
			Object.keys(params).forEach((item) => {
				paramsstr += item + '=' + params[item] + '&';
			});
			if(params != {}) {
				paramsstr = paramsstr.substr(0, paramsstr.lastIndexOf('&'));
			}
			url += '?' + paramsstr;
			promise = axios.get(url)
		} else if('post' == type) {
			promise = axios.post(url, params)
		}
		promise.then((response) => {
			resolve(response.data)
		}).catch((err) => {
			reject(err)
		})
	})
}