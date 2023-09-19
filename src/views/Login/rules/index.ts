import type { FormRules } from 'element-plus'
import { reactive } from 'vue'
import type { LoginFormType } from '../types/login-type'

export const phoneCodeFormRules = reactive<FormRules<LoginFormType>>({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  smscode: [{ required: true, message: '请输入短信验证码', trigger: 'blur' }],
  imgcode: [{ required: true, message: '请输入图片验证码', trigger: 'blur' }]
})
