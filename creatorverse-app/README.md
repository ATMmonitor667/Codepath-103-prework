# 🌟 CreatorVerse

A modern React-based web application for managing and showcasing your favorite content creators. Built as part of the CodePath WEB103 pre-work assignment, this app provides a complete CRUD interface for content creator management.

## 🎬 Demo

<!-- ADD YOUR DEMO GIF HERE -->
![CreatorVerse Demo](./demo.gif)
*Add your demo GIF above to showcase the app in action!*

## ✨ Features

### ✅ Required Features
- **Logical component structure** - Clean React component architecture with reusable components
- **Display creators** - Shows all content creators on the homepage in an organized layout
- **Creator details** - Each creator displays name, channel/website link, and description
- **Async/await pattern** - Uses modern async/await with fetch API for all database operations
- **Detailed view** - Click any creator to view their complete profile information
- **Unique URLs** - Each creator has their own unique route for direct access
- **Edit functionality** - Update creator name, URL, description, and image
- **Delete functionality** - Remove creators from the database with confirmation
- **Add new creators** - Create new creator entries with a user-friendly form
- **Dynamic updates** - New and edited creators appear immediately without page refresh

### 🚀 Stretch Features
- **Creative card layout** - Beautiful, responsive card-based design with hover effects
- **Creator images** - Display creator profile images with fallback handling
- **Responsive design** - Fully responsive layout that works on desktop, tablet, and mobile
- **Loading states** - Smooth loading indicators during data operations
- **Error handling** - Comprehensive error handling with user-friendly messages
- **Navigation** - Intuitive navigation between different views

## 🛠️ Technology Stack

- **Frontend Framework:** React 18 with hooks and modern patterns
- **Routing:** React Router DOM for client-side navigation
- **Build Tool:** Vite for fast development and optimized builds
- **Database:** Supabase for backend database and real-time API
- **Styling:** Modern CSS with Flexbox and Grid layouts
- **State Management:** React useState and useEffect hooks

## 📱 Application Structure

### Pages
1. **Home Page** (`/`) - Grid layout displaying all creators with search and navigation
2. **Creator Details** (`/creator/:id`) - Individual creator profile with full information
3. **Add Creator** (`/new`) - Form interface to add new content creators
4. **Edit Creator** (`/edit/:id`) - Form interface to modify existing creator information

### Components
- **Card.jsx** - Reusable creator card component with image, name, and actions
- **Navigation components** - Consistent navigation across all pages
- **Form components** - Shared form elements for add/edit functionality

## �️ Database Schema

The application uses a Supabase `creators` table with the following structure:

```sql
CREATE TABLE creators (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  url TEXT NOT NULL,
  description TEXT NOT NULL,
  imageURL TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Fields
- `id` - Auto-incrementing primary key
- `name` - Creator's display name (required)
- `url` - Creator's website/channel URL (required)
- `description` - Brief description of the creator (required)
- `imageURL` - Profile image URL (optional)
- `created_at` - Timestamp of when the record was created

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **Supabase account** (free tier available)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd creatorverse-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Create a new project at [supabase.com](https://supabase.com)
   - Create the `creators` table using the schema above
   - Navigate to Settings > API to get your project URL and API key

4. **Configure environment**
   - Update `src/client.js` with your Supabase credentials:
   ```javascript
   const supabaseUrl = 'YOUR_SUPABASE_URL'
   const supabaseKey = 'YOUR_SUPABASE_ANON_KEY'
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Open in browser**
   - Navigate to [http://localhost:5173](http://localhost:5173)

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality


