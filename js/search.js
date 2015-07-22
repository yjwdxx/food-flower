// ],
var data=["鸡蛋饼","火腿饼","馅饼","包子","桶饼","菜夹馍","花干火腿","北京风味酱饼","杂粮煎饼","煎饼果子","罐罐面","木桶饭","凉面","云南米线","铁板炒面（饭）","凉皮+肉夹馍","包子＋混沌","冷混沌＋饼","冒菜","快餐","盖浇饭","炒菜","焖锅","鸡公煲","饺子","炒麻食","四川担担面","蒸菜","麻辣香锅","东区小火锅","砂锅"],
    time=null,
    flag=0;
window.onload=function(){
	var start=document.getElementById("start"),
	    stop=document.getElementById("stop");
	    //鼠标点击
	start.onclick=startFun;
    stop.onclick=stopFun;
    //键盘事件
    document.onkeyup=function(e){
      e=e||window.event;
      // if(e.keyCode==13){
      // 	if (flag==0) {
      //      startFun();
      //      flag=1;
      // 	}else{
      // 		stopFun();
      // 		flag=0;
      // 	}
      // }
    alert(e.keyCode);
    }
}
function startFun(){
     var title=document.getElementById("content");
     clearInterval(time);
     time=setInterval(function(){
     var random=Math.floor(Math.random()*data.length);
     title.value=data[random];
     },70);
        
}
function stopFun(){
	clearInterval(time);
}