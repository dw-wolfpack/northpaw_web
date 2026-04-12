/**
 * NorthPaw landing: smooth in-page anchors. Waitlist is MailerLite in index.html; survey is Tally (external).
 */

(function () {
  "use strict";

  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href");
      if (!id || id === "#") return;
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
})();
