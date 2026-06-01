import { Router } from 'express';
import {
  changeCurrentPassword,
  getCurrentUser,
  getUserChannelProfile,
  getWatchHistory,
  loggedOutUser,
  loginUser,
  refreshAccessToken,
  registerUser,
  updateAccountDetails,
  updateAvatarImage,
  updateCoverImage,
} from '../controllers/user.controller.js';
import { upload } from '../middlewares/multer.middleware.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';

const router = Router();

router.route('/register').post(
  upload.fields([
    { name: 'avatar', maxCount: 1 },
    { name: 'coverImage', maxCount: 1 },
  ]),
  registerUser
);

router.route('/login').post(loginUser);
// secured route
router.route('/logout').post(verifyJWT, loggedOutUser);
router.route('/refresh-token').post(refreshAccessToken);
router.route('/change-password').post(verifyJWT, changeCurrentPassword);
router.route('/getCurrentUser').get(verifyJWT, getCurrentUser);
router.route('/updateAccountDetails').patch(verifyJWT, updateAccountDetails);
router.route('/avatar').patch(verifyJWT, upload.single('avatar'), updateAvatarImage);
router.route('/cover-image').patch(verifyJWT, upload.single('coverImage'), updateCoverImage);
router.route('/c/:username').get(verifyJWT, getUserChannelProfile);
router.route('/history').get(verifyJWT, getWatchHistory);
console.log('User routes loaded successfully');
export default router;
