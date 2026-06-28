# ⏰ Digital Clock

A simple **Digital Clock** built with **React** and **Vite** that displays the current system time in real time. The application includes a **Show/Hide** button that allows users to toggle the visibility of the clock.

## 🚀 Features

* 🕒 Displays the current time in real time
* 👁️ Show/Hide button to toggle clock visibility
* ⚛️ Built with React Functional Components
* 🎣 Uses `useState` and `useEffect` hooks
* ⚡ Fast development environment powered by Vite
* 📱 Simple and responsive user interface

## 🛠️ Technologies Used

* React
* Vite
* JavaScript (ES6+)
* CSS
**Live Project**

https://samadaamir.github.io/digital-clock/


## 📂 Project Structure

```text
digital-clock/
│── public/
│── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
│── package.json
│── vite.config.js
└── README.md
```

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/samadaamir/digital-clock.git
```

Navigate to the project folder:

```bash
cd digital-clock
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:5173
```

## 🎯 React Hooks Used

### `useState`

* Stores the visibility state of the clock.
* Updates the displayed time.

### `useEffect`

* Updates the current time every second using `setInterval()`.
* Clears the interval when the component unmounts to prevent memory leaks.

## 🌐 Live Demo

Add your deployed application link here after deploying to:

* Vercel
* Netlify
* GitHub Pages

Example:

```text
https://samadaamir.github.io/digital-clock/
```

## 📖 How It Works

1. When the application loads, the current system time is updated every second.
2. Clicking the **Show** button displays the digital clock.
3. Clicking the **Hide** button hides the clock while the application continues running.
4. The time remains synchronized with the system clock.

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push to your branch.
5. Open a Pull Request.


## 👨‍💻 Author

**Your Name**

GitHub: https://github.com/samadaamir
