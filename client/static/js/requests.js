async function getAllUsers() {
  try {
    const response = await fetch(`https://habitat-app.herokuapp.com/user`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
}

async function getUserHabits() {
  let id = localStorage.getItem("id");
  try {
    const options = {
      header: new Headers({ Authorization: localStorage.getItem("token") }),
    };
    const response = await fetch(
      `https://habitat-app.herokuapp.com/user/habits/${id}`,
      options
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
}

async function getUserSpecificHabits() {
  let id = localStorage.getItem("id");
  let habitId = localStorage.getItem("habitId");

  try {
    const options = {
      header: new Headers({ Authorization: localStorage.getItem("token") }),
    };
    const response = await fetch(
      `https://habitat-app.herokuapp.com/user/habits/${id}/${habitId}`,
      options
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
}

async function getUserCompletedHabits() {
  let id = localStorage.getItem("id");
  try {
    const options = {
      header: new Headers({ Authorization: localStorage.getItem("token") }),
    };
    const response = await fetch(
      `https://habitat-app.herokuapp.com/user/completed/${id}`,
      options
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
}

async function patchProgress(habitId) {
  let id = localStorage.getItem("id");
  try {
    const options = {
      method: "PATCH",
      header: new Headers({ Authorization: localStorage.getItem("token") }),
    };

    const response = await fetch(
      `https://habitat-app.herokuapp.com/user/habits/${id}/${habitId}`,
      options
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
}

async function createNewHabit() {
  let id = localStorage.getItem("id");
  const newHabit = {
    title: modal[0].value,
    frequency: modal[1].value,
    id: id,
  };

  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newHabit),
    };

    const r = await fetch(
      `https://habitat-app.herokuapp.com/user/habits/create`,
      options
    );
    const data = await r.json();

    if (data.err) {
      throw Error(data.err);
    }
  } catch (err) {
    console.warn(err);
  }
}

async function getProfileImages() {
  try {
    const options = {
      header: new Headers({ Authorization: localStorage.getItem("token") }),
    };
    const response = await fetch(
      `https://habitat-app.herokuapp.com/user/profileImage`,
      options
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
}

async function deleteHabit(habitId) {
  let id = localStorage.getItem("id");
  try {
    const options = { method: "DELETE" };
    await fetch(
      `https://habitat-app.herokuapp.com/user/habits/${id}/${habitId}`,
      options
    );
  } catch (err) {
    console.warn(err);
  }
}

module.exports = {
  getAllUsers,
  getUserHabits,
  getUserSpecificHabits,
  getUserCompletedHabits,
  patchProgress,
  getProfileImages,
  createNewHabit,
  deleteHabit,
};

async function deleteHabit(habitId) {
  let id = localStorage.getItem("id");

  try {
    const options = {
      method: "DELETE",
      header: new Headers({ Authorization: localStorage.getItem("token") }),
    };

    const response = await fetch(
      `https://habitat-app.herokuapp.com/user/habits/${id}/${habitId}`,
      options
    );
    window.location.hash = `#habits`;
  } catch (err) {
    console.warn(err);
  }
}
