// function renderHomepage(){
//     const logo = document.createElement('img');
//     logo.id = 'logo';
//     logo.src = './images/plant.jpg';
//     logo.alt = 'group logo'
//     main.appendChild(logo);
// }

function renderLoginForm() {
  const fields = [
    {
      tag: "input",
      attributes: { type: "email", name: "email", placeholder: "Email" },
    },
    {
      tag: "input",
      attributes: {
        type: "password",
        name: "password",
        placeholder: "Password",
      },
    },
    { tag: "input", attributes: { type: "submit", value: "Login" } },
  ];
  const form = document.createElement("form");
  fields.forEach((f) => {
    let field = document.createElement(f.tag);
    Object.entries(f.attributes).forEach(([a, v]) => {
      field.setAttribute(a, v);
      form.appendChild(field);
    });
  });
  form.addEventListener("submit", requestLogin);
  main.appendChild(form);
}

function renderRegisterForm() {
  const fields = [
    {
      tag: "input",
      attributes: { type: "email", name: "email", placeholder: "Email" },
    },
    {
      tag: "input",
      attributes: {
        type: "password",
        name: "password",
        placeholder: "Password",
      },
    },
    {
      tag: "input",
      attributes: {
        type: "password",
        name: "passwordConfirmation",
        placeholder: "Confirm Password",
      },
    },
    {
      tag: "input",
      attributes: { type: "text", name: "username", placeholder: "Username" },
    },
    { tag: "input", attributes: { type: "submit", value: "Create Account" } },
  ];
  const form = document.createElement("form");
  fields.forEach((f) => {
    let field = document.createElement(f.tag);
    Object.entries(f.attributes).forEach(([a, v]) => {
      field.setAttribute(a, v);
      form.appendChild(field);
    });
  });
  form.addEventListener("submit", requestRegistration);
  main.appendChild(form);
}

async function renderHabits() {
  const habitFeed = document.createElement("section");
  habitFeed.id = "habits";
  const habits = await getAllHabits();
  const renderHabit = (habitData) => {
    //All Elements That Make Up Our Habit Item Container
    const firstMainDiv = document.createElement("div");
    const secondOuterDiv = document.createElement("div");
    const anchor = document.createElement("a");
    const firstDivInAnchor = document.createElement("div");
    const secondDivInAnchor = document.createElement("div");
    const titleDiv = document.createElement("div");
    const streakDiv = document.createElement("div");
    const progressBarInfo = document.createElement("div");
    const progressBarInfo2 = document.createElement("div");
    const progressContainerDiv = document.createElement("div");
    const progressBar = document.createElement("div");

    //Bootstrap Classes Applied To The Habit Items
    firstMainDiv.className = "row justify-content-center";
    secondOuterDiv.className = "col-md-8 col-lg-6 border m-3 p-2 bg-light card";
    anchor.className = "btn btn-light stretched-link";
    firstDivInAnchor.className = "d-flex flex-row  justify-content-between ";
    secondDivInAnchor.className = "d-flex flex-row  justify-content-between ";
    titleDiv.className = "p-2 h5 font-weight-bold text-uppercase";
    streakDiv.className = "p-2";
    progressBarInfo.className = "p-2";
    progressBarInfo2.className = "p-2";
    progressContainerDiv.className = "progress";
    progressBar.className =
      "progress-bar progress-bar-striped progress-bar-animated";

    //Data Passed Into
    titleDiv.textContent = habitData.title;
    progressBarInfo.textContent = habitData.frequency;

    //Appending To Body
    habitFeed.appendChild(firstMainDiv);
    firstMainDiv.appendChild(secondOuterDiv);
    secondOuterDiv.appendChild(anchor);
    secondOuterDiv.appendChild(progressContainerDiv);
    anchor.appendChild(firstDivInAnchor);
    anchor.appendChild(secondDivInAnchor);
    firstDivInAnchor.appendChild(titleDiv);
    firstDivInAnchor.appendChild(streakDiv);
    secondDivInAnchor.appendChild(progressBarInfo);
    secondDivInAnchor.appendChild(progressBarInfo2);
  };
  habits.forEach(renderHabit);
  main.appendChild(habitFeed);
}

function renderCreateHabit() {
  const fields = [
    {
      tag: "input",
      attributes: { type: "text", name: "name", placeholder: "Name" },
    },
    {
      tag: "input",
      attributes: { type: "text", name: "frequency", placeholder: "Frequency" },
    },
    { tag: "input", attributes: { type: "submit", value: "Create Account" } },
  ];
  const form = document.createElement("form");
  fields.forEach((f) => {
    let field = document.createElement(f.tag);
    Object.entries(f.attributes).forEach(([a, v]) => {
      field.setAttribute(a, v);
      form.appendChild(field);
    });
  });
  form.addEventListener("submit", requestCreateHabit);
  main.appendChild(form);
}

function renderProfile() {
  const profile = document.createElement("section");
  const greeting = document.createElement("h3");
  greeting.textContent = `Hi there, ${localStorage.getItem("username")}!`;
  profile.appendChild(greeting);
  main.appendChild(profile);
}

function render404() {
  const error = document.createElement("h2");
  error.textContent = "Oops, we can't find that page sorry!";
  main.appendChild(error);
}
