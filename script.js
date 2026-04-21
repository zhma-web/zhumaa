const textArray = ["Digital Asset Creator", "Microstock Contributor", "Visual Explorer"];
let textIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 50;
const newTextDelay = 2000; // Jeda sebelum ngetik kata baru

const typingElement = document.querySelector(".typing-text");

function type() {
    if (charIndex < textArray[textIndex].length) {
        typingElement.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        textIndex++;
        if (textIndex >= textArray.length) textIndex = 0;
        setTimeout(type, typingSpeed + 1100);
    }
}

// Mulai animasi pas halaman selesai dimuat
document.addEventListener("DOMContentLoaded", function() {
    if(textArray.length) setTimeout(type, newTextDelay + 250);
});
