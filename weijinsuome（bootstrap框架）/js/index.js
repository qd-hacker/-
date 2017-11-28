//轮播图
//获取数据
$(function(){
	banner();
	scroll();
});
var banner = function(){
	var getData = function(callback){
		if(window.data){
			callback && callback(window.data);
			return false;
		}
			$.ajax({
				type:'get',
				url:'js/data.json',
				data:{},
				dataType:'json',
				success:function(data){
				window.data = data;
        callback && callback(window.data);
				}
			});
	};
	// 获取页面渲染
	var render = function(){
    getData(function(data){
    var isMobile = $(window).width() < 768 ? 1 :0 ;
    var pointHtml = template('point', {list: data});
    var imageHtml = template('image', {list: data, isM: isMobile});
    $('.carousel-indicators').html(pointHtml);
    $('.carousel-inner').html(imageHtml);
    });
	};

	render();
	//当尺寸发生改变重新渲染
	 $(window).on('resize', function () {
    render();
    });
	 //手势切换
	 var star = 0;
	 var dis = 0;
	 var ismove = false;
	 $('.wjs_banner').on('touchstart',function(e){
	 	star = e.originalEvent.touches[0].clientX;
	 	console.log(2222);
	 }).on('touchmove',function(e){
    var end = e.originalEvent.touches[0].clientX;
    ismove = true;
    dis = end - star;
	 }).on('touchend',function(){
    if(ismove&&Math.abs(dis)>50){
    	if(dis>0){
    		$('.carousel').carousel('prev');
    	}else{
    		$('.carousel').carousel('next');
    	}
    }
	 })
 star = 0;
 dis = 0;
 ismove = false;
}
//滚动
  var scroll = function(){
	var $navTabs = $('.wjs_product .nav-tabs');
	var $list = $navTabs.find('li');
	var sumwidth = 0;
	$list.each(function(index,item){
      sumwidth +=  $(this).outerWidth(true);
	});
	$navTabs.width(sumwidth);
	 new IScroll($('.wjs_table_parent')[0],{
	 	scrollX:true,
    scrollY:false
	 });
}