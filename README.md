# deMulti

A full-stack application that features AI chat integrations using APIs
A simple app that takes a single input and displays side-by-side responses from ChatGPT and Gemini for easy comparison.

## 🚀 Features

### Frontend

- **React**: Dynamic and interactive UI.
- **Material-UI**: For a modern, responsive design.
- **SCSS**: Centralized styles with reusable theming.

### Backend

- **Node.js & Express**: Fast and scalable server-side logic.
- **Prisma ORM**: Clean database interaction with MongoDB.
- **MongoDB**: Flexible, document-based database for storing chat history.

### Chat Functionality

- AI integration.
- Sidebar for managing multiple chats.
- chat management
- message history
- response comparison

## Status

🚧 **Under Development**

## Requirements

- Node.js
- MongoDB

## 🛠️ Setup Instructions

### Prerequisites

- **Node.js**: [Install Node.js](https://nodejs.org/)
- **MongoDB**: [Install MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. **Clone the repository**:

```bash
git clone https://github.com/Achu1ahm/deMulti
cd deMulti

```

2. **Install Dependencies**:
```bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

3. **Environment Setup**:
Create .env files in both client/ and server/.
For the backend (server/.env):
- DATABASE_URL
- PORT
For the frontend (client/.env):
- REACT_APP_OPENAI_API_KEY
- REACT_APP_GEMINI_API_KEY
- REACT_APP_MODEL_ONE
- REACT_APP_MODEL_TWO

4. **Start the server**:
```bash
# Frontend
cd client
npm start

# Backend
cd ../server
npm run dev
```
## 🤝 Contributing
Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a feature branch:
```bash
git checkout -b feature/your-feature
```
3. Commit your changes and push:
```bash
git commit -m "Add your feature"
git push origin feature/your-feature
```
4. Open a pull request.