/**
 * NorthPaw landing: light client behavior.
 *
 * TODO: form provider: wire #waitlist-form and #survey-form to one of:
 *   - MailerLite / ConvertKit / Beehiiv (embed or POST endpoint)
 *   - Cloudflare Worker + KV / D1
 *   - Formspree / Getform / Basin (form action + field names)
 * Adjust field `name` attributes to match provider docs.
 */

(function () {
  "use strict";

  function showMsg(el, text, kind) {
    if (!el) return;
    el.textContent = text;
    el.classList.add("is-visible", kind);
    el.classList.remove(kind === "success" ? "error" : "success");
  }

  function hideMsg(el) {
    if (!el) return;
    el.classList.remove("is-visible", "success", "error");
    el.textContent = "";
  }

  /** Smooth scroll for same-page links (progressive enhancement if CSS smooth already on html) */
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

  var waitlist = document.getElementById("waitlist-form");
  if (waitlist) {
    waitlist.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = document.getElementById("waitlist-msg");
      hideMsg(msg);

      var email = waitlist.querySelector('[name="email"]');
      if (!email || !email.value.trim()) {
        showMsg(msg, "Please enter your email.", "error");
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        showMsg(msg, "Please enter a valid email address.", "error");
        return;
      }

      // TODO: form provider: POST to your endpoint or mail provider
      console.info("[NorthPaw waitlist] TODO: submit payload", {
        first_name: (waitlist.querySelector('[name="first_name"]') || {}).value,
        email: email.value.trim(),
      });
      showMsg(
        msg,
        "Thanks. This form is not connected yet. Check script.js / index.html TODO to wire your provider.",
        "success"
      );
      waitlist.reset();
    });
  }

  var survey = document.getElementById("survey-form");
  if (survey) {
    survey.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = document.getElementById("survey-msg");
      hideMsg(msg);

      var q1 = survey.querySelector('input[name="outing_frequency"]:checked');
      if (!q1) {
        showMsg(msg, "Please answer how often you take outdoor outings (question 1).", "error");
        return;
      }

      var fd = new FormData(survey);
      var payload = {};
      fd.forEach(function (v, k) {
        if (payload[k]) {
          if (!Array.isArray(payload[k])) payload[k] = [payload[k]];
          payload[k].push(v);
        } else {
          payload[k] = v;
        }
      });

      // TODO: form provider: send payload to survey tool / sheet / Worker
      console.info("[NorthPaw survey] TODO: submit payload", payload);
      showMsg(
        msg,
        "Thanks. This survey is not connected yet. Wire the handler in script.js when your backend or form service is ready.",
        "success"
      );
      survey.reset();
    });
  }
})();
