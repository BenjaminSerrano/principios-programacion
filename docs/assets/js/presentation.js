document.addEventListener("keydown", function (e) {
  // Ignorar si el foco está en un input, textarea, etc.
  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

  if (e.key === "z" || e.key === "Z") {
    e.preventDefault();
    e.stopImmediatePropagation();
    var scrollY = window.scrollY;
    document.body.classList.toggle("presentation-mode");
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        window.scrollTo(0, scrollY);
        setTimeout(function () { window.scrollTo(0, scrollY); }, 50);
      });
    });
  }
}, true);
