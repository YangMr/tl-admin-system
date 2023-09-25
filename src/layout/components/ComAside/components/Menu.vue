<script setup lang="ts">
import MenuItem from './MenuItem.vue'
import { ref, watch } from 'vue'
import { useMenuStore } from '@/stores/menu'
import { useTagsStore } from '@/stores/tags'
import { computed } from 'vue'
import { getMenuData } from '@/api/user'
import { useRoute } from 'vue-router'
import type { MenuResponseType } from '@/types/menu'
const store = useMenuStore()
const tagsStore = useTagsStore()
const route = useRoute()

const isCollapse = computed(() => {
  return store.getMenuStatus()
})

const menuData = ref<MenuResponseType[]>([])

const getMenuList = async () => {
  const menuRes = await getMenuData()
  menuData.value = menuRes.data!
}
getMenuList()

const isTags = (path: string) => {
  const whiteList = ['/login', '/404', '/401']

  return whiteList.includes(path)
}

watch(
  route,
  (to) => {
    // 判断: 如果访问的是登录、404 、401 不让显示
    if (isTags(to.path)) return

    const { fullPath, meta } = to

    if (!fullPath || !meta.icon || !meta.title) return

    tagsStore.addTagsViewList({
      name: meta.title as string,
      path: fullPath,
      icon: meta.icon as string
    })
  },
  {
    immediate: true,
    deep: true
  }
)
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
