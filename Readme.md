# SocialHub

SocialHub is a simple social media platform where users can create profiles, make posts, follow other users, like posts, and comment on posts.

## Features

- **User Registration**: Users can create an account by providing a username, email, and password.
- **User Authentication**: Authentication is implemented using JSON Web Tokens (JWT) to secure user endpoints.
- **User Login**: Registered users can log in using their email and password.
- **Create Posts**: Authenticated users can create new posts with text content.
- **View Posts**: Users can view posts created by themselves.
- **Follow Users**: Users can follow other users to stay updated with their posts.
- **Like Posts**: Users can like posts created by other users.
- **Comment on Posts**: Users can comment on posts created by other users.
- **Realtime Messaging**: Users can send realtime messages to each other with Socket.IO.

## Technologies Used

- **Node.js**: Backend JavaScript runtime environment.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing user profiles, posts, and interactions.
- **Mongoose**: MongoDB object modeling tool for Node.js.
- **JSON Web Tokens (JWT)**: Used for user authentication.
- **bcrypt.js**: Library for hashing passwords securely.
- **dotenv**: Module for loading environment variables from a `.env` file.
- **CORS**: Middleware for handling Cross-Origin Resource Sharing.
- **Socket.IO**: Real-time bidirectional communication library.

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB installed or accessible (local or cloud-based)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/KINDREW/social_hub.git
   cd socialhub
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and define the following variables:

   ```
   JWT_SECRET=your_jwt_secret
   MONGODB_URI=your_mongodb_uri
   ```

4. Start the server:
   ```bash
   npm start
   ```

- Register a new user account using the `/users/register` endpoint.
- Log in with the registered user account using the `/users/login` endpoint.
- Create posts using the `/posts` endpoint.
- Follow other users using the `/users/:userId/follow` endpoint.
- Like posts using the `/posts/:postId/like` endpoint.
- Comment on posts using the `/posts/:postId/comment` endpoint.
- Engage in real-time messaging with other users using Socket.IO for instantaneous communication. You can establish a WebSocket connection to `/chat` endpoint for real-time messaging.

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request for any improvements or additional features.
