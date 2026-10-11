/* Arya Art Diwali animation. Include once per page. */
(() => {
  "use strict";
  const startDiwaliAnimation = () => {
    // Put the effect behind the homepage hero and the Diwali page hero.
    const hosts = [
      document.querySelector(".hero"),
      document.querySelector(".diwali-hero")
    ].filter(Boolean);

    hosts.forEach((host) => {
      if (host.querySelector(":scope > .diwali-animation")) return;
      host.classList.add("diwali-host");

      const layer = document.createElement("div");
      layer.className = "diwali-animation";
      layer.setAttribute("aria-hidden", "true");

      // Small, fixed number of decorations for good mobile performance.
      const lanternCount = window.matchMedia("(max-width: 600px)").matches ? 5 : 8;
      const starCount = window.matchMedia("(max-width: 600px)").matches ? 18 : 30;
      for (let i = 0; i < lanternCount; i++) {
        const lantern = document.createElement("span");
        lantern.className = "diwali-lantern";
        lantern.style.setProperty("--x", `${5 + Math.random() * 90}%`);
        lantern.style.setProperty("--size", `${window.innerWidth <= 600 ? 13 : 20 + Math.random() * 8}px`);
        lantern.style.setProperty("--duration", `${15 + Math.random() * 12}s`);
        lantern.style.setProperty("--delay", `${-Math.random() * 24}s`);
        layer.appendChild(lantern);
      }
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement("span");
        star.className = "diwali-star";
        star.style.setProperty("--x", `${Math.random() * 100}%`);
        star.style.setProperty("--y", `${Math.random() * 100}%`);
        star.style.setProperty("--size", `${1 + Math.random() * 2.5}px`);
        star.style.setProperty("--duration", `${1.8 + Math.random() * 3.5}s`);
        star.style.setProperty("--delay", `${-Math.random() * 5}s`);
        layer.appendChild(star);
      }
      for (let i = 0; i < 3; i++) {
        const burst = document.createElement("span");
        burst.className = "diwali-firework";
        burst.style.setProperty("--x", `${12 + Math.random() * 76}%`);
        burst.style.setProperty("--y", `${12 + Math.random() * 66}%`);
        burst.style.setProperty("--delay", `${-Math.random() * 5}s`);
        layer.appendChild(burst);
      }

      host.prepend(layer);
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startDiwaliAnimation, { once: true });
  } else {
    startDiwaliAnimation();
  }
})();
