function updateCountdown() {
    const eventDate = new Date("March 14, 2025 11:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;
    
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    document.getElementById("countdown").innerHTML = `⏳ ${days}d ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

function buyPass() {
    // alert("Redirecting to payment...");
    // window.location.href = "payment.html";
}