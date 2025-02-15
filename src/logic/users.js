const table = document.getElementById('table');

async function getUsers() { 
    const response = await fetch('http://localhost:3000/users');
    const users = await response.json();

    return users;
}

async function changeStatus(username) { 
    const response = await fetch(`http://localhost:3000/users/${username}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();
    console.log(data);
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
        tdActive.innerHTML = `<button class='btnStatus' onClick="changeStatus('${user.username}')">${user.isActive ? 'Active' : 'Inactive'}</button>`;

        tr.appendChild(tdUsername);
        tr.appendChild(tdRole);
        tr.appendChild(tdActive);

        table.appendChild(tr);
    });
}

getUsers();
displayUsers();
