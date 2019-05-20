$('#svg').load("./dist/icon.html");
var neirongS = new Swiper('.swiper-container', {
    parallax: true,
    loop: true,
    noSwiping : true,
    watchSlidesProgress : true,
    on: {
        transitionEnd: function() {
            $('.menu-item').eq(this.realIndex).addClass('active').siblings().removeClass('active');
            navline(100)
        }
    }
});
 $('.menu-item').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
    navline();
    neirongS.slideTo($(this).index()+1, 500)
});
var reviewS = new Swiper('.swiper-yiyan', {
	  direction : 'vertical',
    loop: true,
    height: 180,
    parallax: true,
    autoHeight: true,
    autoplay: {
    		delay: 6000,
        disableOnInteraction: false,
    }
});
$('.swiper-pagination-bullet').click(function() {
    reviewS.slideTo($(this).index() + 1, 500)
});

/*一言功能*/
yylink = './dist/yiyan.txt';

$.ajax({
    url: yylink
}).done(function(c) {
    lines = c.replace(/\r\n|\r/g, '\n').trim().split('\n');
    if (lines && lines.length) {
        $('.yiyan').each(function() {
            cn = parseInt(Math.random() * lines.length);
            cn = (cn > lines.length-2 ) ? cn - 2 : cn ;
            cn = (cn % 2 === 0) ? cn + 1 : cn;
            en = cn + 1;
            $(this).find('.cn').text(lines[cn]);
            $(this).find('.en').text(lines[en]);
        });
    }
});




var footer_h = $('.footer').innerHeight(),
    header_h = $('.header').innerHeight(),
    _hei = $(window).height(),
    _wid = $(window).width();
$(window).resize(function(event) {
    footer_h = $('.footer').innerHeight();
    header_h = $('.header').innerHeight();
    _hei = $(window).height();
    _wid = $(window).width();
    auto_height();
    navline()
});
auto_height();

function auto_height() {
    $('.neirong').each(function() {
    		this_h = $(this).height();
    		m_top = _hei/2-this_h/2-header_h;
    		m_top = (m_top > 2) ? m_top :'';
    		$(this).css({'max-height': _hei - header_h - footer_h - m_top,'padding-top':m_top,'margin-top':header_h});
    		console.log(_hei+'-'+header_h+'-'+footer_h+'-'+m_top+'/'+this_h)
    });
    
    
}
var hours = new Date().getHours();

if (hours > 18) {
    $(':root,.theme,.background-img').addClass('th')
} else if (hours < 8) {
    $(':root,.theme,.background-img').addClass('th')
} else {
    $(':root,.theme,.background-img').removeClass('th')
}
$('.theme').on('click', function(e) {
    $(':root,.theme,.background-img').toggleClass('th')
});
$('.one').on('click', function(e) {
    $('.one span').toggleClass('dh')
});
navline();

function navline(time) {
    var nav = $(".navbar");
    var navLine = nav.find(".nav-line");
    if ($('.navbar>.active').length) {
        var defLineW = nav.find(".active").width();
        var defLineLeft = $(".navbar>.active").position().left + 6;
        navLine.animate({
            left: defLineLeft,
            width: defLineW
        }, time?time:0)
    } else {
        defLineW = 0;
        defLineLeft = $(".navbar>a").eq(0).position().left + 6
    }
    if (_wid > 580) {
        $(".navbar>a").hover(function() {
            var curLineW = $(this).width();
            var curLineLeft = $(this).position().left + 6;
            navLine.stop().animate({
                left: curLineLeft,
                width: curLineW
            }, 200)
        }, function() {
            navLine.stop().animate({
                left: defLineLeft,
                width: defLineW
            }, 400)
        })
    }
}

//随机背景、动画

var arr = ['#F74545','#FF6D32','#FC9015','#F3AC07','#8CA803','#64BD05','#11C33F','#08B89A','#09ACE2','#1F91F3','#3B6ED5','#664FFA','#A845F7','#F63A90'];
var arr = arr.sort(function(){return Math.random()-0.5;});
var fkdh = ['dh1','dh2','dh3','dh4','dh5','dh6','dh7','dh8','dh9','dh10'];
var fkdh = fkdh.sort(function(){return Math.random()-0.5;});
$('.fklink').each(function() {
	ind = $(this).index();
    $(this).css({'background':arr[ind],'color':arr[ind]}).addClass(fkdh[ind]);
})

$(document).ready(function() {
  $('.qj_loading').delay(400).fadeOut(500).delay(1000, function() {$(this).remove()})
})

