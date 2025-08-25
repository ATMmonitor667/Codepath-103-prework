# 🌟 Creatorverse

A React-based web application for managing and showcasing your favorite content creators. Built as part of the CodePath WEB103 pre-work assignment.

## 🚀 Features

### Required Features
✅ **Logical component structure** - Clean React component architecture  
✅ **Display creators** - Shows content creators on the homepage  
✅ **Creator details** - Each creator displays name, channel link, and description  
✅ **Async/await pattern** - Uses modern async/await with fetch API  
✅ **Detailed view** - Click any creator to view their full details  
✅ **Unique URLs** - Each creator has their own unique route  
✅ **Edit functionality** - Update creator name, URL, or description  
✅ **Delete functionality** - Remove creators from the database  
✅ **Add new creators** - Create new creator entries  
✅ **Dynamic updates** - New creators appear immediately in the list  

### Stretch Features
✅ **Creative card layout** - Beautiful card-based design instead of plain lists  
✅ **Creator images** - Display creator images on their cards  
✅ **Responsive design** - Works great on desktop and mobile  
✅ **Loading states** - Smooth loading indicators  
✅ **Error handling** - Graceful error handling and user feedback  

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **React Router** - Client-side routing
- **Vite** - Build tool and development server
- **Supabase** - Backend database and API
- **Modern CSS** - Custom styling with flexbox and grid

## 📱 Pages

1. **Home Page** (`/`) - Display all creators in a grid layout
2. **Creator Details** (`/creator/:id`) - View individual creator information
3. **Add Creator** (`/new`) - Form to add a new creator
4. **Edit Creator** (`/edit/:id`) - Form to edit existing creator

## 🗃️ Database Schema

The app uses a Supabase `creators` table with the following structure:

```sql
creators {
  id: integer (primary key)
  name: text (required)
  url: text (required) 
  description: text (required)
  imageURL: text (optional)
  created_at: timestamp
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Supabase account

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd creatorverse-app
```

2. Install dependencies
```bash
npm install
```

3. Set up Supabase
   - Create a new Supabase project
   - Create a `creators` table with the schema above
   - Copy your project URL and API key

4. Configure the database connection
   - Update `src/client.js` with your Supabase credentials
   - Replace `URL` and `API_KEY` with your actual values

5. Start the development server
```bash
npm run dev
```

6. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📸 Screenshots

### Home Page
![Home Page showing creator cards in a grid layout]

### Creator Details
![Individual creator details page with edit and delete options]

### Add/Edit Forms
![Forms for adding and editing creator information]

## 🔮 Future Enhancements

- Search and filter functionality
- Creator categories/tags
- Favorite creators
- Social media integration
- User authentication
- Creator analytics

## 📝 License

This project is built for educational purposes as part of the CodePath WEB103 course.

## 🙏 Acknowledgments

- CodePath for the excellent curriculum
- Supabase for the amazing backend platform
- React team for the fantastic framework+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
