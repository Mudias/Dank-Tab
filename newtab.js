// Find the add-card button
var addButton = document.querySelector('.add-card');

// Add click event listener to the button
addButton.addEventListener('click', function() {
  // Get reference to the last card
  var card = document.querySelector('.card:last-of-type');

  // Create a new card element
  var newCard = document.createElement('div');
  newCard.className = 'card';

  // Add content to the new card element
  newCard.innerHTML = `
    <h2 contenteditable>New Card Title</h2>
    <input type="text" placeholder="Title"><br>
    <textarea placeholder="Description or Note"></textarea>
  `;

  // Insert the new card after the last card
  card.parentNode.insertBefore(newCard, card.nextSibling);
});
