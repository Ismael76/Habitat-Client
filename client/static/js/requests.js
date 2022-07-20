async function getAllUsers() {
  try {
    const response = await fetch(`http://localhost:4000/users`);
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
      `http://localhost:4000/users/habits/${id}`,
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

    const r = await fetch(`http://localhost:4000/users/habits/create`, options);
    const data = await r.json();

    if (data.err) {
      throw Error(data.err);
    }
  } catch (err) {
    console.warn(err);
  }
}


module.exports = {getAllUsers, getUserHabits, createNewHabit, }
