import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    //TODO 开发时启用此处，用于代理服务器，打包发布时需要注释掉此处
    cors: true
    // proxy: {
    //   '/dev': {
    //     target: 'http://127.0.0.1:8080',
    //     // target: 'http://springapi.9yuecloud.com',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/dev/, '')
    //   }
    // }
  }
})
