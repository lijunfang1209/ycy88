# 函数编程的理解
:::tip 专题简介
 - 编程范式
 - 函数式编程是什么
 - 特点
 - 优缺点
:::
## 如何理解编程范式
编程范式是一种编程风格或思维方式，描述了解决问题的方法和模式。不同的编程范式强调不同的编程原则和理念。
## 编程范式分类
- 面向过程编程（Procedural Programming）：
- 面向对象编程
- 函数式编程
- 声明式编程
- 命令式编程
- 逻辑编程
- 并发编程
- 泛型编程

## 函数式编程是什么.

函数式编程是一种"编程范式"（programming paradigm），一种编写程序的方法论，以函数作为主要载体的编程方式，用函数去拆解、抽象一般的表达式

## 函数式编程的特点
### 1. 函数是一等公明
你可以像对待任何其他数据类型一样对待它们——把它们存在数组里，当作参数传递，赋值给变量...等等。使用总有返回值的表达式而不是语句
### 2.纯函数
 相同的输入，永远会得到相同的输出，而且没有任何可观察的副作用。
<p><b>副作用：</b>是指，函数内部与外部互动，产生运算以外的其他结果。 例如在函数调用的过程中，利用并修改到了外部的变量，那么就是一个有副作用的函数。</p>

- <b>引用透明（无状态）：</b> 函数的的运行结果不依赖全局变量，this 指针，IO 操作等,只依赖于输入的参数，任何时候只要参数相同，
引用函数所得到的返回值总是相同的。
- <b>没有副作用（数据不变）：</b> 不修改全局变量，不修改入参。

### 3.基于表达式
也称为声明式编程，不再指示计算机如何工作，而是指出我们明确希望得到的结果。与命令式不同，声明式意味着我们要写表达式，而不是一步一步的指示。

- <b>命令式代码：</b>命令“机器”如何去做事情(how)，这样不管你想要的是什么(what)，它都会按照你的命令实现。
- <b>声明式代码：</b>告诉“机器”你想要的是什么(what)，让机器想出如何去做(how)。

### 4.无状态和数据不可变
- <b>数据不可变：</b> 它要求你所有的数据都是不可变的，这意味着如果你想修改一个对象，那你应该创建一个新的对象用来修改，而不是修改已有的对象。
- <b>无状态：</b> 主要是强调对于一个函数，不管你何时运行，它都应该像第一次运行一样，给定相同的输入，给出相同的输出，完全不依赖外部状态的变化。

### 5.惰性执行
函数只在需要的时候执行，不产生无意义的中间变量。从头到尾都在写函数，只有在最后的时候才通过调用 产生实际的结果。

## 常见的函数式编程模型

- 闭包（Closure）：函数 + 函数体内可访问的变量总和
- 高阶函数：通过接收其他函数作为参数或返回其他函数的函数
- 柯里化：把接受多个参数的函数转换成接受一个单一参数的函数
- 函数组合：将多个函数组合成一个函数。

## 函数式编程的优缺点
### 优势
- 更好的管理状态：因为它的宗旨是无状态，或者说更少的状态，能最大化的减少这些未知、优化代码、减少出错情况
- 更简单的复用：固定输入->固定输出，没有其他外部变量影响，并且无副作用。这样代码复用时，完全不需要考虑它的内部实现和外部影响
- 更优雅的组合：往大的说，网页是由各个组件组成的。往小的说，一个函数也可能是由多个小函数组成的。更强的复用性，带来更强大的组合性
- 隐性好处。减少代码量，提高维护性

### 缺点
- 性能：函数式编程相对于指令式编程，性能绝对是一个短板，因为它往往会对一个方法进行过度包装，从而产生上下文切换的性能开销
- 资源占用：在 JS 中为了实现对象状态的不可变，往往会创建新的对象，因此，它对垃圾回收所产生的压力远远超过其他编程方式
- 递归陷阱：在函数式编程中，为了实现迭代，通常会采用递归操作。