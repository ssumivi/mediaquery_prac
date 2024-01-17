$(document).ready(function(){
    var portfolioSwiper = new Swiper(".portfolioSwiper" , {
        direction: "horizontal",
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        // navigation
        navigation: {
            nextEl: ".portfolioSwiper .next",
            prevEl: ".portfolioSwiper .prev",
          },
        breakpoints: {
            //up 320
            320:{
                slidesPerView: 1,
            },
            //up 480
            480:{
                slidesPerView: 2,
                spaceBetween: 30,
            },
            //up 768
            768:{
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1050:{
                slidesPerView: 4,
                spaceBetween: 10,
            }
        } 
    })
    //toggle button
    var menuToggleBtn = $(".menu_toggle_btn")
    mainMenu = $(".main_menu-1")
    menuToggleBtn.click(function(){
        mainMenu.slideToggle()
    })

    })