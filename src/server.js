const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

require('dotenv').config();

const usersController = require('./controllers/usersController');
const signUpController = require('./controllers/signUpController');
const loginController = require('./controllers/loginController');
const { authenticateToken, isAdmin } = require('./middleware/usuarios');

app.use(express.json());
app.use(cors({
    origin: 'http://127.0.0.1:5500'
}));

app.post('/login', (req, res) => {
    loginController.login(req, res);
});

app.post('/sign-up', (req, res) => {
    signUpController.signUp(req, res);
});

app.get('/users', authenticateToken, isAdmin, (req, res) => { 
    usersController.getUsers(req, res);
})

app.put('/users/:username', authenticateToken, isAdmin, (req, res) => { 
    usersController.updateUserStatus(req, res);
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});