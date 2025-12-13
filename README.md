# Notes Manager

> A modern, secure note-taking application built with React and Firebase

A full-featured notes management application with Firebase authentication, real-time synchronization, and a clean, intuitive interface. Create, edit, search, and organize your notes with ease while enjoying secure user authentication and cloud storage.

![image](https://github.com/favio102/notes-manager-react/assets/93895982/153533da-a221-4e16-828f-0777468fa9fc)

## ✨ Key Features

- **Full CRUD Operations**: Create, read, update, and delete notes
- **Firebase Authentication**: Secure user registration and login system
- **Real-time Synchronization**: Instant updates across devices using Firestore
- **Protected Routes**: Authentication-required access to notes functionality
- **Search Functionality**: Search notes by title or content
- **Redux State Management**: Efficient state management with Redux Toolkit and persistence
- **Responsive Design**: Built with Bootstrap for mobile-friendly interface
- **Form Validation**: Client-side validation for note titles and content
- **User-friendly Alerts**: SweetAlert2 integration for elegant notifications

## 🛠️ Tech Stack

### Frontend
- **React** `^18.2.0` - UI library
- **React Router DOM** `^6.3.0` - Client-side routing
- **React Bootstrap Icons** `^1.8.4` - Icon library

### State Management
- **Redux Toolkit** `^1.8.6` - State management
- **React Redux** `^8.0.4` - React bindings for Redux
- **Redux Persist** `^6.0.0` - Persist and rehydrate Redux store

### Backend & Authentication
- **Firebase** `^10.9.0` - Authentication and Firestore database
- **Axios** `^1.6.8` - HTTP client

### Development
- **React Scripts** `5.0.1` - Create React App tooling
- **json-server** - Mock API server (optional development tool)

### UI & UX
- **Bootstrap** `5.2.0` - CSS framework (loaded via CDN)
- **SweetAlert2** `^11.10.7` - Beautiful alerts

## 📁 Project Structure

```
notes-manager-react/
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── api/                    # API service layers
│   │   ├── auth.js            # Firebase authentication API
│   │   └── note-api.js        # Firestore notes API
│   ├── assets/                 # Static assets (images, etc.)
│   │   └── images/
│   ├── components/             # Reusable UI components
│   │   ├── ButtonPrimary/
│   │   ├── FieldError/
│   │   ├── Header/
│   │   ├── Input/
│   │   ├── Logo/
│   │   ├── NoteForm/
│   │   ├── SearchBar/
│   │   └── TextCard/
│   ├── containers/             # Container components
│   │   └── NoteList/
│   ├── hoc/                    # Higher-order components
│   │   └── withAuthRequired.jsx # Authentication guard HOC
│   ├── layouts/                # Layout components
│   │   └── AuthLayout.jsx
│   ├── pages/                  # Page components
│   │   ├── Note/              # Individual note view/edit
│   │   ├── NoteBrowse/        # Notes list view
│   │   ├── NoteCreate/        # Create new note
│   │   ├── PageNotFound/      # 404 page
│   │   ├── Signin/            # Login page
│   │   └── Signup/            # Registration page
│   ├── store/                  # Redux store configuration
│   │   ├── auth/              # Authentication slice
│   │   ├── notes/             # Notes slice
│   │   └── index.js           # Store setup with persistence
│   ├── utils/                  # Utility functions
│   │   ├── firebase.js        # Firebase initialization
│   │   ├── sweet-alert.js     # Alert helpers
│   │   └── validator.js       # Form validation
│   ├── App.jsx                 # Main app component with routing
│   ├── config.js               # Firebase configuration
│   └── index.js                # Application entry point
├── .gitignore
├── db.json                     # Mock database for development
├── jsconfig.json              # JavaScript configuration
├── package.json               # Dependencies and scripts
└── README.md                  # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Firebase account** with a configured project
- A modern web browser

### Environment Variables

Create a `.env` file in the root directory with your Firebase configuration:

```env
REACT_APP_API_KEY=your_firebase_api_key
REACT_APP_AUTH_DOMAIN=your_project_id.firebaseapp.com
REACT_APP_PROJECT_ID=your_project_id
REACT_APP_STORAGE_BUCKET=your_project_id.appspot.com
REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_ID=your_app_id
```

**Important**: Never commit your `.env` file to version control. It's already included in `.gitignore`.

### Firebase Setup

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable **Authentication** with Email/Password provider
3. Create a **Firestore Database**
4. Configure Firestore security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /notes/{noteId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

5. Get your Firebase configuration from Project Settings

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/favio102/notes-manager-react.git
cd notes-manager-react
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**

Create a `.env` file and add your Firebase credentials (see Environment Variables section above)

4. **Start the development server**

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Additional Scripts

```bash
# Build for production
npm run build

# Run tests
npm test

# Run mock JSON server (optional, for development)
npm run dev-server
```

## 💻 Usage

### Authentication

**Test Account**: For testing purposes, you can use:
- Email: `test1@gmail.com`
- Password: `test1test1`

1. **Sign Up**: Navigate to `/signup` to create a new account
2. **Sign In**: Navigate to `/signin` to log into an existing account

### Managing Notes

1. **View Notes**: After logging in, you'll see all your notes on the home page
2. **Create Note**: Click the `+` button to create a new note
3. **Edit Note**: Click on any note to view and edit it
4. **Delete Note**: Use the trash icon to delete a note (confirmation required)
5. **Search Notes**: Use the search bar to filter notes by title or content

### Note Validation

- **Title**: 3-20 characters required
- **Content**: Minimum 3 characters required

## ⚙️ Configuration

### Key Configuration Files

#### `config.js`
Contains Firebase configuration loaded from environment variables.

#### `store/index.js`
Redux store configuration with persistence settings. Currently persists authentication state to localStorage.

#### `jsconfig.json`
Enables absolute imports from the `src` directory.

### Modifying Behavior

- **Change validation rules**: Edit `src/components/NoteForm/NoteForm.jsx` (VALIDATOR object)
- **Adjust persistence**: Modify the `whitelist` in `src/store/index.js`
- **Update routes**: Edit the Routes component in `src/index.js` (lines 25-34)
- **Customize theme**: Update Bootstrap classes or add custom styles

## 🔒 Security Features

- Protected routes requiring authentication
- Firebase Authentication with email/password
- Firestore security rules enforcing authenticated access
- Client-side form validation
- Password confirmation on signup

## 🤝 Contributing

We welcome contributions from the community! To ensure a smooth process, please follow these basic steps:

1. **Open an Issue**: For bug reports or feature suggestions, please first open an [Issue](https://github.com/favio102/notes-manager-react/issues) to discuss your proposed change or problem.
2. **Fork the Repository**: Create your own fork of the project.
3. **Implement Fixes**: Create a new branch (`git checkout -b feature/your-feature-name` or `git checkout -b fix/issue-number`) and implement your changes.
4. **Submit a Pull Request (PR)**: Target the main branch with your pull request, ensuring your branch is up-to-date and all tests pass.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Known Issues

- The application requires an active internet connection for Firebase services
- Strict mode is disabled to prevent double rendering with useEffect

## 📞 Support

For issues, questions, or contributions, please visit the [GitHub repository](https://github.com/favio102/notes-manager-react).

---

**Built with ❤️ using React and Firebase**
