const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

require('dotenv').config();

const usersController = require('./controllers/usersController');
const signUpController = require('./controllers/signUpController');
const loginController = require('./controllers/loginController');
const { authenticateToken, isAdmin } = require('./middleware/usuarios');
const { userLimiter, signUpLimiter, authLimiter } = require('./middleware/rateLimiters');

app.use(express.json());
app.use(cors({
    origin: 'http://127.0.0.1:5500'
}));

app.post('/login', authLimiter,(req, res) => {
    loginController.login(req, res);
});

app.post('/sign-up', signUpLimiter, (req, res) => {
    signUpController.signUp(req, res);
});

app.get('/users', authenticateToken, isAdmin, userLimiter, (req, res) => { 
    usersController.getUsers(req, res);
})

app.put('/users/:username', authenticateToken, isAdmin, userLimiter, (req, res) => { 
    usersController.updateUserStatus(req, res);
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});