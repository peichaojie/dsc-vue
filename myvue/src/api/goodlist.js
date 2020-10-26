import ajax from "./ajax";
const base_url = '/api';
//商品列表
export const getgoodlist = (params) => ajax(base_url+'/v1/category/goodslist',params);

//产品详情页
///api/v1/category/goodsdetail?goods_id=621
//export const getGoodsDetail = (params) => ajax(Base_URL + "/v1/category/goodsdetail", params)
export const getgooddetail = (params) => ajax(base_url+'/v1/category/goodsdetail',params);

