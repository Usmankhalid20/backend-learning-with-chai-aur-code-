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
    throw new ApiError('User already exists', 400);
  }
  // AVATAR AND COVER IMAGE
  const avatarLocalPath = req.files?.avatar?.[0]?.path;
  const coverImageLocalPath = req.files?.coverImage?.[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError('Avatar is required', 400);
    console.log('DEBUG FILES:', req.files);
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath);
  if (!avatar) {
    throw new ApiError('Failed to upload avatar', 400);
  }
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);
  console.log(req.files);
  console.log(req.files?.avatar);

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

  if (!userCreated) {
    throw new ApiError('Failed to create user', 500);
  }

  return res
    .status(201)
    .json(new ApiResponse(200, userCreated, 'User registered successfully'));
});

export { registerUser };
