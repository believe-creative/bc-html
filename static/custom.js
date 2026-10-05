console.log("Script has loaded correctly");
$(document).ready(function () {
  console.log("Script has loaded correctly");
  $("body").css("overflow-y", "scroll");
  $(window).scroll(function () {
    StickyHeader();
  });
  function StickyHeader() {
    var headerOuterHeight = $(".header-top-block").outerHeight();
    var windowScrollTop = $(window).scrollTop();
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var fixedHeader = $('[data-plugin="fixedheader"]');
    var currentHeight =
      $(".content-block-main").outerHeight() + headerOuterHeight - windowHeight;
    var currentOffsetTop = windowScrollTop - $(".articlepage").offset().top;
    var width = windowWidth;

    if (windowScrollTop > headerOuterHeight) {
      if (!fixedHeader.hasClass("sticky_header")) {
        fixedHeader.addClass("sticky_header");
      }
      if (currentOffsetTop <= currentHeight) {
        width = Math.min(
          (currentOffsetTop / currentHeight) * windowWidth,
          windowWidth,
        );
      }
      fixedHeader.find('[data-plugin="redbar"]').css("width", width + "px");
    } else {
      fixedHeader.find('[data-plugin="redbar"]').css("width", 0);
      if (
        windowScrollTop <= headerOuterHeight &&
        fixedHeader.hasClass("sticky_header")
      ) {
        fixedHeader.removeClass("sticky_header");
      }
    }
  }
});
