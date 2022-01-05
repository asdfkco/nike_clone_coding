var beforePosition = document.documentElement.scrollTop
var scroll_top
var search_ = document.getElementById('search_head')
document.addEventListener('scroll', function () {
    var scrolltop = document.documentElement.scrollTop
    var afterPosition = document.documentElement.scrollTop;
    if (afterPosition > 50) {
        if (beforePosition < afterPosition) {
            document.getElementById("header_").style.transform = 'scaleY(0)' 
            document.getElementById("header_").style.top= '0'
            console.log("아래로간당")
        } else {
            document.getElementById("header_").style.transform = 'scaleY(1)' 
            console.log("위로간당")
        }
    }
    beforePosition = afterPosition;
    if(beforePosition == 0){
        // document.getElementById("header_").style.top = '120px' 
        scroll_top = true
    }else{
        scroll_top = false
    }
    if(scroll_top==true){
        document.getElementById("header_").style.top= '36px'
        document.getElementById("header_").style.position='static'
    }else{
        document.getElementById("header_").style.top= '0'
        document.getElementById("header_").style.position='fixed'
    }
});
window.onload = function () {
    var header_ = document.getElementById('header_')
    var search_ = document.getElementById('search_head')
    var search_input = document.getElementById('search_input')
    var search_img = document.getElementById('search_png')
    var close_btu = document.getElementById('close_btu')


    search_input.addEventListener('click', function () {
        search_.style.display='block'
        header_.style.display='none'
    });
    search_img.addEventListener('click', function () {
        search_.style.display='block'
        header_.style.display='none'
    });
    close_btu.addEventListener('click', function () {
        search_.style.display='none'
        header_.style.display='flex'
    });
}
function banner_close(){
    var banner = document.getElementById('banner')
    banner.style.display='none'
}