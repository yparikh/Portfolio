import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          Hey, I'm Yash 👋
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Developer, creative thinker, and systems builder. I code, I draw, and sometimes review food. This is my digital home.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://dev.byyash.com"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
          >
            Developer Portfolio
          </a>
          <a
            href="https://art.byyash.com"
            className="bg-pink-500 text-white px-6 py-3 rounded-xl shadow hover:bg-pink-600 transition"
          >
            Art Gallery
          </a>
          <a
            href="https://blog.byyash.com"
            className="bg-green-600 text-white px-6 py-3 rounded-xl shadow hover:bg-green-700 transition"
          >
            Blog
          </a>
        </div>

        <footer className="mt-10 text-sm text-gray-400">
          Contact: yash@email.com • © {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
}

