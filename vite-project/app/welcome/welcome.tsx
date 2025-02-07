import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';

export function Welcome() {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleModalClose = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowForm(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-teal-600 text-white relative">
      <div className="text-center animate__animated animate__fadeIn">
        <div className="absolute top-8 right-8 flex space-x-6 text-2xl opacity-80 hover:opacity-100 transition-opacity">
          <a
            href="https://github.com/jivanb7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transform transition duration-500 hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jivan-b-42a571220"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transform transition duration-500 hover:scale-110"
          >
            <FaLinkedin />
          </a>
        </div>

        <div className="p-6 md:p-12 max-w-3xl mx-auto text-center space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight leading-snug md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-teal-400 to-purple-400 animate__animated animate__fadeIn animate__delay-1s transform transition duration-700 hover:scale-105 hover:opacity-90">
            Hey, I'm Jivan Bal
          </h1>
          
          <p className="text-2xl md:text-3xl font-semibold text-gray-300 animate__animated animate__fadeIn animate__delay-2s transform transition duration-700 hover:text-gray-100 hover:scale-105">
            Software Engineer
          </p>
          
          <p className="mt-5 text-lg md:text-xl text-gray-200 animate__animated animate__fadeIn animate__delay-3s transform transition duration-700 hover:text-gray-100">
            Crafting code with creativity, one project at a time.
          </p>

          <button
            className="mt-10 px-8 py-4 bg-gradient-to-r from-pink-600 to-indigo-600 text-white text-lg font-semibold rounded-full shadow-xl transform transition duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-purple-600 hover:to-yellow-500"
            onClick={handleButtonClick}
          >
            Let's Connect
          </button>
        </div>
      </div>

      {showForm && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleModalClose}
        >
          <div className="bg-black p-8 rounded-4xl shadow-lg w-full max-w-md">
            <h2 className="text-3xl font-bold text-center text-amber-300 mb-4">Contact Me</h2>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white text-lg">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 mt-2 bg-gray-200 rounded-lg text-gray-700 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg text-white">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 mt-2 bg-gray-200 rounded-lg text-gray-700 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Enter your message"
                  className="w-full px-4 py-2 mt-2 bg-gray-200 rounded-lg text-gray-700 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-pink-600 to-indigo-600 text-white font-semibold rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-purple-600 hover:to-yellow-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
      
    </main>
  );
}
