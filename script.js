const filmsData = [
  {
    title: "Money Heist",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. text ever since the 1500s, when an unk",
    imageUrl: "https://i.ytimg.com/vi/1FhmnB6SwBc/maxresdefault.jpg",
    youtubeID: "_InqQJRqGW4",
  },
  {
    title: "Nightmare Of The Wolf",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. text ever since the 1500s, when an unk",
    imageUrl:
      "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfhLu21hMpCtB8CvwuVTciBQIeLdQ_pwiFSoiAG_bNUtsBMwGuHBLZxC6ohYSMNIB1PHCQLm80Kx1tXJrRJaBRCKABOmumbYGjq7.jpg?r=c76",
    youtubeID: "PnE5BWv87fs",
  },
  {
    title: "Breaking Bad",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. text ever since the 1500s, when an unk",
    imageUrl:
      "https://conversationsabouther.net/wp-content/uploads/2014/10/Breaking-Bad.jpg",
    youtubeID: "2gTC4uWP3_Y",
  },
  {
    title: "Lucifer",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. text ever since the 1500s, when an unk",
    imageUrl:
      "https://wallpapers.com/images/featured/lucifer-devil-vbu9s0mttfzc9ra7.jpg",
    youtubeID: "X4bF_quwNtw",
  },
  {
    title: "John Wick 3",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. text ever since the 1500s, when an unk",
    imageUrl:
      "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABXuRYQptySNugp2yoB0aPTfioxmd8o-msk3q3eLDZtIbWinhnk8xALrF7DoHmaY5eG8KjqstwbBvCyvZOV77cXvY1TxKvEvOPHg1.jpg?r=a1f",
    youtubeID: "M7XM597XO94",
  },
  {
    title: "The Queen's Gambit",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. text ever since the 1500s, when an unk",
    imageUrl:
      "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVGsTpARGmj4ZtZCp60ddhUgIFZWLbYkQictokvcBwkFUhDnOlujRaUqiwf-qVzPlO-dZ4iI-_dE6pjmsoKGXwTL-pVjYhcsjRzW61xRrsDELQlTHWyxQ278-mpqUWUM1gkilg.jpg?r=069",
    youtubeID: "oZn3qSgmLqI",
  },
  {
    title: "Cyberpunk: Edgerunners",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. text ever since the 1500s, when an unk",
    imageUrl:
      "https://static.cdprojektred.com/cms.cdprojektred.com/16x9_big/45d16cac8654b4ebc86ee8c1e4e9f13e5b47e6d0-1280x720.jpg",
    youtubeID: "JtqIas3bYhg",
  },
  {
    title: "Stranger Things",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. text ever since the 1500s, when an unk",
    imageUrl:
      "https://images.ctfassets.net/4cd45et68cgf/5DIYYKy9JB7m90nozSIcM1/2acf7e826bbe6a656fd91c9179f17e0b/Stranger_Things__The_Experience.jpg?w=2000",
    youtubeID: "b9EkMc79ZSU",
  },
  {
    title: "Narcos",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. text ever since the 1500s, when an unk",
    imageUrl:
      "https://www.martin-strobel.com/wp/wp-content/uploads/strobel_martin_netflix_narcos_thumbnail_1080.jpg",
    youtubeID: "xl8zdCY-abw",
  },
  {
    title: "Peaky Blinders",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. text ever since the 1500s, when an unk",
    imageUrl:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/b84153128068975.614e7c8f28eb9.jpg",
    youtubeID: "oVzVdvGIC7U",
  },
  {
    title: "Vikings",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. text ever since the 1500s, when an unk",
    imageUrl:
      "https://w0.peakpx.com/wallpaper/195/983/HD-wallpaper-vikings.jpg",
    youtubeID: "9GgxinPwAGc",
  },
  {
    title: "Game Of Thrones",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. text ever since the 1500s, when an unk",
    imageUrl:
      "https://wallpapers.com/images/featured/game-of-thrones-92acb30ilmkjbmu9.jpg",
    youtubeID: "KPLWWIOCOOQ",
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
  perTouch: 0,
  perSwipe: 0,
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

glide.mount();

let currentIndex = glide.settings.startAt;
let currentSelectIndex = 0;

//Assign Click Functions To Buttons
const rightButton = document.getElementById("right-button");
rightButton.addEventListener("click", stepGlideRight);
const leftButton = document.getElementById("left-button");
leftButton.addEventListener("click", stepGlideLeft);

//If you click a card, select it
document.querySelectorAll(".card").forEach((card, index) => {
  card.addEventListener("click", () => {
    toggleSelected(card);
  });
});

toggleSelected(cards[currentSelectIndex]);

function stepGlideRight() {
  currentIndex = (currentIndex + glide.settings.perView) % slideCount;

  glide.go(`=${currentIndex}`);
  currentSelectIndex = currentIndex;
  toggleSelected(cards[currentSelectIndex]);
}

function stepGlideLeft() {
  currentIndex =
    (currentIndex - glide.settings.perView + slideCount) % slideCount;

  glide.go(`=${currentIndex}`);
  currentSelectIndex = currentIndex;
  toggleSelected(cards[currentSelectIndex]);
}

function toggleSelected(card) {
  let _cards = document.querySelectorAll(".card");

  for (var i = 0; i < _cards.length; i++) {
    _cards[i].classList.remove("selected");
  }

  card.classList.add("selected");
  const searchedFilm = filmsData.find((x) => x.imageUrl == card.src);
  document.getElementById("title").innerHTML = searchedFilm.title;

  document.getElementById("description").innerHTML = searchedFilm.description;
  document.getElementById(
    "video"
  ).src = `https://www.youtube.com/embed/${searchedFilm.youtubeID}?autoplay=1&loop=1&controls=0&mute=1&playlist=${searchedFilm.youtubeID}`;
}
