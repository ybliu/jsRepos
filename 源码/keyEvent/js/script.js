var data=['Phone5','Ipad','三星笔记本','佳能相机','惠普打印机','谢谢参与','50元充值卡','1000元超市购物券'],
    timer=null,
    flag=0,ctime=0;

window.onload=function(){
    var play=document.getElementById('play'),
        stop=document.getElementById('stop');

    // 开始抽奖
    play.onclick=playFun;
    stop.onclick=stopFun;

   // 键盘事件
   document.onkeyup=function(event){
      event = event || window.event;
      if(event.keyCode==13){
         if(flag==0){
           playFun();
           flag=1;
         }else{
           stopFun();
           flag=0;
         }
      }
   }
}
//Math.random()是令系统随机选取大于等于 0.0 且小于 1.0 的伪随机 double 值，是Java语言常用代码。
//例如：var a:Number=Math.random()*2+1，设置一个随机1到3的变量。
/*1、Math.random()：返回 0 ~ 1 之间的随机数。
 
2、Math.round()：四舍五入取整。
3、Math.ceil()：返回值：返回大于或等于x，并且与之最接近的整数。
注：如果x是正数，则把小数“入”；如果x是负数，则把小数“舍”。

4、Math.floor()：返回值：返回小于或等于x，并且与之最接近的整数。
注：如果x是正数，则把小数“舍”；如果x是负数，则把小数“入”。*/
function playFun(){
	var title=document.getElementById('title');
	var play=document.getElementById('play');
	clearInterval(timer);
	timer=setInterval(function(){
	   var random=Math.floor(Math.random()*data.length);
	   title.innerHTML=data[random];
     ctime++;
	},50);
    play.style.background='#999';
}

function stopFun(){
	clearInterval(timer);
	var play=document.getElementById('play');
	play.style.background='#036';
}