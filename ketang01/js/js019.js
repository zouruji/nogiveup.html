console.log('执行js019.js');
let btnStart=document.getElementById('btnStart');
let txtNum=document.getElementById('txtNum');
let btnTake=document.getElementById('btnTake');
let divInfo=document.getElementById('divInfo');

let total=21;
let count=0;
btnStart.addEventListener('click',function(){
   count=0;
   divInfo.innerHTML='游戏开始<br>';
   btnTake.style.display='inline';
   txtNum.style.display='inline';
});

btnTake.addEventListener('click',function(){
   //拿火柴
   let num=txtNum.nodeValue;
   if(num!='1'&&num!='2'&&num!='3'&&num!='4'){
   alert('必须是拿1-4根火柴');
   return;
   }
   //输入正确跳转换成数
   num=parseInt(num);
   //回合数增加
   count++;
   divInfo.innerHTML+='第'+count+'回合：<br>';
   divInfo.innerHTML+='你拿走了'+num+'根火柴：<br>';
   //火柴数减少
   total=total-num;
   divInfo.innerHTML+='剩余火柴数：'+total+'<br>';
   //电脑算法拿取火柴
   num=5-num;
   divInfo.innerHTML+='电脑拿走了'+num+'根火柴<br>';
   //火柴数减少
   total=total-num;
   divInfo.innerHTML+='剩余火柴数：'+total+'<br>';
   if(total==1){
       //如果剩余火柴数是1，电脑胜利
       divInfo.innerHTML+='只剩余1根火柴，电脑胜利';
       txtNum.style.display='none';
       btnTake.style.display='none';
   }
});