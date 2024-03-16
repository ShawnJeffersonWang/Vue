var vm = new Vue({
    // 配置对象
    el: '.container',
    data: {
        // 界面数据
        // 数据的变化会自动引发界面的自动更新, -> 数据响应式
        // 以上只是最粗旷的理解.
        // 数据响应式的本质是当数据变化的时候会自动运行一些相关的函数
        title: '淘宝手机',
        goods: goods,
    },
    // 计算属性
    computed: {
        count: function () {
            var sum = 0;
            for (var i = 0; i < this.goods.length; i++) {
                sum += this.goods[i].choose;
            }
            return sum;
        }
    }
});