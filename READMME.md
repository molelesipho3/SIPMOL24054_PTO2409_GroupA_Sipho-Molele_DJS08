# VanLife Project - React Router Implementation

A complete React application demonstrating advanced React Router concepts including nested routes, protected routes, and dynamic routing.

## 📁 Project Structure

```
vanlife-project/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Layout.jsx       # Main layout wrapper
│   │   ├── HostLayout.jsx   # Host section layout
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Footer.jsx       # Footer component
│   │   └── AuthRequired.jsx # Authentication guard
│   ├── pages/               # Page components
│   │   ├── Home.jsx         # Landing page
│   │   ├── About.jsx        # About page
│   │   ├── Login.jsx        # Login page
│   │   ├── NotFound.jsx     # 404 page
│   │   ├── Vans/            # Van-related pages
│   │   │   ├── Vans.jsx     # Van listings
│   │   │   └── VanDetail.jsx # Individual van details
│   │   └── Host/            # Host dashboard pages
│   │       ├── Dashboard.jsx
│   │       ├── Income.jsx
│   │       ├── Reviews.jsx
│   │       ├── HostVans.jsx
│   │       ├── HostVanDetail.jsx
│   │       ├── HostVanInfo.jsx
│   │       ├── HostVanPricing.jsx
│   │       └── HostVanPhotos.jsx
│   ├── assets/              # Static assets
│   │   ├── home-hero.png
│   │   ├── about-hero.png
│   │   ├── avatar-icon.png
│   │   ├── income-graph.png
│   │   └── reviews-graph.png
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # React entry point
│   ├── index.css            # Global styles
│   ├── api.js               # API functions
│   └── server.js            # MirageJS mock server
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

## 🛠️ Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🔐 Authentication

The app includes a mock authentication system:

- **Email:** b@b.com
- **Password:** p123

## 🧭 Routing Structure

### Public Routes
- `/` - Home page
- `/about` - About page
- `/vans` - Van listings
- `/vans/:id` - Individual van details
- `/login` - Login page

### Protected Routes (requires authentication)
- `/host` - Host dashboard
- `/host/income` - Income tracking
- `/host/reviews` - Review management
- `/host/vans` - Host van listings
- `/host/vans/:id` - Host van details
  - `/host/vans/:id` - Van info (default)
  - `/host/vans/:id/pricing` - Pricing details
  - `/host/vans/:id/photos` - Photo gallery

## 🎯 Key React Router Concepts Demonstrated

### 1. Basic Routing Setup
```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      // ... more routes
    </Route>
  </Routes>
</BrowserRouter>
```

### 2. Nested Routes
The app uses nested routes for the host section, allowing for shared layouts and navigation.

### 3. Route Parameters
Dynamic routes like `/vans/:id` use the `useParams()` hook to access URL parameters.

### 4. Protected Routes
The `AuthRequired` component wraps protected routes and redirects unauthenticated users to login.

### 5. Search Parameters
Van filtering uses `useSearchParams()` for URL-based state management.

### 6. Navigation Components
- `Link` for basic navigation
- `NavLink` for navigation with active states



