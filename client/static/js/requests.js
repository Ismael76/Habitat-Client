async function getAllUsers() {
  try {
    const response = await fetch(`${SERVER_URL}/users`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
}
