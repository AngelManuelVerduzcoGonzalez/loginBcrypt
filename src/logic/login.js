const btnSignUp = document.getElementById('btnSignUp');
const btnLogin = document.getElementById('btnLogin');
const username = document.getElementById('username');
const password = document.getElementById('password');

async function login() {
    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username.value, password: password.value })
    });

    const data = await response.json();

    if (response.ok) {
        localStorage.setItem('token', data.token);
        redirectToPage(data.token);
    } else if (response.status == 401) {
        alert(`${data.error}`);
    } else if (response.status == 429) {
        alert(`${data.error}`);
    } else if (response.status = 403) {
        alert(`${data.error}`);
    }
}

function redirectToPage(token) {
    const user = jwt_decode(token);

    if (user.role === 'admin') {
        window.location.href = '/src/pages/users.html';
    } else if (user.role === 'user') {
        window.location.href = '/src/pages/home.html';
    } else {
        alert('Unknown role');
    }
}

btnLogin.addEventListener('click', async () => {
    await login();
});

btnSignUp.addEventListener('click', () => {
    window.location.href = 'sign-up.html';
});