const nav = document.querySelector("nav");
const main = document.querySelector("main");
const modal = document.querySelector("#habit-form");
const deleteBtn = document.querySelector("button");

const publicRoutes = ["#", "#login", "#register"];
const privateRoutes = ["#habits", "#profile"];

window.addEventListener("hashchange", updateContent);

modal.addEventListener("submit", createNewHabit);
// deleteBtn.addEventListener("click", console.log('button delete'));

function updateNav() {
  nav.innerHTML = "";
  let links;
  let logoutBtn;
  if (currentUser()) {
    links = privateRoutes.map(createNavLink);
    logoutBtn = document.createElement("a");
    logoutBtn.textContent = "Logout";
    logoutBtn.onclick = logout;
    nav.appendChild(logoutBtn);
  } else {
    links = publicRoutes.map(createNavLink);
  }
  links.forEach((l) => nav.insertBefore(l, logoutBtn));
}

function updateMain(path) {
  main.innerHTML = "";
  if (path) {
    switch (path) {
      case "#login":
        renderLoginForm();
        break;
      case "#register":
        renderRegisterForm();
        break;
      case "#habits":
        renderHabitPage("TODAY");
        renderHabitPageMenu("Completed");
        renderHabitItems();
        break;
      case "#createHabit":
        renderCreateHabit();
        break;
      case "#profile":
        renderProfile();
        break;
      case "#completed":
        renderCompletedPage();
        break;
      default:
        render404();
        break;
    }
  } else {
    renderHomepage();
  }
}

function createNavLink(route) {
  const link = document.createElement("a");
  link.textContent =
    route === "#" ? "Home" : `${route[1].toUpperCase()}${route.substring(2)}`;
  link.href = route;
  return link;
}

function updateContent() {
  const path = window.location.hash;
  if (privateRoutes.includes(path) && !currentUser()) {
    window.location.hash = "#";
  } else {
    updateNav();
    updateMain(path);
  }
}

updateContent();

module.exports = { updateNav, updateMain, createNavLink, updateContent };
