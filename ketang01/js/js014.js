console.log('执行js014.js');
let txtLocal=document.getElementById('txtLocal');
let btn5aveLocal=document.getElementById('btn5aveLocal');
let divInfo=document.getElementById('divInfo');

btnDelLocal.addEventListener('click',function(){
    //删除本地储存的数据，removeItem，参数是要删除的键名称
    localStorage.removeItem('mydata');
    txtLocal.value='';
    divInfo.innerHTML='删除了本地储存';
});
btn5aveLocal.addEventListener('click',function(){
   let local=txtLocal.value;
   //js非常的不严谨，不存在的值，空字符串
   //在逻辑判断里面都可以是false
   //！变量值表示，变量不存在，空值，空字串都会返回true
   if(!local){
    divInfo.innerHTML='请输入要保存的内容';
    return;
   }

   //保存数据到本地存储中
   //localStorage是本地存储对象
   //setItem方法是保存数据，第一个参数是保存数据的名称
   //第二个参数是保存的数据值
   localStorage.setItem('mydata',local);
   divInfo.innerHTML='保存数据成功';
});

btnLoadLocal.addEventListener('click',function(){
   //加载本地储存中的数据，getItem方法第一个参数是
   //setItem对应的名称
   let local=localStorage.getItem('mydata');
   if(locasl){
       //如果能获取到数据就放置到文本框中
       txtLocal.value=local;
       divInfo.innerHTML='读取本地数据成功!';
   } else {
       divInfo.innerHTML='没有读取到本地数据！';
   }

});

   //本地储存是（键值对模式）数据保存功能
   //可以通过浏览器保存有限容量的数据（大约是5m）
   //通过localStorage对象访问
   //setItem(键，值)来保存数据，键作为名称来检索数据
   //getItem(键)来获取保存的数据
   //通过不同的键来保存不同的数据
   //注意！！！！如果对相同的键保存多次数据
   //后面的值会覆盖前面的

//==============================================
let txtSession=document.getElementById('txtSession');
let saveSession=document.getElementById('saveSession');
let loadSession=document.getElementById('loadSession');
let delSession=document.getElementById('delSession');
//用变量设置保存的键名称
let mykey='savadata';

saveSession.addEventListener('click',function(){
    let data=txtSession.value;
    if(!data){
        divInfo.innerHTML='请输入要保存的数据';
        return;
    }
    //和本地存储的方法一样，只是对象换成sessionStorage
    sessionStorage.setItem(mykey,data);
    divInfo.innerHTML='session保存成功';
});

loadSession.addEventListener('click',function(){
    let data=sessionStorage.getItem(mykey);
    if(data){
        txtSession.value=data;
        divInfo.innerHTML='读取session存储成功';
    } else{
        divInfo.innerHTML='没有读取到session数据';
    }
})

delSession.addEventListener('click',function(){
    sessionStorage.removeItem(mykey);
    divInfo.innerHTML='移除session储存完成';
    txtSession.value='';
});

//sessionStorage和localStorage方法和功能是一模一样
//区别只有一点，localStrage存储的数据要浏览清除数据
//才会丢失，面sessionStorage存储的数据在关闭浏览器
//之后就会丢失，需要长期保存的就用local
//临时保存的就用session，更加安全