// Set current year in the footer dynamically
document.getElementById("year").textContent = new Date().getFullYear();

// Subtle 3D hover effect for the profile card only
const card = document.getElementById("tilt-card");

// Check if the device supports hover (ignores touch screens so mobile doesn't get weird glitches)
if (window.matchMedia("(hover: hover)").matches) {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // feel
    const rotateX = -(y / rect.height) * 4; 
    const rotateY = (x / rect.width) * 4;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
    card.style.transition = "none"; 
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    card.style.transition = "transform 0.4s ease-out"; 
  });
}
