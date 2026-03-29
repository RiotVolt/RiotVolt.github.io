// Keep your existing footer logic
document.getElementById("year").textContent = new Date().getFullYear();

// --- NEW: Cool 3D Hover Tilt Effect ---
const card = document.getElementById("tilt-card");

card.addEventListener("mousemove", (e) => {
  // Get dimensions of the card
  const rect = card.getBoundingClientRect();
  
  // Calculate mouse position relative to the center of the card
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  // Calculate rotation (tweak the '20' to make it more or less extreme)
  const rotateX = -(y / rect.height) * 20; 
  const rotateY = (x / rect.width) * 20;

  // Apply the transform
  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  card.style.transition = "none"; // Remove transition while moving for instant response
});

// Reset the card to original position when mouse leaves
card.addEventListener("mouseleave", () => {
  card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  card.style.transition = "transform 0.5s ease"; // Smooth snap back to center
});
