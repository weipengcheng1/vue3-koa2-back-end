/**
 * 通用函数封装
 * @author xiaoLangTou
 */

import log4js from "./log4js"

//业务代码
const CODE = {
		SUCCESS: 0, //成功
		PARAM_ERROR: 10001,   //参数错误
		USER_ACCOUNT_ERROR: 20001, //用户名或密码错误
		USER_LOGIN_ERROR: 30001,  //用户未登录
		BUSINESS_ERROR: 40001,  //业务请求失败
		AUTH_ERROR: 50001,  //认证失败或Token过期
}


module.exports = {
		/**
		 * 分页信息
		 * @param {Number} pageNum  当前页
		 * @param {Number} pageSize  每页几条
		 * @returns {{skipIndex: number, page: {pageSize: number, pageNum: number}}}
		 */
		pager({pageNum = 1, pageSize = 10}) {
				pageNum *= 1;
				pageSize *= 1;
				const skipIndex = (pageNum - 1) * pageSize;
				return {
						page: {
								pageNum,
								pageSize
						},
						skipIndex
				}
		},
		/**
		 * 请求成功响应
		 * @param {String} msg  成功信息
		 * @param {Object} data 信息
		 * @param {Number} code  成功编码
		 * @returns {{msg: String, code: number, data: Object}}
		 */
		success({msg = '', data = {}, code = CODE.SUCCESS}) {
				log4js.debug(JSON.stringify(data))
				return {
						code: code,
						msg: msg,
						data: data
				}
		},
		/**
		 * 请求失败响应
		 * @param {String} msg
		 * @param {Number} code
		 * @returns {{msg: string, code: number}}
		 */
		fail({msg = "", code = CODE.BUSINESS_ERROR}) {
				log4js.debug(msg)
				return {
						code: code,
						msg: msg
				}
		}
}
