//选项卡切换
$(".pre2-nav>ul>li").mouseover(function(){
	    			
$(this).addClass("active").siblings().removeClass("active");
$(this).find("a").css("color","#fff");
$(this).siblings().find("a").css("color","#B8A4E1");
// 获取当前你移上的li的索引  index();
var idx = $(this).index(".pre2-nav>ul>li");	    			
$(".goods").eq(idx).addClass("xianshi")
.siblings().removeClass("xianshi");
	    			
})
//--------------------------------------------------------
//当鼠标移上让产品图动动
$(".goods-img>img").mouseover(function(){
	$(this).css("padding","0px 10px 10px 0");
})
$(".goods-img>img").mouseout(function(){
	$(this).css("padding","5px 5px 5px 5px");
	});
// 超级大牌图片上移
$(".chaoji>ul>li").mouseenter(function(){
	$(this).animate({"top":0},200);
})
$(".chaoji>ul>li").mouseleave(function(){
	$(this).animate({"top":5},200);
	});
// =====================================
// 楼层
$(".nav>ul>li").not(":last").click(function () {
		//获取索引
		var _index=$(this).index();
		//添样式的
		$(".nav>ul>li").not(":last").removeClass("active2");
		$(this).addClass("active2");
		// 获取当前对应索引的楼层的距离顶部的距离加上该楼层的自身高度的一半
		var top=$(".picture .louti").eq(_index).offset().top;
		// 运动到对应楼层
		$("body,html").animate({
			scrollTop:top
		},1000);
	});
// 滚动的时候  自动添加类
	$(window).scroll(function () {
			//获取滚动的距离
			var _top=$(window).scrollTop();
			//循环遍历 每一个楼层 判断当前的滚动过的距离 是否小于等于哪些楼层，第一次循环就卡住（return出去），让当前楼层添加样
			$(".louti_con>.louti").each(function (i,ele) {
				var ind= $(ele).index();
				if(_top<=$(ele).offset().top+$(ele).outerHeight()*2/3){
					// if(_top<=$(ele).offset().top){
					$(".nav ul li").removeClass("active2");
					$(".nav ul li").eq(ind).addClass("active2");
					return false;
				}

				// if(_top<=$(ele).offset().top){
				// 	console.log(ind);
				// 	// console.log(ele);
				// 	var ssd = $(".nav>ul>li");
				// 	ssd.removeClass("active2");
				// 	ssd.eq(ind).addClass("active2");
				// 	return false;
				// }
			})
		});

	// //返回顶部
	$(".nav>ul>li.last").click(function () {
		$('body,html').animate({
			scrollTop:0 //直接滚动到0
		},2000);
	})	
  // ==================================================
	// 滑入，淡出广告动画
	$(".donghua").animate({
					top:70,
					opacity:1
				},1000,"linear");
	
	var timer = null;
   timer = setTimeout(function(){
   	$(".donghua").animate({
					opacity:0
				},3000,"linear");
   // $(".donghua").hide();
    },2000)

$(".donghua").click(function(){
     $(".donghua").hide();
    		})

// ================================
var availableTags = [
			"洗面奶",
			"洗发露",
			"香水",
			"口红",
			"套装",
			"日韩 护理套装",
			"面部精华",
			"彩妆",
			"日韩 面膜",
			"乳液",
			"日韩 眼霜",
			"补水",
			"底妆",
			"日韩 彩妆",
			"保湿乳 套装",
			"面膜 套装",
			"卸妆 套装",
			"身体 护理",
			"护理 套装",
			"水乳 套装",
			"香水 套装",
			"香水 彩妆",
			"日韩 洗发水"
		];
$( "#autocomplete" ).autocomplete({
	source: availableTags
}); 
