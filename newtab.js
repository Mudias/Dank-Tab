// Find all plus buttons
var addButtons = document.querySelectorAll('.add-card');

// Add click event listener to each button
addButtons.forEach(function(addButton) {
  addButton.addEventListener('click', function() {
    // Get reference to the card that was clicked
    var card = addButton.parentNode;

    // Create a new card element
    var newCard = document.createElement('div');
    newCard.className = 'card';

    // Add content to the new card element
    newCard.innerHTML = `
      <h2 contenteditable>New Card Title</h2>
      <input type="text" placeholder="Title"><br>
      <textarea placeholder="Description or Note"></textarea>
      <div class="add-card">+</div>
    `;

    // Insert the new card after the current card
    card.parentNode.insertBefore(newCard, card.nextSibling);
  });
});
