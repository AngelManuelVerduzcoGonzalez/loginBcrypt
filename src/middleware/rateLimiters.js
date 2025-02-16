const rateLimit = require('express-rate-limit');

module.exports = {
    userLimiter: rateLimit({
        windowMs: 10 * 60 * 1000, // 10 minutos
        max: 100, // Máximo 100 solicitudes por usuario
        message: 'Has superado el límite de peticiones, intenta más tarde.',
        handler: (req, res) => { 
            res.status(429).json({
                error: 'Has superado el límite de peticiones, intenta más tarde.'
            });
        },
        keyGenerator: (req) => req.user?.username || req.ip, // Usa el usuario autenticado o la IP
    }),
    signUpLimiter: rateLimit({
        windowMs: 30 * 60 * 1000, // 30 minutos
        max: 5, // Máximo 10 registros por IP
        message: 'Demasiadas cuentas creadas desde esta IP, intenta más tarde.',
        handler: (req, res) => { 
            res.status(429).json({
                error: 'Demasiadas cuentas creadas desde esta IP, intenta más tarde.'
            });
        }
    }),
    authLimiter: rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutos
        max: (req) => req.user ? 10 : 5, // Si está autenticado, permite hasta 10 intentos
        message: 'Demasiados intentos de login, intenta nuevamente más tarde.',
        handler: (req, res) => {
            res.status(429).json({
                error: 'Demasiados intentos de login, intenta nuevamente más tarde.'
            });
        },
        keyGenerator: (req) => req.body.username || req.ip, // Usa username si existe, si no, la IP
        standardHeaders: true,
        legacyHeaders: false,
    }),
}