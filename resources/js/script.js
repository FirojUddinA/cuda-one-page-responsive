$(document).ready(function () {

    // sticky (service section)
    $(".sticky-menu").waypoint(function (direction) {

        if (direction == "down") {
            $("header").addClass("sticky");
        } else {
            $("header").removeClass("sticky");
        }
    });
    $(".main-nav li").click(function () {
        $(this).addClass('active');
        $(this).siblings().removeClass("active");
    });
    $(".navbar-brand").click(function () {
        $(".main-nav li").removeClass('active');
        $(".main-nav li:first-child").addClass("active");
    });





    // mixitup (portfolio section)
    var mixer = mixitup('.container');


    // smooth scroll for ie edge safary

    // $("a").click(function (event) {
    //    if (this.hash !== ""){
    //       event.preventDefault();
    //
    //       var  hash = this.hash;
    //       $('html, body').animate({
    //          scaleTop:$(hash).offset().top},800,function () {
    //          window.location.hash = hash;
    //       });
    //    }
    //
    // });

});

function openNav() {
    document.getElementById("berger-menu").style.width = '100%';
}

function closeNav() {
    document.getElementById("berger-menu").style.width = '0';
}
