<script setup lang="ts">
import { getEntityConfig } from '@/api/entity'
import { ref } from 'vue'

// 表示高级筛选是否展示
const searchFilterBoxVisable = ref<boolean>(false)

// 快捷搜索表单
const searchForm = ref({
  type: '',
  input: ''
})

// 高级筛选表单
const searchFilterForm = ref({ user: '', region: '' })

// 表格数据
const tableData = [
  {
    id: '1',
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    date1: '2016-05-03',
    name1: 'Tom',
    address1: 'No. 189, Grove St, Los Angeles',
    address2: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]

// 表格实体配置(表格配置项(表格展示列))
// 写法: 本地配置  服务端返回
const config = ref<any>([])

const loadEntityConfig = async () => {
  const res = await getEntityConfig({ type: 'demo' })
  console.log('res=>', res)
  config.value = res.data
}
loadEntityConfig()
</script>

<template>
  <div class="search-box flex">
    <div class="btns flex-item">
      <el-button type="primary" icon="Plus">添加数据</el-button>
      <slot name="btns"></slot>
    </div>
    <div class="search-form-box flex">
      <div class="search-form-label">快捷搜索:</div>
      <div class="search-form-type-box">
        <el-select v-model="searchForm.type" placeholder="请选择筛选的内容">
          <el-option></el-option>
        </el-select>
      </div>
      <div class="search-form-value-box">
        <el-input v-model="searchForm.input" placeholder="请输入" />
      </div>
      <el-button-group class="search-form-btns">
        <el-button type="primary" icon="Search">搜索</el-button>
        <el-button type="danger" icon="Refresh">刷新</el-button>
        <el-button
          type="primary"
          icon="Filter"
          @click="searchFilterBoxVisable = !searchFilterBoxVisable"
          >筛选</el-button
        >
      </el-button-group>
    </div>
  </div>

  <el-divider />

  <div class="search-tag-box flex">
    <div class="search-tag-label">当前筛选项:</div>
    <el-tag class="search-tag" type="danger" closable effect="plain"> 名称:xxx </el-tag>
  </div>

  <el-divider />

  <div class="search-filter-box">
    <el-form :inline="true" :model="searchFilterForm" v-if="searchFilterBoxVisable">
      <el-form-item label="名称:">
        <el-input v-model="searchFilterForm.user" placeholder="请输入名称" clearable />
      </el-form-item>
      <el-form-item label="类型:">
        <el-select v-model="searchFilterForm.region" placeholder="请选择类型" clearable>
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button-group>
          <el-button type="primary">确定</el-button>
          <el-button type="primary" @click="searchFilterBoxVisable = false">取消</el-button>
        </el-button-group>
      </el-form-item>
    </el-form>
  </div>

  <div class="table-tools-box flex">
    <div class="flex-item tools-btns">
      <el-button-group>
        <el-button type="primary" icon="Delete" size="small">删除数据</el-button>
        <el-button type="danger" icon="Download" size="small">导出数据</el-button>
      </el-button-group>
    </div>
    <div>
      <el-button type="danger" icon="Tools" size="small"></el-button>
    </div>
  </div>

  <el-divider />

  <div class="table-box">
    <el-table stripe :data="tableData" style="width: 100%">
      <template v-for="(item, index) in config" :key="index">
        <el-table-column v-bind="item" />
      </template>
    </el-table>
    <div class="page-box">
      <el-pagination
        v-model:current-page="currentPage4"
        v-model:page-size="pageSize4"
        :page-sizes="[100, 200, 300, 400]"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-box {
  height: 40px;
  line-height: 40px;
}
.el-divider--horizontal {
  margin: 10px 0;
}
.search-form-label {
  font-size: 14px;
  margin-right: 5px;
}
.search-form-type-box {
  margin-right: 10px;
  width: 150px;
}
.search-form-btns {
  margin-left: 10px;
  margin-top: 5px;
}

.search-tag-label {
  font-size: 12px;
}
.search-tag-box {
  line-height: 30px;
}
.search-tag {
  margin-top: 3px;
  margin-left: 10px;
}

.page-box {
  margin-top: 10px;
}
</style>
