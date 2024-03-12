
const sidebar =  require("./sidebarConfig");
const navList = require('./navConfig');
const nav = navList.map(function(item){
  const {text,ariaLabel,link} = item;
  return link?{
    text,
    ariaLabel,
    link,
  }:item
})
const BASE_PATH = "./docs";
module.exports = {
  title: "前端博客小站 - Ms. Li",
  description: "技术清单文档",
  head: [
    [
      "link",
      { rel: "shortcut icon", type: "image/x-icon", href: `/favicon.ico` },
    ],
    // 添加百度统计代码
    [
      "script",
      {},
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?df157c53430ce6c22b63eca170c9464e";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(hm, s);
        })();
    `,
    ],
  ],
  themeConfig: {
    theme:"@vuepress/theme-default",
    nav,
    sidebar,
    lastUpdated: "上次更新时间",
    displayAllHeaders:false,
    activeHeaderLinks: true, 
  },
  markdown: {
    lineNumbers: false,
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": "../../.vuepress/images",
        "~": "./.vuepress/images",
        // "@alias":'/images'
      },
    },
  },
};
