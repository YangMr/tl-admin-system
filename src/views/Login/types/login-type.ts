import { type DefineComponent } from 'vue'
// 定义组件名称和组件类型的映射关系
export type ComponentMap = {
  name: string
  componentName: DefineComponent<{}, {}, any>
}

// 定义登录表单的数据类型
export interface LoginFormType {
  username: string
  smscode: string
  imgcode: string
  saveUserName: boolean
}
