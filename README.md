# 🤖 J.A.R.V.I.S.

### Just A Rather Very Intelligent System - AI-Powered Virtual Voice Assistant

An advanced AI-powered virtual voice assistant that responds to voice commands to intelligently answer questions, search the web, open websites, provide weather updates, and much more. Built with the MERN stack and powered by modern speech recognition technology.

[![GitHub Stars](https://img.shields.io/github/stars/labhanshu03/Jarvis?style=social)](https://github.com/labhanshu03/Jarvis)
[![GitHub Forks](https://img.shields.io/github/forks/labhanshu03/Jarvis?style=social)](https://github.com/labhanshu03/Jarvis/fork)
[![MERN Stack](https://img.shields.io/badge/MERN-Stack-green?style=flat)](https://www.mongodb.com/mern-stack)

---

## ✨ Features

### 🎤 Voice Recognition
- **Wake Word Required**: Must say "Jarvis" (or custom name) with EVERY command
- **Natural Language Processing**: Understands and processes natural voice commands
- **Continuous Listening**: Always ready to respond when you say the wake word
- **Voice Feedback**: Responds with synthesized voice output

### 🧠 Intelligent Responses
- **AI-Powered Answers**: Provides intelligent responses to your questions
- **Natural Conversations**: Engaging and human-like interactions
- **Smart Query Processing**: Handles complex questions with ease

### 🔍 Web Search Integration
- **Google Search**: Search the web directly with voice commands
- **YouTube Search**: Find and open YouTube videos by voice
- **Quick Results**: Get instant search results for your queries
- **Multi-Platform Search**: Search across multiple platforms

### 📱 Application Control
- **Open Apps**: Launch applications like Instagram, Facebook, and more
- **Quick Access**: Instant access to your favorite apps and sites

### 🌤️ Weather Updates
- **Current Weather**: Get real-time weather information
- **Location-Based**: Weather updates for any city or location
- **Detailed Forecasts**: Temperature, conditions, and more
- **Voice-Activated**: Just ask about the weather

### 💬 Additional Capabilities
- **Time & Date**: Ask for current time and date
- **Calculations**: Perform quick calculations
- **Jokes & Entertainment**: Get jokes and fun responses
- **System Commands**: Control various system functions

---

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v16 or higher)
- **MongoDB** (v5 or higher)
- **npm** or **yarn**
- **Modern Web Browser** with Web Speech API support (Chrome recommended)
- **Microphone** for voice input

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/labhanshu03/Jarvis.git
   cd Jarvis
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

4. **Set up environment variables**

   Create a `.env` file in the `backend` directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   
   # API Keys
   GEMINI_API_KEY=your_gemini_api_key
  
   
   # Application Settings
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   ```

   Create a `.env` file in the `frontend` directory:
   ```env
   REACT_APP_API_URL=http://localhost:5000
   REACT_APP_ASSISTANT_NAME=Jarvis
   ```

5. **Start MongoDB**
   ```bash
   # If using local MongoDB
   mongod
   
   # Or ensure your MongoDB service is running
   ```

6. **Run the application**

   Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```

   In a new terminal, start the frontend:
   ```bash
   cd frontend
   npm start
   ```

7. **Access the application**
   - Open your browser and navigate to `http://localhost:3000`
   - Allow microphone permissions when prompted
   - **Important**: Say "Jarvis" with every command for it to listen and work!

---

## ⚠️ Important Usage Note

**You must include the wake word "Jarvis" with EVERY command for the assistant to listen and respond.**

This is not a continuous conversation mode - each command requires the wake word to activate the assistant.

**Example**: You can't just say "what's the weather?" - you must say "Jarvis, what's the weather?"

---

## 🎯 Voice Commands Examples

### General Queries
- "Jarvis, what's the weather today?"
- "Jarvis, what time is it?"
- "Jarvis, tell me a joke"
- "Jarvis, what's 25 times 4?"

### Web Search
- "Jarvis, search for best restaurants near me"
- "Jarvis, search YouTube for coding tutorials"
- "Jarvis, Google the latest news"

### Application Control
- "Jarvis, open Instagram"
- "Jarvis, open Facebook"
- "Jarvis, open Gmail"
- "Jarvis, open YouTube"

### Information Requests
- "Jarvis, who is the president of USA?"
- "Jarvis, what is artificial intelligence?"
- "Jarvis, tell me about the solar system"

### System Commands
- "Jarvis, go to sleep" (pause listening)
- "Jarvis, wake up" (resume listening)
- "Jarvis, help" (list available commands)

---

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library
- **JavaScript/ES6+** - Programming language
- **Web Speech API** - Voice recognition and synthesis
- **Axios** - HTTP client
- **CSS3** - Styling

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Google Gemini API** - AI-powered responses

### APIs & Services
- **Web Speech API** - Speech recognition
- **Speech Synthesis API** - Text-to-speech
- **Google Gemini** - Natural language understanding


---

## 📁 Project Structure

```
Jarvis/
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── assets/
│   ├── src/
│   │   ├── components/
│   │   │   ├── VoiceAssistant.js
│   │   │   ├── CommandDisplay.js
│   │   │   ├── ResponseDisplay.js
│   │   │   └── Controls.js
│   │   ├── services/
│   │   │   ├── speechRecognition.js
│   │   │   ├── speechSynthesis.js
│   │   │   └── api.js
│   │   ├── utils/
│   │   │   ├── commandParser.js
│   │   │   └── helpers.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── commandController.js
│   │   │   └── aiController.js
│   │   ├── models/
│   │   │   └── Command.js
│   │   ├── routes/
│   │   │   ├── commands.js
│   │   │   └── ai.js
│   │   ├── services/
│   │   │   ├── geminiService.js
│   │   │   ├── weatherService.js
│   │   │   └── searchService.js
│   │   ├── middleware/
│   │   │   └── errorHandler.js
│   │   ├── config/
│   │   │   └── database.js
│   │   └── server.js
│   └── package.json
│
├── .gitignore
├── README.md
└── LICENSE
```

---

## 🔧 Configuration

### Customizing the Assistant Name

Change the wake word in `frontend/.env`:
```env
REACT_APP_ASSISTANT_NAME=YourAssistantName
```

```


## 🎨 Customization

### Voice Settings
- Adjust speech rate, pitch, and volume in the speech synthesis settings
- Choose different voices available in your browser
- Configure language preferences

### UI Themes
- Customize colors in the CSS files
- Add your own animations and effects
- Create custom visualizations for voice activity

### Command Responses
- Modify response templates in the backend
- Add personality to your assistant
- Create custom response variations

---

## 🔐 API Keys Required

You'll need API keys for the following services:

1. **Google Gemini API** (Required for AI responses)
   - Sign up at [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Get your free API key
   - Free tier includes generous usage limits


---

## 🌐 Browser Compatibility

J.A.R.V.I.S. works best with browsers that support the Web Speech API:

- ✅ **Google Chrome** (Recommended)

---

## 📝 How It Works

1. **Wake Word Detection**: The assistant continuously listens for its wake word ("Jarvis")
2. **Command Recognition**: You must say "Jarvis" followed by your command in the same statement
3. **Command Processing**: The complete command is sent to the backend for processing
4. **AI Analysis**: Google Gemini analyzes the intent and generates appropriate responses
5. **Action Execution**: Based on the command, actions are performed (search, open apps, etc.)
6. **Voice Response**: The assistant responds with synthesized speech
7. **Ready State**: Returns to listening mode, waiting for the next "Jarvis" command

**Note**: Unlike conversational AI assistants, you must say "Jarvis" with every single command. There is no continuous conversation mode.

---

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)

1. Build the frontend:
   ```bash
   cd frontend
   npm run build
   ```

2. Deploy the `build` folder to your hosting platform

### Backend Deployment (Heroku/Railway/Render)

1. Ensure all environment variables are set
2. Push to your hosting platform
3. Update CORS settings for your frontend domain

### Important Notes
- Ensure microphone permissions are granted
- Use HTTPS in production for Web Speech API
- Set appropriate CORS policies

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Ideas
- Add new voice commands
- Improve natural language understanding
- Add support for more languages
- Create new integrations (Spotify, calendar, etc.)
- Enhance the UI/UX

---

## 🐛 Troubleshooting

### Microphone not working
- Check browser permissions for microphone access
- Ensure you're using HTTPS in production
- Try a different browser (Chrome recommended)

### Assistant not responding
- Check if the wake word is being recognized
- Verify API keys are correctly set
- Check backend server is running
- Look for errors in browser console

### Poor recognition accuracy
- Speak clearly and at a moderate pace
- Reduce background noise
- Check microphone quality
- Adjust microphone sensitivity in system settings

---

## 🗺️ Roadmap

- [ ] Multi-language support
- [ ] Offline mode with cached responses
- [ ] Custom wake word training
- [ ] Integration with smart home devices
- [ ] Calendar and reminder management
- [ ] Email reading and composing
- [ ] Music playback control (Spotify integration)
- [ ] Voice authentication
- [ ] Mobile app version
- [ ] Desktop application (Electron)
- [ ] Plugin system for extensibility

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Labhanshu**

- GitHub: [@labhanshu03](https://github.com/labhanshu03)
- Project Link: [https://github.com/labhanshu03/Jarvis](https://github.com/labhanshu03/Jarvis)

---

## 🙏 Acknowledgments

- Inspired by Marvel's J.A.R.V.I.S. and Iron Man
- Google Gemini for powerful AI capabilities
- Web Speech API for voice recognition
- The open-source community

---

## 📞 Support

Need help or have questions?

- 📧 Open an [Issue](https://github.com/labhanshu03/Jarvis/issues)
- 💬 Start a [Discussion](https://github.com/labhanshu03/Jarvis/discussions)
- 📖 Check the documentation

---

## ⭐ Show Your Support

If you find J.A.R.V.I.S. helpful or interesting, please consider giving it a ⭐️!

---

## 🎬 Demo

*Add screenshots or a video demo of your assistant in action here*

---

<p align="center">
  <strong>Built with ❤️ and AI</strong>
</p>

<p align="center">
  <sub>J.A.R.V.I.S. - Your personal AI assistant</sub>
</p>

<p align="center">
  <em>"Sometimes you gotta run before you can walk." - Tony Stark</em>
</p>
