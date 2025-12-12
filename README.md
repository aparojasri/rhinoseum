# 🎨 RHINOCULAR- Art Ecosystem Platform (MVP)

A full-stack platform connecting artists, students, and art therapy seekers. This project implements a dual-sided marketplace structure and an education hub.

**Current Status:** High-Fidelity MVP (Functional UI + Backend Data Layer)


## 🚀 Tech Stack
* **Frontend:** Next.js 15 (App Router), Tailwind CSS, Lucide Icons.
* **Backend:** NestJS (Microservice Architecture).
* **Database:** PostgreSQL (via Supabase) & Prisma ORM.
* **State Management:** React Context API (Cart & Wishlist).

## ✨ Completed Features
* **Marketplace:** Dynamic product grid with 50+ items, filtering, and search.
* **Cart Logic:** Add/Remove items, persistent state, and checkout simulation.
* **Education Hub:** Course catalog with instructor details and ratings.
* **Services:** UI for booking Art Therapy sessions.
* **Seller Dashboard:** Visual interface for artists to track earnings.

## 🛠️ Setup & Run
1.  **Clone the repo:**
    ```bash
    git clone [https://github.com/your-username/arks-academy.git](https://github.com/your-username/arks-academy.git)
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run locally:**
    ```bash
    # Terminal 1 (Backend)
    cd apps/api && npm run start:dev
    
    # Terminal 2 (Frontend)
    cd apps/web && npm run dev
    ```

## 🔮 Roadmap (Future Improvements)
* User Authentication (Clerk/NextAuth).
* Payment Gateway Integration (Stripe).
* Live Zoom integration for Therapy sessions.


