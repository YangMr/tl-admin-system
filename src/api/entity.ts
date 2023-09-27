import request from '@/utils/request'

export type EntityConfigType = {
  type: string
}
export type DictType = {
  key: string
}

// 获取实体配置数据
export const getEntityConfig = (data: EntityConfigType) => {
  return request({ url: '/api/entity', method: 'POST', data })
  // return request({
  //   url: '/api/data/entityConfig/getConfigByEntity?ownerClass=com.junadmin.entity.system.User',
  //   method: 'POST',
  //   data
  // })
}

// 获取表格数据
export const getTableList = () => {
  return request({ url: '/api/table/list', method: 'POST' })
}

// 获取数据字典
export const getDictList = (data: DictType) => {
  return request({ url: '/api/dict/listByKey', method: 'POST', data })
}

// 获取用户信息
export const getUserList = (data: { name: string }) => {
  return request({ url: '/api/user/list', method: 'POST', data })
}
