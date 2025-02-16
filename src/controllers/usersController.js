const fs = require('fs');
const path = require('path');

module.exports = {
    getUsers: (req, res) => { 
        const filePath = path.join(__dirname, '../../usuarios.json');
    
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
    
            const users = JSON.parse(data);
            res.status(200).json(users);
        });
    },
    updateUserStatus: (req, res) => { 
        const username = req.params.username;
        const filePath = path.join(__dirname, '../../usuarios.json');
    
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
    
            let users = [];
            if (data) {
                users = JSON.parse(data);
            }
    
            const userIndex = users.findIndex(user => user.username === username);
            if (userIndex === -1) {
                return res.status(404).json({ error: 'User not found' });
            } else {
                users[userIndex].isActive = !users[userIndex].isActive;
            }
    
            fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
                if (err) {
                    console.error('Error writing file:', err);
                    return res.status(500).json({ error: 'Internal Server Error' });
                } else {
                    console.log('User saved successfully');
                    res.status(200).json({ message: 'User status modified successfully' });
                }
            });
        });
    },
}