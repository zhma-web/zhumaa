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
        btn.textContent = 'Say Hello!';
        btn.style.backgroundColor = '#333';
    }, 2000);
});
