# 📱 Saif's App Store

Live Site: [Visit App Store](https://your-live-link-here.com)

## 🚀 Project Purpose

**Saif's App Store** is a fully functional React-based app marketplace where users can browse apps by category, view detailed app information, and submit reviews. It features authentication, dynamic routes, protected pages, and Firebase integration — providing a real-world app experience for users and developers alike.

## 🧩 Key Features

### 🔧 Layout Structure

- **Navbar** with logo and links to Apps, My Profile
- Route-based highlighting and dynamic content
- Displays login/logout button with user info on hover
- **Footer** with links to Terms of Service, Privacy Policy, Developer Resources, and Social Media (visible on all pages)

### 📄 Pages and Functionality

- **Home Page** with slider, trending apps, categorized sections, and an extra section
- **App Details Page** (Protected):
  - View full details
  - Install/Uninstall toggle
  - Submit reviews (only after installation)
- **Authentication** using Firebase:
  - Register and Login with email/password and Google
  - Password rules enforced (uppercase, lowercase, min 6 chars)
  - Show error/success using toast or SweetAlert2
- **My Profile** (Protected):
  - View and update user name and profile picture
- **404 Not Found Page** for unknown routes
- **Extra Route** with meaningful content
- **Dynamic Page Titles** using `react-helmet-async`
- **Session Persistence** using `onAuthStateChanged` for login state
- **Live Review Rendering** (session-based)

## 📦 NPM Packages Used

### 🔌 Core Dependencies

- `react` ^19.0.0
- `react-dom` ^19.0.0
- `react-router` ^7.5.3
- `firebase` ^11.6.1
- `tailwindcss` ^4.1.5
- `daisyui` ^5.0.35
- `react-icons` ^5.5.0
- `sweetalert2` ^11.21.0
- `react-toastify` ^11.0.5
- `react-helmet-async` ^2.0.5
- `date-fns` ^4.1.0

### 🎨 Styling

- `@emotion/react` ^11.14.0
- `@emotion/styled` ^11.14.0
- `@mui/material` ^7.1.0
- `@mui/styled-engine-sc` ^7.1.0
- `styled-components` ^6.1.17

### 🛠 Development Dependencies

- `vite` ^6.3.1
- `@vitejs/plugin-react` ^4.3.4
- `eslint` ^9.22.0
- `@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`
- `@types/react`, `@types/react-dom`, `globals`

## 🔐 Authentication Rules

- Email & Password-based login and register
- Google OAuth support
- Password validation enforced
- Uses `updateProfile()` to update Firebase user data
- Session persists on reload with `onAuthStateChanged`

---

📌 **Note**: All app data is served from a local JSON structure and hosted images (e.g., via imgbb or postimages).

---

Thank you for checking out **Saif's App Store**! 🚀
