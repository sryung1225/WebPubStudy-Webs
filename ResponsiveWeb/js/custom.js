//라이트 박스 (lightgallery.js)
$(".lightbox").lightGallery({
    
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