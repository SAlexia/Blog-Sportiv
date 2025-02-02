
window.onload = function() {
    if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
        alert("Bine ai venit pe Blogul Sportiv!");
    }
};


document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            const nume = document.getElementById('nume').value;
            const email = document.getElementById('email').value;
            const mesaj = document.getElementById('mesaj').value;

            if (nume === "" || email === "" || mesaj === "") {
                alert("Te rugăm să completezi toate câmpurile!");
                event.preventDefault(); // Previne trimiterea formularului
            } else {
                alert("Mesajul tău a fost trimis cu succes!");
            }
        });
    }
});