const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const container = document.querySelector(".buttons");

let panicLevel = 1;

function moveNoButton() {
  const containerRect = container.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = containerRect.width - btnRect.width;
  const maxY = containerRect.height - btnRect.height;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
  noBtn.style.transition = `all ${0.12 / panicLevel}s`;
}

// 🖱️ Desktop
noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("mousemove", () => {
  panicLevel += 0.15;
  moveNoButton();
});

// 📱 Mobile / tablette
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault(); // bloque le clic
  panicLevel += 0.25;
  moveNoButton();
}, { passive: false });

// Sécurité ultime 😈
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoButton();
});

// ❤️ YES
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <h1>Smart choice 💘</h1>
    <p style="font-size:22px;color:white;">
      Valentine accepted 😘
    </p>
  `;
});
