const nav = document.querySelector("nav");

let yAxis;

function addMove() {
  window.addEventListener("scroll", (e) => {
    yAxis = Math.floor(scrollY);

    if (yAxis >= 60) {
      nav.classList.add("move");
    }

    if (yAxis < 60) {
      nav.classList.remove("move");
    }
  });
}

addMove();

window.removeEventListener("scroll", addMove);
