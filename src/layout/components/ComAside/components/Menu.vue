<script setup lang="ts">
import MenuItem from './MenuItem.vue'
import { ref } from 'vue'
import { useMenuStore } from '@/stores/menu'
import { computed } from 'vue'
import { getMenuData } from '@/api/user'
import type { MenuResponseType } from '@/types/menu'
const store = useMenuStore()

const isCollapse = computed(() => {
  return store.getMenuStatus()
})

const menuData = ref<MenuResponseType[]>([])

const getMenuList = async () => {
  const menuRes = await getMenuData()
  menuData.value = menuRes.data!
}
getMenuList()
</script>

<template>
  <el-menu
    default-active="2"
    class="el-menu"
    text-color="#ccc"
    router
    background-color="#23262E"
    :collapse="isCollapse"
  >
    <MenuItem :menu="menuData" />
    <!-- <template v-for="(item, index) in menuData" :key="index">
      <el-menu-item
        v-if="!item.children || (item.children && item.children.length <= 0)"
        index="/home/index"
      >
        <el-icon>
          <component :is="item.icon"></component>
        </el-icon>
        <template #title>{{ item.name }}</template>
      </el-menu-item>

      <el-sub-menu v-if="item.children && item.children.length > 0" :index="item.path">
        <template #title>
          <el-icon>
            <component :is="item.icon"></component>
          </el-icon>
          <span>{{ item.name }}</span>
        </template>

        <template v-for="(sub_item, sub_index) in item.children" :key="sub_index">
          <el-menu-item
            v-if="!sub_item.children || (sub_item.children && sub_item.children.length <= 0)"
            :index="sub_item.path"
          >
            <el-icon>
              <component :is="sub_item.icon"></component>
            </el-icon>
            {{ sub_item.name }}
          </el-menu-item>

          <el-sub-menu
            v-if="sub_item.children && sub_item.children.length > 0"
            :index="sub_item.path"
          >
            <template #title>
              <el-icon>
                <component :is="item.icon"></component>
              </el-icon>
              <span>{{ sub_item.name }}</span>
            </template>
          </el-sub-menu>
        </template>
      </el-sub-menu>
    </template> -->
    <!-- 没有子菜单, 使用el-menu-item渲染 -->

    <!-- 如果包含子菜单,则使用el-submenu渲染 -->
  </el-menu>
</template>

<style lang="scss" scoped>
.el-menu {
  // background: var(--junjun-topbar-bg);
  border-right: none;

  .el-icon {
    font-size: 16px;
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
}
</style>
