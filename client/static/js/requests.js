async function getAllUsers(){
    try {
        const response = await fetch('http://localhost:4000/users');
        const data = await response.json();
        return data;
    } catch (err) {
        console.warn(err);
    }

}