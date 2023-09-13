$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Shoxrux Dovlatov", "", "a Developer", "",  "a Freelancer", ""],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    //loader fade script
    $(window).on("load", function(){
        $(".loader-wrapper").fadeOut("slow");
    });
});

function clock(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    hours = updateTime(hours);
    minutes = updateTime(minutes);
    seconds = updateTime(seconds);

    // Good morning, evening, afternoon condition
    if(hours < 12){
        var greeting = "Morning!";
    }
    if(hours >= 12 && hours <= 18){
        var greeting = "Afternoon!";
    }
    if(hours >= 18 && hours <= 24){
        var greeting = "Evening!"
    }
    document.getElementById("greeting").innerHTML = greeting
}
function updateTime(k){
    if(k < 10){
        return "0" + k
    } else{
        return k
    }
}
clock();    


// services page font-awesome hover effects

// $(document).ready(function(){
//     $('.card').hover(function() {
//         $(this).removeClass('fa-spin');
//     }, function() {
//          $(this).addClass('fa-spin');}
//     );
// });

