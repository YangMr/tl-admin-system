<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import type { LoginFormType } from '../types/login-type'
import { phoneCodeFormRules } from '../rules'

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const loginForm = reactive<LoginFormType>({
  username: '',
  smscode: '',
  imgcode: '',
  saveUserName: false
})

import { useGetPhoneCode, useHandleSaveUser } from '../composable'
const { disabled, getSmsCode, smsCodeBtnText } = useGetPhoneCode(loginForm)
const { saveLocalUser, getLocalUser } = useHandleSaveUser(loginForm)

// 图片验证码
const imgCodeSrc = ref(new URL('../../../assets/code.png', import.meta.url).href)

// 点击切换图片验证码
const getImgCode = () => {}

// 提交表单方法
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      // 1. 点击登录按钮,判断是否保存用户名,如果保存用户名,则将用户名和保存的状态存储到本地
      console.log(loginForm.saveUserName)
      saveLocalUser()
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

onMounted(() => {
  getLocalUser()
})
</script>

<template>
  <div class="phone-code-page">
    <el-form
      ref="ruleFormRef"
      :model="loginForm"
      :rules="phoneCodeFormRules"
      label-width="0"
      class="demo-ruleForm"
      :size="formSize"
      status-icon
    >
      <el-form-item prop="username">
        <el-input
          size="large"
          prefix-icon="UserFilled"
          v-model="loginForm.username"
          placeholder="请输入用户名"
        />
      </el-form-item>
      <el-form-item prop="smscode">
        <div class="flex login-line">
          <div class="flex-item">
            <el-input
              size="large"
              prefix-icon="Picture"
              v-model="loginForm.smscode"
              placeholder="请输入短信验证码"
            />
          </div>
          <div class="code-btn">
            <el-button :disabled="disabled" type="primary" size="large" @click="getSmsCode">{{
              smsCodeBtnText
            }}</el-button>
          </div>
        </div>
      </el-form-item>
      <el-form-item prop="imgcode">
        <div class="flex login-line">
          <div class="flex-item">
            <el-input
              size="large"
              prefix-icon="PictureRounded"
              v-model="loginForm.imgcode"
              placeholder="请输入图片验证码"
            />
          </div>
          <div class="code-btn">
            <img @click="getImgCode" :src="imgCodeSrc" alt="" />
          </div>
        </div>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="loginForm.saveUserName">记住用户名</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" round type="danger" @click="submitForm(ruleFormRef)">
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.login-line {
  width: 100%;
  .code-btn {
    width: 100px;
    margin-left: 10px;

    :deep(.el-button),
    :deep(img) {
      width: 100px;
    }

    &:deep(.el-button) {
      font-size: 12px;
    }

    img {
      height: 40px;
      cursor: pointer;
    }
  }
}
.login-btn {
  width: 100%;
}
</style>
