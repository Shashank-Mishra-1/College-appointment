const jwt = require('jsonwebtoken');
exports.authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(403).json({ error: 'Token expired, please log in again' });
        } else if (error.name === 'JsonWebTokenError') {
            return res.status(403).json({ error: 'Invalid token' });
        }
        res.status(403).json({ error: 'Forbidden: Authentication error' });
    }
};

