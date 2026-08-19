<h1 align="center">🚀 Streamify — Language Exchange Chat & Video Platform</h1>

<p align="center">
  <em>Connect with language learners around the world. Chat in real-time. Practice face-to-face over video. Make real friends, not just flashcards.</em>
</p>

---

## 💡 What is Streamify?

Streamify is a full-stack web application that makes learning languages social and fun. Instead of studying alone with textbooks, you get matched with real people who speak the language you're trying to learn — and who want to learn yours in return.

Think of it as a language partner platform with built-in messaging, video calls, and a beautiful interface that actually makes you want to use it.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔐 **Authentication** | Secure sign-up & login with JWT tokens, HTTP-only cookies, and protected routes |
| 🧑‍💻 **Onboarding Flow** | New users set up their profile, native language, and language they're learning |
| 🌍 **Smart Matching** | Get recommended language partners based on your profile and learning goals |
| 💬 **Real-time Chat** | Instant messaging powered by Stream Chat — typing indicators, reactions, and more |
| 📹 **HD Video Calls** | One-click video calling built right into the app — no Zoom links needed |
| 👤 **Profile Management** | Upload your own profile picture (WhatsApp-style), view your info at a glance |
| 🔔 **Friend Requests & Notifications** | Send, receive, and accept friend requests with a dedicated notification center |
| 🎨 **32 UI Themes** | Switch between 32 beautifully crafted themes (dark mode, retro, cyberpunk, and more) |
| 📱 **Responsive Design** | Looks great on desktop and adapts cleanly to different screen sizes |

---

## 🛠️ Tech Stack

### Frontend
- **React 19** — UI framework
- **React Router** — Client-side routing
- **TanStack Query (React Query)** — Server state management & caching
- **Zustand** — Lightweight global state (theme preferences)
- **Tailwind CSS + DaisyUI** — Utility-first styling with a component library
- **Stream Chat React** — Pre-built chat UI components
- **Stream Video React SDK** — Video calling integration
- **Lucide React** — Beautiful icon set
- **Axios** — HTTP client for API requests

### Backend
- **Node.js + Express** — REST API server
- **MongoDB + Mongoose** — Database and ODM
- **JSON Web Tokens (JWT)** — Authentication
- **Stream Chat SDK** — Server-side chat token generation and user management
- **bcrypt.js** — Secure password hashing

---

## 📁 Project Structure

```
Streamify/
├── frontend/                # React + Vite frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components (Navbar, Sidebar, etc.)
│   │   ├── pages/           # Route pages (Home, Login, Chat, Profile, etc.)
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/             # API functions and Axios config
│   │   ├── store/           # Zustand stores
│   │   └── constants/       # Static data (language lists, etc.)
│   └── public/              # Static assets
├── backend/                 # Express API server
│   └── src/
│       ├── controllers/     # Route handlers (auth, users, chat)
│       ├── models/          # Mongoose schemas (User, FriendRequest)
│       ├── routes/          # Express route definitions
│       ├── middleware/       # Auth middleware
│       └── lib/             # Database & Stream client setup
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **MongoDB Atlas** account (free tier works perfectly)
- **Stream** account at [getstream.io](https://getstream.io) (free tier available)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/streamify.git
cd streamify
```

### 2. Set Up Environment Variables

Create a `.env` file inside the **`/backend`** directory:

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
JWT_SECRET_KEY=your_jwt_secret
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

Create a `.env` file inside the **`/frontend`** directory:

```env
VITE_STREAM_API_KEY=your_stream_api_key
```

> **Note:** The `STREAM_API_KEY` must be the same in both `.env` files. You can get your keys from the [Stream Dashboard](https://dashboard.getstream.io/).

### 3. Install Dependencies & Run

**Start the backend:**
```bash
cd backend
npm install
npm run dev
```

**Start the frontend (in a new terminal):**
```bash
cd frontend
npm install
npm run dev
```

The app will be running at **http://localhost:5173** 🎉

---

## 🧭 How It Works

1. **Sign up** with your email and create a password
2. **Complete onboarding** — tell us your name, bio, native language, and what you're learning
3. **Browse recommended partners** — we show you people who complement your language goals
4. **Send a friend request** — once they accept, you can start chatting
5. **Message in real-time** — full-featured chat with reactions and typing indicators
6. **Jump on a video call** — click the call button inside any chat to start a face-to-face conversation
7. **Customize your experience** — pick from 32 themes, upload a profile picture, and make it yours

---

## 🤝 Contributing

Contributions are welcome! If you find a bug or have a feature idea, feel free to open an issue or submit a pull request.

---


---

<p align="center">
  Built with ❤️ using React, Express, MongoDB, and Stream
</p>
