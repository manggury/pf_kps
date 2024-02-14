$(function () {
    window.onscroll = function () { scrollFunction() };
    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            $('.header').addClass("on");
        } else {
            $('.header').removeClass("on");
        }
    }
    $('.visual_wrap').slick({
        arrows: true,
        // fade: true,
        autoplay: true,
    });

    $('.header .xi-bars').on('click', function (e) {
        e.preventDefault();
        $('.header .gnb').toggleClass('on');
    });
    $('.gnb').on('wheel', function (e) {
        if ($('.gnb').hasClass('on'))
            e.preventDefault();
    });

    document.addEventListener("DOMContentLoaded", function () {
        var videoContainer = document.getElementById("videoContainer");
        var videoOverlay = document.getElementById("videoOverlay");
        var video = document.getElementById("scrollVideo");

        // 비디오가 표시될 위치 계산
        var videoTop = videoContainer.offsetTop;
        var videoHeight = videoContainer.offsetHeight;

        // 스크롤 이벤트 리스너 등록
        window.addEventListener("scroll", function () {
            // 스크롤 위치 계산
            var scrollPosition = window.scrollY;

            // 특정 지점에 도달하면 비디오 재생
            if (scrollPosition >= videoTop - window.innerHeight && scrollPosition <= videoTop + videoHeight) {
                video.play();
                videoOverlay.style.display = "none"; // 오버레이 숨김
            } else {
                video.pause();
                videoOverlay.style.display = "flex"; // 오버레이 표시
            }
        });

    });

});