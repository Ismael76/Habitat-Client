const SERVER_URL = require("./url");

async function requestLogin(e) {
  const loginData = {
    email: e.target[0].value,
    password: e.target[1].value,
  };

  console.log("IN LOGIN");

  e.preventDefault();
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    };
    const r = await fetch(`http://localhost:4000/users/login`, options);
    const data = await r.json();
    console.log(data);
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
  const registerData = {
    username: e.target[3].value,
    email: e.target[0].value,
    password: e.target[1].value,
  };

  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registerData),
    };
    const r = await fetch(`http://localhost:4000/users/register`, options);
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
    const r = await fetch(`https://habitat-app.herokuapp.com/users/`, options);
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

  const payload = jwt_decode(data.token);
  
  console.log('<----- data.toke in auth.js ------>');
  console.log(plyload);
  console.log('<----- data.toke in auth.js ------>');

  localStorage.setItem('token', data.token);
  localStorage.setItem("username", payload.user);
  localStorage.setItem("username", payload.email);
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
