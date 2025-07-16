# 🔗 Shortly - URL Shortener App

A modern, secure, and responsive URL shortening web application built using the MERN stack. This app allows users to shorten long URLs, manage their links, and view basic analytics — all while ensuring security through JWT authentication.

---

## 🧠 Project Overview

**Shortly** is a full-stack application that:

* Converts long URLs into short, shareable links.
* Provides a user dashboard to manage URLs (create, view, edit, delete).
* Tracks click statistics.
* Implements user authentication and private/public URLs.

---

## 🚀 Tech Stack

| Layer            | Technology & Description                                             |
| ---------------- | -------------------------------------------------------------------- |
| Frontend         | **React** – component-based UI library for building SPAs             |
|                  | **Redux Toolkit** – state management library                         |
|                  | **Tailwind CSS** – utility-first CSS framework for responsive design |
| Backend          | **Node.js** – JavaScript runtime for backend development             |
|                  | **Express.js** – fast, minimalist web framework                      |
| Database         | **MongoDB** – NoSQL database for scalable document storage           |
| ORM              | **Mongoose** – elegant MongoDB object modeling for Node.js           |
| Authentication   | **JWT (JSON Web Token)** – secure token-based authentication         |
| Unique ID Gen    | **nanoid** – secure, URL-friendly unique string ID generator         |
| State Management | **Redux Toolkit** – efficient and scalable state handling            |
| API Calls        | **Axios** – promise-based HTTP client                                |
| Styling          | **Tailwind CSS** – utility classes for styling                       |

---

## 🧩 Key Features

* 🔐 **JWT-based Authentication** – Secure login and signup functionality.
* ✂️ **Short URL Generation** – Converts long URLs into random or custom short links.
* 📊 **Link Analytics** – Tracks total clicks and link history.
* 🧑‍🏠 **User Dashboard** – View, update, or delete URLs.
* 🔒 **Private/Public URLs** – Control visibility of URLs to others.
* 💡 **Responsive UI** – Clean and adaptive design using Tailwind CSS.

---

## 🧱 Folder Structure (MVC + MERN)

```
shortly/
│
├── frontend/                       # Frontend (React)
│   ├── public/
│   ├── src/
│   │   ├── assets/                 # Images, icons, etc.
│   │   ├── components/             # Reusable UI components
│   │   ├── features/               # Redux slices
│   │   ├── pages/                  # Route-based views
│   │   ├── redux/                  # Redux store setup
│   │   ├── services/               # Axios services
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── tailwind.config.js
│
├── backend/                        # Backend (Node.js, Express)
│   ├── config/                     # MongoDB, env config
│   ├── controllers/                # Business logic
│   ├── middlewares/               # Auth, error handlers
│   ├── models/                     # MongoDB schemas
│   ├── routes/                     # API endpoints
│   ├── utils/                      # Helper functions (e.g., nanoid generator)
│   ├── app.js                      # Express app config
│   └── server.js                   # Entry point
│
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Project Setup

### 1️⃣ Backend Setup (Express + MongoDB + nanoid)

```bash
cd shortly
mkdir backend && cd backend
npm init -y
npm install express mongoose cors dotenv jsonwebtoken bcryptjs nanoid
```

**backend/server.js**

```js
const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("MongoDB connected");
  app.listen(process.env.PORT || 5000, () => {
    console.log("Server running on port 5000");
  });
});
```

**backend/app.js**

```js
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', routes);

module.exports = app;
```

---

### 2️⃣ Frontend Setup (React + Tailwind + Redux)

```bash
cd ../
npx create-react-app frontend
cd frontend
npm install axios redux react-redux @reduxjs/toolkit react-router-dom
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**tailwind.config.js**

```js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**src/index.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 🗃️ MongoDB Models

**User Model**

```js
// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
});

module.exports = mongoose.model("User", userSchema);
```

**URL Model**

```js
// models/Url.js
const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  fullUrl: String,
  shortUrl: String,
  clicks: { type: Number, default: 0 },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Url", urlSchema);
```

---

## 📌 Key Implementation Aspects

| Category       | Focus                                             |
| -------------- | ------------------------------------------------- |
| 🛡 Security    | Password hashing (`bcrypt`), token protection     |
| 🌐 Shortening  | Custom/random short code generation with `nanoid` |
| 📊 Analytics   | Click tracking, date/time logs (optional)         |
| 🔍 Validation  | URL formatting, required field checks             |
| 📱 Responsive  | Mobile-first, Tailwind utility-based design       |
| 🧠 Redux       | Centralized state for user, URL data              |
| 🔀 MVC Pattern | Controllers, Routes, Models separation            |

---

## 💡 Future Enhancements

* 🗓 URL Expiry support
* 🔑 Custom Aliases (e.g., `short.ly/myLink`)
* 📸 QR Code Generation
* 🌍 Public/Private toggle for links
* 👨‍💼 Admin dashboard with global analytics

---

## 📬 Contact

**Author:** Engr. M Afaq Ahmad
**Profession:** Computer Engineer

Want to collaborate or suggest improvements? Feel free to reach out via \[email/contact].

---

> Made with 💙 using MERN, Tailwind, JWT & nanoid
