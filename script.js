const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

// On utilise le body comme zone de déplacement
const container = document.body;

let panicLevel = 1;

function moveNoButton() {
  const bodyRect = container.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  // Zone de déplacement = toute la fenêtre
  const maxX = bodyRect.width - btnRect.width;
  const maxY = bodyRect.height - btnRect.height;

  const offset = 20; // pour ne pas coller aux bords
  const x = Math.random() * (maxX - offset*2) + offset;
  const y = Math.random() * (maxY - offset*2) + offset;

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
