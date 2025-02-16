const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    login: (req, res) => {
        const { username, password } = req.body;
        const filePath = path.join(__dirname, '../../usuarios.json');

        fs.readFile(filePath, 'utf8', async (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                return res.status(500).send('Internal Server Error');
            }

            const users = JSON.parse(data);
            const user = users.find(u => u.username === username);

            if (!user) {
                return res.status(401).json({ error: 'Invalid username or password' });
            }

            const match = await bcrypt.compare(password, user.password);

            if (!match) {
                return res.status(401).json({ error: 'Invalid username or password' });
            }

            const token = jwt.sign({ username: user.username, role: user.role }, process.env.SECRET_KEY, { expiresIn: '1h' });

            res.json({ token });
        });
    }
}