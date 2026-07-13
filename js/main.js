/* Barber Crew by Yury — tiny bit of JS, no libraries */

// mobile nav toggle
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { links.classList.remove("open"); });
    });
  }
})();

// highlight today's row in the hours table (shop is in New York time)
(function () {
  var rows = document.querySelectorAll(".hours-table tr[data-day]");
  if (!rows.length) return;
  // 0 = Sunday ... 6 = Saturday, based on America/New_York
  var nyDay;
  try {
    var s = new Date().toLocaleDateString("en-US", { timeZone: "America/New_York", weekday: "long" });
    var order = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    nyDay = order.indexOf(s);
  } catch (e) {
    nyDay = new Date().getDay();
  }
  rows.forEach(function (r) {
    if (parseInt(r.getAttribute("data-day"), 10) === nyDay) {
      r.classList.add("today");
    }
  });
})();

// gallery: if a photo file isn't there yet, keep the styled placeholder showing
(function () {
  document.querySelectorAll(".gal-item img").forEach(function (img) {
    img.addEventListener("error", function () {
      img.style.display = "none";
      var ph = img.parentElement.querySelector(".ph");
      if (ph) ph.style.display = "flex";
    });
    img.addEventListener("load", function () {
      var ph = img.parentElement.querySelector(".ph");
      if (ph) ph.style.display = "none";
    });
  });
})();

// small footer year
(function () {
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
