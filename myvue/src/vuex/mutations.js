import { MessageBox } from 'mint-ui';
const mutations = {
	addnum(state) {
		state.num++;
	},
	addnumx(state, data) {
		state.num += data;
	},
	getdatalist(state, data) {
		state.datalist = data;
	},
	gethomeswiper(state, data) {
		state.homeswiper = data
	},
	getuserinfo(state, data) {
		state.userInfo = data
	},
	getGoodsList(state, data) {
		state.goodsLists = data
	},
	getgooddetails(state, data) {
		state.gooddetails = data;
	},
	setcartdata(state, data) {
		if(data) {
			state.cartslist.push(data)
		}
		//		localStorage['carts'] = state.carts;
		localStorage.setItem('cartslist', JSON.stringify(state.cartslist))
	},
	//数量增加
	addnumFn(state, index) {
		state.cartslist[index].value++;
		localStorage.setItem('cartslist', JSON.stringify(state.cartslist))
	},
	//数量减少
	delenumFn(state, index) {

		if(state.cartslist[index].value <= 1) {
			state.cartslist[index].value = 1;
			MessageBox({
                title: '提示',
                message: '亲，至少要购买一个哦！',
            });
		} else {
			state.cartslist[index].value--;
		}
		localStorage.setItem('cartslist', JSON.stringify(state.cartslist))
	},
	//切换选中状态
	radioFn(state, isselect) {
		state.cartslist[isselect.index] = isselect.item;
		let ischeck = state.cartslist.every((item) => {
			return item.isselect == true;
		})
		state.selectall = ischeck;
		localStorage.setItem('selectall', ischeck)

		localStorage.setItem('cartslist', JSON.stringify(state.cartslist))
	},
	//删除商品
	removeFn(state, index) {
		state.cartslist.splice(index, 1);
		localStorage.setItem('cartslist', JSON.stringify(state.cartslist));
	},
	//全选
	selectallFn(state) {
		state.selectall = !state.selectall;
		state.cartslist.forEach((item) => {
			item.isselect = state.selectall;
		})
		localStorage.setItem('cartslist', JSON.stringify(state.cartslist));
		localStorage.setItem('selectall', state.selectall)
	},
	//修改数量
	changenum(state, data) {
		if(data.val < 1) {
			data.val = 1;
			MessageBox({
                title: '提示',
                message: '亲，至少要购买一个哦！',
            });
			
		}
		console.log(data.val)
		state.cartslist[data.index].value = data.val;
		localStorage.setItem('cartslist', JSON.stringify(state.cartslist));
	},
	//搜索商品信息
	searchlist(state,data){
		state.searchlist = data;
	},
	//搜索页关键字
	getkeywd(state,data){
		let res = state.keywd.findIndex((item)=>{
			return item == data
		})
		if(res>=0){
			state.keywd.splice(res,1)
			state.keywd.unshift(data)
			localStorage.setItem('keywd',JSON.stringify(state.keywd))
		}else{
			state.keywd.unshift(data)
			localStorage.setItem('keywd',JSON.stringify(state.keywd))
		}
	},
	//删除关键字
	dele(state){
		state.keywd = [];
		localStorage.setItem('keywd',JSON.stringify(state.keywd))
	}

}

export default mutations