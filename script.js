(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json";

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) return;
        const data = await response.json();
        if (currentVersion !== data.version) {
            alert(data.updateMessage);
        }
    } catch (error) {
        console.warn("Version check failed");
    }
})();

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

const music = new Audio("music.mp3");
music.loop = true;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.3}px`;
}

function handleYesClick() {
    music.play().then(() => {
        window.location.href = "yes_page.html";
    }).catch(err => {
        console.log("Autoplay blocked", err);
        window.location.href = "yes_page.html";
    });
}
