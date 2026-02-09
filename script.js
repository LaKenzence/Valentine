const messages = [
    "Are you sure?",
    "¿De verdad segura?",
    "Are you positive?",
    "Mami please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "De verdad estaré triste...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Es broma, ¡di que sí! ❤️"
];

let messageIndex = 0;

// Musique (autorisée car lancée par un clic)
const music = new Audio("music.mp3");
music.loop = true;

function handleNoClick() {
    const noButton = document.querySelector(".no-button");
    const yesButton = document.querySelector(".yes-button");

    if (!noButton || !yesButton) return;

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.3}px`;
}

function handleYesClick() {
    music.play().catch(() => {
        console.log("Autoplay blocked, but click registered");
    });

    setTimeout(() => {
        window.location.href = "yes_page.html";
    }, 300);
}
