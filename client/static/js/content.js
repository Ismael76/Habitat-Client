// function renderHomepage(){
//     const logo = document.createElement('img');
//     logo.id = 'logo';
//     logo.src = './images/plant.jpg';
//     logo.alt = 'group logo'
//     main.appendChild(logo);
// }


function renderLoginForm() {
    const fields = [
        { tag: 'input', attributes: { type: 'email', name: 'email', placeholder: 'Email' } },
        { tag: 'input', attributes: { type: 'password', name: 'password', placeholder: 'Password' } },
        { tag: 'input', attributes: { type: 'submit', value: 'Login' } }
    ]
    const form = document.createElement('form');
    fields.forEach(f => {
        let field = document.createElement(f.tag);
        Object.entries(f.attributes).forEach(([a, v]) => {
            field.setAttribute(a, v);
            form.appendChild(field);
        })
    })
    form.addEventListener('submit', requestLogin)
    main.appendChild(form);
}

function renderRegisterForm() {
    const fields = [
        { tag: 'input', attributes: { type: 'text', name: 'username', placeholder: 'Username' } },
        { tag: 'input', attributes: { type: 'email', name: 'email', placeholder: 'Email' } },
        { tag: 'input', attributes: { type: 'password', name: 'password', placeholder: 'Password' } },
        { tag: 'input', attributes: { type: 'password', name: 'passwordConfirmation', placeholder: 'Confirm Password' } },
        { tag: 'input', attributes: { type: 'submit', value: 'Create Account' } }
    ]
    const form = document.createElement('form');
    fields.forEach(f => {
        let field = document.createElement(f.tag);
        Object.entries(f.attributes).forEach(([a, v]) => {
            field.setAttribute(a, v);
            form.appendChild(field);
        })
    })
    form.addEventListener('submit', requestRegistration)
    main.appendChild(form);
}

async function renderHabits() {
    const feed = document.createElement('section');
    feed.id = 'habits';
    const posts = await getAllPosts();
    const renderPost = postData => {
        const post = document.createElement('div');
        post.className = 'post';
        const user = document.createElement('h3');
        const body = document.createElement('p');
        user.textContent = postData.username;
        body.textContent = postData.body;
        post.appendChild(user);
        post.appendChild(body);
        feed.appendChild(post);
    }
    posts.forEach(renderPost);
    main.appendChild(feed);
}

function renderCreateHabit() {
    const fields = [
        { tag: 'input', attributes: { type: 'text', name: 'name', placeholder: 'Name' } },
        { tag: 'input', attributes: { type: 'text', name: 'frequency', placeholder: 'Frequency' } },
        { tag: 'input', attributes: { type: 'submit', value: 'Create Account' } }
    ]
    const form = document.createElement('form');
    fields.forEach(f => {
        let field = document.createElement(f.tag);
        Object.entries(f.attributes).forEach(([a, v]) => {
            field.setAttribute(a, v);
            form.appendChild(field);
        })
    })
    form.addEventListener('submit', requestCreateHabit)
    main.appendChild(form);
}

function renderProfile() {
    const profile = document.createElement('section');
    const greeting = document.createElement('h3');
    greeting.textContent = `Hi there, ${localStorage.getItem('username')}!`
    profile.appendChild(greeting);
    main.appendChild(profile);
}

function render404() {
    const error = document.createElement('h2');
    error.textContent = "Oops, we can't find that page sorry!";
    main.appendChild(error);
}
