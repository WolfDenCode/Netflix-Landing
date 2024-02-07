const filmsData = [
  {
    title: "Money Heist",
    description: "description",
    imageUrl: "https://i.ytimg.com/vi/1FhmnB6SwBc/maxresdefault.jpg",
  },
  {
    title: "The Witcher 3",
    description: "description",
    imageUrl:
      "https://thegatewayonline.ca/wp-content/uploads/2020/01/https___cdn.cnn_.com_cnnnext_dam_assets_190701125354-01-netflix-the-witcher.jpg",
  },
  {
    title: "Breaking Bad",
    description: "description",
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
    title: "Cyberpunk: Edgerunners",
    description: "description",
    imageUrl:
      "https://static.cdprojektred.com/cms.cdprojektred.com/16x9_big/45d16cac8654b4ebc86ee8c1e4e9f13e5b47e6d0-1280x720.jpg",
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
    title: "Cyberpunk: Edgerunners",
    description: "description",
    imageUrl:
      "https://static.cdprojektred.com/cms.cdprojektred.com/16x9_big/45d16cac8654b4ebc86ee8c1e4e9f13e5b47e6d0-1280x720.jpg",
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
let cards = document.querySelectorAll(".card");
let slideCount = cards.length;
cards.forEach((card, index) => {
  card.src = filmsData[index].imageUrl;
});
let glide = new Glide(".glide", {
  type: "carousel",
  perView: 5,
  hoverpause: true,
  keyboard: true,
  perTouch: 5,
  peek: {
    before: 100,
    after: 100,
  },
  gap: 10,
  breakpoints: {
    1025: {
      perView: 4,
      peek: {
        before: 95,
        after: 95,
      },
    },
    769: {
      perView: 3,
      peek: {
        before: 80,
        after: 80,
      },
    },
    426: {
      perView: 1,
      peek: {
        before: 60,
        after: 60,
      },
      gap: 10,
    },
  },
});

glide.on("mount.before", function () {
  slideCount = document.querySelectorAll(".glide__slide").length;
});

glide.mount();

let currentIndex = glide.settings.startAt;

const stepGlideRight = () => {
  currentIndex = (currentIndex + glide.settings.perView) % slideCount;

  glide.go(`=${currentIndex}`);
};
function stepGlideLeft() {
  currentIndex =
    (currentIndex - glide.settings.perView + slideCount) % slideCount;

  glide.go(`=${currentIndex}`);
}
const rightButton = document.getElementById("right-button");
rightButton.addEventListener("click", stepGlideRight);
const leftButton = document.getElementById("left-button");
leftButton.addEventListener("click", stepGlideLeft);

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    toggleSelected(card);
  });
});
toggleSelected(cards[0]);
function toggleSelected(card) {
  let _cards = document.querySelectorAll(".card");

  for (var i = 0; i < _cards.length; i++) {
    _cards[i].classList.remove("selected");
  }

  card.classList.add("selected");
  document.querySelector(
    ".container"
  ).style.backgroundImage = `url("${card.src}")`;
}
