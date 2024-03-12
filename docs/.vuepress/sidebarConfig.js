const {getChildren} = require("./utils/autoSidebar");
/**
 * 侧边栏配置
 * */

const sidebar = {
    "/frontend/": [
        {
            title: "前端",
            path: "/frontend/",
            collapsable: false,
            sidebarDepth: 1,
            children: getChildren('./docs','frontend'),
        },
    ],
    "/framework/": [
        {
            title: "前端框架系列",
            path: "/framework/",
            collapsable: false,
            sidebarDepth: 1,
            children: getChildren('./docs','framework'),
        },
    ],
    "/js/": [
        {
            title: "JS系列",
            path: "/framework/",
            collapsable: false,
            sidebarDepth: 1,
            children: getChildren('./docs','js'),
        },
    ],
    "/read/": [
        {
            title: "读书系列",
            path: "/read/",
            collapsable: false,
            sidebarDepth: 1,
            children: getChildren('./docs','read'),
        },
    ],
    '/': [''] //不能放在数组第一个，否则会导致右侧栏无法使用
    }
    module.exports = sidebar;