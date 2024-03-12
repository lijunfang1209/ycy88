const navList = [
  {
    text: "前端",
    ariaLabel:"frontend",
    link:"/frontend/",
    items: [
      { text: "前端规范",ariaLabel:"standard", link: "/frontend/standard/" },
      { text: "前端工程化",ariaLabel:"tools", link: "/frontend/tools/" },
      { text: "协议相关", ariaLabel:"protocol",link: "/frontend/protocol/" },
      { text: "效率提升",ariaLabel:"efficiency", link: "/frontend/efficiency/" },
    ],
  },
  {
    text: "前端框架系",
    ariaLabel:"framework",
    link:"/framework/",
    items: [
      { text: "VUE 系列",ariaLabel:"vue", link: "/framework/vue/" },
      { text: "React 系列", ariaLabel:"react", link: "/framework/react/" },
      { text: "Typescript 系列",ariaLabel:"ts",  link: "framework/ts/" },
      { text: "Node 系列", ariaLabel:"node", link: "/framework/node/" },
      { text: "小程序 系列",ariaLabel:"mp",  link: "/framework/mp/" },
      { text: "Flutter 系列", ariaLabel:"flutter", link: "/framework/flutter/" },
      { text: "Electron 系列", ariaLabel:"electron", link: "/framework/electron/" },
      { text: "算法(Algorithm)",ariaLabel:"algorithm",  link: "/framework/algorithm/" },
      { text: "算法Leetcode", ariaLabel:"leetcode",link: "/framework/leetcode/" },
    ],
  },
  {
    text: "JS系列",
    ariaLabel:"js",
    link:"/js/",
    items: [
      { text: "JS基础",ariaLabel:"base", link: "/js/base/" },
      { text: "JS原理", ariaLabel:"theory",link: "/js/theory/" },
      { text: "JS进阶", ariaLabel:"advanced",link: "/js/advanced/" },
    ],
  },
  {
    text: "读书系列",
    ariaLabel:"read",
    link:"/read/",
    items: [
      { text: "读书破万卷", ariaLabel:"readbook",link: "/read/readbook/" },
      { text: "技术思维", ariaLabel:"think",link: "/read/think/" },
      { text: "管理思维",ariaLabel:"mgt", link: "/read/mgt/" },
    ],
  },
  {
    text: "其他链接",
    items: [
      { text: "About Me", link: "https://ycy88.com/about-me" },
      { text: "Github", link: "https://github.com/lijunfang1209" },
    ],
  },
];
module.exports = navList