carrossel = document.getElementById("carrossel")

function fowardBtn(){
    carrossel = translateX(100)
}

/* $(".itensContainer").slick(); */

/* $('.itensContainer').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5
  });
 */

  $('.itensContainer').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

/* 
  window.addEventListener('scroll', function(){
    const header = this.document.querySelector('header');
    header.classList.toggle('sticky', this.window.scrollY > 0)

  }) */