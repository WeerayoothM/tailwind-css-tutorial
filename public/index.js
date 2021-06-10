const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const contact = document.querySelector("#contact");

let currentMenu = "home";
home.classList.add("border-primary");

burger.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

home.addEventListener("click", () => {
  if (currentMenu === "home") {
    return;
  }
  home.classList.add("border-primary");
  about.classList.remove("border-primary");
  contact.classList.remove("border-primary");
  currentMenu = "home";
});

about.addEventListener("click", () => {
  if (currentMenu === "about") {
    return;
  }
  about.classList.add("border-primary");
  home.classList.remove("border-primary");
  contact.classList.remove("border-primary");
  currentMenu = "about";
});

contact.addEventListener("click", () => {
  if (currentMenu === "contact") {
    return;
  }
  contact.classList.add("border-primary");
  home.classList.remove("border-primary");
  about.classList.remove("border-primary");
  currentMenu = "contact";
});
