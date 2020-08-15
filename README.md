# demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



## 项目

### 1. TabBar 底部通栏

#### 1.1 使用路由 vue-router 添加四个路由

- 点击跳转  js 形式 或者链接形式 router-link

  ```javascript
  this.$router.push/repalce({path:'/home'})  对象形式
  this.$router.push/replace('/home')  字符串形式
  ```

#### 1.2 router-view 路由页面占位符

- keep-alive 可以缓存路由进入的页面

  ```javascript
  include="name,name" 缓存这些名字的页面
  exclude="name,name" 不缓存这些页面
  ```

![image-20200813155821589](C:\Users\GY\AppData\Roaming\Typora\typora-user-images\image-20200813155821589.png)

#### 1.3 点击链接变色

- 使用 isActive 标志 ，通过比较当前页面路径是否包含这个链接的 link 来控制是否变色以及图片的显示

```javascript
 <slot v-if="isActive" name="bar-icon"></slot>
 <slot v-else name="bar-icon-active"></slot>
 <slot :actives="activeColors" name="bar-title"></slot>

 activeColors() {
          return this.isActive ? {} : {color: this.activeColor}
      },
 isActive() {
        return this.$route.path.indexOf(this.link) == -1
      }

```

### 2. 首页顶部栏

- 公共组件

```javascript
<div class="left"><slot name="left"></slot></div>
<div class="center"><slot name="center"></slot></div>
<div class="right"><slot name="right"></slot></div>
    
 // 给插槽设置样式，在外面包裹一层div，不要直接对slot设置，会被覆盖   
```

### 3. 首页轮播图

#### 3.1 自动轮播

- 使用定时器进行封装，通过每隔一段时间改变left的位置进行轮播
- 需要在每一次定时执行之后，清除前面的定时器，防止定时器太多，造成滚动太频繁
- 当滚动到最后一个页面时，需要进行处理，使用内部定时器，不要将时间设置过长，否则位置会先进行设置，而此时索引还没有减小，过短的话则会造成过渡时间过快，保证在执行下一次轮播定时器时，会先进行这一次定时器的执行

```javascript
	setTimer() {
      this.timer = setInterval(() => {
        clearInterval(this.timer);
        if (this.currentIndex == 4) {
          setTimeout(() => {
            this.currentIndex = 1;
            this.widthStyle.transition = "all 0s";
            this.widthStyle.left = `-${this.singleWidth}px`;
          }, 1000);
        }
        this.setPosition();
        this.setTimer();
      }, 2000);
    },
```

#### 3.2 touch事件

- touchstart
- touchmove
- touchend

```javascript
// 分别是touch事件开始，移动，结束
// 开始时需要移除定时器，结束设置定时器
// startX记录开始位置，endX记录结束位置, 
	let instance = event.targetTouches[0].clientX // 实时记录move时的坐标
// touchmove 时，需要图片跟随移动，需要动态设置left属性，
	let instance = event.targetTouches[0].clientX - this.startX;
    let origin = this.currentIndex * this.singleWidth;
    this.widthStyle.left = `${-origin + instance}px`;
// end时需要根据 this.endX - this.startX;的大小进行判断
// 大于 指定宽度，判断为正还是负，向右移还是想左移动一张图片
// 设置样式
// 最后开启定时器
```

#### 3.3 轮播标志 indicator

- indicator 使用动态绑定样式

```javascript
 <li :class="{active : setColor(index)}" v-for="(item,index) in imgs" v-bind:key="index"></li>
// 为每一个 li 元素 动态绑定 active样式，生效与否根据 setColor(index) 的结果
	setColor(index) {
      let flag = this.currentIndex;
      if (flag == 5) {
        flag = 1;
      }
      return flag - 1 == index;
    },
   
// 在定时器变化时，自动改变 currentIndex,由于setColor()的依赖发生变化，导致setColor()的重新调用
// 在touch事件末尾，主动调用 this.setColor(this.currentIndex - 1) 设置样式
```

### 4. 推荐，流行板块

### 5. TabControl 选项卡

- 根据对应的点击实现样式的改变，需要向父组件传递当前点击的状态

```javascript
	btnClick(index) {
      this.currentIndex = index;
      this.$emit('click', index);
    }
```

- 选项卡在上拉时固定顶部

```javascript
由于 better-sroll 插件使用，粘滞定位失效
可以在顶部设置一个一样的选项卡，监听滚动事件，当达到要显示的位置时就显示，否则就隐藏，

this.height 设置的是Tab选项卡距离要显示的位置的距离
this.isShow =  this.$refs.scroll.TabOffsetTop <= this.height ? 'hidden' : 'visible';

此时需要对两个选项卡共享点击的状态

<home-tab-control  ref="homeTabControl2" :cards="cards" @click="changeTab"></home-tab-control>
<home-tab-control
      ref="homeTabControl1"
      :cards="cards"
      :class="{showTab: true}"
      :style="{visibility: isShow}"
      @click="changeTab"
    ></home-tab-control>

changeTab(index) {
      this.$refs.homeTabControl1.currentIndex = index;
      this.$refs.homeTabControl2.currentIndex = index;
      this.type = this.cards[index].type;
    },
```

### 6. GoodsList 和 item

- 商品列表的渲染，通过 TabControl 的控制，在主页获取到的数据根据指定的链接，传递给 GoodsList要渲染的数据类型
- 也可以使用 vuex 管理当前激活的索引，通过索引来分辨要渲染的数据

```javascript
// 接收子组件传递数据
this.type = this.cards[index].type;

// 传递类型
<home-goods ref="goods" :type="type"></home-goods>

// goodslist根据类型进行渲染
<goods-list :goodsList="goodsList[type].list"></goods-list>
```

### 7. better-scroll 和 Scroll 组件

- better-scroll 插件的使用

```javascript
  this.scroll = new BScroll(this.$refs.wrapper, {
  // 1 滚动的时候会派发scroll事件，会截流。
  // 2 滚动的时候 实时派发scroll事件，不会截流。
  // 3 除了 实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
      probeType: 3,
      click: true, // 点击列表是否派发click事件
      pullUpLoad: true,  // 是否派发滚动到底部的事件，用于上拉加载
    });
```

**better-scroll**:  [https://juejin.im/post/6844903480121884685](better-scroll更多)

### 8. 首页其他细节

#### 8.1 防抖 和 节流

- 防抖函数 debounce  在一段时间连续触发的事件只会在这一段时间到达后执行一次，可以使用定时器实现，没到事件就清除定时器，到时间就执行
- 节流函数 throttle  每隔一段时间就执行一次这个事件，在这段时间内的事件都不执行，通过设置时间戳来判断是否到达指定事件，到达之后更新时间戳，继续进行

#### 8.2 load

vue 原生提供load事件，当图片加载完自动调用

```javascript
<img :src='img.src' @load="imgLoad">
imgLoad() {
    // content
}
```

#### 8.4 native 回到顶部按钮 

vue 组件默认不能监听 DOM 原生事件，需要使用 native修饰符

```javascript
<back-top @click.native="backClick" v-show="isBack"></back-top>

// better-scroll插件 提供的scroll 对象，拥有一系列的方法和属性
this.$refs.scroll.scrollTo(0, 0, 1000);
```

#### 8.5 滚动效果失灵

- 图片加载过慢，导致scroll对象在计算滚动高度时没有将图片包裹在内，

```javascript
需要在每一次图片加载完之后调用load事件，传递给scroll对象，调用refresh() 方法，重新计算高度
```

##### 8.5.1 事件总线  $bus

- 事件总线，用于管理事件的对象，在vue中

```javascript
Vue.prototype.$bus = new Vue();
// 在原型直接挂在一个 vue 实例，每一个组件实例都可以访问 this.$bus
// 在组件实例上发射事件 ‘load’
this.$bus.$emit('imgOnLoad');;
// 可以其他组件内部，调用
this.$bus.$on('imgOnLoad', callback)

// 原理：事件总线是一个 vue实例对象，并且挂载在Vue原型上，每一个组件实例都可以访问这个对象，通过引用去改变这个对象， $emit 和 $on 是 vue 实例的方法，分别是 发送要执行的事件类型 和 监听要执行事件的类型
```



### 9 详情页

#### 9.1 顶部栏

#### 9.2 展示轮播图

#### 9.3 物品信息

#### 9.4 商铺信息

#### 9.5 商品展示图片

#### 9.6 商品参数

#### 9.7 滚动插件使用

#### 9.8 mixin 混入

- [https://cn.vuejs.org/v2/guide/mixins.html](混入)

```javascript
export const imgLoadMixin = {
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 1000);
    this.imgRefresh = () => {
      refresh();
     
    }
    this.$bus.$on("imgOnLoad", this.imgRefresh);
  }
}
碰到键值对的数据，以组件为准，
钩子函数或者方法会先执行混入的，在执行组件的
export default {
    mixins: [imgLoadMixin]
}
```

#### 9.9 顶部样式跟随滚动

- 监听滚动事件 offsetTop ，判断

#### 9.10 底部购物车

- 动画的封装
- 点击购物车跳转

### 10. 购物车页面

- 顶部栏
- 底部操作栏
- 商品列表
- 点击选中按钮与全选按钮
- 价格的汇总

### 11 Toast 自定义插件

- ```javascript
  import Toast from './Toast.vue';
  
  const obj = {};
  
  // 生成插件过程
  obj.install = function(Vue) {
      // 通过 extend方法 生成组件构造函数
      const toastConstru = Vue.extend(Toast);
      // 生成一个组件
      const toast = new toastConstru();
      // 挂载 $mount 会代替 el 属性,挂载到某个元素上 toast.$el 可以获取当前挂载的DOM元素
      toast.$mount(document.createElement('div'));
      // 添加到 body
      document.body.appendChild(toast.$el);
  
      // 将插件挂载到全局
      Vue.prototype.$toast = toast;
  }
  
  export default obj
  
  import toast from './components/common/toast';
  Vue.use(toast);
  // use() 的调用会自动调用参数的 install方法 
  ```

### 12 优化

#### 12.1 fastclick 插件

- 移动端点击 300 ms 的延迟

  ```javascript
  // 移动端点击事件执行顺序 
  touchstart - touchmove - touchend - click
  // 在click之后会继续监听约 300ms 判断是否要双击操作，特别是双击缩放，在桌面网站在移动端的设计中
  ```

- 点透事件

  ```javascript
  // 两个相叠的元素, A在B上，A触发 touchstart 事件会隐藏，
  // 后面B元素就会显示，并且触发其 click 事件
  ```

- 使用 fastclick 插件

```javascript
npm i fastclick -S
import FastClick from 'fastclick';
FastClick.attach(document.body);
```

- 原理：在 监听到touchend 之后，使用DOM事件自动 触发click事件 ，并将之后的click事件阻止掉

#### 12.2 vue图片懒加载

- npm i vue-lazyload -S

```javascript
Vue.use(VueLazyLoad, {
    loading: require('./imgsrc'),
    options...
})
<img v-lazy="imgSrc" alt=""/>
```

### 13 响应式原理

####  13.1 数据劫持

#### 13.2 发布者订阅者模式

![image-20200815153044884](C:\Users\GY\AppData\Roaming\Typora\typora-user-images\image-20200815153044884.png)