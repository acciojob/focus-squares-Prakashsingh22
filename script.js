// Select all three squares
const squares = document.querySelectorAll('.square');

squares.forEach(square => {
  // When cursor enters a square
  square.addEventListener('mouseenter', () => {
    squares.forEach(other => {
      if (other !== square) {
        other.style.backgroundColor = '#6F4E37'; // Coffee
      }
    });
  });

  // When cursor leaves the square
  square.addEventListener('mouseleave', () => {
    squares.forEach(other => {
      other.style.backgroundColor = '#E6E6FA'; // Lavender
    });
  });
});
