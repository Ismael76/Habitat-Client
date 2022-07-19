const SERVER_URL = require("./url");

async function requestLogin(e) {
  const loginData = {
    email: e.target[0].value,
    password: e.target[1].value,
  };

  e.preventDefault();
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    };
    const r = await fetch(`${SERVER_URL}/users/login`, options);
    const data = await r.json();
    if (data.err) {
      throw Error(data.err);
    }
    login(data);
  } catch (err) {
    console.warn(`Error: ${err}`);
  }
}

async function requestRegistration(e) {
  e.preventDefault();
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    };
    const r = await fetch(`${SERVER_URL}/users/register`, options);
    const data = await r.json();
    if (data.err) {
      throw Error(data.err);
    }
    requestLogin(e);
  } catch (err) {
    console.warn(err);
  }
}

async function requestCreateHabit(e) {
  e.preventDefault();
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    };
    const r = await fetch(`${SERVER_URL}/users/`, options);
    const data = await r.json();
    if (data.err) {
      throw Error(data.err);
    }
    requestLogin(e);
  } catch (err) {
    console.warn(err);
  }
}

function login(data) {
  localStorage.setItem("username", data.user);
  location.hash = "#habbits";
}

function logout() {
  localStorage.clear();
  location.hash = "#login";
}

function currentUser() {
  const username = localStorage.getItem("username");
  return username;
}
