var beforePosition = document.documentElement.scrollTop
var scroll_top
var search_ = document.getElementById('search_head')
document.addEventListener('scroll', function () {
    var scrolltop = document.documentElement.scrollTop
    var afterPosition = document.documentElement.scrollTop;
    if (afterPosition > 50) {
        if (beforePosition < afterPosition) {
            document.getElementById("header_").style.transform = 'scaleY(0)'
            document.getElementById("header_").style.top = '0'
            document.getElementById("up_scroll").style.display = 'none'
            console.log("아래로간당")
        } else {
            document.getElementById("header_").style.transform = 'scaleY(1)'
            document.getElementById("up_scroll").style.display = 'block'
            console.log("위로간당")
        }
    }
    beforePosition = afterPosition;
    if (beforePosition == 0) {
        scroll_top = true
    } else {
        scroll_top = false
    }
    if (scroll_top == true) {
        document.getElementById("header_").style.position = 'relative'
    } else {
        document.getElementById("header_").style.position = 'fixed'
    }
});
window.onload = function () {
    var header_ = document.getElementById('header_')
    var search_ = document.getElementById('search_head')
    var search_input = document.getElementById('search_input')
    var search_img = document.getElementById('search_png')
    var close_btu = document.getElementById('close_btu')
    var back_up = document.getElementById('back_op_search')

    search_input.addEventListener('click', function () {
        search_.style.transform = 'scaleY(1)'
        header_.style.zIndex = '100'
        back_up.style.height='100vh'
        back_up.style.top='0'
    });
    search_img.addEventListener('click', function () {
        search_.style.transform = 'scaleY(1)'
        header_.style.zIndex = '100'
        back_up.style.height='100vh'
        back_up.style.top='0'
    });
    close_btu.addEventListener('click', function () {
        search_.style.transform = 'scaleY(0)'
        header_.style.zIndex = '999'
        back_up.style.height='0'
    });
}
function banner_close() {
    var banner = document.getElementById('banner')
    banner.style.display = 'none'
}