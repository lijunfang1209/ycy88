(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{364:function(s,a,n){s.exports=n.p+"assets/img/pnpm.acf543bf.png"},365:function(s,a,n){s.exports=n.p+"assets/img/pnpm_1.a23ee45d.jpeg"},705:function(s,a,n){"use strict";n.r(a);var t=n(13),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"pnpm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pnpm"}},[s._v("#")]),s._v(" PNPM")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("概念")]),s._v(" "),a("p",[s._v("performant npm，意味“高性能的 npm”，快速的，节省磁盘空间的包管理工具。")]),s._v(" "),a("p",[s._v("pnpm由npm/yarn衍生而来，解决了npm/yarn内部潜在的bug，极大的优化了性能，扩展了使用场景。被誉为“最先进的包管理工具”。")])]),s._v(" "),a("p",[s._v("pnpm有以下几个特点：")]),s._v(" "),a("ul",[a("li",[s._v("快速: pnpm 比其他包管理器快 2 倍")]),s._v(" "),a("li",[s._v("高效: node_modules 中的文件为复制或链接自特定的内容寻址存储库")]),s._v(" "),a("li",[s._v("支持 monorepos: pnpm 内置支持单仓多包")]),s._v(" "),a("li",[s._v("严格: pnpm 默认创建了一个非平铺的 node_modules，因此代码无法访问任意包")])]),s._v(" "),a("h3",{attrs:{id:"一、安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、安装"}},[s._v("#")]),s._v(" 一、安装")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("$ npm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g pnpm\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"二、对比yarn与npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、对比yarn与npm"}},[s._v("#")]),s._v(" 二、对比yarn与npm")]),s._v(" "),a("p",[a("img",{attrs:{src:n(364),alt:"An image"}})]),s._v(" "),a("h3",{attrs:{id:"三、pnpm的特点解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、pnpm的特点解析"}},[s._v("#")]),s._v(" 三、pnpm的特点解析")]),s._v(" "),a("h4",{attrs:{id:"_1-节约磁盘空间并提升安装速度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-节约磁盘空间并提升安装速度"}},[s._v("#")]),s._v(" 1. 节约磁盘空间并提升安装速度")]),s._v(" "),a("p",[s._v("当使用 npm 或 Yarn 时，如果你有 100 个项目使用了某个依赖（dependency），就会有 100 份该依赖的副本保存在硬盘上。  而在使用 pnpm 时，依赖会被存储在内容可寻址的存储中，所以：")]),s._v(" "),a("p",[s._v("如果你用到了某依赖项的不同版本，只会将不同版本间有差异的文件添加到仓库。 例如，如果某个包有100个文件，而它的新版本只改变了其中1个文件。那么 pnpm update 时只会向存储中心额外添加1个新文件，而不会因为仅仅一个文件的改变复制整新版本包的内容。")]),s._v(" "),a("p",[s._v("所有文件都会存储在硬盘上的某一位置。 当软件包被被安装时，包里的文件会硬链接到这一位置，而不会占用额外的磁盘空间。 这允许你跨项目地共享同一版本的依赖。")]),s._v(" "),a("p",[s._v("因此，您在磁盘上节省了大量空间，这与项目和依赖项的数量成正比，并且安装速度要快得多！")]),s._v(" "),a("h4",{attrs:{id:"_2-创建非扁平化的-node-modules-文件夹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建非扁平化的-node-modules-文件夹"}},[s._v("#")]),s._v(" 2. 创建非扁平化的 node_modules 文件夹")]),s._v(" "),a("p",[s._v("使用 npm 或 Yarn Classic 安装依赖项时，所有包都被提升到模块目录的根目录。 因此，项目可以访问到未被添加进当前项目的依赖。")]),s._v(" "),a("p",[s._v("默认情况下，pnpm 使用软链的方式将项目的直接依赖添加进模块文件夹的根目录。")]),s._v(" "),a("p",[a("img",{attrs:{src:n(365),alt:"An image"}})]),s._v(" "),a("h3",{attrs:{id:"四、常见命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、常见命令"}},[s._v("#")]),s._v(" 四、常见命令")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 管理依赖")]),s._v("\npnpm add "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("pkg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 安装软件包及其依赖的任何软件包。 默认情况下，任何新软件包都安装为生产依赖项。")]),s._v("\npnpm install                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// pnpm install 用于安装项目所有依赖.")]),s._v("\npnpm update                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// pnpm update 根据指定的范围更新软件包的最新版本。")]),s._v("\npnpm remove                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 别名: rm, uninstall, un。从 node_modules 和项目的 package.json 中删除相关 packages。")]),s._v("\npnpm link                           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 别名: ln。使当前本地包可在系统范围内或其他位置访问。")]),s._v("\npnpm unlink                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取消链接一个系统范围的package (相对于 pnpm link).")]),s._v("\npnpm "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v("                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// pnpm import 从另一个软件包管理器的 lock 文件生成 pnpm-lock.yaml。")]),s._v("\npnpm rebuild                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 别名： rb。重建一个package。")]),s._v("\npnpm prune                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 移除不需要的packages。")]),s._v("\npnpm fetch                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将 lockfile 中列出包下载到虚拟存储中，包清单被忽略。")]),s._v("\npnpm install"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("test                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 别名: it。执行 pnpm install 然后立即执行 pnpm test. 它使用参数和 pnpm install完全相同.")]),s._v("\npnpm patch "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("pkg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 准备一个补丁包（灵感来自Yarn中的类似命令）。此命令将导致在一个临时目录中提取一个包，该临时目录可随意编辑。")]),s._v("\npnpm patch"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("commit "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 从目录中生成补丁（受Yarn中类似命令的启发）。")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 查看依赖")]),s._v("\npnpm audit                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 检查已安装包的已知安全问题。")]),s._v("\npnpm list                           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 别名: ls。此命令会以一个树形结构输出所有的已安装package的版本及其依赖。")]),s._v("\npnpm outdated                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 检查过期的 packages。 此命令可以通过提供参数来限制为已安装 packages的一个子集(支持 patterns)。")]),s._v("\npnpm why                            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 显示依赖于指定 package的所有 package。")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 运行脚本")]),s._v("\npnpm run                            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 别名: run-script。运行一个在 package的 manifest 文件中定义的脚本。")]),s._v("\npnpm test                           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 别名: run test, t, tst。运行在 package 的 scripts 对象中test 属性指定的任意的命令。该属性的预期的作用是想为程序指定的运行单元测试或集成测试的命令。")]),s._v("\npnpm exec                           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在项目范围内执行 shell 命令。node_modules/.bin 添加到 PATH，因此 pnpm exec 允许执行依赖项的命令。")]),s._v("\npnpm dlx                            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 从源中获取包而不将其安装为依赖项，热加载，并运行它公开的任何默认命令二进制文件。")]),s._v("\npnpm create                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 从 create-* 或 @foo/create-* 启动套件创建项目。")]),s._v("\npnpm start                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 别名: run start。运行在 package 的 scripts 对象中start 属性指定的任意的命令。")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 管理环境")]),s._v("\npnpm env "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("cmd"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 管理 Node.js 环境。安装并使用指定版本的 Node.js")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 其他")]),s._v("\npnpm publish                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 发布一个包到注册表。")]),s._v("\npnpm pack                           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 从package创建一个 tarball。")]),s._v("\npnpm "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("recursive\npnpm server                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 管理一个 store 服务器。")]),s._v("\npnpm store                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 管理包存储。")]),s._v("\npnpm root                           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 打印有效的存放模块（modules）的目录。")]),s._v("\npnpm bin                            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 打印依赖项的可执行文件链接到的目录。")]),s._v("\npnpm setup                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// pnpm 的独立安装脚本使用此命令。")]),s._v("\npnpm init                           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 创建一个 package.json 文件。")]),s._v("\npnpm deploy\npnpm doctor                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 检查pnpm配置的已知常见问题。")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br")])]),a("h3",{attrs:{id:"五、性能对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、性能对比"}},[s._v("#")]),s._v(" 五、性能对比")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://pnpm.io/zh/benchmarks",target:"_blank"}},[s._v("Benchmarks of JavaScript Package Managers")])]),s._v(" "),a("p",[s._v("参考："),a("br"),s._v(" "),a("a",{attrs:{href:"https://pnpm.io/zh/",target:"_blank"}},[s._v("PNPM官方中文文档")]),a("br"),s._v(" "),a("a",{attrs:{href:"https://www.pnpm.cn/",target:"_blank"}},[s._v("PNPM中文网")]),a("br")])])}),[],!1,null,null,null);a.default=e.exports}}]);