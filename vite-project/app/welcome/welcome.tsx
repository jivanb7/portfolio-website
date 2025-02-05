import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function Welcome() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
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
          <h1 className="text-5xl font-bold tracking-tight leading-snug md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate__animated animate__fadeIn animate__delay-1s">
            Hey, I'm Jivan
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-gray-300 animate__animated animate__fadeIn animate__delay-2s">
            A passionate Software Engineer
          </p>
          <p className="mt-5 text-lg md:text-xl text-gray-200 animate__animated animate__fadeIn animate__delay-3s">
            Crafting code with creativity, one project at a time.
          </p>
          <button className="mt-8 px-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-indigo-700">
            Let's Connect
          </button>
        </div>
      </div>
    </main>
  );
}
