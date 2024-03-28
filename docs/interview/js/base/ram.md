# 内存泄露的场景
:::tip 专题简介
- 什么是内存泄露
- 垃圾回收
- 内存泄露原因
- 常见内存泄露
:::
## 什么是内存泄露
指程序中使用的内存不再被需要却没有被释放，最终导致浏览器或者 Node.js 进程使用的内存越来越大，直到程序崩溃或者系统运行缓慢。
## 垃圾回收机制
js具有自动垃圾回收机制（GC：Garbage Collecation），也就是说，执行环境会负责管理代码执行过程中使用的内存

### 原理
垃圾收集器会定期（周期性）找出那些不在继续使用的变量，然后释放其内存

### 实现方式
- 标记清除
- 引用计数

### 小结
有了垃圾回收机制，不代表不用关注内存泄露。那些很占空间的值，一旦不再用到，需要检查是否还存在对它们的引用。如果是的话，就必须手动解除引用

## 内存泄露产生的原因
内存泄漏通常是由于变量、对象、闭包、事件监听器等长期存在而没有被释放引起的。这些长期存在的引用会阻止垃圾回收器回收内存，最终导致内存泄漏

## 常见内存泄露的几种情况

### 循环引用
当两个或多个对象之间存在相互引用，并且没有被其他对象引用，就会发生循环引用，从而导致内存泄漏。这种情况可以通过在对象之间断开引用来避免。
```js
function createObject() {
  var obj1 = {};
  var obj2 = {};
  obj1.ref = obj2;
  obj2.ref = obj1;
  return obj1;
}
var myObj = createObject();
// 这里无法回收 myObj 和 myObj.ref 所占用的内存空间，导致内存泄漏
```
### 定时器未清除
在JavaScript中使用setInterval()或setTimeout()函数时，必须确保在不需要它们时清除这些定时器。
```js
var count = 0;
function incrementCount() {
  count++;
  console.log(count);
  setTimeout(incrementCount, 1000);
}
incrementCount();
// 这里没有清除计时器，导致计时器持续运行，占用内存空间，导致内存泄漏
```
### DOM元素未正确删除
在使用JavaScript操作DOM元素时，必须确保在不需要它们时正确删除它们。
```js
var element = document.getElementById("myElement");
element.addEventListener("click", function() {
  // do something
});
// 这里没有正确删除DOM元素，导致元素无法被垃圾回收器清理，从而导致内存泄漏
```
### 全局变量未清除 
如果定义了全局变量，它们将一直存在于内存中，直到页面关闭。如果不需要全局变量，请确保在使用后将其删除或赋值为null。
```js
var globalVariable = "some data";
// 这里定义了全局变量，如果不再需要使用它，请将其删除或赋值为 null
```
### 闭包未正确使用
闭包可以让函数访问其定义时的作用域，但如果未正确使用闭包，也可能导致内存泄漏。在使用闭包时，请确保只保留必要的引用，并在不需要时删除它们。
```js
function createFunction() {
  var data = "some data";
  return function() {
    console.log(data);
  };
}
var myFunc = createFunction();
// 这里保留了函数的引用，导致闭包内的 data 变量无法被垃圾回收器清理，从而导致内存泄漏
```
### 事件未正确解绑 
如果注册了事件监听器却没有正确解绑，就会导致内存泄漏。例如，当一个DOM元素被删除时，它仍然会保留对事件监听器的引用，如果没有解绑，事件监听器将无法被垃圾回收。
```js
var element = document.getElementById("myElement");
element.addEventListener("click", handleClick);
function handleClick() {
  // do something
}
// 这里没有正确解绑事件监听器，导致元素无法被垃圾回收器清理，从而导致内存泄漏
```
### 大量数据未及时清理
在处理大量数据时，如果不及时清理无用的数据，就会导致内存泄漏。
```js
var data = [];
for (var i = 0; i < 10000; i++) {
  data.push(i);
}
```
### 使用了第三方库或框架 
在使用第三方库或框架时，需要确保它们没有内存泄漏问题。如果使用了存在内存泄漏问题的库或框架，就会导致整个应用程序出现内存泄漏问题。
```js
// 使用第三方库或框架时，需要确保它们没有内存泄漏问题
// 例如，在 React 应用中，如果没有正确使用 componentWillUnmount()，就可能导致组件无法被垃圾回收器清理，从而导致内存泄漏
class MyComponent extends React.Component {
  componentDidMount() {
    this.interval = setInterval(() => {
      // do something
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return <div>My Component</div>;
  }
}
```