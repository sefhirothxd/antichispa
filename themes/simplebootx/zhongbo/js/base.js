$(function(){$(".m-kf .kf-item2 .ewm").click(function(e){e.preventDefault();var i=$(this),l=i.siblings(".ewm3");if(l.is(":hidden")){l.show();i.addClass("active")}else{l.hide();i.removeClass("active")}});$(".slider").slick({autoplay:true,autoplaySpeed:2e3,draggable:true,arrows:true,dots:true,fade:true,speed:900,infinite:true,cssEase:"cubic-bezier(0.7, 0, 0.3, 1)",touchThreshold:100});$("#j-gotop").click(function(e){e.preventDefault();$("body, html").animate({scrollTop:0},350)});$(window).scroll(function(e){if(i.time){clearTimeout(i.time)}i.time=setTimeout(i,100)});function i(e){var i=$(this),l=i.scrollTop(),t=$("#j-gotop");if(l>300){t.css("display","block")}else{t.css("display","none")}}$tab=$("body");$(window).on("scroll",function(){if($(document).scrollTop()>0){$tab.addClass("fixed")}else{$tab.removeClass("fixed")}});baguetteBox.run(".baguetteBoxOne",{animation:"fadeIn"});$(".j-lazy").lazyload({effect:"fadeIn"});$tab=$("body");$(window).on("scroll",function(){if($(document).scrollTop()>0){$tab.addClass("fixed")}else{$tab.removeClass("fixed")}});var l=$("#tab li");var t=$("#content .chanxn");l.click(function(){var e=$(this);var i=e.index();l.removeClass();e.addClass("current");t.css("display","none");t.eq(i).css("display","block")});$(".header .inpu").click(function(e){e.preventDefault();var i=$(this),l=i.next();if(l.is(":hidden")){l.show()}else{l.hide()}});$(".m-hdlang .lang-click").click(function(e){e.preventDefault();var i=$(this),l=i.next();if(l.is(":hidden")){l.slideDown()}else{l.slideUp()}});$(".list .dan_p").click(function(){var e=$(this),i=e.next();if(i.is(":hidden")){i.slideDown()}else{i.slideUp()}});$(".m2_l .dan_p").click(function(){var e=$(this),i=e.next();if(i.is(":hidden")){i.slideDown()}else{i.slideUp()}})});$("table").wrap("<div class='table'></div>");$(".img-scroll").DY_scroll({toggle:true,auto:true});$(".prob-pic-small").DY_scroll({toggle:true,auto:true});

$(function(){
    $(".m2_l .subNav").click(function(event){
        _src=$(this).find("a").attr("href")
        if($(this).is('.currentDd')){   
            window.location.href=_src
        }
        else if($(this).not('.currentDd')){
             event.preventDefault();
            $(this).addClass("currentDd").siblings(".subNav").removeClass("currentDd")
            $(this).next(".navContent").slideDown(500).siblings(".navContent").slideUp(500);
        };
    })  
})