# 🚀 Goal AI Backend

An AI-powered backend system that converts user goals into structured daily task plans with progress tracking, streak logic, and motivational badge rewards.

Built with production-level backend architecture using Express, PostgreSQL, Prisma, JWT authentication, and Open ai LLM integration.

---

## 📌 Overview

Goal AI Backend allows users to:

- Register & authenticate securely
- Create long-term goals with time duration
- Automatically generate daily actionable tasks using LLM
- Track progress and mark tasks complete
- Earn motivational badges
- Maintain streaks for consistency

This project demonstrates real-world backend engineering skills including authentication, database modeling, AI integration, and scalable API architecture.

---

## 🛠 Tech Stack

- Node.js (ES Modules)
- Express.js
- PostgreSQL
- Prisma ORM
- JWT Authentication
- Open ai LLM (Llama 3.3)
- REST API Architecture

---

## 🧠 Architecture

Client
↓
Express API Layer
↓
Controllers
↓
Services (AI, Badge Logic)
↓
Prisma ORM
↓
PostgreSQL Database


### Separation of Concerns

- **Controllers** → Handle HTTP requests & responses  
- **Services** → Business logic (AI task generation, badge system)  
- **Middleware** → Authentication & error handling  
- **Prisma** → Type-safe database access  

---

## 🔐 Authentication

- JWT-based stateless authentication
- Password hashing using bcrypt
- Protected routes using middleware
- Token expiration support

---

## 🤖 AI Integration

When a user creates a goal:

1. Backend sends structured prompt to Open ai LLM
2. AI generates daily task breakdown
3. Response is sanitized & validated
4. Tasks are stored in PostgreSQL

Includes:
- JSON safety parsing
- Structured prompt engineering
- Model configuration via environment variables

---

## 🗂 Database Design

### User
- id
- email
- password
- name
- streak
- createdAt

### Goal
- id
- title
- description
- startDate
- endDate
- userId

### Task
- id
- title
- date
- completed
- goalId

### Badge
- id
- title
- userId

Relational structure managed using Prisma schema.

---

## 📡 API Endpoints

### Authentication
POST /api/auth/register
POST /api/auth/login


### Goals
POST /api/goals
GET /api/goals


### Tasks
GET /api/tasks
POST /api/tasks/complete


---

## ⚙️ Environment Variables

Create a `.env` file:

PORT=5000
DATABASE_URL=your_postgres_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d
GROQ_API_KEY=your_groq_key
GROQ_MODEL=llama-3.3-70b-versatile


---

## 🚀 How to Run Locally

```bash
npm install
npx prisma generate
npx prisma migrate dev
npm run dev
Server runs at:

http://localhost:5000
🏗 Engineering Concepts Demonstrated
REST API Design

JWT Auth Implementation

Role-based route protection

AI prompt structuring

JSON parsing from LLM responses

Database normalization

Service layer architecture

Error handling middleware

Environment-based configuration

Clean folder structure

📈 Future Improvements
Rate limiting

Task priority scoring

AI adaptive difficulty

Reminder scheduling

Analytics dashboard

Docker containerization

CI/CD integration

🎯 Why This Project Matters
This project demonstrates the ability to:

Design scalable backend systems

Integrate LLM APIs into real-world applications

Build structured database models

Write production-style Express architecture

Handle authentication securely

Implement AI-driven automation logic

👨‍💻 Author
Piyush Kumar Gaur
Backend Developer | Node.js | PostgreSQL | AI Integration