import request from '@/utils/request'

/**
 * 创优首页地图展示数据接口
 * @param {Object} params.oid  (机构oid)
 * @param {Object} params.grule (机构grule)
 * parentId 第一次请求传0，第二次请求传上一次返回值中的dept_id，以此类推。
 * @returns {Array}
 */

export function getExceNum(params) {
  return request({
    url: '/exceplan/homepage/getExceNum.bo',
    method: 'POST',
    params
  })
}

/**
 * 年份统计登记情况和拟创优情况数据(按年份统计)
 * @param {Object} params.oid  (机构oid)
 * @param {Object} params.grule (机构grule)
 * parentId 第一次请求传0，第二次请求传上一次返回值中的dept_id，以此类推。
 * @returns {Array}
 */

export function getExceByYear(params) {
  return request({
    url: '/exceplan/homepage/getExceByYear.bo',
    method: 'POST',
    params
  })
}

/**
 * 年份统计登记情况和拟创优情况数据(按单位统计)
 * @param {Object} params.oid  (机构oid)
 * @param {Object} params.grule (机构grule)
 * parentId 第一次请求传0，第二次请求传上一次返回值中的dept_id，以此类推。
 * @returns {Array}
 */

export function getOrganExce(params) {
  return request({
    url: '/exceplan/homepage/getOrganExce.bo',
    method: 'POST',
    params
  })
}

/**
 * 年份统计登记情况和拟创优情况数据(按类型)
 *
 * parentId 第一次请求传0，第二次请求传上一次返回值中的dept_id，以此类推。
 * @returns {Array}
 */

export function getProTypeExce(params) {
  return request({
    url: '/exceplan/homepage/getProTypeExce.bo',
    method: 'POST',
    params
  })
}

/**
 * 2.5.新增项目列表数据接口
 * @param {Object} params.oid  (机构oid)
 * @param {Object} params.grule (机构grule)
 * parentId 第一次请求传0，第二次请求传上一次返回值中的dept_id，以此类推。
 * @returns {Array}
 */

export function getNewProjList(params) {
  return request({
    url: '/exceplan/homepage/getNewProjList.bo',
    method: 'POST',
    params
  })
}

/**
 * 2.6.最新动态项目列表数据接口
 * 
 * parentId 第一次请求传0，第二次请求传上一次返回值中的dept_id，以此类推。
 * @returns {Array}
 */

export function getProgressList(params) {
  return request({
    url: '/exceplan/homepage/getProgressList.bo',
    method: 'POST',
    params
  })
}
