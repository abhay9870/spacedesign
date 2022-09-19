(function ($) {
  Drupal.behaviors.drupalBookOwlCarousel = {
    attach: function (context, settings) {
      // JS for Mobile Menu Toggle
      let hamburger = document.querySelector(".hamburger");
      let menu = document.querySelector(".nav");

      hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("isactive");
        menu.classList.toggle("active");
      });
      // JS for Mobile Menu Toggle
    },
  };
})(jQuery);
