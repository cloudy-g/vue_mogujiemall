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