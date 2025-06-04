import jwt from "jsonwebtoken";
import User from "../models/User";
import asyncHandler from "./asyncHandler.js";

// check if the user id authenticated or not
const authenticate = asyncHandler(async (req, res, next) => {
  let token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userID).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authenticated token failed.");
    }
  } else {
    res.status(401);
    throw new Error("Not authenticated token failed.");
  }
});

const authorizeAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    req.status(401).send("Not authorized as an Admin.");
  }
};

export { authenticate, authorizeAdmin };
