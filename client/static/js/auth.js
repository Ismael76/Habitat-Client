// const SERVER_URL = require("./url");

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
    const r = await fetch(`http://localhost:4000/user/login`, options);
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
    const r = await fetch(`http://localhost:4000/user/register`, options);
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
  // const payload = jwt_decode(data.token);

  // console.log("<----- data.toke in auth.js ------>");
  // // console.log(plyload);
  // console.log("<----- data.toke in auth.js ------>");

  // localStorage.setItem("token", data.token);
  // localStorage.setItem("username", payload.user);
  // localStorage.setItem("email", payload.email);
  localStorage.setItem("id", data.id);
  localStorage.setItem("username", data.user);
  localStorage.setItem("email", data.email);

  location.hash = "#habits";
}

function logout() {
  localStorage.clear();
  location.hash = "#login";
}

function currentUser() {
  const username = localStorage.getItem("email");
  return username;
}

module.exports = {requestLogin, requestRegistration, login, logout, currentUser}
