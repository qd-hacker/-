/**
 * Created by Administrator on 2017/10/10.
 */
$(function () {
    //楼层
    $(".lou>ul>li").mouseover(function () {

        $(this).css("backgroundColor", "hotpink").siblings().css("backgroundColor", "");
    })
    $(".lou>ul>li").mouseout(function () {

        $(this).css("backgroundColor", "");
    })
//选项卡1
    $(".main1-2>.main1-2-1").mousemove(function () {
        $(".main1-2>.main1-2-1").eq($(this).index()).css("border-bottom", "2px solid red");
        $(".main1-2>.main1-2-1").eq($(this).index()).siblings().css("border-bottom", "");
        $(".main1-3>ul").eq($(this).index()).show().siblings().hide();
    })
//锅
    $(".main1-guo>.main1-2-1").mousemove(function () {
        $(".main1-guo>.main1-2-1").eq($(this).index()).css("border-bottom", "2px solid red");
        $(".main1-guo>.main1-2-1").eq($(this).index()).siblings().css("border-bottom", "");
        $(".main1-3-guo>ul").eq($(this).index()).show().siblings().hide();
    })


})