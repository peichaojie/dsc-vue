import { gethomeswipe } from '@/api/index';
import { getgoodlist, getgooddetail } from '@/api/goodlist';
import { searchFn } from '@/api/search.js';

const actions = {
	actaddnum(context) {
		context.commit('addnum');
	},
	actgetdatalist(context, data) {
		context.commit('getdatalist', data)
	},
	async actgethomeswiper(context) {
		let result = await gethomeswipe();
		console.log(result.data)
		context.commit('gethomeswiper', result.data)
	},
	actgetuserinfo(context, data) {
		context.commit('getuserinfo', data)
	},
	async actgetGoodsList(context, params) {
		let result = await getgoodlist(params);
		context.commit('getGoodsList', result.data)
	},
	async actgetgooddetails(context, params) {
		console.log(params)
		let result = await getgooddetail(params)
//		console.log(result.data)
		context.commit('getgooddetails', result.data[0])
	},
	async searchlist(context,params){
		let result = await searchFn(params);
//		console.log(result)
		context.commit('searchlist',result.data)
	}
}

export default actions