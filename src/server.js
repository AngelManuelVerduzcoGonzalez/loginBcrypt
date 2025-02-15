const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const usersController = require('./controllers/usersController')

app.use(express.json());
app.use(cors({
    origin: 'http://127.0.0.1:5500'
}));

app.post('/users', (req, res) => {
    usersController.createUser(req, res);
});

app.get('/users', (req, res) => { 
    usersController.getUsers(req, res);
})

app.get('/users/:username', (req, res) => {
    usersController.getUser(req, res);
});

app.put('/users/:username', (req, res) => { 
    usersController.updateUserStatus(req, res);
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});