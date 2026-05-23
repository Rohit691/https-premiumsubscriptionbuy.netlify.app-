# 🚀 Online Subscription Website — Full Stack Setup Guide

## 📁 Project Structure
```
online-subscription/
├── frontend/
│   └── index.html          ← Your website (open in browser)
└── backend/
    ├── server.js            ← Main server
    ├── .env.example         ← Copy to .env and fill values
    ├── package.json
    ├── models/
    │   ├── User.js          ← User database model
    │   ├── Product.js       ← Product database model
    │   └── Order.js         ← Order database model
    ├── routes/
    │   ├── auth.js          ← Login / Register APIs
    │   ├── products.js      ← Products API
    │   └── orders.js        ← Orders + Razorpay API
    ├── middleware/
    │   └── auth.js          ← JWT authentication
    └── config/
        └── email.js         ← Email delivery system
```

---

## ✅ STEP 1 — Install Node.js
Download and install from: https://nodejs.org  
Choose the **LTS version**

---

## ✅ STEP 2 — Install backend packages
Open terminal in the `backend` folder and run:
```bash
npm install
```

---

## ✅ STEP 3 — Set up MongoDB (Free Database)
1. Go to https://mongodb.com/atlas
2. Create a free account
3. Create a new **free cluster**
4. Click **Connect → Connect your application**
5. Copy the connection string (looks like):
   ```
   mongodb+srv://username:password@cluster.mongodb.net/online-subscription
   ```

---

## ✅ STEP 4 — Set up Razorpay (Payments)
1. Go to https://dashboard.razorpay.com
2. Create a free account
3. Go to **Settings → API Keys**
4. Generate a new key pair
5. Copy **Key ID** and **Key Secret**

---

## ✅ STEP 5 — Set up Gmail for Email Delivery
1. Go to your Google Account → Security
2. Enable **2-Step Verification**
3. Go to **App Passwords** → Generate one for "Mail"
4. Copy the 16-character app password

---

## ✅ STEP 6 — Create your .env file
In the `backend` folder, copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Then fill in your values:
```env
MONGO_URI=mongodb+srv://youruser:yourpass@cluster.mongodb.net/online-subscription
JWT_SECRET=any_random_long_string_here_abc123xyz
RAZORPAY_KEY_ID=rzp_test_XXXXXXXXXX
RAZORPAY_KEY_SECRET=XXXXXXXXXXXXXXXXXXXXXXXXX
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=xxxx xxxx xxxx xxxx
WHATSAPP_NUMBER=919XXXXXXXXX
FRONTEND_URL=http://localhost:5500
```

---

## ✅ STEP 7 — Start the backend server
```bash
node server.js
```
You should see:
```
✅ MongoDB Connected
🚀 Server running on http://localhost:5000
```

---

## ✅ STEP 8 — Open the frontend
Open `frontend/index.html` in your browser using **Live Server** (VS Code extension)
or just double-click the file.

The website will automatically load products from your backend!

---

## ✅ STEP 9 — Update Razorpay key in frontend
Open `frontend/index.html` and find this line near the bottom:
```javascript
const RAZORPAY_KEY = 'rzp_test_XXXXXXXXXX';
```
Replace with your actual Razorpay Key ID.

---

## ✅ STEP 10 — Add your subscription credentials
When you add products to the database, fill in the `credentials` field:
```json
{
  "name": "Netflix Premium",
  "credentials": {
    "email": "netflix@yourdomain.com",
    "password": "YourPassword123",
    "note": "Use profile 3 only. Do not change password."
  }
}
```
These are sent automatically to buyers after payment.

---

## 🌐 STEP 11 — Deploy Online (Make it live)

### Frontend → Netlify (Free)
1. Go to https://netlify.com
2. Drag and drop your `frontend` folder
3. Done! You get a free URL like `yoursite.netlify.app`

### Backend → Railway (Free)
1. Go to https://railway.app
2. Connect your GitHub repo
3. Add your `.env` variables in Railway dashboard
4. Deploy! You get a URL like `yourapp.up.railway.app`

### Then update `API_BASE` in `frontend/index.html`:
```javascript
const API_BASE = 'https://yourapp.up.railway.app/api';
```

---

## 🛠️ Admin Panel
To make yourself admin, go to MongoDB Atlas, find your user document and change:
```json
{ "role": "admin" }
```
Admin can:
- Add/edit/delete products via API
- View all orders
- Update product credentials

---

## 💬 Support
For help setting this up, contact via WhatsApp: +91-84090-81014

---

## 📋 API Reference

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | /api/products | No | Get all products |
| POST | /api/products | Admin | Add product |
| PUT | /api/products/:id | Admin | Update product |
| POST | /api/auth/register | No | Register user |
| POST | /api/auth/login | No | Login user |
| GET | /api/auth/me | Yes | Get current user |
| POST | /api/orders/create | Yes | Create Razorpay order |
| POST | /api/orders/verify | Yes | Verify payment & send email |
| GET | /api/orders/my | Yes | User's order history |
| GET | /api/orders | Admin | All orders |
