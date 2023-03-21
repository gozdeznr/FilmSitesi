const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const widthRadio = Math.floor(window.innerWidth / 300 ); /* bu 300 fotoların value olarak verdiğimiz ölçüt yani boyut küçük oladuğunda 300 olaqrak kesik göstercek fotoların düzenli olması için */
  let clickCounter = 0;
  const imageItem = movieLists[i].querySelectorAll("img").length;
  arrow.addEventListener("click", function () {
    clickCounter++;
    if (imageItem - (4 + clickCounter) + (4 - widthRadio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});

/* `` altGr  ve virgül yaparsn */
/* ok işaretini hareket ettirmek için !!! [i] ise 3 movielist v arya her biri için ulaşmak için */
/* yatayda hareket etmesii için 300 olması da menü içindeki foto 270px + 30px golumpgap değeri */

/* dark mode */

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container, .navbar, .sidebar, .sidebar i, .toggle, .movie-list-title, .toggle-ball, .movie-list-filter select"
);

ball.addEventListener("click", function () {
  items.forEach((item) => item.classList.toggle("active"));
});
