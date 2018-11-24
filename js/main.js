setInterval(function(){logodh()},20000);
function logodh() {$('.one span').toggleClass('dh');}
$(window).resize(function() {dtwwhh()});
dtwwhh();
function dtwwhh() {
        var ww = window.innerWidth;
        var hh = window.innerHeight;
        $(".list").css({
            'height': hh - 50 + 'px',
            'padding-top': hh / 4 + 'px'
        });
        $(".caidan").css({
            'max-height': hh - 100 + 'px',
        });
        if (ww < 767) {
            /*========== 点击菜单内容关闭下拉部分 ========*/
            $('.click_off,#slider1,#review').on('click', function() {
                $(".navbar-collapse").collapse('hide');
                $('.menu-t1,.menu-t2,.menu-t3').removeClass('is-clicked');
                $('#tableList1,#tableList2,#tableList3,#erji1 li,#erji2 li,#erji3 li').removeClass('click');
            });
            /*=== 菜单按钮动画/点击菜单内容关闭下拉部分时候恢复菜单按钮样式 ===*/
            $('.menu-toggle1').on('click', function() {
                $('.menu-t1,.menu-t2,.menu-t3').toggleClass('is-clicked');
            });
        }
    }


function ft(){
//alert(document.getElementById("myFrame").document);
    document.getElementById("koyoz").contentWindow.document.getElementById("mobile05").style.width='100px';

}


/*一言功能*/
yylink = "https://api.xiaolin.in/hitokoto/?code=text";

for (var i = 1; i < 6; i++) {
	$('#yiyan_e' + i).load(yylink)
}
yiyanxh();
function yiyanxh() {
	setTimeout(function yiyanfun() {
		for (var i = 1; i < 6; i++) {
			$('#yiyan_e' + i).fadeOut(280).load(yylink).fadeIn(380)
		}
		yiyanxh()
	}, 30000)
}
$('#yiyan_e1,#yiyan_e2,#yiyan_e3,#yiyan_e4,#yiyan_e5').on('click', function() {
	$(this).fadeOut(280).load(yylink).fadeIn(380)
})

    /*===跟随时间切换主题===*/

    $("#halb1,#halb2").hide(300);
    var hours = new Date().getHours();
    if (hours > 18) {
        $(':root,.theme,.welcome-area').addClass('th');
    } else if (hours < 8) {
        $(':root,.theme,.welcome-area').addClass('th');
    } else {
        $(':root,.theme,.welcome-area').removeClass('th');
    }


(function($) {
    var $body = $("body"),
        $window = $(window);
    /*======预载======*/
     $(window).on("load",function() {
        $('.spinner').fadeOut();
        $('.preloader').delay(350).fadeOut(500);
        $body.delay(350).css({
            'overflow': 'visible'
        });
    });

    /*=== LOGO点击动画  ===*/
    $('.one').on('click', function(e) {
        $('.one span').toggleClass('dh');
    });
    /*=== 主题切换  ===*/
    $('.theme').on('click', function(e) {
        $(':root,.theme,.welcome-area').toggleClass('th');
    });

    /*=== 搜索框与LOGO切换并,自动获取焦点与失去焦点 ===*/
    var count = 0;
    $('#search-b').click(function() {
        count++;
        var isEven = function(someNumber) {
            return (someNumber % 2 === 0) ? true : false;
        };
        if (isEven(count) === false) {
            document.getElementById("sbi").focus();
            $('.logo a,.d1').addClass('click');

        } else if (isEven(count) === true) {
            document.getElementById("sbi").blur();
            $('.logo a,.d1').removeClass('click');
        }
    });
    $("#slider1,#review").on('click', function(e) {
        document.getElementById("sbi").blur()
    });

    /*========== 二级菜单的显示与隐藏切换 ========*/
    $('#tableList1').on('click', function(e) {
        $('#tableList1,#erji1 li').toggleClass('click');
    });
    $('#tableList2').on('click', function(e) {
        $('#tableList2,#erji2 li').toggleClass('click');
    });
    $('#tableList3').on('click', function(e) {
        $('#tableList3,#erji3 li').toggleClass('click');
    });

    /*=====滚动名言切换js====*/
    $(".review-list").owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
})(jQuery);
