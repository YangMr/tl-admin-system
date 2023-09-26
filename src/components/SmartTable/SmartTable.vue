<script setup lang="ts">
// data : 对应的是表格要渲染的数据
// prop : 数据对应的字段 要和数据的字段保持一致
// 1. 数据直接写死  数据是动态返回的(后端请求出来的)
// 2. 数据直接写在表格的内容   数据写在父组件, 父组件将数据传递给在组件进行渲染
import { ref } from 'vue'
import { getEntityConfig } from '@/api/entity'

// 接收父组件传递的数据
const option = defineProps<{
  entityType: string
}>()

export type SearchFormType = {
  type: string
}

// 搜索框表单的数据
const searchForm = ref<SearchFormType>({
  type: ''
})

// 下拉选择框选择出发的方法
const searchChange = (options) => {
  console.log('options', options)
  entityTypes.value = entityTypes.value.filter((item) => item.prop === options)
  console.log('entityTypes==', entityTypes)
}

// 实体配置数据
const entityTypes = ref([])

// const initEntityConfig = () => {}

// 请求实体配置数据
const loadEntityConfig = async () => {
  const data = { type: option.entityType }
  const entityRes = await getEntityConfig(data)
  entityTypes.value = entityRes.data
}
loadEntityConfig()
</script>

<template>
  <div class="search-box flex">
    <!-- 左侧按钮 -->
    <div class="btns flex-item">
      <el-button type="primary" icon="Plus">添加数据</el-button>
      <slot name="btns"> </slot>
    </div>
    <!-- 右侧搜索框 -->
    <div class="search-form-box flex">
      <div class="search-form-label">快捷搜索：</div>
      <div class="search-form-type-box">
        <el-select v-model="searchForm.type" placeholder="请选择筛选类型" @change="searchChange">
          <template v-for="(item, index) in entityTypes" :key="index">
            <el-option v-if="item.defaultSearch" :value="item.prop" :label="item.label">
            </el-option>
          </template>
        </el-select>
      </div>
      <div class="search-form-value-box">
        <template v-for="(item, index) in entityTypes" :key="index">
          <template v-if="item.type === '1'"> 数字</template>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
