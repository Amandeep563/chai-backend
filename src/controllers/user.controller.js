import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.models.js";
import { use } from "react";
const registerUser = asyncHandler(async (req, res) => {
  //TODO:
  //get user details from fronted
  //validation - not empty
  //check if user already exists : username , email
  //check for image and avator
  //upload them to cloudinary avator
  //create user object - create entry in db
  //remove password and refresh token field from respones
  //check for user creation
  //return res

  const { fullName, email, username, password } = req.body;
  console.log("username", username);
  console.log("email: ", email);
  console.log("fullname: ", fullName);
  console.log("password", password);

  // if (username === "") {
  //   throw new ApiError(400, "name is requried bhia");
  // }

  // if (
  //   [username, email, fullName, password].some((field) => field?.trim() === "")
  // ) {
  //   throw new ApiError(400, "bhai kuch toh likh");
  // }

  const fields = [username, email, fullName, password];

  if (fields.some((field) => field?.trim() === "")) {
    throw new ApiError(400, "bhai kuch toh likh");
  }

  const existedUser = User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new ApiError(409, "User with email or username alerady exits");
  }
});

export { registerUser };
