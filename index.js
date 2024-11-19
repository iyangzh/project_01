$(function() {

    //点击事件，数字加一，图片加一
    $(".bt1").click(function() {
        //数字加一
        var n = $(this).siblings(".cen").children("div").text();
        n++;
        $(this).siblings(".cen").children("div").text(n);
        //图片路径加一
        var src = './img/SA'+ n +'.jpg' 
        $(this).parent(".con-1").siblings(".img-1").children("img").prop("src", src);
    })
    //数字减一，图片减一
    $(".bt2").click(function() {
        var n = $(this).siblings(".cen").children("div").text();
        if(n == 0) {
            return false;
        }
        n--;
        $(this).siblings(".cen").children("div").text(n);
        //图片减一
        var src = './img/SA'+ n +'.jpg' 
        $(this).parent(".con-1").siblings(".img-1").children("img").prop("src", src);
    })
})
            
