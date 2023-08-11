$("a.menu").click(function () {
  $('nav[role="navigation"]').toggle();
  $('header[role="banner"]').toggleClass("rule-off");

  if ($("img.menu-img").attr("src") == "/img/icons/icon-hamburger.png") {
    $("img.menu-img").attr("src", "/img/icons/icon-x.png");
  } else {
    $("img.menu-img").attr("src", "/img/icons/icon-hamburger.png");
  }

  return false;
});
