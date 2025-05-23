﻿# Learning-Management-System

LMS Studio is a full-stack Learning Management System built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to enroll in courses, manage their learning, and offers instructors the ability to publish and track educational content.

🚀 Features
🔐 User Authentication (JWT)

👨‍🏫 Instructor dashboard to create and manage courses

🎥 Video-based course content

🧠 Progress tracking and "My Learning" section

💳 Stripe-powered payments for course purchases

🌗 Dark mode support

🧩 Responsive UI for desktop and mobile

📁 Project Structure
bash
Copy
Edit
.
├── client       # React frontend
└── server       # Express + Node backend
🛠️ Tech Stack
Frontend	Backend	Database	Other
React + Vite	Express.js	MongoDB	Stripe, Redux, JWT

⚙️ How to Run the Project Locally
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2. Run the Backend (server)
bash
Copy
Edit
cd server
npm install
# Create a .env file and configure MONGODB_URL, STRIPE_SECRET_KEY, JWT_SECRET, etc.
npm run dev
Server will start on: http://localhost:8080

3. Run the Frontend (client)
bash
Copy
Edit
cd client
npm install
npm run dev
Frontend will start on: http://localhost:5173

🌐 Environment Variables
Set these in your server/.env file:

env
Copy
Edit
PORT=8080
MONGODB_URL=your_mongodb_uri
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret
CLIENT_URL=http://localhost:5173
📦 Deployment
Frontend can be deployed on Vercel, Netlify, or similar.

Backend can be deployed on Render, Railway, or any Node.js hosting provider.

MongoDB can use Atlas for cloud hosting.

Stripe keys must be updated with live credentials for production.

💡 About the Project
LMS Studio was built to simplify online course delivery. Whether you're an individual educator or an institution, this system supports:

Secure user registration and login

Easy course creation with video uploads

Clean UX for learners

Seamless payments for monetization
