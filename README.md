# 🛒 GreenCart – Full-Stack E-Commerce Platform

**GreenCart** is a full-stack e-commerce web application featuring **buyer and seller dashboards**, secure authentication, product management, order processing, and **Stripe-powered payments**. It demonstrates real-world e-commerce workflows with role-based functionality.

🌐 **Live Website:** https://greencart-zeta-coral.vercel.app  
📦 **Repository:** https://github.com/Amit-0011/GreenCart

---

## ✨ Features

### 👤 User (Customer)
- User Registration & Login
- Browse Products
- Add / Remove Items from Cart
- Secure Checkout with Stripe
- Order Placement
- Responsive UI with Toast Notifications

### 🧑‍💼 Seller Dashboard
- Add New Products
- Upload Product Images
- Update Product Availability (In Stock / Out of Stock)
- Update Order Status (Pending / Shipped / Delivered)
- Manage Product Listings

### 🔐 Security & Infrastructure
- JWT-based Authentication
- Password Hashing with bcrypt
- Protected APIs & Routes
- Cloudinary Image Storage
- Stripe Payment Integration

> GreenCart is a **role-based, production-style e-commerce system**, not just a frontend store UI.

---

## 🛠 Tech Stack

### 🌐 Frontend

![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=ffffff)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=ffffff)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=ffffff)
![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=ffffff)
![React Router](https://img.shields.io/badge/React_Router-CA4245?logo=react-router&logoColor=ffffff)
![React Hot Toast](https://img.shields.io/badge/React_Hot_Toast-FF5722?logo=react&logoColor=ffffff)

---

### 🖥 Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=ffffff)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=ffffff)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=ffffff)
![Mongoose](https://img.shields.io/badge/Mongoose-888888?logo=mongodb&logoColor=ffffff)
![JWT](https://img.shields.io/badge/JWT-000000?logo=jsonwebtokens&logoColor=ffffff)
![Stripe](https://img.shields.io/badge/Stripe-635BFF?logo=stripe&logoColor=ffffff)

---

### 🔌 Utilities & Services

![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?logo=cloudinary&logoColor=ffffff)
![Multer](https://img.shields.io/badge/Multer-FF6F00?logo=node.js&logoColor=ffffff)
![bcrypt](https://img.shields.io/badge/bcrypt-4285F4?logo=bcrypt&logoColor=ffffff)
![dotenv](https://img.shields.io/badge/dotenv-000000?logo=dotenv&logoColor=ffffff)
![CORS](https://img.shields.io/badge/CORS-FF6347?logo=cors&logoColor=ffffff)

---

## 📁 Project Structure

```
GreenCart/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── dashboards/
│   │   │   ├── UserDashboard.jsx
│   │   │   └── SellerDashboard.jsx
│   │   ├── context/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middlewares/
│   ├── utils/
│   ├── .env
│   └── server.js
│
└── README.md
```

---

## 🧠 How GreenCart Works

### 🔐 Authentication & Roles
- JWT-based authentication
- Passwords hashed using **bcrypt**
- Role-based access (User / Seller)
- Seller routes protected via middleware

### 🛍 Product Management
- Sellers add and update products
- Product images uploaded using **Multer**
- Images stored securely on **Cloudinary**
- Product availability can be toggled

### 📦 Orders & Payments
- Cart managed per user
- Stripe Checkout used for payments
- Orders stored with payment reference
- Sellers update order status

---

## 📌 Core Functionalities

| Feature | Description |
|------|------------|
| User Auth | Secure login & registration |
| Seller Dashboard | Product & order management |
| Product Availability | Enable / disable products |
| Order Status | Pending → Shipped → Delivered |
| Payments | Stripe checkout |
| Image Uploads | Cloudinary integration |

---

## 📌 API Endpoints (Core)

| Method | Endpoint | Description |
|------|--------|-------------|
| POST | `/api/auth/register` | Register user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/products` | Fetch products |
| POST | `/api/products` | Add product (seller) |
| PATCH | `/api/products/:id` | Update product |
| PATCH | `/api/orders/:id` | Update order status |
| POST | `/api/stripe/checkout` | Create Stripe session |
| POST | `/api/webhook/stripe` | Stripe webhook |

---

## ⚙️ Environment Variables (Redesigned)

Create a `.env` file inside **server/**:

```
##################################
# Server Configuration
##################################
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173

##################################
# Database
##################################
MONGO_URI=your_mongodb_connection_string

##################################
# Authentication
##################################
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d

##################################
# Cloudinary (Image Storage)
##################################
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

##################################
# Stripe (Payments)
##################################
STRIPE_SECRET_KEY=your_stripe_secret
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

⚠️ **Never commit `.env` files to GitHub.**

---

## 🚀 Getting Started

### Backend

```
cd server
npm install
npm run dev
```

### Frontend

```
cd client
npm install
npm run dev
```

---

## 🔒 Security Notes

- Passwords are hashed before storage
- JWT-protected APIs
- Role-based route protection
- Secure Stripe payment flow
- Environment variables for secrets

---

## 📈 Future Improvements

- Admin analytics dashboard
- Order history for sellers
- Inventory stock tracking
- Refund handling
- Rate limiting & validation

---

## 🏁 Conclusion

**GreenCart** is a role-based, full-stack e-commerce application showcasing **authentication, seller dashboards, product management, payments, and media handling** using modern web technologies.

This is **real e-commerce architecture**, not a CRUD demo.
