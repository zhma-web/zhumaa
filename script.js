const btn = document.getElementById('actionBtn');
const card = document.getElementById('profileCard');

btn.addEventListener('click', () => {
    // Memberikan feedback visual sederhana
    card.style.backgroundColor = '#e8f4ff';
    btn.textContent = 'Message Sent!';
    btn.style.backgroundColor = '#4a90e2';
    
    // Reset setelah 2 detik
    setTimeout(() => {
        card.style.backgroundColor = 'white';
        btn.textContent = 'Say Hello to Zhuma';
        btn.style.backgroundColor = '#333';
    }, 2000);
});

function copyText() {
    const text = document.getElementById("email").innerText;
    // Mengambil teks saja, mengabaikan span
    const cleanText = text.replace(" (click to copy)", "");
    
    navigator.clipboard.writeText(cleanText).then(() => {
        alert("Email copied to clipboard!");
    });
}
