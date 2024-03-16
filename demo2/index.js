var user = {
    name: 'shawn',
    birth: '2002-5-7',
};

// 将来凡是想用我这个功能的，创建了对象之后，观察它, 剩下的事情交给我这个euv, 帮你观察这个对象的变化
observe(user);

// 显示姓氏
function showFirstName() {
    document.querySelector('#firstName').textContent = '姓: ' + user.name[0];
}

// 显示名字
function showLastName() {
    document.querySelector('#lastName').textContent = '名: ' + user.name.slice(1);
}


// 显示年龄
function showAge() {

}

// 我在运行这个函数之前，把这个函数放在这个全局变量里面
// 这样保证在这段代码的运行期间，就像一个太阳挂在头上一样，在它的运行期间始终它都有值，就是这个函数
// 它里面用到了属性，一用属性，属性就会运行get，get就能拿到这个全局变量，这个全局变量就是目前就在用的运行的这个函数
// 非常巧妙

// 这个函数不要直接运行，交给autorun 它来帮你做三句话
// autorun <-- showFirstName
autorun(showFirstName);
autorun(showLastName);
autorun(showAge);

// window.__func = showFirstName;
// showFirstName();
// // 运行完之后把他设置为null
// window.__func = null;

// window.__func = showLastName;
// showLastName();
// window.__func = null;


user.name = 'Sergey Blin';
user.name = 'Larry Page';

user.birth = '1950-1-1';