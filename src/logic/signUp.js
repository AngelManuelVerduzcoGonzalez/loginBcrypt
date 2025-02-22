const saltRounds = 10;

const btn = document.getElementById('btn');
const username = document.getElementById('username');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

function validatePasswords() {
    const passwordRegex = /^[a-zA-Z0-9]+$/;

    if (password.value.length < 8) {
        mostrarErrorToast('Password must be at least 8 characters long');
        return false;
    }

    if (password.value !== confirmPassword.value) {
        mostrarErrorToast('Passwords do not match');
        return false;
    }

    if (!passwordRegex.test(password.value)) {
        mostrarErrorToast('Password must contain only numbers and letters');
        return false;
    }

    return true;
}

function validateUsername() {
    const usernameRegex = /^[a-zA-Z0-9]+$/;

    if (username.value.length < 4) {
        mostrarErrorToast('Username must be at least 4 characters long');
        return false;
    }

    if (!usernameRegex.test(username.value)) {
        mostrarErrorToast('Username must contain only numbers and letters');
        return false;
    }

    return true;
}

function hashPassword(password) {
    return new Promise((resolve, reject) => {
        dcodeIO.bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) reject(err);
            dcodeIO.bcrypt.hash(password, salt, (err, hash) => {
                if (err) reject(err);
                resolve(hash);
            });
        });
    });
}

async function saveUser(user) {
    try {
        const hashedPassword = await hashPassword(user.password);
        user.password = hashedPassword;

        const response = await fetch('http://localhost:3000/sign-up', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        const data = await response.json();
        console.log('User saved successfully:', data);
        window.location.href = 'index.html';
    } catch (error) {
        console.error('Error saving user:', error);
    }
}

btn.addEventListener('click', (e) => {
    e.preventDefault();

    const user = {
        username: username.value,
        password: password.value,
        role: "user",
        isActive: true,
    };

    if (validatePasswords() && validateUsername()) {
        saveUser(user);
    }
});