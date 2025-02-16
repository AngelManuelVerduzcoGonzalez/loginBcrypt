const jwt = require('jsonwebtoken');

module.exports = {
    authenticateToken: (req, res, next) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
    
        if (!token) {
            return res.status(401).json({ error: 'Token no proporcionado.' });
        }
    
        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) {
                return res.status(403).json({ error: 'Token no válido.' });
            }
    
            req.user = user;
            next();
        });
    },
    isAdmin: (req, res, next) => {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ error: 'Token no proporcionado.'});
        }
        jwt.verify(token.split(' ')[1], process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(401).json({ error: 'Token no válido.' });
            }
            if (decoded.role != 'admin') { // Verifica si el usuario es administrador
                return res.status(403).json({ error: 'No tienes permisos para acceder a esta ruta.' });
            }
            req.user = decoded; // Adjunta datos decodificados del usuario a la solicitud
            next();
        });
    }
}