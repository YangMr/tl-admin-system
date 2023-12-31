<script setup lang="ts">
import { getDictList, getEntityConfig, getUserList } from '@/api/entity'
import { ref } from 'vue'

const option = defineProps<{
  type: string
}>()

// 表示高级筛选是否展示
const searchFilterBoxVisable = ref<boolean>(false)

// 快捷搜索表单
const searchForm = ref<{
  type: string
  value: string | null
}>({
  type: '',
  value: ''
})

// 高级筛选表单
const searchFilterForm = ref({ user: '', region: '' })

const showInput = ref(false)

// 表格数据
const tableData = ref([
  {
    id: '1',
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    date1: '2016-05-03',
    name1: 'Tom',
    address1: 'No. 189, Grove St, Los Angeles',
    address2: 'No. 189, Grove St, Los Angeles',
    icon: 'View',
    imgUrl: 'https://element-plus.gitee.io/images/element-plus-logo.svg',
    linkUrl: 'https://www.baidu.com',
    count: 100,
    public: 0, // 0 不公开 1公开
    price: [
      {
        code: ''
      },
      {
        code: ''
      }
    ]
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    icon: 'Edit',
    imgUrl: 'https://element-plus.gitee.io/images/element-plus-logo.svg',
    linkUrl: 'https://www.jd.com',
    count: 10
    // price: ''
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
    // price: ''
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
    // price: ''
  },
  {
    id: '1',
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    date1: '2016-05-03',
    name1: 'Tom',
    address1: 'No. 189, Grove St, Los Angeles',
    address2: 'No. 189, Grove St, Los Angeles',
    icon: 'View',
    imgUrl: 'https://element-plus.gitee.io/images/element-plus-logo.svg',
    linkUrl: 'https://www.baidu.com',
    count: 100
    // price: ''
  }
])

// 表格实体配置(表格配置项(表格展示列))
// 写法: 本地配置  服务端返回
const entityConfig = ref<any>([])

const loadEntityConfig = async () => {
  // const res = await getEntityConfig({ ownerClass: option.type })
  const res = await getEntityConfig({ type: option.type })
  console.log('res=>', res)
  entityConfig.value = res.data?.configs!

  entityConfig.value.forEach((item: any) => {
    if (item.search && !searchForm.value.type) {
      searchForm.value.type = item.prop
    }

    if (item.search || item.tableShow) {
      if (item.type === '6') {
        item.dicts = []

        loadDictData(item)
      }
      if (item.type === '5') {
        item.datas = []
        loadLinkData(item)
      }
    }
  })
}
loadEntityConfig()

const searchChange = () => {
  searchForm.value.value = null
  console.log('aa', searchForm.value.type)
}

// 加载数据字典的数据
const loadDictData = async (item: any) => {
  const dictRes = await getDictList({
    key: item.dictKey
  })

  item.dicts = dictRes.data
}

const loadLinkData = (item: any) => {}

// 根据关联对象的远程地址去加载数据
const loadDataByUrl = async (item: any) => {
  let params = {} as any
  params[item.linkObjShowKey] = searchForm.value.type

  const userRes = await getUserList(params)

  console.log('userRes', userRes)

  entityConfig.value.forEach((row: any) => {
    if (row.prop === item.prop) {
      row.datas = userRes.data
    }
  })
}
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
        <el-select v-model="searchForm.type" @change="searchChange" placeholder="请选择筛选的内容">
          <template v-for="(item, index) in entityConfig" :key="index">
            <el-option v-if="item.defaultSearch" :value="item.prop" :label="item.label"></el-option>
          </template>
        </el-select>
      </div>
      <div class="search-form-value-box">
        <template v-for="(item, index) in entityConfig" :key="index">
          <template v-if="searchForm.type === item.prop">
            <!-- //1.数字，2字符串，3日期，4时间，5关联对象，6数据字典，7图片 -->
            <template v-if="item.type === '1'">
              <el-input
                type="number"
                placeholder="最小值"
                controls-position="right"
                v-model="searchForm.value"
              />
            </template>
            <template v-else-if="item.type === '2'">
              <el-input
                type="input"
                v-model="searchForm.value"
                :placeholder="'请输入' + item.label"
              />
            </template>
            <template v-else-if="item.type === '3'">
              <template v-if="item.formatter">
                <el-date-picker
                  v-model="searchForm.value"
                  type="daterange"
                  range-separator="到"
                  :format="item.formatter"
                  :start-placeholder="'开始' + item.label"
                  :end-placeholder="'结束' + item.label"
                />
              </template>
              <template v-else>
                <el-date-picker
                  v-model="searchForm.value"
                  type="daterange"
                  range-separator="到"
                  format="YYYY-MM-DD HH:mm:ss"
                  :start-placeholder="'开始' + item.label"
                  :end-placeholder="'结束' + item.label"
                />
              </template>
            </template>
            <template v-else-if="item.type === '4'">
              <template v-if="item.formatter">
                <el-time-picker
                  v-model="searchForm.value"
                  is-range
                  range-separator="到"
                  :format="item.formatter"
                  :start-placeholder="'开始' + item.label"
                  :end-placeholder="'结束' + item.label"
                />
              </template>
              <template v-else>
                <el-time-picker
                  v-model="searchForm.value"
                  is-range
                  range-separator="到"
                  format="HH:mm:ss"
                  :start-placeholder="'开始' + item.label"
                  :end-placeholder="'结束' + item.label"
                />
              </template>
            </template>
            <template v-else-if="item.type === '5'">
              <el-select
                filterable
                remote
                v-model="searchForm.value"
                :placeholder="'请选择' + item.label"
                :remote-method="loadDataByUrl(item)"
              >
                <template v-for="(dataItem, dataIndex) in item.datas" :key="dataIndex">
                  <el-option
                    :label="dataItem[item.linkObjShowKey]"
                    :value="dataItem.id"
                  ></el-option>
                </template>
              </el-select>
            </template>
            <template v-else-if="item.type === '6'">
              <el-select v-model="searchForm.value" :placeholder="'请选择' + item.label">
                <template v-for="(dictItem, dictIndex) in item.dicts" :key="dictIndex">
                  <el-option :label="dictItem.label" :value="dictItem.value"></el-option>
                </template>
              </el-select>
            </template>
          </template>
        </template>
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
    <el-button type="primary" @click="addRow">新增一行</el-button>
    <el-table stripe :data="tableData" style="width: 100%">
      <template v-for="(item, index) in entityConfig" :key="index">
        <el-table-column v-bind="item" />
      </template>
      <el-table-column label="icon">
        <template v-slot="scope">
          <el-icon>
            <component :is="scope.row.icon"></component>
          </el-icon>
        </template>
      </el-table-column>
      <el-table-column label="image">
        <template v-slot="scope">
          <a :href="scope.row.linkUrl">
            <img v-if="scope.row.imgUrl" :src="scope.row.imgUrl" width="30" height="30" />
          </a>
        </template>
      </el-table-column>
      <el-table-column label="image">
        <template v-slot="scope">
          <el-input
            @blur="showInput = false"
            v-if="scope.row.count && showInput"
            v-model="scope.row.count"
          />
          <span v-else @click="showInput = true">{{ scope.row.count }}</span>
        </template>
      </el-table-column>
      <el-table-column label="price">
        <template v-slot="scope">
          <template v-for="(item, index) in scope.row.price" :key="index">
            <el-input v-model="item.code" />
            <el-icon @click="addInput(scope.row.id)"><Plus /></el-icon>
          </template>
        </template>
      </el-table-column>
      <el-table-column prop="public" label="public">
        <template v-slot="scope">
          <!-- 1. 过滤器 -->
          <!-- 通过v-if判断 -->
          <el-tag type="info" v-if="scope.row.public === 0"> 不公开 </el-tag>
          <el-tag type="success" v-if="scope.row.public === 1"> 公开 </el-tag>
        </template>
      </el-table-column>
    </el-table>
    <div class="page-box">
      <!-- <el-pagination
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
      /> -->
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
