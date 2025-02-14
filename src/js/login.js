const btnSignUp = document.getElementById('btnSignUp');
const btnLogin = document.getElementById('btnLogin');
const username = document.getElementById('username');
const password = document.getElementById('password');

async function getUser() {
    const response = await fetch(`http://localhost:3000/users/${username.value}`);
    const user = await response.json();

    return user;
}

async function checkRole(user) {
    if(user.role === 'admin') {
        window.location.href = 'users.html';
    } else {
        window.location.href = 'index.html';
    }
}

async function validateLogin(user) {
    try {
        const match = await dcodeIO.bcrypt.compare(password.value, user.password);

        if (match) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        console.error('Error:', err);
        return false;
    }
};

btnLogin.addEventListener('click', async () => {

    const user = await getUser();

    if (await validateLogin(user)) {
        checkRole(user);
    } else {
        alert('Invalid username or password');
    }
});

btnSignUp.addEventListener('click', () => {
    window.location.href = 'sign-up.html';
});