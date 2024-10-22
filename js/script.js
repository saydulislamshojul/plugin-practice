$(document).ready(function () {
  // owl carousel plugin
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    stagePadding: 50,
    autoplay: true,
    autoplayTimeout: 1500,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  // isotope plugin start
  // init Isotope
  var $grid = $(".grid").isotope({
    // options
    itemSelector: ".grid-item",
    layoutMode: "masonry",
    masonry: {
      columnWidth: 50,
      gutter: 10,
    },
  });
  // filter items on button click
  $(".buttons").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });

  $(window).on("scroll", function () {
    let scroll = $(window).scrollTop();
    if (scroll < 10) {
      $("header").removeClass("sticky");
    } else {
      $("header").addClass("sticky");
    }
  });
  $(".test-popup-link").magnificPopup({
    type: "image",

    gallery: {
      // options for gallery
      enabled: true,
    },
  });
  $(".parent-container").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",

    gallery: {
      // options for gallery
      enabled: true,
    },
  });

  $(".video-view").magnificPopup({
    type: "iframe",
  });

  // Initialize popup as usual
  $(".image-link").magnificPopup({
    type: "image",
    mainClass: "mfp-with-zoom", // this class is for CSS animation below

    zoom: {
      enabled: true, // By default it's false, so don't forget to enable it

      duration: 300, // duration of the effect, in milliseconds
      easing: "ease-in-out", // CSS transition easing function

      // The "opener" function should return the element from which popup will be zoomed in
      // and to which popup will be scaled down
      // By defailt it looks for an image tag:
      opener: function (openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is("img")
          ? openerElement
          : openerElement.find("img");
      },
    },
  });
  // $(selector).countMe(delay,speed)
  $(".counter").countMe(10,1);
  $(".counter2").countMe(10,1);
  $(".counter3").countMe(10,1);

  
});
