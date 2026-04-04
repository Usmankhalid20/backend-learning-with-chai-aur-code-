import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { User } from '../models/user.model.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';
import { ApiResponse } from '../utils/ApiResponse.js';

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, fullname, password } = req.body;

  //  validation
  if (
    [username, email, fullname, password].some((field) => field?.trim() === '')
  ) {
    throw new ApiError('All fields are required', 400);
  }

  // check if user already exists
  const existedUser = await User.findOne({
    $or: [{ email }, { username }],
  });
  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists")
  }
  // AVATAR AND COVER IMAGE
  const avatarLocalPath = req.files?.avatar?.[0]?.path;
  // const coverImageLocalPath = req.files?.coverImage?.[0]?.path;

  let coverImageLocalPath;

  if(req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
    coverImageLocalPath = req.files.coverImage[0].path;
  }
  if (!avatarLocalPath) {
    throw new ApiError('Avatar is required', 400);
    // console.log('DEBUG FILES:', req.files);
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath);
  if (!avatar) {
    throw new ApiError(400, 'Failed to upload avatar');
  }

  
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);
  // console.log(req.files);
  // console.log(req.files?.avatar);
// console.log('DEBUG AVATAR:', avatar);

  const user = await User.create({
    fullname,
    username: username.toLowerCase(),
    avatar: avatar.url,
    coverImage: coverImage?.url,
    email,
    password,
  });

  const userCreated = await User.findById(user._id).select(
    '-password -refreshToken'
  );
console.log('DEBUG USER CREATED:', userCreated);
  if (!userCreated) {
    throw new ApiError(500, 'Failed to create user');
  }

  return res
    .status(201)
    .json(new ApiResponse(200, userCreated, 'User registered successfully'));
});

export { registerUser };
