/**
 * 观察某个对象的所有属性
 * @param {Object} obj 
 */
function observe(obj) {
    // 有可能会产生一个闭包问题, const避免作用域问题
    for (const key in obj) {
        let internalValue = obj[key];
        // 收集：为每个属性建立一个数组
        // ES6中的Set
        // let funcs = new Set();
        let funcs = [];
        Object.defineProperty(obj, key, {
            get: function () {
                // 依赖收集，记录：是哪个函数在用我

                // 万一一个函数用到了两次这个属性呢，就会导致这个函数被收集两次，将来就会被运行两次，就没必要
                // funcs.add(abc);
                // ES6中的includes
                if (window.__func && !funcs.includes(window.__func)) {
                    funcs.push(window.__func);
                }
                return internalValue;
            },
            set: function (val) {
                internalValue = val;
                // 自动调用依赖该属性的函数? ? ?
                // 依赖的定义：某个函数在运行期间用到了这个属性，再准确一点，某个函数在运行期间用到了这个get方法
                // 哪个函数在用这个属性，谁知道，get知道

                // 派发更新，运行：执行用我的函数
                // 循环这个数组，依次把每个函数执行一遍
                for (var i = 0; i < funcs.length; i++) {
                    funcs[i]();
                }
            },
        });
    }
}

function autorun(fn) {
    window.__func = fn;
    fn();
    window.__func = null;
}