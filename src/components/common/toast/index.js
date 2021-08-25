import Toast from "./Toast";

const obj = {}

obj.install = function (Vue) {
    //1、创建组件构造器
    const toastConstructor = Vue.extend(Toast);
    //2、通过new构造器的方式创建相应的组件对象
    const toast = new toastConstructor();
    //3、将组件对象手动挂载在某个元素上
    toast.$mount(document.createElement('div'));
    //4、将toast.$el对应就是刚刚新建的div对象
    document.body.appendChild(toast.$el);
    //5、在Vue原型上添加相应的属性
    Vue.prototype.$toast = toast;

    //原理：实际上是继承Toast的模板组件创建toast的vue对象
    //     并把toast对象挂载到新建的div对象上，同时div绑定至body首页上
    //      最后在app的vue原型上创建相应的属性即可，实际上toast这个组件一直存在于页面中
    //      这样就可以绕开components进行组件绑定
}

export default obj;
