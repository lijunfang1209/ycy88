(window.webpackJsonp=window.webpackJsonp||[]).push([[350],{745:function(s,t,a){"use strict";a.r(t);var n=a(13),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"ts序章-谈谈-类型思维"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ts序章-谈谈-类型思维"}},[s._v("#")]),s._v(" TS序章 - 谈谈“类型思维”")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("概念")]),s._v(" "),t("p",[s._v("TypeScript 是具有类型语法的 JavaScript，是JavaScript的超集。")])]),s._v(" "),t("p",[s._v("在我们正式接触了解TS之前，我们可以在脑海中简单过一下以下几个问题：")]),s._v(" "),t("ul",[t("li",[s._v("变量名写错或者使用未声明的变量时，在编译阶段，是否会报错？")]),s._v(" "),t("li",[s._v("与后端进行API接口联调时，字段类型不对时，是否需要逐个逐个的排查？")]),s._v(" "),t("li",[s._v("项目维护阶段，碰到之前写的函数方法的多个参数时，能否很准确的知道每个参数的具体含义？")]),s._v(" "),t("li",[s._v("修改项目中的某个公用版块时（被多处引入），如何确保所有引入处都调整到位？")])]),s._v(" "),t("h3",{attrs:{id:"typescript是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#typescript是什么"}},[s._v("#")]),s._v(" Typescript是什么？")]),s._v(" "),t("p",[s._v("TypeScript 可以简单的拆分为「Type」「script」。核心就是“Type类型”。"),t("br"),s._v("\n将代码的验证和报错时间点提前：由 「运行时报错」 变成 「编译时报错」。")]),s._v(" "),t("h3",{attrs:{id:"typescript-的编译检查"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#typescript-的编译检查"}},[s._v("#")]),s._v(" Typescript 的编译检查")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 前提：abc 变量在未定义的情况下")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// js：运行时才会报错 - ReferenceError: abc is not defined")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("abc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ts：编译时就会报错 - 找不到名称“abc”。")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("abc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"typescript-的类型约束"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#typescript-的类型约束"}},[s._v("#")]),s._v(" Typescript 的类型约束")]),s._v(" "),t("p",[s._v("当我们和后端进行接口联调时，比如某个字段约定是数组，而后端返回的数据是null或者其他非数组时，普通的js是无法直接验证的。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 举例：TS 定义的 login返回数据")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("dataInfo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("msg")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("list")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LoginData")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("data")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" dataInfo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("code")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" number"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ======== 正确使用：返回符合上述类型规则的数据")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("login")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" LoginData "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("data")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("msg")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Response is OK'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("list")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("code")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ======= 错误使用：类型不对，报错")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("login")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" LoginData "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("data")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("msg")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Response is OK'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("list")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不能将类型“null”分配给类型“string[]”。")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("code")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br")])]),t("p",[s._v("尤其是中大型项目时，我们可以用TS来定义好约定的数据格式，一旦返回的数据格式有误，即可根据报错提示迅速定位到问题。")]),s._v(" "),t("h3",{attrs:{id:"typescript-提升代码可读性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#typescript-提升代码可读性"}},[s._v("#")]),s._v(" Typescript 提升代码可读性")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 普通JS：无法直接感知【options】里面有哪些属性或者方法")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("login")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("options")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n    console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("token"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("password"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// TS：可以通过定义的 options - type 直观了解详情")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LoginOptions")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("username")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("token")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("password")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("login")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("options")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" LoginOptions")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n    console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("token"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("password"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[s._v("因为JS本身的灵活性，以及其自由编写的容错性，在很大程度上促进了JS的蓬勃发展。"),t("br"),s._v("\n但随着JS运用到的领域越广泛，涉及到的项目越来越多，越来越大，这种“自由”编写代码的方式很大程度上也在考验开发者的开发维护能力。"),t("br"),s._v("\n很多细小的改动，牵一发而动全身，尤其是那种紧急上线的需求，更加需要我们将代码的一些错误提前暴露出来，这也是TS大展身手的时候。"),t("br")]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("类型思维")]),s._v(" "),t("p",[s._v("Todo ...")])])])}),[],!1,null,null,null);t.default=r.exports}}]);