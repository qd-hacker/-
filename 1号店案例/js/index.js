//轮播图
$(function(){
    var timer = null;
    autoPlay();
    var json = {
        0:"#4E0998",
        1:"#6768C5",
        2:"#EBD9C1",
        3:"#7A3B34",
        4:"#D3BE91",
        5:"#6FBDFF",
        6:"#F9EDDF",
        7:"#52C69F"
    }
    $("#lunbo li a").css("background","url(images/00.jpg) no-repeat");
    $("#lunbo").mouseenter(function(){
        clearInterval(timer);
        $("#lunbo .btn").css("display","block");
    }).mouseleave(function(){
        $("#lunbo .btn").css("display","none");
        autoPlay();
    })
    $("#lunbo li:eq(0) a").css("opacity","1");
    $("#lunbo .span span:eq(0)").css("backgroundColor","#ff4040");
    $("#lunbo .span span").mouseover(function(){
            var dis = $(this).index();
            dis2=dis;
            $("#lunbo .span span:eq("+dis2+")").css("backgroundColor","#ff4040").siblings().css("backgroundColor","rgba(255, 255, 255, 0.7)");
            $("#lunbo li:eq("+dis+")").children("a").css("opacity","1");
            $("#lunbo li:eq("+dis+")").css("opacity","1").siblings().children("a").css("opacity","0");
            $("#lunbo li:eq("+dis+") a").css("background","url(images/0"+dis+".jpg) no-repeat");
            $("#main1").css("backgroundColor",json[dis2]);
        }

    )
    var dis2 = 0;
    $("#lunbo .btn span:eq(0)").click(function(){
            dis2++;
        if(dis2>7){
            dis2=0;
        }
            $("#lunbo .span span:eq("+dis2+")").css("backgroundColor","#ff4040").siblings().css("backgroundColor","rgba(255, 255, 255, 0.7)");
            $("#main1").css("backgroundColor",json[dis2]);
            $("#lunbo li:eq("+dis2+")").children("a").css("opacity","1");
            $("#lunbo li:eq("+dis2+")").css("opacity","1").siblings().children("a").css("opacity","0");
            $("#lunbo li:eq("+dis2+") a").css("background","url(images/0"+dis2+".jpg) no-repeat");

    })
    $("#lunbo .btn span:eq(1)").click(function(){
        dis2--;
        if(dis2<0){
            dis2=7;
        }
        $("#lunbo .span span:eq("+dis2+")").css({"backgroundColor":"#ff4040","border":"2px solid #fff"}).siblings().css("backgroundColor","rgba(255, 255, 255, 0.7)");
        $("#lunbo li:eq("+dis2+")").children("a").css("opacity","1");
        $("#lunbo li:eq("+dis2+")").css("opacity","1").siblings().children("a").css("opacity","0");
        $("#lunbo li:eq("+dis2+") a").css("background","url(images/0"+dis2+".jpg) no-repeat");
        $("#main1").css("backgroundColor",json[dis2]);
    })

    function autoPlay(){
       clearInterval(timer);
        timer = null;
         timer = setInterval(function(){
            dis2++;
            if(dis2>7){
                dis2=0;
            }
             $("#lunbo .span span:eq("+dis2+")").css("backgroundColor","#ff4040").siblings().css("backgroundColor","rgba(255, 255, 255, 0.7)");
            $("#lunbo li:eq("+dis2+")").children("a").css("opacity","1");
            $("#lunbo li:eq("+dis2+")").css("opacity","1").siblings().children("a").css("opacity","0");
            $("#lunbo li:eq("+dis2+") a").css("background","url(images/0"+dis2+".jpg) no-repeat");
            $("#main1").css("backgroundColor",json[dis2]);
        },5000)
    }
    //倒计时
    var timer2 = null;
    var num3 = 1;
    var num2 = 10;
    var num1 = 2;
    timer2 = setInterval(function(){
        num2--;
        if(num2<0){
            num2 = 59;
            num1--;
            if(num1<10){
                $("#activity .w .left .span span:eq(1)").html("0"+num1);
            }else{
                $("#activity .w .left .span span:eq(1)").html(num1);
            }

        }
        if(num2<10){
            $("#activity .w .left .span span:eq(2)").html("0"+num2);
        }else{
            $("#activity .w .left .span span:eq(2)").html(num2);
        }

        if($("#activity .w .left .span span:eq(1)").html()=="0-1"){
                $("#activity .w .left .span span:eq(0)").html("00");
                num1 = 59;
            $("#activity .w .left .span span:eq(1)").html(num1);
        }
    },1000);


    //active开始
    $("#activity .w .right li  img").mouseover(function(){
        $(this).stop().animate({
            right:26
        },200)
    }).mouseout(function(){
        $(this).stop().animate({
            right:21
        },200)
    })
    //top活动页
    setTimeout(function(){
        $("#activity3").mouseover(function(){
            $("#activity3").stop().animate({height:250});
            $("#activity2").stop().slideDown();
            $("#activity1").stop().slideUp();
        })
    },100)
          $("#activity3").mouseout(function(){
              $("#activity3").stop().animate({height:80});
              $("#activity2").stop().slideUp();
              $("#activity1").stop().slideDown();
          })
 //添加图片
 $("#main2 .w .right .right-bottom:eq(0)").siblings(".right-bottom").hide();
 $("#main2 .w .right .right-top li").mouseover(function(){

     var k = $(this).index();

      setTimeout(function(){
          $("#main2 .w .right .right-bottom").hide();
          $("#main2 .w .right .right-top li:eq("+k+")").children("a").css("color","#F22E31").parents("li").siblings().children().css("color","#666666");
          $("#main2 .w .right .right-top li:eq("+k+")").children("a").css("border-bottom","2px solid #F22E31").parents("li").siblings().children().css("border-bottom","none");
          $("#main2 .w .right .right-bottom:eq("+k+")").show();
      },300);

 })
    //图片移动
    $("#main3 .w .right .rrt .rrt-l img").mouseover(function(){
        $("#main3 .w .right .rrt .rrt-l img").stop().animate({"right":"0"});
    }).mouseout(function(){
        $("#main3 .w .right .rrt .rrt-l img").stop().animate({"right":"-5"});
    })
    //main4添加图片
    $("#main4 .w .main4-c .main4CBottom li a img").mouseover(function(){
        $(this).stop().animate({"right":"15"},200)
    }).mouseout(function(){
        $(this).stop().animate({"right":"10"},200)
    })

    $("#main7 .w .right ul li a img").mouseover(function(){
        $(this).stop().animate({"right":0},200)
    }).mouseout(function(){
        $(this).stop().animate({"right":-5},200)
    })
    //特效
    $("#shop .w ul li").mouseover(function(){
        $(this).css("border","1px solid rgba(0,0,0,0.3)")
    }).mouseout(function(){
        $(this).css("border","1px solid #fff")
    })
    $(window).scroll(function(){
        console.log($(this).scrollTop());
        var num11 = $(this).scrollTop();
        if(num11>697){
           $("#secTop").slideDown(250);
        }else{
            $("#secTop").slideUp(250);
        }
    })
      //楼层
    function goL(target,spead){//第一个参数 目标点的scroTop 第二个参数 速度
        var timer2=null;
        var cur = $('html').scrollTop();
        if(target<cur){
            timer2 = setInterval(function(){
                cur-=spead||150;
                if(cur<=target){
                    cur=target;
                    clearInterval(timer2)
                    timer2=null;
                }
                $('html').scrollTop(cur);
            },20)
        }
        if(target>cur){
            timer2 = setInterval(function(){
                cur+=spead||150;
                if(cur>=target){
                    cur=target;
                    clearInterval(timer2)
                    timer2=null;
                }
                $('html').scrollTop(cur);
            },20)
        }
        if(cur==target){
            $('html').scrollTop(target);
        }
    }

})
