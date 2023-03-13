import { renderMarkupHome } from "./pages/homeView";
import { renderMarkupMenu } from "./pages/menuView";
import { renderMarkupContact } from "./pages/contactView";
import { render } from "./functions/render";
import loadHome from "./pages/homeView";
import loadMenu from "./pages/menuView";
import loadContact from "./pages/contactView";

// renderMarkupHome();

// const home = document.getElementById("home");
// const menu = document.getElementById("menu");
// const contact = document.getElementById("contact");

// home.addEventListener("click", function () {
//   console.log("home clicked");

//   renderMarkupHome();
// });

// menu.addEventListener("click", function () {
//   console.log("menu clicked");
//   render();
//   renderMarkupMenu();
// });

// contact.addEventListener("click", function () {
//   console.log("contact clicked");
//   render();
//   renderMarkupContact();
// });

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const restaurantName = document.createElement("h1");
  restaurantName.classList.add("restaurant-name");
  restaurantName.textContent = "Tarnished Tastes";

  header.appendChild(restaurantName);
  header.appendChild(createNav());

  return header;
}

function createNav() {
  const nav = document.createElement("nav");
  nav.classList.add("nav");

  const homeBtn = document.createElement("button");
  homeBtn.classList.add("nav-link");
  homeBtn.textContent = "Home";
  homeBtn.addEventListener("click", function () {
    loadHome();
  });

  const menuBtn = document.createElement("button");
  menuBtn.classList.add("nav-link");
  menuBtn.textContent = "Menu";
  menuBtn.addEventListener("click", function () {
    loadMenu();
  });

  const contactBtn = document.createElement("button");
  contactBtn.classList.add("nav-link");
  contactBtn.textContent = "Contact";
  contactBtn.addEventListener("click", function () {
    loadContact();
  });

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  return nav;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  footer.innerHTML = `
    <p> &copy; Alex Burgy 2023</p>
  `;

  return footer;
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
}

// initializes website, creates the header(navbar), main content, footer
function init() {
  const content = document.getElementById("content");

  // create header, append to content
  content.appendChild(createHeader());
  // create main content, append to content
  content.appendChild(createMain());

  // create footer, append to content
  content.appendChild(createFooter());

  loadHome();
}

init();
