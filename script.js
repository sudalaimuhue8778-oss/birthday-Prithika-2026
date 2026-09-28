function showMessage() {
    document.getElementById("message").innerHTML =
        "Happy Birthday, Prithika! ❤️🎂✨<br><br>" +
        "You are someone who makes my world a little brighter. " +
        "I hope your special day is filled with happiness, smiles and beautiful memories. 💕";

    createHearts();
    document.querySelectorAll("img").forEach((img, index) => {
    setTimeout(() => {
        img.classList.add("show");
    }, index * 500);
});
}

function createHearts() {
    const heartsContainer = document.getElementById("hearts");

    for (let i = 0; i < 25; i++) {
        const heart = document.createElement("div");

        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "%";

        heart.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }
}
function checkPassword() {
    const password = document.getElementById("password").value;

    if (password === "Prithika20268") {
        document.getElementById("passwordScreen").style.display = "none";
        document.querySelector(".container").style.display = "block";
    } else {
        document.getElementById("error").innerHTML = "❌ Wrong password!";
    }
}