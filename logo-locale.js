// docs.json has one global logo.href and no per-language override, so the
// header logo always links to the English landing page. Point it at the
// landing page for the current docs language instead.
(function () {
  var HOME = "https://ccsafetynet.com";

  function localeHome() {
    var match = location.pathname.match(/\/(ja|zh-Hans)(\/|$)/);
    return match ? HOME + "/" + match[1] : HOME;
  }

  function fixLogoLinks() {
    var target = localeHome();
    var links = document.querySelectorAll('a[data-slot="context-menu-trigger"]');
    for (var i = 0; i < links.length; i++) {
      var href = links[i].getAttribute("href");
      if (href && href.indexOf(HOME) === 0 && href !== target) {
        links[i].setAttribute("href", target);
      }
    }
  }

  fixLogoLinks();
  new MutationObserver(fixLogoLinks).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
})();
