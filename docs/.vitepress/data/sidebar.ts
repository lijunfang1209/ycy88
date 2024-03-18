import { getChildren } from "../utils/getFold";

// import { getChildren } from "../utils/autoSidebar";
const BASE_PATH = "./docs";
export const sidebar = {
  '/vue/':getChildren({ele:'vue'}),
  '/standard/':[
    {
      
      items: getChildren({ele:'standard'}),
    },
  ],
  "/tools/": getChildren({ele:'tools'}),
  "/protocol/": [
    {
      text: "协议相关",
      link: "/protocol/",
      items:getChildren({ele:'protocol'})
    }
  ],
  "/efficiency/": [
    {
      text: "效率相关",
      link: "/efficiency/",
      items:getChildren({ele:'efficiency'})
    }
  ],
  '/react/':getChildren({ele:'react'}),
   "/ts/": [
      {
        text: "Typescript系列",
        link: "/ts/",
        items: getChildren({ele:'ts'}),
      },
    ],
   "/node/":getChildren({ele:'node'}),
    "/mp/":getChildren({ele:'mp'}),
    "/flutter/": [
      {
        text: "Flutter 系列",
        link: "/flutter/",
        items: getChildren({ele:'flutter'}),
      },
    ],
    "/electron/": [
      {
        text: "Electron 系列",
        link: "/electron/",
        items: getChildren({ele:'electron'}),
      },
    ],
    "/algorithm/": getChildren({ele:'algorithm',collapsed:true}),
  }
// export const sidebar = {
//     "/vue/": [
//       {
//         text: "VUE系列",
//         items: getChildren(BASE_PATH + "/vue/"),
//       },
//     ],
//     "/react/": [
//       {
//         text: "React系列",
//         link: "/react/",
//         items: getChildren(BASE_PATH + "/react/"),
//       },
//     ],
//     "/ts/": [
//       {
//         text: "Typescript系列",
//         link: "/ts/",
//         items: getChildren(BASE_PATH + "/ts/"),
//       },
//     ],
//     "/node/": [
//       {
//         text: "Node系列",
//         link: "/node/",
//         items: getChildren(BASE_PATH + "/node/"),
//       },
//     ],
//     "/mp/": [
//       {
//         text: "小程序系列",
//         link: "/mp/",
//         items: getChildren(BASE_PATH + "/mp/"),
//       },
//     ],
//     "/js-base/": [
//       {
//         text: "JS基础",
//         link: "/js-base/",
//         items: getChildren(BASE_PATH + "/js-base/"),
//       },
//     ],
//     "/js-theory/": [
//       {
//         text: "JS原理",
//         link: "/js-theory/",
//         items: getChildren(BASE_PATH + "/js-theory/"),
//       },
//     ],
//     "/js-advanced/": [
//       {
//         text: "JS进阶",
//         link: "/js-advanced/",
//         items: getChildren(BASE_PATH + "/js-advanced/"),
//       },
//     ],
//     "/tools/": [
//       {
//         text: "前端工程化",
//         link: "/tools/",
//         items: getChildren(BASE_PATH + "/tools/"),
//       },
//     ],
//     "/algorithm/": [
//       {
//         text: "算法Algorithm",
//         link: "/algorithm/",
//         items: getChildren(BASE_PATH + "/algorithm/"),
//       },
//     ],
//     "/leetcode/": [
//       {
//         text: "算法Leetcode",
//         link: "/leetcode/",
//         items: getChildren(BASE_PATH + "/leetcode/"),
//       },
//     ],
//     "/frontend/": [
//       {
//         text: "前端规范",
//         link: "/frontend/",
//         items: getChildren(BASE_PATH + "/frontend/"),
//       },
//     ],
//     "/think/": [
//       {
//         text: "技术思维",
//         link: "/think/",
//         items: getChildren(BASE_PATH + "/think/"),
//       },
//     ],
//     "/mgt/": [
//       {
//         text: "管理思维",
//         link: "/mgt/",
//         items: getChildren(BASE_PATH + "/mgt/"),
//       },
//     ],
//     "/efficiency/": [
//       {
//         text: "效率提升",
//         link: "/efficiency/",
//         items: getChildren(BASE_PATH + "/efficiency/"),
//       },
//     ],
//     "/protocol/": [
//       {
//         text: "协议相关",
//         link: "/protocol/",
//         items: getChildren(BASE_PATH + "/protocol/"),
//       },
//     ],
//     "/readbook/": [
//       {
//         text: "读书系列",
//         link: "/readbook/",
//         items: getChildren(BASE_PATH + "/readbook/"),
//       },
//     ],
//     "/flutter/": [
//       {
//         text: "Flutter 系列",
//         link: "/flutter/",
//         items: getChildren(BASE_PATH + "/flutter/"),
//       },
//     ],
//     "/electron/": [
//       {
//         text: "Electron 系列",
//         link: "/electron/",
//         items: getChildren(BASE_PATH + "/electron/"),
//       },
//     ],
//   }