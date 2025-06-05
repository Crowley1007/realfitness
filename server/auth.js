import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
    
    const authHeader = req.headers['authorization'];

    
    const token = authHeader && authHeader.split(' ')[1];

    
    if (token == null) {
        return res.sendStatus(401); 
    }

   
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.error('Erro ao verificar token:', err);
            return res.sendStatus(403); 
        }

        req.userId = user.userId;
        next();
    });
};

export default authenticateToken;
