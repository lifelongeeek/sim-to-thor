// Rollout tabs, video slots that fall back to a placeholder until the mp4 is added, and the Grid-Sampler figure.
(() => {
  const tabs = [...document.querySelectorAll('.tabs [role="tab"]')];
  const show = (tab) => {
    for (const t of tabs) {
      const on = t === tab;
      t.setAttribute("aria-selected", on ? "true" : "false");
      document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
    }
  };
  tabs.forEach((t, i) => {
    t.addEventListener("click", () => show(t));
    t.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      const n = tabs[(i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
      n.focus(); show(n);
    });
  });

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  for (const v of document.querySelectorAll("video[data-src]")) {
    const src = v.dataset.src;
    const placeholder = () => {
      const ph = document.createElement("div");
      ph.className = "ph";
      ph.innerHTML = `<span>Video coming soon<code>${src}</code></span>`;
      v.replaceWith(ph);
    };
    v.addEventListener("error", placeholder, { once: true });
    const s = document.createElement("source");
    s.src = src; s.type = "video/mp4";
    s.addEventListener("error", placeholder, { once: true });
    v.appendChild(s);
    if (!reduce) { v.autoplay = true; v.play?.().catch(() => {}); }
    else v.controls = true;
  }

  // 7x7 patch grid with a few sampled cells for the Grid-Sampler figure
  const g = document.getElementById("gridpatches");
  if (g) {
    const picks = new Set([9, 17, 24, 38]);
    const NS = "http://www.w3.org/2000/svg";
    for (let r = 0; r < 7; r++) for (let c = 0; c < 7; c++) {
      const rect = document.createElementNS(NS, "rect");
      rect.setAttribute("x", 6 + c * 15); rect.setAttribute("y", 28 + r * 15);
      rect.setAttribute("width", 13); rect.setAttribute("height", 13); rect.setAttribute("rx", 2);
      if (picks.has(r * 7 + c)) rect.setAttribute("class", "pick");
      g.appendChild(rect);
    }
  }
})();
