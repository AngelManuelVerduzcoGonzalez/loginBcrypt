const btnSignUp = document.getElementById('btnSignUp');
const btnLogin = document.getElementById('btnLogin');
const username = document.getElementById('username');
const password = document.getElementById('password');

async function validateLogin() {
    const response = await fetch(`http://localhost:3000/users/${username.value}`);
    const user = await response.json();

    await dcodeIO.bcrypt.compare(password.value, user.password, (err, result) => {
        if (err) {
            console.error('Error comparing passwords:', err);
            alert('Internal Server Error');
        } else if (result) {
            return true;
        } else {
            return false;
        }
    });
};

btnLogin.addEventListener('click', async () => {

    if (await validateLogin()) {
        window.location.href = 'users.html';
    } else {
        alert('Invalid username or password');
    }
});

btnSignUp.addEventListener('click', () => {
    window.location.href = 'sign-up.html';
});