(window.webpackJsonp=window.webpackJsonp||[]).push([[315],{700:function(_,t,v){"use strict";v.r(t);var a=v(13),s=Object(a.a)({},(function(){var _=this,t=_._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"http简述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http简述"}},[_._v("#")]),_._v(" HTTP简述")]),_._v(" "),t("h3",{attrs:{id:"http"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[_._v("#")]),_._v(" HTTP")]),_._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[_._v("特点：无连接、无状态、灵活、简单快速\n\n缺点：无状态、不安全、明文传输、队头阻塞\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br"),t("span",{staticClass:"line-number"},[_._v("2")]),t("br"),t("span",{staticClass:"line-number"},[_._v("3")]),t("br")])]),t("h4",{attrs:{id:"_1-http-报文组成部分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-http-报文组成部分"}},[_._v("#")]),_._v(" 1. HTTP 报文组成部分")]),_._v(" "),t("ul",[t("li",[_._v("请求报文：由请求行、请求头、空行、请求体四部分组成")]),_._v(" "),t("li",[_._v("响应报文：由状态行、响应头、空行、响应体四部分组成")])]),_._v(" "),t("h4",{attrs:{id:"_2-http-请求方法-9种"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-http-请求方法-9种"}},[_._v("#")]),_._v(" 2. HTTP 请求方法(9种)")]),_._v(" "),t("ul",[t("li",[_._v("HTTP1.0： GET、POST、HEAD")]),_._v(" "),t("li",[_._v("HTTP1.1： PUT、PATCH、DELETE、OPTIONS、TRACE、CONNECT")])]),_._v(" "),t("h4",{attrs:{id:"_3-常见-http-状态码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-常见-http-状态码"}},[_._v("#")]),_._v(" 3. 常见 HTTP 状态码")]),_._v(" "),t("ul",[t("li",[_._v("1xx: 指示信息——表示请求已接收，继续处理")]),_._v(" "),t("li",[_._v("2xx: 成功——表示请求已被成功接收")]),_._v(" "),t("li",[_._v("3xx: 重定向——表示要完成请求必须进行进一步操作")]),_._v(" "),t("li",[_._v("4xx: 客户端错误——表示请求有语法错误或请求无法实现")]),_._v(" "),t("li",[_._v("5xx: 服务端错误——表示服务器未能实现合法的请求")])]),_._v(" "),t("h4",{attrs:{id:"_4-什么是持久连接-长连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-什么是持久连接-长连接"}},[_._v("#")]),_._v(" 4. 什么是持久连接/长连接")]),_._v(" "),t("ul",[t("li",[_._v('http1.0协议采用的是"请求-应答"模式，当使用普通模式，每个请求/应答客户与服务器都要新建一个连接，完成之后立即断开连接(http协议为无连接的协议)')]),_._v(" "),t("li",[_._v("http1.1版本支持长连接，即请求头添加Connection: Keep-Alive，使用Keep-Alive模式(又称持久连接，连接复用)建立一个TCP连接后使客户端到服务端的连接持续有效，可以发送/接受多个http请求/响应，当出现对服务器的后续请求时，Keep-Alive功能避免了建立或者重新建立连接")])]),_._v(" "),t("h4",{attrs:{id:"_5-如何解决-http-的队头阻塞问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-如何解决-http-的队头阻塞问题"}},[_._v("#")]),_._v(" 5. 如何解决 HTTP 的队头阻塞问题")]),_._v(" "),t("ul",[t("li",[_._v("并发连接: 现在的浏览器标准中一个域名并发连接可以有6~8个，记住是6~8个，不是6个(Chrome6个/Firefox8个)")]),_._v(" "),t("li",[_._v("域名分片:\n"),t("ul",[t("li",[_._v("一个域名最多可以并发6~8个，那咱就多来几个域名。比如a.baidu.com，b.baidu.com，c.baidu.com")]),_._v(" "),t("li",[_._v("而在HTTP2.0下，可以一瞬间加载出来很多资源，因为支持多路复用，可以在一个TCP连接中发送多个请求")])])])]),_._v(" "),t("h4",{attrs:{id:"_6-http-代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-http-代理"}},[_._v("#")]),_._v(" 6. HTTP 代理")]),_._v(" "),t("ul",[t("li",[_._v("普通代理(中间人代理)")]),_._v(" "),t("li",[_._v("隧道代理")]),_._v(" "),t("li",[_._v("代理服务器好处：突破访问限制 / 安全性更高 / 负载均衡 / 缓存代理")])]),_._v(" "),t("h4",{attrs:{id:"_7-正向代理和反向代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-正向代理和反向代理"}},[_._v("#")]),_._v(" 7. 正向代理和反向代理")]),_._v(" "),t("ul",[t("li",[_._v("正向代理\n"),t("ul",[t("li",[_._v("缓存")]),_._v(" "),t("li",[_._v("屏蔽某些不健康的网站")]),_._v(" "),t("li",[_._v("通过代理访问原本无法访问的网站")]),_._v(" "),t("li",[_._v("上网认证，对用户访问进行授权")])])]),_._v(" "),t("li",[_._v("反向代理通常用于：负载均衡、服务端缓存、流量隔离、日志、金丝雀发布")])]),_._v(" "),t("h3",{attrs:{id:"https"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[_._v("#")]),_._v(" HTTPS")]),_._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[_._v("概念")]),_._v(" "),t("p",[_._v("HTTPS 是超文本传输安全协议，即HTTP + SSL/TLS")]),_._v(" "),t("p",[_._v("为了保证安全，TLS需要保证信息的：机密性、可用性、完整性、认证性、不可否认性")]),_._v(" "),t("p",[_._v("HTTPS 在内容传输的加密上使用的是对称加密，非对称加密只作用在证书验证阶段")])]),_._v(" "),t("p",[_._v("HTTPS要使客户端与服务器端的通信过程得到安全保证，必须使用的对称加密算法，但是协商对称加密算法的过程，需要使用非对称加密算法来保证安全，然而直接使用非对称加密的过程本身也不安全，会有中间人篡改公钥的可能性，所以客户端与服务器不直接使用公钥，而是使用数字证书签发机构颁发的证书来保证非对称加密过程本身的安全。这样通过这些机制协商出一个对称加密算法，就此双方使用该算法进行加密解密。从而解决了客户端与服务器端之间的通信安全问题。")]),_._v(" "),t("h3",{attrs:{id:"对称加密-非对称加密-证书"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对称加密-非对称加密-证书"}},[_._v("#")]),_._v(" 对称加密 / 非对称加密 / 证书")]),_._v(" "),t("h4",{attrs:{id:"_1、对称加密-不安全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、对称加密-不安全"}},[_._v("#")]),_._v(" 1、对称加密 (不安全)")]),_._v(" "),t("p",[_._v("网络通信中，加密和解密用的是「同一个密钥」")]),_._v(" "),t("h4",{attrs:{id:"_2、非对称加密-rsa"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、非对称加密-rsa"}},[_._v("#")]),_._v(" 2、非对称加密（RSA）：")]),_._v(" "),t("p",[_._v("协商一对钥匙：一个是保密的，「私钥」；一个是公开的，「公钥」。")]),_._v(" "),t("p",[_._v("特点是：私钥加密后的密文，只要是公钥，都可以解密，但是公钥加密后的密文，只有私钥可以解密。私钥只有一个人有，而公钥可以发给所有的人。")]),_._v(" "),t("p",[_._v("私钥加密的数据只有对应的公钥才能解密；\n公钥加密的数据只有对应的私钥才能解密。")]),_._v(" "),t("p",[_._v("缺点：RSA算法速度有点慢")]),_._v(" "),t("p",[_._v("私钥？公钥怎么来的？(一对公私钥只能实现「单向」的加解密)")]),_._v(" "),t("ul",[t("li",[_._v("客户端 --（发信息给）--\x3e 服务端：\n"),t("ul",[t("li",[_._v("服务端生成「公钥」和「私钥」，「公钥」发给客户端，客户端用「公钥」加密内容发给服务端，服务端用「私钥」解密。")]),_._v(" "),t("li",[_._v("「私钥」一直在服务端，被人劫持也无法解密客户端发送的内容")])])]),_._v(" "),t("li",[_._v("服务端 --（发信息给）--\x3e 客户端：\n"),t("ul",[t("li",[_._v("客户端生成「公钥」和「私钥」，「公钥」发给服务端，服务端用「公钥」加密内容发给客户端，客户端用「私钥」解密。")]),_._v(" "),t("li",[_._v("「私钥」一直在客户端，被人劫持也无法解密服务端发送的内容")])])])]),_._v(" "),t("p",[_._v("结论：不安全")]),_._v(" "),t("ul",[t("li",[_._v("拿到「公钥」一方加密数据发给握有「私钥」的一方，是安全的")]),_._v(" "),t("li",[_._v("有安全漏洞，无法确认「公钥」的真假")])]),_._v(" "),t("h4",{attrs:{id:"_3、非对称加密-对称加密-随机数bob-对称加密密钥。随机数的好处是交互的那一刻才确定加密算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、非对称加密-对称加密-随机数bob-对称加密密钥。随机数的好处是交互的那一刻才确定加密算法"}},[_._v("#")]),_._v(" 3、非对称加密 + 对称加密：（随机数Bob：对称加密密钥。随机数的好处是交互的那一刻才确定加密算法）")]),_._v(" "),t("ul",[t("li",[_._v("第一步：生成「对称加密」的「密钥」，用「RSA」的方式传给对方\n"),t("ul",[t("li",[_._v("Step 1：服务端生成「公钥」发给客户端，自己存「私钥」")]),_._v(" "),t("li",[_._v("Step 2：客户端本地生成「随机数Bob」，并用「公钥」加密「随机数Bob」")]),_._v(" "),t("li",[_._v("Step 3：服务端用「私钥」解密客户端发过来的「随机数Bob」，并用「随机数Bob」进行加密内容「XYZ」")]),_._v(" "),t("li",[_._v("Step 4：客户端用本地「随机数Bob」解密服务端发过来的内容，得到「XYZ」")])])]),_._v(" "),t("li",[_._v("第二步：用「对称加密」的「密钥」通信")])]),_._v(" "),t("h4",{attrs:{id:"_4、中间人劫持"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、中间人劫持"}},[_._v("#")]),_._v(" 4、中间人劫持：")]),_._v(" "),t("ul",[t("li",[_._v("「3」理论上应该是： A --真公钥Tt--\x3e B，B --真公钥Tt加密内容--\x3e A")]),_._v(" "),t("li",[_._v("「中间人劫持」后变成：\n"),t("ul",[t("li",[_._v("A --真公钥Tt--\x3e X --假公钥Ff--\x3e B，")]),_._v(" "),t("li",[_._v("B --假公钥Ff加密内容588--\x3e X(假私钥解密588，篡改成688） --真公钥Tt加密内容--\x3e A（真私钥解密后收到688）")])])])]),_._v(" "),t("h4",{attrs:{id:"_5、ca证书"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、ca证书"}},[_._v("#")]),_._v(" 5、CA证书：")]),_._v(" "),t("ul",[t("li",[_._v("A-- 真公钥Tt -- CA机构用「私钥c」加密「真公钥Tt」-- B（用CA发过来的「公钥c」解密「真公钥Tt」")]),_._v(" "),t("li",[_._v("B -- 生成随机数Bob，真公钥Tt加密随机数Bob -- A（解密得到Bob），AB用「随机数Bob」对称加密来通信")]),_._v(" "),t("li",[_._v("现实中，「浏览器」和「操作系统」都会维护一个权威的第三方机构列表（包括它们的公钥）")]),_._v(" "),t("li",[_._v("不过，如果「浏览器」和「操作系统」中的「CA证书」被篡改，依然有被中间人劫持的风险")])]),_._v(" "),t("h4",{attrs:{id:"_6、数字签名-数字证书"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6、数字签名-数字证书"}},[_._v("#")]),_._v(" 6、数字签名 & 数字证书？")]),_._v(" "),t("p",[_._v("TODO...")]),_._v(" "),t("h3",{attrs:{id:"网络相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络相关"}},[_._v("#")]),_._v(" 网络相关")]),_._v(" "),t("h4",{attrs:{id:"抓包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#抓包"}},[_._v("#")]),_._v(" 抓包")]),_._v(" "),t("p",[_._v("TODO...")]),_._v(" "),t("h4",{attrs:{id:"http2-与-http1-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http2-与-http1-1"}},[_._v("#")]),_._v(" HTTP2 与 HTTP1.1")]),_._v(" "),t("ul",[t("li",[_._v("1.1：域名分片")]),_._v(" "),t("li",[_._v("2: 多路复用")]),_._v(" "),t("li",[_._v("2: HPACK算法 --\x3e 静态表？")]),_._v(" "),t("li",[_._v("2: 服务端推送 / Push推送")]),_._v(" "),t("li",[_._v("HTTP2还是基于TCP的\n"),t("ul",[t("li",[_._v("丢包率")]),_._v(" "),t("li",[_._v("问题： 队头阻塞")])])]),_._v(" "),t("li",[_._v("TCP / UDP\n"),t("ul",[t("li",[_._v("都是传输层协议")]),_._v(" "),t("li",[_._v("TCP连接（3握手/4挥手），UDP报文")]),_._v(" "),t("li",[_._v("重传")])])]),_._v(" "),t("li",[_._v("HTTP 3")]),_._v(" "),t("li",[_._v("HTTP缓存")]),_._v(" "),t("li",[_._v("对称加密 / 非对称加密 / 证书")])]),_._v(" "),t("h4",{attrs:{id:"web安全防御"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web安全防御"}},[_._v("#")]),_._v(" web安全防御")]),_._v(" "),t("ul",[t("li",[_._v("XSS\n"),t("ul",[t("li",[_._v("存储型")]),_._v(" "),t("li",[_._v("转义 / 过滤")]),_._v(" "),t("li",[_._v("CSP ？ 源头")])])]),_._v(" "),t("li",[_._v("CSRF\n"),t("ul",[t("li",[_._v("cookie")]),_._v(" "),t("li",[_._v("token")])])])]),_._v(" "),t("h4",{attrs:{id:"前端错误监控"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端错误监控"}},[_._v("#")]),_._v(" 前端错误监控")]),_._v(" "),t("ul",[t("li",[_._v("sentry\n"),t("ul",[t("li",[_._v("https://juejin.cn/post/6959356863246925832")])])]),_._v(" "),t("li",[_._v("采集 / 上报\n"),t("ul",[t("li",[_._v("onerror")]),_._v(" "),t("li",[_._v("框架自带的错误回调： vue / react")]),_._v(" "),t("li",[_._v("上报： source-map / sendBeacon")])])]),_._v(" "),t("li",[_._v("入库\n"),t("ul",[t("li",[_._v("数据清洗： 同一错误重复采集的情况")]),_._v(" "),t("li",[_._v("mysql / 展示")])])]),_._v(" "),t("li",[_._v("分析")])]),_._v(" "),t("h3",{attrs:{id:"tcp-ip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip"}},[_._v("#")]),_._v(" tcp / ip")]),_._v(" "),t("p",[_._v("TODO...")]),_._v(" "),t("h3",{attrs:{id:"storing-data-in-the-browser"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#storing-data-in-the-browser"}},[_._v("#")]),_._v(" Storing data in the browser")]),_._v(" "),t("ul",[t("li",[_._v("Cookie")]),_._v(" "),t("li",[_._v("LocalStorage")]),_._v(" "),t("li",[_._v("SessionStorage")])]),_._v(" "),t("h3",{attrs:{id:"request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[_._v("#")]),_._v(" request")]),_._v(" "),t("ul",[t("li",[_._v("XMLHttpRequest")]),_._v(" "),t("li",[_._v("Axios")]),_._v(" "),t("li",[_._v("fetch")])]),_._v(" "),t("p",[_._v("参考："),t("br"),_._v(" "),t("a",{attrs:{href:"https://juejin.cn/post/6994629873985650696",target:"_blank"}},[_._v("巩固你的HTTP知识体系")]),t("br")])])}),[],!1,null,null,null);t.default=s.exports}}]);