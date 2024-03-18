import { getChildren } from "../utils/getFold";
export const sidebar = {
  '/vue/':getChildren({ele:'vue'}),
  '/standard/':[
    {
      text: "前端规范",
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
    "/algorithm/": getChildren({ele:'algorithm'}),
    "/js-base/": [
      {
        text: "JS基础",
        link: "/js-base/",
        items: getChildren({ele:'js-base'}),
      },
    ],
    "/js-theory/": [
      {
        text: "JS原理",
        link: "/js-theory/",
        items: getChildren({ele:'js-theory'}),
      },
    ],
    "/js-advanced/": [
      {
        text: "JS进阶",
        link: "/js-advanced/",
        items: getChildren({ele:'js-advanced'}),
      },
    ],
    "/readbook/": [
      {
        text: "读书破万卷",
        link: "/readbook/",
        items: getChildren({ele:'readbook'}),
      },
    ],
    "/think/": [
      {
        text: "技术思维",
        link: "/think/",
        items: getChildren({ele:'think'}),
      },
    ],
    "/mgt/": [
      {
        text: "管理思维",
        link: "/mgt/",
        items: getChildren({ele:'mgt'}),
      },
    ],
  }