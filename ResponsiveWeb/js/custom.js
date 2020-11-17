//이미지 슬라이더
$(".slider").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: true,
                dots: false
                }
        }
    ]
});