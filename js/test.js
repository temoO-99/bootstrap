$(function () {
  "use strict";

  var inn = $(window).height(),
    upp1 = $(".upper").innerHeight(),
    upp2 = $(".navbar").innerHeight();

  $(".slider").height(inn - (upp1 + upp2));

  //shufell items

  $(".feature-work li ").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");

    if ($(this).data("class") === "all") {
      $(".shuffel .col-sm").css("opacity", 1);
    } else {
      $(".shuffel .col-sm").css("opacity", ".09");
      $($(this).data("class")).parent().css("opacity", 1);
    }
  });
});
