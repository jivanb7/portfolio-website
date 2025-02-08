import { useRef } from "react";
import emailjs from "@emailjs/browser";

interface ContactFormProps {
  setShowForm: (show: boolean) => void;
}

export function ContactForm({ setShowForm }: ContactFormProps) {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message Sent!");
          setShowForm(false);
        },
        () => {
          alert("Failed to send message.");
        }
      );
  };

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
      onClick={() => setShowForm(false)}
    >
      <div className="bg-black p-8 rounded-4xl shadow-lg w-full max-w-md" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-3xl font-bold text-center text-amber-300 mb-4">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-white text-lg">Full Name</label>
            <input type="text" name="user_name" id="name" placeholder="Enter your name" className="w-full px-4 py-2 mt-2 bg-gray-200 rounded-lg text-gray-700 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg text-white">Email Address</label>
            <input type="email" name="user_email" id="email" placeholder="Enter your email" className="w-full px-4 py-2 mt-2 bg-gray-200 rounded-lg text-gray-700 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg text-white">Message</label>
            <textarea name="message" id="message" rows={4} placeholder="Enter your message" className="w-full px-4 py-2 mt-2 bg-gray-200 rounded-lg text-gray-700 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" required></textarea>
          </div>
          <button type="submit" className="w-full py-3 bg-gradient-to-r from-pink-600 to-indigo-600 text-white font-semibold rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-purple-600 hover:to-yellow-500">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
