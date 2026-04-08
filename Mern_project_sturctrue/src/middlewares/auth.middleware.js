import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";
import jwt from "jsonwebtoken";


export const verifyJWT = asyncHandler(async(req, res, next) => {
try {
        const token = req.cookies?.req.accessToken || req.headers("Authorization")?.replace("bearer ", "");
    
        if(!token) {
            throw new ApiError(401, 'Unauthorized, token is missing');
        }
     
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    
        const user = await User.findById(decodedToken._id).select("-password -refreshToken");
    
        if(!user) {
            throw new ApiError(401, 'Unauthorized, user not found');
        }
        console.log("hello")
        req.user = user;
        next();
} catch (error) {
    throw new ApiError(401, error?.message || 'Unauthorized, invalid access token');
}
})