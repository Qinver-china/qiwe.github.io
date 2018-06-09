$(".find_nav_list li").each(function() {
    $(".find_nav_list li").eq(0).addClass("find_nav_cur").siblings().removeClass("find_nav_cur")
});
var fl_w = $(".find_nav_list").width();
var flb_w = $(".find_nav_left").width();
$(".find_nav_list").on('touchstart',
function(e) {
    var touch1 = e.originalEvent.targetTouches[0];
    x1 = touch1.pageX;
    y1 = touch1.pageY;
    ty_left = parseInt($(this).css("left"))
});
for (n = 1; n < 9; n++) {
    var page = 'pagenavi' + n;
    var mslide = 'slider' + n;
    var mtitle = 'emtitle' + n;
    arrdiv = 'arrdiv' + n;
    var tt = new TouchSlider({
        id: mslide,
        'auto': '-1',
        fx: 'ease-out',
        direction: 'left',
        speed: 300,
        timeout: 500,
        'before': function(index) {
            var as = document.getElementById(this.page).getElementsByTagName('a');
            as[this.p].className = '';
            this.p = index;
            $(".find_nav_list li").eq(this.p).addClass("find_nav_cur").siblings().removeClass("find_nav_cur")
        }
    });
    var as = document.getElementById(page).getElementsByTagName('li');
    tt.page = page;
    tt.p = 0;
    for (var i = 0; i < as.length; i++) { (function() {
            var j = i;
            as[j].tt = tt;
            as[j].onclick = function() {
                this.tt.slide(j);
                return false
            }
        })()
    }
}