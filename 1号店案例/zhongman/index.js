/*
* @Author: Jason
* @Date:   2017-10-12 22:28:40
* @Last Modified by:   Jason
* @Last Modified time: 2017-10-14 18:37:44
*/
  
  $(function(){
    $(".mid-v3 .mid-v4").mouseover(function(){
    	// alert(1)
    	$(this).css("border","2px solid yellow");
    })
    $(".mid-v4").mouseout(function(){
    	$(this).css("border","");
    });
  });



$(function(){
   var  k=0;
   var  timer=null;
   var  imgwidth=$(".main-m>ul>li").eq(0).width();
   var   dex=$(".main-m>ul>li").index();
   var   k=dex;
   var timer = null;
   timer = setInterval(function(){
   	   k++;
             if(k>2){
             	$(".main-m>ul").animate({
   	     	left: -(3*imgwidth)+"px"
   	     },500);
           	$(".main-m>ul").css("left","0px");
           	k=1;
             }else{
             	$(".main-m>ul").animate({
   	     	left: -(k*imgwidth)+"px"
   	     },500);
             }
   	     
   },3000)
   
   
})

  



 
