# VideoTube Backend

An Express.js and MongoDB backend for a video platform. This project handles user authentication, profile management, file uploads, and JWT-based protected routes. Uploaded media is stored temporarily in `public/uploads` and then pushed to Cloudinary.

## Features

- User registration and login
- JWT access and refresh token authentication
- Logout and token refresh flow
- Update account details
- Update avatar and cover images
- Fetch the current user profile
- Fetch a channel profile by username
- Fetch watch history
- MongoDB models for users, videos, and subscriptions

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT
- bcrypt
- Multer
- Cloudinary
- CORS and cookie parsing

## Project Structure

- `src/index.js` - application entry point
- `src/app.js` - Express app configuration and route mounting
- `src/db/index.js` - MongoDB connection
- `src/controllers/` - request handlers
- `src/models/` - Mongoose schemas
- `src/routers/` - API routes
- `src/middlewares/` - authentication and upload middleware
- `src/utils/` - shared helpers and response/error classes
- `public/uploads/` - temporary local upload storage

## Installation

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root and add the required environment variables.

3. Start the development server:

```bash
npm run dev
```

4. Or start the production server:

```bash
npm start
```

## Environment Variables

The app expects these variables in `.env`:

```env
PORT=8000
MONGO_URI=mongodb://127.0.0.1:27017
CORS_ORIGIN=http://localhost:3000

ACCESS_TOKEN_SECRET=your_access_token_secret
ACCESS_TOKEN_EXPIRES_IN=1d

REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRES_IN=10d

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## API Base Path

All user routes are mounted under:

```bash
/api/v1/user
```

## Available Routes

- `POST /register` - register a new user with `avatar` and optional `coverImage` uploads
- `POST /login` - log in with email or username
- `POST /logout` - log out the current user
- `POST /refresh-token` - refresh the access token
- `POST /change-password` - change the current password
- `GET /getCurrentUser` - get the logged-in user
- `PATCH /updateAccountDetails` - update fullname, username, and email
- `PATCH /avatar` - update the avatar image
- `PATCH /cover-image` - update the cover image
- `GET /c/:username` - get a channel profile by username
- `GET /history` - get the current user's watch history

## Authentication

Protected routes use JWT authentication. The middleware checks the access token from cookies and attaches the authenticated user to `req.user`.

## Notes

- Passwords are hashed with bcrypt before saving.
- Uploaded files are sent to Cloudinary and then removed from local storage.
- The database name used by the app is `VideoTube`.

## License

ISC
