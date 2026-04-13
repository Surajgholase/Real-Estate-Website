# 🏠 LuxeVilla Heights — Real Estate Website with Admin Panel

A premium, full-stack real estate property showcase application built with a modern tech stack. This project features a stunning landing page for potential buyers and a comprehensive Admin Dashboard for dynamic content management.

## ✨ Features

### 🌐 Frontend (Landing Page)
- **Modern UI/UX**: Built with Tailwind CSS for a premium, high-end feel.
- **Dynamic Content**: All sections (Hero, Overview, Amenities, etc.) are loaded from the backend.
- **Interactive FAQ**: Accordion-style FAQ section.
- **Construction Updates**: Vertical timeline showing project progress.
- **Connectivity Map**: Showcase local landmarks and distances.
- **Contact Form**: Functional enquiry form with field validations.
- **Fully Responsive**: Optimized for mobile, tablet, and desktop.

### 🔐 Admin Dashboard
- **Secure Authentication**: Session-based login (no JWT required).
- **Real-time Editing**: Update any section of the website instantly.
- **List Management**: Add, remove, and edit list items like Amenities, FAQs, and Construction Updates.
- **Dynamic Previews**: Clean form-based editing for a smooth user experience.

---

## 🚀 Tech Stack

- **Frontend**: React.js, Tailwind CSS, Lucide Icons, Axios, React Router.
- **Backend**: Node.js, Express.js.
- **Database**: SQLite (`better-sqlite3`) — Lightweight, file-based, and zero-config.
- **Auth**: `express-session` for secure server-side sessions.

---

## 🛠️ Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)

### 1. Clone the Repository
```bash
git clone https://github.com/Surajgholase/Real-Estate-Website.git
cd Real-Estate-Website
```

### 2. Setup Backend
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` folder:
```env
PORT=5000
SESSION_SECRET=your_secret_key_here
DB_PATH=./database.sqlite
```
Start the backend:
```bash
npm run dev
```

### 3. Setup Frontend
```bash
cd ../frontend
npm install
```
Start the frontend:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## 🔑 Admin Access

To access the admin panel, navigate to `/admin/login`:

- **URL**: [http://localhost:5173/admin/login](http://localhost:5173/admin/login)
- **Email**: `admin@gmail.com`
- **Password**: `1234`

---

## 📂 Project Structure

```text
Real-Estate-Website/
├── backend/
│   ├── routes/          # API Route handlers
│   ├── middleware/      # Auth & Security
│   ├── db.js            # SQLite connection & Seeding
│   ├── server.js        # Express application entry
│   └── database.sqlite  # Auto-generated database file
├── frontend/
│   ├── src/
│   │   ├── components/  # Reusable UI sections
│   │   ├── pages/       # Home, Login, Dashboard
│   │   ├── context/     # Auth State Management
│   │   └── services/    # Axios API instance
│   └── tailwind.config  # Custom design system
└── README.md
```

---

## 📦 Deployment

### Backend (Render/Heroku/Railway)
1. Ensure `SESSION_SECRET` is set in the environment variables.
2. If using Render, use a **Persistent Disk** to keep the `database.sqlite` file, or migrate to a managed database for production.

### Frontend (Vercel/Netlify)
1. Set the environment variable `VITE_API_URL` to your deployed backend URL.
2. Build command: `npm run build`.

---

## 📄 License
This project is licensed under the MIT License.

## 🤝 Contact
For enquiries, please contact [sales@luxevilla.com](mailto:sales@luxevilla.com).
