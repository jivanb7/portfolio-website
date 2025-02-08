import { FaGithub, FaLinkedin } from "react-icons/fa";

export function SocialLinks() {
  return (
    <div className="absolute bottom-100 left-1/2 transform -translate-x-1/2 flex space-x-8 text-4xl opacity-90 hover:opacity-100 transition-opacity">
      <a
        href="https://github.com/jivanb7"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-200 transform transition duration-500 hover:scale-125"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/jivan-b-42a571220"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-200 transform transition duration-500 hover:scale-125"
      >
        <FaLinkedin />
      </a>
    </div>
  );
}
