# 💻 LaptopLink – MERN Capstone Project

**LaptopLink** is a donation and sponsorship platform built using the MERN stack. It connects students in need of laptops with donors and sponsors who want to help. The platform is designed with different roles (admin, student, donor) and includes features such as authentication, application tracking, role-based dashboards, and a responsive UI.

---

## 🚀 Live Demo

🌐 **Frontend**: [https://laptoplink.vercel.app](https://week-8-capstone-wangarijane.vercel.app/)  
🔗 **Backend**: [https://laptoplink-api.onrender.com](https://laptoplink-backend.onrender.com)

---

## 🧠 Project Overview

LaptopLink was created as a real-world solution for students who lack access to digital learning tools, particularly laptops. It simplifies the donation and sponsorship process while giving administrators full control over tracking, approvals, and logistics.

---

## 🛠️ Tech Stack

**Frontend**: React, Tailwind CSS, Vite  
**Backend**: Node.js, Express.js  
**Database**: MongoDB  
**Auth**: JWT-based Authentication  
**Dev Tools**: Vercel (Frontend), Render (Backend), Postman, GitHub

---

## 📁 Folder Structure

```
week-8-capstone_-Wangarijane/
│
├── client/                     # Frontend (React + Vite + Tailwind)
│   ├── public/
│   ├── src/
│   │   ├── api/               # Axios setup + API calls
│   │   ├── assets/            # Images, logos, icons
│   │   ├── components/        # Reusable UI components
│   │   ├── context/           # Global context (e.g. Auth, Theme)
│   │   ├── hooks/             # Custom hooks (e.g. useAuth)
│   │   ├── layouts/           # Shared page layouts (AuthLayout, MainLayout)
│   │   ├── pages/             # All routes/pages (Home, Register, etc.)
│   │   ├── routes/            # React Router configs
│   │   ├── utils/             # Helper functions (e.g. validators)
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │   ├── App.css
│   ├── .env                   # Frontend environment variables
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.mjs
│   ├── package.json
│   └── README.md
│
├── server/                    # Backend (Express + MongoDB + JWT)
│   ├── config/                # DB config & other setup
│   ├── controllers/           # Route logic
│   ├── middleware/            # Auth, error handler, etc.
│   ├── models/                # Mongoose schemas
│   ├── routes/                # All route files (authRoutes, studentRoutes, etc.)
│   ├── utils/                 # JWT, file handling, etc.
│   ├── server.js              # App entry point
│   ├── .env                   # Backend environment variables
│   ├── .env.example           # Sample env file
│   ├── .gitignore
│   ├── package.json
│   └── pnpm-lock.yaml
│
├── README.md
└── .gitignore                 # Optional global gitignore

```

---

## 🔐 Roles and Permissions

| Role     | Permissions                                      |
|----------|--------------------------------------------------|
| **Admin**   | Full control: user management, approvals, donations tracking, etc. *(Private Role – Cannot be registered manually)* |
| **Student** | Register, apply for a laptop, track application status |
| **Donor**   | Subscribe, sponsor laptops, send donations     |

---

## ✅ Completed Features

- [x] Admin, Donor, and Student roles
- [x] JWT authentication & protected routes
- [x] Role-based dashboards
- [x] User registration and login
- [x] Responsive frontend (React + Tailwind)
- [x] Backend deployed on Render
- [x] Frontend deployed on Vercel
- [x] Project structure using best practices

---

## 🧩 What's Left To Do (To Be Completed)

- [ ] Complete full donor logic and routes on backend
- [ ] Implement donor subscription + payment gateway integration
- [ ] Add donation tracking and analytics for admins
- [ ] Implement application approval/rejection logic
- [ ] Add file uploads (e.g., student documents)
- [ ] Build student application submission form
- [ ] Enable messaging or email notifications between roles
- [ ] Implement unit and integration tests
- [ ] Add CI/CD (GitHub Actions or similar)
- [ ] Add admin dashboard analytics/charts
- [ ] Add end-to-end tests using Cypress or Playwright
- [ ] Complete final video presentation and demo
- [ ] Finalize API documentation and usage guide

---

## 📸 Screenshots

### ✅ Landing Page

![Landing Page](./assets/landing-page.png)

---

## 🧪 Testing Plan

- Unit tests for critical backend utilities and frontend components
- Integration tests for key API endpoints
- Manual testing across Chrome, Firefox, and Edge (Desktop + Mobile)
- Accessibility checks with Lighthouse

---

## 📄 Setup Instructions

### 🔧 Backend
```bash
cd server
pnpm install
pnpm run dev
```
Set up .env in /server:
```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

---

## 🌐 Frontend

```bash
cd client
pnpm install
pnpm run dev
```
Set up .env in /client:

```
VITE_API_URL=https://your-backend-url.onrender.com
```

---

## 📦 Deployment
- Backend: Render

- Frontend: Vercel

- CI/CD connected to GitHub for both.

---

## 🎥 Demo Video
🔗 Coming soon...
(A 5–10 min walkthrough video showcasing all features will be added here.)

---

## 👩🏽‍💻 Author
Jane Muriithi – Full-Stack MERN Developer
Capstone Project for Week 8 of Power Learn Project

---

## 📜 License
MIT License

---

## 📝 Acknowledgements
Thanks to the instructors and the entire MERN course team for their support and guidance throughout this journey.

