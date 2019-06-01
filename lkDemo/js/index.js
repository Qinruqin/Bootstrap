$(function () {
    $(window).on("resize", function () {
        let width = $(window).width();
        
        let isShowBigImage = width >= 800;
      
        let $allItems = $("#lk_carousel .item");

        $allItems.each(function (index, item) {
            let src = isShowBigImage ? $(item).data("lg-img") : $(item).data("sm-img");
            let imgUrl = 'url("' + src +'")';

            $(item).css({
                backgroundImage: imgUrl
            });

            if(!isShowBigImage){
                let $img = "<img src='" + src + "'>";
                $(item).empty().append($img);
            }else {
                $(item).empty();
            }

        });
    });

    $(window).trigger("resize");

    // 2. 工具提示
    $('[data-toggle="tooltip"]').tooltip();

    // 3. 动态处理宽度
    $(window).on("resize", function () {
        let $ul = $("#lk_product .nav");
        let $allLis = $("[role='presentation']", $ul);
        let totalW = 0;
        $allLis.each(function (index, item) {
             totalW += $(item).width();
        });

        let parentW = $ul.parent().width();

        if(totalW > parentW){
            $ul.css({
                width: totalW + "px"
            })
        }else {
            $ul.removeAttr("style");
        }
    });

    // 4. 导航处理
    let allLis = $("#lk_nav li");
    
    $(allLis[2]).on("click", function () {
        $("html,body").animate({ scrollTop: $("#lk_hot").offset().top }, 1000);
    });


    $(window).trigger("resize");
});