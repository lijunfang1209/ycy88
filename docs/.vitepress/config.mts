import { defineConfig } from 'vitepress'
import {nav,sidebar} from "./data/index"
import path from "path";
import { getChildren } from './utils/getFold';
// https://vitepress.dev/reference/site-config

export default defineConfig({
  title: "前端博客小站 - Ms. Li",
  description: "技术清单文档",
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav,
    // sidebar:{
    //   '/vue/':[
    //     {
    //       text: 'Guide',
    //       items: [
    //         { text: 'Index', link: '/vue/' },
    //         { text: 'One', link: '/guide/one' },
    //         { text: 'Two', link: '/guide/two' }
    //       ]
    //     }
    //   ]
    // },
    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' },
    //       { text: 'Runtime API Examples', link: '/test' },
    //     ]
    //   }
    // ],
    // sidebar,
    // sidebar:[{
    //   text: 'ddd',
    //   collapsed: false,
    //   items: [
    //     { text: 'test',collapsed: false, items:[ { text: 'Markdown Examples', link: '/markdown-examples' },
    //     { text: 'Runtime API Examples', link: '/api-examples' },] },
    //     { text: 'cccc', items:[ { text: 'Markdown Examples', link: '/markdown-examples' },
    //     { text: 'Runtime API Examples', link: '/api-examples' },] },
    //   { text: 'Markdown Examples', link: '/markdown-examples' },
    //   { text: 'Runtime API Examples', link: '/api-examples' },
    //   { text: 'Runtime API Examples', link: '/test' },
    // ]
    // },
    // {
    //   text: 'ddd',
    //   collapsed: false,
    //   items: [
    //     { text: 'test',collapsed: false, items:[ { text: 'Markdown Examples', link: '/markdown-examples' },
    //     { text: 'Runtime API Examples', link: '/api-examples' },] },
    //     { text: 'cccc', items:[ { text: 'Markdown Examples', link: '/markdown-examples' },
    //     { text: 'Runtime API Examples', link: '/api-examples' },] },
    //   { text: 'Markdown Examples', link: '/markdown-examples' },
    //   { text: 'Runtime API Examples', link: '/api-examples' },
    //   { text: 'Runtime API Examples', link: '/test' },
    // ]
    // }],
    sidebar:{
      '/vue/':getChildren({ele:'vue'}),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown: {
    lineNumbers: true,
  },
  lastUpdated: true,
  cleanUrls:true,
  vite:{
    resolve:{
      alias:[
        {
          find: "@",
          replacement: path.resolve(__dirname, ".vuepress"),
        },
      ]
    }
  }
})
