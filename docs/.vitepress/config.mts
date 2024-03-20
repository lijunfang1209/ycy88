import { defineConfig } from 'vitepress'
import { nav, sidebar } from './data/index'
import path from 'path'
// https://vitepress.dev/reference/site-config

export default defineConfig({
  title: '前端博客小站 - Jun',
  description: '技术清单文档',
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown: {
    lineNumbers: true,
    linkify: false // 禁用链接的自动转换
  },
  lastUpdated: true,
  cleanUrls: true,
  vite: {
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, '.vitepress')
        }
      ]
    }
  }
})
