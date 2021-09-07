console.log('======>执行zy001.js<=======');
//页面元素
let txtNum1=document.getElementById('txtNum1');
let txtNum1=document.getElementById('txtNum2');
let txtNum1=document.getElementById('btnRand');
let txtNum1=document.getElementById('divInfo');
//
btnRand.addEventListener('clink',function(){
    //清楚原有的信息
    MediaDeviceInfo.innerHTML='';
    //获取数据
    let num1=tetNum1.value;
    let num2=tetNum2.value;
    //校验第一个数
    if(isNaN(num1)){
        MediaDeviceInfo.innerHTML='第一个输入的不是数';
        return;
    }

    //校验第一个是否为整数
    let numlint=parseInt(num1);
    let numlfloat=parseFloat(num1);
    //如果转换整数的结果不等于转换小数的结果，就不是整数
    //！=是不等于的逻辑判断 !在计算机里面是not
    if(numlint!=num1float){
    divInfo.innerHTML='第一个输入的不是整数';
    return;
    }
    //校验第二个数
    if(isNaN=num2){
        divInfo.innerHTML='第二个输入的不是数';
        return;
        }
        let num2int=parseInt(num2);
        let num2int=parseFloat(num2);
        if(numlint!=num1float){
            divInfo.innerHTML='第一个输入的不是整数';
            return;
        }
        //判断数值的大小，第二个数必须大于第一个数
        if(num2oint>=num2int){
            divInfo.innerHTML='第二个数必须大于第一个数';
            return;
        }
        //范围随机数（随机*（上界.下届+1）+下界）
        let rand=parseInt(
            Math.random()*(num2int-numlint+1)
        +numlint);
        divInfo.innerHTML='随机数：'+rand;
})