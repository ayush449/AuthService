# Pizza Delivery App - Authentication Service

Authentication microservice for the pizza delivery application handling user registration, login, and authorization.

## Features

- User registration with email validation
- Secure login with JWT tokens
- Password hashing with bcrypt
- Role-based access control (Customer, Admin, Delivery)
- Token refresh functionality
- Account verification via email

## API Endpoints

### Authentication

- `POST /auth/register` - Register new user
- `POST /auth/login` - User login
- `POST /auth/refresh` - Refresh JWT token
- `POST /auth/logout` - User logout

### User Management

- `GET /auth/profile` - Get user profile
- `PUT /auth/profile` - Update user profile
- `POST /auth/verify-email` - Verify email address
- `POST /auth/forgot-password` - Request password reset

## Getting Started

### Prerequisites

- Node.js v22+
- npm or yarn
- MongoDB/PostgreSQL database

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Production

```bash
npm run build
npm start
```

### Linting & Formatting

```bash
npm run lint
npm run format
```

## Environment Variables

```env
PORT=3001
JWT_SECRET=your_jwt_secret
JWT_REFRESH_SECRET=your_refresh_secret
DATABASE_URL=your_database_url
EMAIL_SERVICE_URL=your_email_service
```

## User Roles

- **Customer**: Order pizzas, view order history
- **Admin**: Manage menu, users, and orders
- **Delivery**: View and update delivery status

## Tech Stack

- TypeScript
- Node.js
- Express.js
- JWT for authentication
- bcrypt for password hashing
- ESLint + Prettier for code quality
