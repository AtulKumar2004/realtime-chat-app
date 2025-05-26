
# Chatty 📩

A real-time chat application that enables users to communicate instantly. Built with modern web technologies, this application showcases the implementation of real-time messaging using Socket.IO and MERN Stack.


## Chatty UI

![image](https://ik.imagekit.io/664tsfyzq/Screenshot%202025-05-26%20201533.png?updatedAt=1748271037101)

![image](https://ik.imagekit.io/664tsfyzq/Screenshot%202025-05-26%20201544.png?updatedAt=1748271673818)


## Tech Stack

**Client:** React.js, TailwindCSS, Zustand, DaisyUI

**Server:** Node.js, Express.js, MongoDB, Socket.IO


## Installation

Clone my project:

```bash
  git clone https://github.com/AtulKumar2004/realtime-chat-app.git
```
Move to the project directory:
```bash
  cd realtime-chat-app
```
Move to frontend folder:
```bash
  cd frontend
```
Install dependencies:
```bash
  npm install
  npm run dev
```
Move to backend folder:
```bash
  cd ..
  cd backend
```
Install dependencies:
```bash
  npm install
  npm run dev
```
Visit my project on:
```bash
  http://localhost:5173
```



## Features
- **Real-Time Communication**: Instant messaging powered by WebSockets.
- **User-Friendly Interface**: Clean and intuitive UI for seamless user experience.
- **Scalable Architecture**: Designed to handle multiple users simultaneously.
- **Supported Content**: Text and images are supported.
- **Themes Available**: 32 different themes for the app.
## Folder Structure

```bash
  realtime-chat-app/
├─ backend/
│  ├─ src/
│  │  ├─ controllers/
│  │  │  ├─ auth.controller.js
│  │  │  └─ message.controller.js
│  │  ├─ lib/
│  │  │  ├─ cloudinary.js
│  │  │  ├─ db.js
│  │  │  ├─ socket.js
│  │  │  └─ utils.js
│  │  ├─ middleware/
│  │  │  └─ auth.middleware.js
│  │  ├─ models/
│  │  │  ├─ message.model.js
│  │  │  └─ user.model.js
│  │  ├─ routes/
│  │  │  ├─ auth.route.js
│  │  │  └─ message.route.js
│  │  ├─ seeds/
│  │  │  └─ user.seed.js
│  │  └─ index.js
│  ├─ .env
│  ├─ package-lock.json
│  └─ package.json
├─ frontend/
│  ├─ dist/
│  │  ├─ assets/
│  │  │  ├─ index-BipPuACC.js
│  │  │  └─ index-CjdwrwOs.css
│  │  ├─ avatar.png
│  │  ├─ Chatty-Logo.png
│  │  ├─ index.html
│  │  └─ vite.svg
│  ├─ public/
│  │  ├─ avatar.png
│  │  ├─ Logo.png
│  │  └─ vite.svg
│  ├─ src/
│  │  ├─ components/
│  │  │  ├─ skeletons/
│  │  │  │  ├─ MessageSkeleton.jsx
│  │  │  │  └─ SidebarSkeleton.jsx
│  │  │  ├─ AuthImagePattern.jsx
│  │  │  ├─ ChatContainer.jsx
│  │  │  ├─ ChatHeader.jsx
│  │  │  ├─ MessageInput.jsx
│  │  │  ├─ Navbar.jsx
│  │  │  ├─ NoChatSelected.jsx
│  │  │  └─ Sidebar.jsx
│  │  ├─ constants/
│  │  │  └─ index.js
│  │  ├─ lib/
│  │  │  ├─ axios.js
│  │  │  └─ utils.js
│  │  ├─ pages/
│  │  │  ├─ HomePage.jsx
│  │  │  ├─ LoginPage.jsx
│  │  │  ├─ ProfilePage.jsx
│  │  │  ├─ SettingsPage.jsx
│  │  │  └─ SignUpPage.jsx
│  │  ├─ store/
│  │  │  ├─ useAuthStore.js
│  │  │  ├─ useChatStore.js
│  │  │  └─ useThemeStore.js
│  │  ├─ App.jsx
│  │  ├─ index.css
│  │  └─ main.jsx
│  ├─ eslint.config.js
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ README.md
│  └─ vite.config.js
├─ .gitignore
├─ package.json
└─ PROJECT_STRUCTURE.txt

```
## Contributing

Contributions are always welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## Acknowledgements

 - React docs
 - Zustand Docs
 - Tailwind docs
 - Daisy UI docs


## Support

For support, email akdeoghar16@gmail.com

