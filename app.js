const nav = document.querySelector("nav");

const navList = document.querySelector("nav ul");

const navLinks = document.querySelectorAll("li a");

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

if (window.innerWidth <= 426) {
  const img = document.createElement("img");

  img.classList = "menu-img";

  img.setAttribute("src", "Images/menu.png");

  img.setAttribute("alt", "menu");

  nav.appendChild(img);

  nav.style.background = "red";

  img.onclick = function () {
    if (img.alt === "menu") {
      img.setAttribute("src", "Images/close.png");

      img.setAttribute("alt", "close");

      navList.style.display = "block";

      nav.style.height = "100%";

      nav.style.flexDirection = "column";

      navLinks.forEach((navLink) => {
        navLink.style.color = "white";
      });

      console.log(img);
    } else {
      img.setAttribute("src", "Images/menu.png");

      img.setAttribute("alt", "menu");

      navList.style.display = "none";

      nav.style.height = "16%";

      nav.style.flexDirection = "row";
    }
  };
}
