const authService = require('../services/authentication.service');
const autoBind = require('auto-bind');

class AuthenticationController {
    constructor() {
        autoBind(this);
    }

async login(req, res, next) {
    try {
        const { username, password } = req.body;
        if (!username || !password) 
        {
            return res.status(400).json({ message: "Username and password are required" });
        }
        const tokens = await authService.login(username, password);
        if (!tokens || !tokens.accessToken || !tokens.refreshToken) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        res.cookie('refreshToken', tokens.refreshToken, {
            httpOnly: true,
            secure: false, 
            sameSite: 'strict'
        });
        res.json({ accessToken: tokens.accessToken });
    } catch (error) {
        next(error);
    }
};

async refreshToken(req, res, next){
    try {
        const refreshToken = req.cookies.refreshToken;
        const newTokens = await authService.refreshToken(refreshToken);
        res.json({ accessToken: newTokens.accessToken });
    } catch (error) {
        next(error);
    }
};
}
module.exports= new AuthenticationController();

