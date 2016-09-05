~function (desW) {
    var winW = document.documentElement.clientWidth;
    if(winW > desW){
        var oMain = document.querySelector(".swiper-container");
        oMain.style.margin = "0 auto";
        oMain.style.width = desW+"px";
        return;
    }
    document.documentElement.style.fontSize = winW/desW*100+"px";
}(640);

var swipe=new Swiper('.swiper-container',{
    direction:'vertical',
    loop:true,
    onSlideChangeEnd: function (swiper) {
        var ind=swiper.activeIndex;
        console.log(ind);
        var slides=swiper.slides;
        var len=slides.length;
        var trueLen=len-2;
        [].forEach.call(slides, function (item, index) {
            if(index==ind){
                item.id='page'+(ind % trueLen==0?( trueLen):ind %trueLen);
                console.log(item.id);
                return;
            }
            item.id=null;
        })
    }
});
/*这是给对应页加id的  列入 你划入到第一页 那么我就把第一页标签给个id 叫page1

 其他取消id*/