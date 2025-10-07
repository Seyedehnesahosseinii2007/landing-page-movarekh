document.addEventListener("DOMContentLoaded", function () {
  var els = document.querySelectorAll(".detail-form, .people-two, .people-one, .title-container");
  var io = new IntersectionObserver(
    function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  els.forEach((el) => io.observe(el));
});
