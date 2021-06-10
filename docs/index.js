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

const activeClass = ["border-primary", "text-gray-700", "font-bold"];

home.addEventListener("click", () => {
  if (currentMenu === "home") {
    return;
  }
  home.classList.add(...activeClass);
  about.classList.remove(...activeClass);
  contact.classList.remove(...activeClass);
  currentMenu = "home";
});

about.addEventListener("click", () => {
  if (currentMenu === "about") {
    return;
  }
  about.classList.add(...activeClass);
  home.classList.remove(...activeClass);
  contact.classList.remove(...activeClass);
  currentMenu = "about";
});

contact.addEventListener("click", () => {
  if (currentMenu === "contact") {
    return;
  }
  contact.classList.add(...activeClass);
  home.classList.remove(...activeClass);
  about.classList.remove(...activeClass);
  currentMenu = "contact";
});
