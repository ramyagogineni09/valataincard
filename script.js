document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const questionCard = document.getElementById("questionCard");
  const loveCard = document.getElementById("loveCard");

  const moveDistance = 50; // max pixels NO button moves

  // Move NO button opposite to cursor
  noBtn.addEventListener("mouseenter", (e) => {
    const btnRect = noBtn.getBoundingClientRect();
    const cursorX = e.clientX;
    const cursorY = e.clientY;

    const btnCenterX = btnRect.left + btnRect.width / 2;
    const btnCenterY = btnRect.top + btnRect.height / 2;

    let dx = btnCenterX - cursorX;
    let dy = btnCenterY - cursorY;

    const distance = Math.sqrt(dx*dx + dy*dy) || 1;
    dx = (dx / distance) * moveDistance;
    dy = (dy / distance) * moveDistance;

    noBtn.style.transform = `translate(${dx}px, ${dy}px)`;
  });

  // Reset NO button when mouse leaves
  noBtn.addEventListener("mouseleave", () => {
    noBtn.style.transform = `translate(0px, 0px)`;
  });

  // YES button click
  yesBtn.addEventListener("click", () => {
    loveCard.classList.remove("hidden");
    startHearts();
  });
});

// Floating hearts
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }, 300);
}
