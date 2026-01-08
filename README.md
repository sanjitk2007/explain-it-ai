# Explain It

Explain It is a web application that helps users understand topics at different learning levels (Elementary, Middle School, and High School). The project focuses on clear communication, user experience, and structured backend design, with AI used as a tool to generate explanations.

---

## 🚀 Features

- Level-based explanations (Elementary, Middle School, High School)
- Clean, centered user interface
- Loading state to handle asynchronous requests
- Input validation to prevent empty submissions
- Serverless backend architecture
- Graceful error handling
- Secure environment variable usage for API keys

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Vercel Serverless Functions  
- **AI Integration:** OpenAI API  
- **Hosting & Development:** Vercel  
- **Version Control:** Git & GitHub  

---

## 📂 Project Structure
```
explain-it-ai/
├── index.html # Frontend UI
├── style.css # UI styling
├── script.js # Frontend logic
├── api/
│ └── explain.js # Serverless backend (request handling + AI logic)
├── .gitignore
└── README.md

---
```
## ⚙️ How It Works

1. The user enters a question and selects a learning level.
2. The frontend sends the request to a serverless API endpoint.
3. The backend constructs a level-appropriate prompt.
4. The OpenAI API generates an explanation.
5. The response is returned and displayed to the user.

A loading indicator is shown while the request is being processed.


## 📄 License

This project was built for educational purposes.
