import { defineConfig } from 'vitepress'
import {nav,sidebar} from "./data/index"
import path from "path";
// https://vitepress.dev/reference/site-config
console.log(343434,sidebar);

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
    sidebar,
    // sidebar:{
    //   '/vue/':[
    //     {
    //       text: 'ddd',
    //       items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' },
    //       { text: 'Runtime API Examples', link: '/test' },
    //     ]
    //     }
    //   ]
    // },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown: {
    lineNumbers: true,
  },
  lastUpdated: true,
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
