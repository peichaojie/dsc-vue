const state = {
	num:0,
	datalist:[],
	homeswiper:[],
	userInfo:{},//用户信息
	goodsLists:[],//商品列表
	gooddetails:{},//商品详情
	cartslist:localStorage['cartslist'] ? JSON.parse(localStorage['cartslist']) : [],//购物车信息
	selectall:localStorage['selectall'] ? JSON.parse(localStorage['selectall']) : false,//全选
	searchlist:[], //搜索信息
	keywd:localStorage['keywd'] ? JSON.parse(localStorage['keywd']) :[]
	
}

export default state