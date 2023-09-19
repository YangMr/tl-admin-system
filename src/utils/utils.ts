const utils = {
  // 存储数据
  saveData(key: string, value: string) {
    localStorage.setItem(key, value)
  },
  // 获取数据
  getData(key: string) {
    const data = localStorage.getItem(key)
    if (data) {
      return JSON.parse(data)
    }
    return null
  },
  // 删除数据
  removeData(key: string) {
    localStorage.removeItem(key)
  }
  // 开启全局loading
  // 关闭全局loading
  // 成功信息提示
  // 错误信息提示
  // 警告信息提示
}

export default utils
