$(function (){

  // banner part

  $('#banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:false,
    autoplaySpeed: 2000,
    arrows:false,
    dots:true,
  });

  // team active

  $('.team_active').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:false,
    autoplaySpeed: 2000,
    arrows:false,
    dots:false,
    responsive: [
     
      {
        breakpoint: 1199.98,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint:767.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false,
        }
      },
  
    ]
  });


  // veno box

  $('.venobox').venobox({
    titleattr: 'data-title'
});
// testimonial part

$('.testimonial_active').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  dots:true,
  responsive: [
    
    
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});

// counter js
$('.counter').counterUp({
  delay: 30,
  time: 2000,
});

// testimonial part

$('.logo_active').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  dots:false,
  responsive: [
    {
      breakpoint: 1399.98,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 1199.98,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },

  ]
});

//  btn fixed 

$('.btn_top').click(function(){

  $('html,body').animate({
    scrollTop:0,
  
  },3000 );
  
  
  });
  
  $(window).scroll(function(){
  
    var abc = $(this).scrollTop();
  
  if(abc > 200){
  
    $('.btn_top').fadeIn();
  
  }
  
  else{
    $('.btn_top').fadeOut();
  }
  
  });

  var navOff = $('.main_menu') .offset().top;

  $(window).scroll(function () {

        var scrolling = $(this).scrollTop();
  
        if (scrolling > navOff) {
          
          $('.main_menu').addClass('menu_nav');
        }
  
         else{
             $('.main_menu').removeClass('menu_nav');
        }
  
     });

  // wow js
  new WOW().init();
      

});