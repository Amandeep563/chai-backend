import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  res.stauts(200).json({
    message: "OK Nigga",
  });
});

export { registerUser };
