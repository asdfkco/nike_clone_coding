var beforePosition = document.documentElement.scrollTop
var scroll_top
document.addEventListener('scroll', function () {
    var scrolltop = document.documentElement.scrollTop
    var afterPosition = document.documentElement.scrollTop;
    if (afterPosition > 50) {
        if (beforePosition < afterPosition) {
            // 스크롤 위로 
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
    }else{
        document.getElementById("header_").style.top= '0'
    }
});