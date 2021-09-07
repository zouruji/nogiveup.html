
/*
js可以控制style的值
任何页面元素都有style属性
该属性可以获取或者设置元素样式
通过style，具体样式名称来控制具体的属性值
例如 元素。style.color='#ff0000'来修改元素的字体颜色
元素。style.width='100px'来修改元素的宽度
需要注意！！！！样式的名称如果带有减号需要转换成驼峰表达式
反过来也需要转换
例如，要设置font-size样式
需要写成 元素.style.fontSize=......
同理 元素.style.backgroundImage是设置background-image
样式名称的减号要去掉，然后将减号后的字母转大写
反过来就是将大写字母转小写前面补减号
*/

let divTimer=document.getElementById('divTimer');

//setInterval函数是定时任务
//第一个参数是定时执行的代码块(function)
//第二个参数是定时的间隔毫秒数
//简单的说就是每隔第二个参数毫秒值就会执行
//第一个参数里面的代码
setInterval(function(){
    divTimer.innerHTML=divTimer.innerHTML
    +'计算机添加信息<br>';
},1000);
