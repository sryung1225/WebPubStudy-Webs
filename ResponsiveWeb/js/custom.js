//네비게이션 접기/펼치기
$(".btn").click(function(e){
    e.preventDefault();
    $(".nav").slideToggle();
    
    $(".btn").toggleClass("open");
    if( $(".btn").hasClass("open") ){
        //open이 있을 때
        $(".btn").find("i").attr("class","fa fa-arrow-circle-up");
    } else {
        //open이 없을 때
        $(".btn").find("i").attr("class","fa fa-arrow-circle-down");
    }
});
$(window).resize(function(){ //브라우저 사이즈 값 인식
    var wWidth = $(window).width();
    if(wWidth > 600){
        $(".nav").removeAttr("style");
    }
});

//라이트 박스 (lightgallery.js)
$(".lightbox").lightGallery({
    autoplay: true,
    pause: 3000,
    progressBar: true
});

//이미지 슬라이더 (slick.js)
$(".slider").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                autoplay: false
            }
        }
    ]
});
