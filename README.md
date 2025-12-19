![WhatsApp Image 2025-12-19 at 17 35 17](https://github.com/user-attachments/assets/b52dd023-b2a5-4cf4-ae22-ef685f88700a)
![WhatsApp Image 2025-12-19 at 17 35 30](https://github.com/user-attachments/assets/48a326cc-f0fd-40cb-b644-728a66f3d44b)
![WhatsApp Image 2025-12-19 at 17 36 10](https://github.com/user-attachments/assets/16621903-46c1-4c9e-a26c-c9ef7e5b0086)

🍔 Food Delivery Web App

A complete FULL-stack food delivery platform including:

🍽️ User-facing Food Ordering Website

🛠️ Admin Panel to manage items, orders & users

🔐 Node.js / Express Backend

💳 Stripe Payment Integration

🗄️ MongoDB Atlas Cloud Database

⚡ Fast, responsive & modern UI (React + Vite)

🚀 TECH STACK


FRONTEND

React.js

Vite

Axios

Context API

BACKEND

Node.js

Express.js

MongoDB Atlas

Stripe

Admin Panel

React (Vite)

📁 Project Structure
food-del/
 ├── backend/
 ├── frontend/
 └── admin/

How To Run Project

📌 1. Install Node.js

Download Node.js from:
https://nodejs.org/en/download/

🗄️ 2. Backend Setup
Step 1 — Open Backend Folder
cd backend

Step 2 — Install Node Modules
npm install

Step 3 — Setup MongoDB Atlas

Go to MongoDB Atlas: https://www.mongodb.com/cloud/atlas

Sign up or log in

Create a new project

Go to Database → Build Database

Choose:

M0 free tier

Your nearest region

Create a DB user

IMPORTANT: Avoid using @ symbol in password

Whitelist IP:

0.0.0.0/0


Click Connect → Compass → Copy Connection String

Paste it in backend/db.js

Replace <password> with your database password

💳 3. Stripe Setup

Open .env file inside backend/

Add your Stripe secret key:

STRIPE_SECRET_KEY=your_stripe_secret_key

▶️ 4. Run Backend Server
npm run server


Your backend should now be live.

🎨 5. Frontend Setup
Step 1 — Open Frontend
cd frontend

Step 2 — Install Node Modules
npm install

Step 3 — Start Frontend
npm run dev

🛡️ 6. Admin Panel Setup

Repeat the same steps as the frontend:

Step 1 — Navigate
cd admin

Step 2 — Install
npm install

Step 3 — Start Admin Panel
npm run dev

🔧 Environment Variables
Backend .env Example:
PORT=4000
MONGO_URI=your_connection_string_here
STRIPE_SECRET_KEY=your_stripe_key_here

▶️ Running the Entire Project

Open three terminals:

1. Backend
cd backend
npm run server

2. Frontend
cd frontend
npm run dev

3. Admin Panel
cd admin
npm run dev
