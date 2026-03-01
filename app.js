// Registrera service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log('Service Worker registrerad!'))
    .catch(err => console.log('Fel vid registrering:', err));
}

// Enkel funktion för meddelande
document.getElementById('notifyBtn').addEventListener('click', () => {
  alert('Hej! Detta är ett meddelande från PWA.');
});
