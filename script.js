// Get all squares
const squares = document.querySelectorAll(".square");

squares.forEach((sq) => {
  sq.addEventListener('mouseenter', () => {
    squares.forEach((otherSq) => {
      // If it's not the hovered square, change color to Coffee
      if (otherSq !== sq) {
        otherSq.style.backgroundColor = '#6F4E37';
      }
    });
  });

  sq.addEventListener('mouseleave', () => {
    // Reset all squares back to Lavender
    squares.forEach((otherSq) => {
      otherSq.style.backgroundColor = '#E6E6FA';
    });
  });
});
