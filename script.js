function toggleSelected(card) {
  // Remove 'selected' class from all cards in the slider
  var slider = card.parentElement;
  var cards = slider.getElementsByClassName("card");
  for (var i = 0; i < cards.length; i++) {
    cards[i].classList.remove("selected");
  }

  // Add 'selected' class to the clicked card
  card.classList.add("selected");
}
