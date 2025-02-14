const table = document.getElementById('table');

async function getUsers() { 
    const response = await fetch('http://localhost:3000/users');
    const users = await response.json();

    return users;
}

async function displayUsers() {
    const users = await getUsers();

    users.forEach(user => {
        const tr = document.createElement('tr');
        const tdUsername = document.createElement('td');
        const tdRole = document.createElement('td');
        const tdActive = document.createElement('td');

        tdUsername.textContent = user.username;
        tdRole.textContent = user.role;
        tdActive.textContent = user.isActive;

        tr.appendChild(tdUsername);
        tr.appendChild(tdRole);
        tr.appendChild(tdActive);

        table.appendChild(tr);
    });
}

getUsers();
displayUsers();