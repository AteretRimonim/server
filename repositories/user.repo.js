const Repository = require("./Repository");
const userModel = require("../models/user.model");
const { HttpResponse } = require( '../helpers/http-response.js' );

class UserRepo extends Repository {
  constructor() {
    super(userModel);
  }


  async existsUserToLogin(password, email) {
    try {
      const user = await this.model.findOne({ email: email });
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
      return new HttpResponse(user);
    } catch (error) {
      throw error;
    }
  }
}
module.exports = new UserRepo();
