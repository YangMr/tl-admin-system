<script setup lang="ts">
import { computed } from 'vue'
import { useTagsStore } from '@/stores/tags'
import { useRouter } from 'vue-router'
import type { TagsType } from '@/types/tags'
const router = useRouter()
const store = useTagsStore()

const tagsList = computed(() => {
  return store.tagsViewList
})

const handleToView = (path: string) => {
  router.push(path)
  // selectedTags.value = index
}

const handleCloseTag = (item: TagsType, index: number) => {
  const lastIndex = store.tagsViewList.length - 1
  const isLast = index === lastIndex
  const path = store.tagsViewList[index].path
  store.removeTagsView({
    index,
    type: isLast ? 'last' : 'notLast',
    path: item.path
  })

  if (isLast) {
    const lastPath = store.tagsViewList[lastIndex - 1].path
    handleToView(lastPath)
  } else if (item.path === path) {
    handleToView(store.tagsViewList[index].path)
  } else {
    handleToView(store.tagsViewList[index].path)
  }
}
</script>

<template>
  <div class="tag">
    <div
      class="tag-item"
      @click="handleToView(item.path)"
      v-for="(item, index) in tagsList"
      :key="index"
      :class="{ active: item.path === $route.path }"
    >
      <el-icon class="icon">
        <component :is="item.icon"></component>
      </el-icon>
      <span>{{ item.name }}</span>
      <el-icon class="close" v-if="index !== 0" @click.stop="handleCloseTag(item, index)"
        ><Close
      /></el-icon>
    </div>
    <!-- <span
      class="tag-item"
      @click="handleToView(item.path)"
      v-for="(item, index) in tagsList"
      :key="index"
      :class="{ active: item.path === $route.path }"
      >{{ item.name }}
      <el-icon v-if="index !== 0" @click.stop="handleCloseTag(item, index)"><Close /></el-icon>
    </span> -->
  </div>
</template>

<style lang="scss" scoped>
.tag {
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  color: #ccc;
  padding-left: 25px;
  overflow-x: auto;
}
.tag-item {
  margin-right: 10px;
  padding: 5px 8px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  cursor: pointer;
  color: #ccc;
  min-width: 100px;

  .icon {
    margin-right: 5px;
  }

  .close {
    margin-left: 5px;
  }

  &:hover {
    background-color: blueviolet;
  }
}
.tag-item.active {
  background-color: blueviolet;
}
</style>
