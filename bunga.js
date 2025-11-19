function startFlower() {
  function createFlower() {
    const f = document.createElement("div");
    f.classList.add("flower");
    f.innerHTML = "🌸";
    f.style.position = "fixed";
    f.style.top = "-10px";
    f.style.left = Math.random() * 100 + "vw";
    f.style.fontSize = (20 + Math.random() * 20) + "px";
    f.style.animation = `fall ${3 + Math.random() * 3}s linear`;
    document.body.appendChild(f);

    setTimeout(() => f.remove(), 6000);
  }

  setInterval(createFlower, 300);

  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes fall {
      to {
        transform: translateY(110vh) rotate(360deg);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}
