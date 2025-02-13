const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({
    origin: 'http://127.0.0.1:5500'
}));

app.post('/save-user', (req, res) => {
    const user = req.body;
    const filePath = path.join(__dirname, 'usuarios.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).send('Internal Server Error');
        }

        let users = [];
        if (data) {
            users = JSON.parse(data);
        }

        users.push(user);

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
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});