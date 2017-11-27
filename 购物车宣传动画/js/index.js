$(function(){
	$('.contanior').fullpage({
		sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
		verticalCentered: false,
		scrollingSpeed:1000,
        navigation: true,
    //第二页加载完成的时候第二页动画开始执行                                                                                                                                               :function(index){
   afterLoad:function (link,index) {
    	$('.section').eq(index-1).addClass('now');
    },
	//离开第二页的时候
	onLeave:function(index,nextIndex,direction){
     if(index == 2 && nextIndex ==3){
		$('.section').eq(index-1).addClass('leaved');
	 }else if(index == 3 && nextIndex ==4){
        $('.section').eq(index-1).addClass('leaved');  
	 }else if(index == 5 && nextIndex == 6){
        $('.section').eq(index-1).addClass('leaved'); 
        $('.screen6 .box').addClass('show'); 
	 }else if(index == 6 && nextIndex == 7){
                $('.screen07 .star').addClass('show');
                $('.screen07 .text').addClass('show');
                $('.screen07 .star img').each(function (i, item) {
                $(this).css('transition-delay',i*0.5+'s');
                });
            }
	},
	afterRender:function(){
		$('.more').on('click',function () {
			$.fn.fullpage.moveSectionDown();
		});
		// $('.screen04 .cart').on('transitionend',function () {
		// 	/* :last :first :visible :hidden :checked :selected jquery扩展选择器*/
		// 	$('.screen04 .address').show().find('img:last').fadeIn(1000);
		// 	$('.screen04 .text').addClass('show');
		// });
		         $('.screen08').on('mousemove',function (e) {
                $(this).find('.hand').css({
                    left:e.clientX -190,
                    top:e.clientY - 20
                });
            }).find('.again').on('click',function () {
                $('.lea.now,ved,.show').removeClass('now').removeClass('leaved').removeClass('show');
                $('.content [style]').removeAttr('style');
                $.fn.fullpage.moveTo(1);
            });
	},
  });
})
