(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{471:function(t,s,n){"use strict";n.r(s);var a=n(13),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"如何将字符串型转换为数值型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何将字符串型转换为数值型"}},[t._v("#")]),t._v(" 如何将字符串型转换为数值型")]),t._v(" "),s("h3",{attrs:{id:"常用的三种方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用的三种方式"}},[t._v("#")]),t._v(" 常用的三种方式：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将字符串型转换为数值型")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123R'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'R123'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str4 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Infinity'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引申到布尔值 和 null等")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" bool "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" nullObj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1e3'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方式一： Number(str)")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 123")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Infinity")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nullObj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1000")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方式二： +str")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("              "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 123")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("str2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("str3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("str4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Infinity")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("bool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("nullObj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("num"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("              "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1000")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方式三： parseInt(str)")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 123")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 123")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nullObj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br")])]),s("p",[s("em",[t._v("通过上面的代码我们可以分析得出几个结论：")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Number")]),t._v(" :\n"),s("ul",[s("li",[t._v("对任何不合法的数字都会返回NaN")]),t._v(" "),s("li",[t._v("但能转换"),s("code",[t._v("Infinity")]),t._v("、null，布尔值等")])])]),t._v(" "),s("li",[s("code",[t._v("+")]),t._v(" :\n"),s("ul",[s("li",[t._v("和 "),s("code",[t._v("Number")]),t._v("的返回结果基本上类似")])])]),t._v(" "),s("li",[s("code",[t._v("parseInt")]),t._v(" :\n"),s("ul",[s("li",[t._v("不是所有非数字都会返回 NaN。第一个字符不是数字时才返回 NaN")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);