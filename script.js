let slideCount = 0;
let glide = new Glide(".glide", {
  type: "carousel",
  perView: 5,
  // autoplay: 10000,
  hoverpause: true,
  keyboard: true,
  perTouch: 5,
  peek: {
    before: 100,
    after: 100,
  },
  gap: 5,
});

glide.on("mount.before", function () {
  slideCount = document.querySelectorAll(".glide__slide").length;
});

glide.mount();

let currentIndex = glide.settings.startAt;
console.log(currentIndex);

const rightButton = document.getElementById("right-button");

// Function to update the button's data-glide-dir attribute
const updateDataGlideDir = () => {
  currentIndex = (currentIndex + glide.settings.perView) % slideCount;
  glide.go(`=${currentIndex}`);
};

rightButton.addEventListener("click", updateDataGlideDir);

// Call updateDataGlideDir after glide is mounted to ensure it works from the first click
