$(function(){
    var $banner = $('.sn_banner');
    var width = $banner.width();
    var $imgbox = $banner.find("ul:first-child");
    var $pointBox = $banner.find("ul:last-child");
    var animalFe = function(){
          //console.log(123);
      $imgbox.animate({transform:'translateX('+(-index*width)+'px)'},100,'easing',function(){
          if(index>=9){
              index =1;
            $imgbox.css({transform:'translateX('+(-index*width)+'px)'});
          }else if(index<0){
              index=8;
              $imgbox.css({transform:'translateX('+(-index*width)+'px)'});
          }
          $pointBox.find('li').removeClass('now').eq(index-1).addClass('now');
      })
    }
    var index = 1;
    var timer = setInterval(function(){
        index++;
        animalFe();
    },1000);

    $banner.on('swipeLeft',function(){
        index++;
        animalFe();
    }).on('swipeRight',function(){
        clearInterval(timer);
        index--;
        animalFe();
    })

})
