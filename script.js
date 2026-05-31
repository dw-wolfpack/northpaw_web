/**
 * NorthPaw landing: smooth in-page anchors; hero email forwards to the MailerLite stay-connected form.
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

  var heroForm = document.getElementById("hero-waitlist");
  var mlForm = document.getElementById("waitlist-ml-form");
  if (heroForm && mlForm) {
    heroForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var heroIn = document.getElementById("hero-email");
      var mainIn = document.getElementById("ml-waitlist-email");
      if (!heroIn || !mainIn) return;
      var v = heroIn.value.trim();
      if (!v || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
        heroIn.focus();
        heroIn.setAttribute("aria-invalid", "true");
        return;
      }
      heroIn.removeAttribute("aria-invalid");
      mainIn.value = v;
      var section = document.getElementById("early-access");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      window.setTimeout(function () {
        if (typeof mlForm.requestSubmit === "function") {
          mlForm.requestSubmit();
        } else {
          mlForm.submit();
        }
      }, 220);
    });
  }
})();
