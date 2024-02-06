// function toggleSelected(card) {
//   // Remove 'selected' class from all cards in the slider
//   var slider = card.parentElement;
//   var cards = slider.getElementsByClassName("card");
//   for (var i = 0; i < cards.length; i++) {
//     cards[i].classList.remove("selected");
//   }

//   // Add 'selected' class to the clicked card
//   card.classList.add("selected");

//   document.querySelector(".container").style.backgroundImage =
//     card.style.backgroundImage;
//   console.log(card.style.backgroundImage);
//   let correctData = filmsData.find(
//     (x) => `url("${x.imageUrl}")` == card.style.backgroundImage
//   );
//   document.getElementById("title").innerHTML = correctData.title;
//   document.getElementById("description").innerHTML = correctData.description;
// }

// function CheckScreenSize() {
//   sizes = {
//     sm: 426,
//     md: 769,
//     lg: 1025,
//     xl: 1441,
//   };

//   const container = document.querySelector(".container");
//   if (container.clientWidth <= sizes.sm) {
//     cardsVisible = 2;
//   } else if (container.clientWidth <= sizes.md) {
//     cardsVisible = 3;
//   } else if (container.clientWidth <= sizes.lg) {
//     cardsVisible = 4;
//   } else {
//     cardsVisible = 5;
//   }
// }
const filmsData = [
  {
    title: "Money Heist",
    description: "description",
    imageUrl: "https://i.ytimg.com/vi/1FhmnB6SwBc/maxresdefault.jpg",
  },
  {
    title: "The Witcher 3",
    description:
      "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts",
    imageUrl:
      "https://thegatewayonline.ca/wp-content/uploads/2020/01/https___cdn.cnn_.com_cnnnext_dam_assets_190701125354-01-netflix-the-witcher.jpg",
  },
  {
    title: "Breaking Bad",
    description:
      "A high school chemistry teacher dying of cancer teams with a former student to secure his family's future by manufacturing and selling crystal meth.",
    imageUrl:
      "https://conversationsabouther.net/wp-content/uploads/2014/10/Breaking-Bad.jpg",
  },
  {
    title: "Stranger Things",
    description: "description",
    imageUrl:
      "https://images.ctfassets.net/4cd45et68cgf/5DIYYKy9JB7m90nozSIcM1/2acf7e826bbe6a656fd91c9179f17e0b/Stranger_Things__The_Experience.jpg?w=2000",
  },
  {
    title: "John Wick 3",
    description: "description",
    imageUrl:
      "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABXuRYQptySNugp2yoB0aPTfioxmd8o-msk3q3eLDZtIbWinhnk8xALrF7DoHmaY5eG8KjqstwbBvCyvZOV77cXvY1TxKvEvOPHg1.jpg?r=a1f",
  },
  {
    title: "The Hobbit",
    description: "description",
    imageUrl:
      "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABQkOm5JrXwhV6SwlggfLN-Qz4vjR378yYiLsamfMkky8S6EqFykGgXilkgoxIO1bEjCDH4nC5Oxgs62TmSzsIhpO765jcM0KbL4P.jpg?r=a2b",
  },
  {
    title: "The Queen's Gambit",
    description: "description",
    imageUrl:
      "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVGsTpARGmj4ZtZCp60ddhUgIFZWLbYkQictokvcBwkFUhDnOlujRaUqiwf-qVzPlO-dZ4iI-_dE6pjmsoKGXwTL-pVjYhcsjRzW61xRrsDELQlTHWyxQ278-mpqUWUM1gkilg.jpg?r=069",
  },
  {
    title: "Better Call Saul",
    description: "description",
    imageUrl:
      "https://lh3.googleusercontent.com/proxy/i2GK0aM17cXxyQaGhXy20jg5KqCiKn1M_sm6cmB5fX0OgxesQ8YIfLh48xg8-ChotHTqTprVTLORgR9LjVkIfaP8PkYYge9Aw1Mz0a54hTBf1xrjSQw",
  },
  {
    title: "Narcos",
    description: "description",
    imageUrl:
      "https://www.martin-strobel.com/wp/wp-content/uploads/strobel_martin_netflix_narcos_thumbnail_1080.jpg",
  },
  {
    title: "Cyberpunk: Edgerunners",
    description: "description",
    imageUrl:
      "https://static.cdprojektred.com/cms.cdprojektred.com/16x9_big/45d16cac8654b4ebc86ee8c1e4e9f13e5b47e6d0-1280x720.jpg",
  },
  {
    title: "Better Call Saul",
    description: "description",
    imageUrl:
      "https://lh3.googleusercontent.com/proxy/i2GK0aM17cXxyQaGhXy20jg5KqCiKn1M_sm6cmB5fX0OgxesQ8YIfLh48xg8-ChotHTqTprVTLORgR9LjVkIfaP8PkYYge9Aw1Mz0a54hTBf1xrjSQw",
  },
  {
    title: "Narcos",
    description: "description",
    imageUrl:
      "https://www.martin-strobel.com/wp/wp-content/uploads/strobel_martin_netflix_narcos_thumbnail_1080.jpg",
  },
  {
    title: "Cyberpunk: Edgerunners",
    description: "description",
    imageUrl:
      "https://static.cdprojektred.com/cms.cdprojektred.com/16x9_big/45d16cac8654b4ebc86ee8c1e4e9f13e5b47e6d0-1280x720.jpg",
  },
];

// const slider = document.querySelector(".slider");
// let cards = document.querySelectorAll(".card");
// const totalImages = Object.keys(cards).length;
// const cardWidth = cards[1].getBoundingClientRect().width;
// let cardsVisible = 5;
// let selectIndex = 1;

//Set Cards to their respective image and set the selected card as well
// cards.forEach((card, index) => {
//   card.style.backgroundImage = `url('${filmsData[index].imageUrl}')`;
// });
// toggleSelected(cards[1]);
// CheckScreenSize();

//Start The Select Timer
// let selectTimer = setInterval(() => {
//   selectIndex++;
//   if (selectIndex > cardsVisible) {
//     selectIndex = 1;
//   }
//   toggleSelected(cards[selectIndex]);
// }, 10000);

function resetSelectTimer() {
  clearInterval(selectTimer);

  selectIndex = 1;
  selectTimer = setInterval(() => {
    selectIndex++;
    if (selectIndex > cardsVisible) {
      selectIndex = 1;
    }
    toggleSelected(cards[selectIndex]);
  }, 10000);
}

function slideLeft() {}

function slideRight() {}
