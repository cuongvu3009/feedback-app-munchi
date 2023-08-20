# 📌 Project Documentation

---

## 🌐 Frontend

### **Overview**:

The frontend of this project is a React application, utilizing the Stripe API for payment functionalities.

### **📦 Dependencies**:

- **Stripe Integration**:

  - `@stripe/react-stripe-js`: React components for Stripe.
  - `@stripe/stripe-js`: Stripe's JS library.
  - `react-stripe-elements`: Deprecated React components for Stripe.

- **Utilities**:

  - `axios`: Promise based HTTP client.
  - `moment`: Date library for parsing, validating, and manipulating dates.

- **React Ecosystem**:

  - Miscellaneous: `react-emojis`, `react-icons`, `react-router-dom`

### **🔧 Scripts**:

- `start`: Boot up the development server.
- `build`: Prepare app for production.
- `test`: Execute tests.
- `eject`: Remove the single build dependency from the project.

---

## 🛠 Backend

### **Overview**:

The backend runs on a Node.js server, primarily built with Express. It interfaces with a MongoDB database through Mongoose and offers email functionalities via Nodemailer. Additionally, Stripe integration enables payment processing.

### **📦 Dependencies**:

- **Express and Middleware**:

  - `express`: The backbone of the backend.
  - `cors`: Middleware for enabling Cross-Origin Resource Sharing.

- **Database**:

  - `mongoose`: ORM for MongoDB.

- **Configuration**:

  - `dotenv`: Manage environment variables.

- **Email**:

  - `nodemailer`: Send emails seamlessly.

- **Payment Processing**:

  - `stripe`: Handle payments securely.

- **Typescript and Typings**:

  - `typescript`: Enabling type-safe JavaScript.
  - Type definitions like `@types/express`, `@types/mongoose`, and others.

- **Development**:
  - `nodemon`: Auto-restart during development.
  - `ts-node`: Execute TypeScript without a prior compile step.

### **🔧 Scripts**:

- `start`: Launch the backend with TypeScript.
- `build`: Convert TypeScript to JavaScript.
- `serve`: Host the built backend.

---

## 🚀 Getting Started

### 🌐 Frontend:

1. `cd` into the frontend directory.
2. Install dependencies: `yarn`
3. Launch development server: `yarn start`
4. For production: `yarn run build`

### 🛠 Backend:

1. `cd` into the backend directory.
2. Install dependencies: `yarn`
3. Configure `.env` in the root directory with necessary environment variables, please check `.env.example` for better insight.
4. Launch development server: `yarn start`
5. For production: Build with `yarn run build`, then serve with `yarn run serve`.

> **❗ Note**: Please note that paying tip using Apple Pay is only visible if user is using iOS or MacOS devices, and paying tip using Google Pay is only visiable if user is using Window or Android devices.
> **❗ Note**: Please using this email service provider for nodemailer (https://mail.zoho.eu/), because email.service has been set up with it. There are emails for testing in .env.example in backend folder.
