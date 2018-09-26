
// 页面轮播图功能
var mySwiper = new Swiper('#slide .swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    autoplay: {
        delay: 2000, //轮播图的延迟
        stopOnLastSlide: false, // 如果设置为true，当切换到最后一个slide时停止自动切换。（loop模式下无效）
        disableOnInteraction: false //当用户滑动的时候禁止自动轮播图 不需要禁止就为false
    },
    loop: true, // 是否开启无缝轮播图 开启无轮播图  如果不开 刷回去倒退回去
    // 如果需要分页器
});

//页面顶部颜色透明度变化功能
var header = document.querySelector('#header');
window.addEventListener('scroll',scroll);
function scroll() { 
    var scrollTop = document.documentElement.scrollTop;
    var slideHeight = document.querySelector('#slide').offsetHeight;
    var opacity = scrollTop/slideHeight;
    header.style.backgroundColor = 'rgba(222, 24, 27,' + opacity + ')';
 }