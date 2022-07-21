function renderLoginForm() {
  main.className = "";
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
  main.className = "";
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

function renderHabitPage(text) {
  //Renders 'Today' Box
  const today = document.createElement("section");
  // const firstDiv = document.createElement("div");
  const firstDiv = document.createElement("div");
  const secondDiv = document.createElement("div");
  const thirdDiv = document.createElement("div");
  const fourthDiv = document.createElement("div");
  const title = document.createElement("p");

  // firstDiv.className = "container";
  firstDiv.className = "row justify-content-center";
  secondDiv.className = "col-md-8 col-lg-6 mt-3";
  thirdDiv.className = "card bg-light text-dark rounded ";
  fourthDiv.className = "d-flex card-body justify-content-center";
  title.className = "text-center h1 font-weight-bold";

  title.textContent = text;

  main.appendChild(today);
  today.appendChild(firstDiv);
  firstDiv.appendChild(secondDiv);
  secondDiv.appendChild(thirdDiv);
  thirdDiv.appendChild(fourthDiv);
  fourthDiv.appendChild(title);
  // fifthDiv.appendChild(title);
}

function renderHabitPageMenu(navigation) {
  //Renders 'Menu Options' Box On Habits Page
  main.className = "reset-styles";
  const menu = document.createElement("section");
  // const firstDiv = document.createElement("div");
  const firstDiv = document.createElement("div");
  const secondDiv = document.createElement("div");
  const thirdDiv = document.createElement("div");
  const fourthDiv = document.createElement("div");
  const list = document.createElement("ul");
  const listItemAnchor = document.createElement("a");
  const listItemOne = document.createElement("li");
  const listItemIconOne = document.createElement("i");
  const listItemTwo = document.createElement("li");
  const listItemIconTwo = document.createElement("i");

  // firstDiv.className = "container";
  firstDiv.className = "row justify-content-center";
  secondDiv.className = "col-md-8 col-lg-6 mt-3";
  thirdDiv.className = "card bg-light text-dark rounded ";
  fourthDiv.className = "d-flex justify-content-center bg-color";
  listItemAnchor.className = "menu list-item";
  list.className = "menu";
  listItemOne.className = "list-item";
  listItemTwo.className = "list-item";
  listItemIconOne.className = "fa-solid fa-pen menu-icon";
  listItemIconTwo.className = "fa-solid fa-clock-rotate-left menu-icon";

  listItemIconOne.textContent = "Add Habit";

  listItemOne.setAttribute("data-toggle", "modal");
  listItemOne.setAttribute("data-target", "#exampleModalCenter");
  listItemIconTwo.textContent = navigation;

  listItemTwo.addEventListener("click", () => {
    listItemAnchor.setAttribute(
      "href",
      "#" + `${listItemIconTwo.textContent.toLowerCase()}`
    );
  });

  main.appendChild(menu);
  menu.appendChild(firstDiv);
  firstDiv.appendChild(secondDiv);
  secondDiv.appendChild(thirdDiv);
  thirdDiv.appendChild(fourthDiv);
  fourthDiv.appendChild(list);
  list.appendChild(listItemAnchor);
  list.appendChild(listItemOne);
  listItemOne.appendChild(listItemIconOne);
  listItemAnchor.appendChild(listItemTwo);
  listItemTwo.appendChild(listItemIconTwo);
}

async function renderHabitItems() {

  console.log("IN HERE - function renderHabitItems() in content.js");

  main.className = "reset-styles";
  const habitFeed = document.createElement("section");
  habitFeed.id = "habits";
  const habits = await getUserHabits();
  console.log("habits: " + habits);
  // let id = habitData.id;
  const renderHabit = (habitData) => {
    // making the image
    const plantImg = document.createElement("img");

    //All Elements That Make Up Our Habit Item Container
    const firstMainDiv = document.createElement("div");
    const secondOuterDiv = document.createElement("div");
    const deleteAnchor = document.createElement("a");
    const deleteIcon = document.createElement("i");
    const anchor = document.createElement("a");
    const firstDivInAnchor = document.createElement("div");
    const secondDivInAnchor = document.createElement("div");
    const titleDiv = document.createElement("div");
    const streakDiv = document.createElement("div");
    const plantDiv = document.createElement("div");
    const progressBarInfo = document.createElement("div");
    const progressBarInfo2 = document.createElement("div");
    const progressContainerDiv = document.createElement("div");
    const progressBar = document.createElement("div");

    // -----------------------     delete Habit     --------------------------- //
    const deleteHabit = document.createElement("button");
    // -----------------------     delete Habit     --------------------------- //

    //Bootstrap Classes Applied To The Habit Items
    habitFeed.className = "habit-card-items";
    firstMainDiv.className = "row justify-content-center";
    secondOuterDiv.className = "col-md-8 col-lg-6 border m-3 p-2 bg-light card";
    deleteAnchor.className = "delete-btn";
    deleteIcon.className = "fa-solid fa-trash-can fa-lg delete-icon";
    anchor.className = `btn btn-light stretched-link`;
    firstDivInAnchor.className = "d-flex flex-row  justify-content-between ";
    secondDivInAnchor.className = "d-flex flex-row  justify-content-between ";
    titleDiv.className = "p-2 h5 font-weight-bold text-uppercase";

    streakDiv.className = "p-2 streak mr-4";
    plantDiv.className = "p-2 plant mr-3"

    progressBarInfo.className = "p-2";
    progressBarInfo2.className = "p-2";
    progressContainerDiv.className = "progress";
    progressBar.className = "progress-bar bg-warning";
    // -----------------------     delete Habit     --------------------------- //
    deleteHabit.className = "fa-solid fa-trash menu-icon"
    // -----------------------     delete Habit     --------------------------- //

    progressBar.setAttribute("role", "progressbar");

    habitProgressBar(
      habitData,
      anchor,
      progressBarInfo,
      progressBar,
      streakDiv,
      plantDiv,
      plantImg
    );

    //Data Passed Into
    titleDiv.textContent = habitData.title;

    deleteAnchor.addEventListener("click", async () => {
      await deleteHabit(habitData.id);
      window.location.reload();
    });

    //Appending To Body
    habitFeed.appendChild(firstMainDiv);
    firstMainDiv.appendChild(secondOuterDiv);
    secondOuterDiv.appendChild(deleteAnchor);
    deleteAnchor.appendChild(deleteIcon);
    secondOuterDiv.appendChild(anchor);
    secondOuterDiv.appendChild(progressContainerDiv);
     // -----------------------     delete Habit     --------------------------- //
     secondOuterDiv.appendChild(deleteHabit);
     // -----------------------     delete Habit     --------------------------- //
    progressContainerDiv.appendChild(progressBar);
    anchor.appendChild(firstDivInAnchor);
    anchor.appendChild(secondDivInAnchor);
    firstDivInAnchor.appendChild(titleDiv);


    firstDivInAnchor.appendChild(streakDiv);
    firstDivInAnchor.appendChild(plantDiv);


    firstDivInAnchor.appendChild(streakDiv);  

    secondDivInAnchor.appendChild(progressBarInfo);
    secondDivInAnchor.appendChild(progressBarInfo2);
    secondDivInAnchor.appendChild(streakDiv);
  };
  habits.forEach(renderHabit);
  main.appendChild(habitFeed);
}

async function renderProfileImage() {
  let returnedImageData = await getProfileImages();
  let profileImg = document.createElement("img");

  profileImg.setAttribute("src", returnedImageData[0].src);

  main.appendChild(profileImg);
}

function setCompletedStatus() {
  fetch(``, {
    method: "PATCH",
    body: JSON.stringify({
      completed: "t",
    }),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((r) => r.json())
    .catch((err) => {
      console.log("Oh No!");
    });

  // if (check === data[i].PostID) {
  //   fetch(`https://rum-wepost.herokuapp.com/emoji1/${data[i].PostID}`, {
  //     method: "PATCH",
  //     body: JSON.stringify({
  //       EmojiOne: emojiCount,
  //     }),
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //   })
  //     .then((r) => r.json())
  //     .catch((err) => {
  //       console.log("Oh No!");
  //     });
  // }
}

function habitProgressBar(
  habitData,
  anchor,
  progressBarInfo,
  progressBar,
  streakDiv,
  plantDiv,
  plantImg
) {
  if (habitData.progression == habitData.frequency) {
    progressBar.className = "progress-bar bg-success";
  }

  progressBarInfo.textContent =
    "TODAY: " + habitData.progression + "/" + habitData.frequency;

  streakDiv.textContent = "STREAK: " + habitData.streak;

  streakDiv.textContent = `Streak: ${habitData.streak}`;

  if (habitData.streak < 7) {
    plantImg.setAttribute("src", "./static/images/seed.gif");
    let container = plantDiv;
    let content = plantDiv.innerHTML;
    container.innerHTML = content;
  } else if (habitData.streak < 30) {
    console.log(plantImg);
    plantImg.setAttribute("src", "./static/images/sapling.gif");
    let container = plantDiv;
    let content = plantDiv.innerHTML;
    container.innerHTML = content;
  } else if (habitData.streak < 365) {
    plantImg.setAttribute("src", "./static/images/mid.gif");
    let container = plantDiv;
    let content = plantDiv.innerHTML;
    container.innerHTML = content;
  } else {
    plantImg.setAttribute("src", "./static/images/adult.gif");
    let container = plantDiv;
    let content = plantDiv.innerHTML;
    container.innerHTML = content;
  }

  plantDiv.appendChild(plantImg);

  let initialIncrement = 100 / habitData.frequency;
  let subsequentIncrement = initialIncrement;
  progressBar.setAttribute(
    "style",
    `width: ${habitData.progression * initialIncrement}%`
  );

  anchor.addEventListener("click", async (e) => {
    //PATCH PROGRESSION
    let returnedData = await patchProgress(habitData.id);
    //SUBSEQUENT INCREMENT IS NOW EQUAL TO PROGRESSION VALUE IN DATABASE MULTIPLIED BY INITIAL INCREMENT
    subsequentIncrement = returnedData.progression * initialIncrement;

    if (habitData.progression !== habitData.frequency) {
      habitData.progression++;
    }

    if (subsequentIncrement == 100) {
      progressBar.className = "progress-bar bg-success";
      progressBar.setAttribute("style", `width: 100%`);
      location.reload(); //reece set this to test
    }

    progressBar.setAttribute("style", `width: ${subsequentIncrement}%`);
    progressBarInfo.textContent =
      "Today: " + habitData.progression + "/" + habitData.frequency;
  });
}

async function renderCompletedPage() {
  renderHabitPage("COMPLETED");
  main.className = "reset-styles";
  const habitFeed = document.createElement("section");
  habitFeed.id = "habits";
  let completedHabits = await getUserCompletedHabits();

  const renderHabit = (habitData) => {
    // making the image
    const plantImg = document.createElement("img");

    //All Elements That Make Up Our Habit Item Container
    const firstMainDiv = document.createElement("div");
    const secondOuterDiv = document.createElement("div");
    const deleteAnchor = document.createElement("a");
    const deleteIcon = document.createElement("i");
    const anchor = document.createElement("a");
    const firstDivInAnchor = document.createElement("div");
    const secondDivInAnchor = document.createElement("div");
    const titleDiv = document.createElement("div");
    const streakDiv = document.createElement("div");
    const plantDiv = document.createElement("div");
    const progressBarInfo = document.createElement("div");
    const progressBarInfo2 = document.createElement("div");
    const progressContainerDiv = document.createElement("div");
    const progressBar = document.createElement("div");

    //Bootstrap Classes Applied To The Habit Items
    habitFeed.className = "habit-card-items";
    firstMainDiv.className = "row justify-content-center";
    secondOuterDiv.className = "col-md-8 col-lg-6 border m-3 p-2 bg-light card";
    deleteAnchor.className = "delete-btn";
    deleteIcon.className = "fa-solid fa-trash-can fa-lg delete-icon";
    anchor.className = `btn btn-light stretched-link`;
    firstDivInAnchor.className = "d-flex flex-row  justify-content-between ";
    secondDivInAnchor.className = "d-flex flex-row  justify-content-between ";
    titleDiv.className = "p-2 h5 font-weight-bold text-uppercase";
    streakDiv.className = "p-2 streak";
    plantDiv.className = "p-2 plant";
    progressBarInfo.className = "p-2";
    progressBarInfo2.className = "p-2";
    progressContainerDiv.className = "progress";
    progressBar.className = "progress-bar bg-warning";

    progressBar.setAttribute("role", "progressbar");

    habitProgressBar(
      habitData,
      anchor,
      progressBarInfo,
      progressBar,
      streakDiv,
      plantDiv,
      plantImg
    );

    //Data Passed Into
    titleDiv.textContent = habitData.title;

    deleteAnchor.addEventListener("click", async () => {
      await deleteHabit(habitData.id);
      window.location.reload();
    });

    //Appending To Body
    habitFeed.appendChild(firstMainDiv);
    firstMainDiv.appendChild(secondOuterDiv);
    secondOuterDiv.appendChild(deleteAnchor);
    deleteAnchor.appendChild(deleteIcon);
    secondOuterDiv.appendChild(anchor);
    secondOuterDiv.appendChild(progressContainerDiv);
    progressContainerDiv.appendChild(progressBar);
    anchor.appendChild(firstDivInAnchor);
    anchor.appendChild(secondDivInAnchor);
    firstDivInAnchor.appendChild(titleDiv);

    firstDivInAnchor.appendChild(streakDiv);
    firstDivInAnchor.appendChild(plantDiv);

    secondDivInAnchor.appendChild(progressBarInfo);
    secondDivInAnchor.appendChild(progressBarInfo2);
    secondDivInAnchor.appendChild(streakDiv);
  };
  completedHabits.forEach(renderHabit);
  main.appendChild(habitFeed);
}

function renderProfile() {
  renderProfileImage();
  const profile = document.createElement("section");
  const greeting = document.createElement("h3");
  greeting.textContent = `Hi there, ${localStorage.getItem("username")}!`;
  profile.appendChild(greeting);
  main.appendChild(profile);
}

function render404() {
  const error = document.createElement("h2");
  error.textContent = "Oops, We Can't Find That Page Sorry!";
  main.appendChild(error);
}
