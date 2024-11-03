const { HttpResponse } = require("../helpers/http-response.js");
const jwt = require("jsonwebtoken");
const userRepository = require("../repositories/user.repo");
require("dotenv").config();
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;
class AuthenticationService {
  async login(username, password) {
    const user = await userRepository.getUserByUserName(username);

    if (!user) {
      return new HttpResponse(null, {
        statusCode: 404,
        errorMessage: "User not found",
      });
    }
    if (user.password !== password) {
      return new HttpResponse(null, {
        statusCode: 401,
        errorMessage: "Invalid password",
      });
    }
    const accessToken = jwt.sign(
      { userId: user.id, userName: user.userName },
      accessTokenSecret,
      { expiresIn: "15m" }
    );
    const refreshToken = jwt.sign(
      { userId: user.id, userName: user.userName },
      refreshTokenSecret,
      { expiresIn: "7d" }
    );
    return { accessToken, refreshToken };
  }

  async refreshToken(refreshToken) {
    if (!refreshToken) throw new Error("Refresh token is required");

    const payload = jwt.verify(refreshToken, "REFRESH_TOKEN_SECRET");
    const newAccessToken = jwt.sign(
      { userId: payload.userId },
      "ACCESS_TOKEN_SECRET",
      { expiresIn: "15m" }
    );
    return { accessToken: newAccessToken };
  }
}
module.exports = new AuthenticationService();
