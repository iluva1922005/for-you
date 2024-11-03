document.getElementById("funnyButton").addEventListener("click", function() {
    const messages = [
        "do you have a name, or i just call you 'mine'.",
        "are you a time traveler? because i see you in my future.",
        "i never believed  in love first sight, but that's before i saw you.",
        "i still get butterflies in my stomach when i think about you.",
        "Maaf ya kalo sering buat kamu risih ataupun nggk nyaman,bentar lagi kamu juga tenang kok nggk ada yang ganggu lagi hehe. ",
        
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = randomMessage;
    messageDiv.classList.remove("hidden");
});