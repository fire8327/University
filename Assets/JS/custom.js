/*jshint esnext: true */
$("#toggle, #overlay, .scroll").click( () => {
  $("#menu").toggleClass("-translate-y-72");
  $("body").toggleClass("overflow-hidden");
  $("#overlay").toggleClass("z-40");
  $("#overlay").toggleClass("opacity-0");
});

/* scroll */
$("a.scroll").on("click", function(e){
  e.preventDefault();
  var anchor = $(this).attr('href');
  $('html, body').stop().animate({
      scrollTop: $(anchor).offset().top - 60
  }, 1000);
});

/* back to top */
var toTopButton = document.getElementById("to-top-button");
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        toTopButton.classList.remove("hidden");
    } else {
        toTopButton.classList.add("hidden");
    }
}

function goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}