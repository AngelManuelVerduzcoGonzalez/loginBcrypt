const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    signUp: (req, res) => {
        const user = req.body;
        const id = uuidv4();
        const newUser = { id, ...user };

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
    
            users.push(newUser);
    
            fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
                if (err) {
                    console.error('Error writing file:', err);
                    return res.status(500).json({ error: 'Internal Server Error' });
                } else {
                    console.log('User saved successfully');
                    res.status(200).json({ message: 'User saved successfully' });
                }
            });
        });
    }
}