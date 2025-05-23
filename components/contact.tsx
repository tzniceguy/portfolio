"use client";
import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border ">
      <div className="flex items-center gap-3 mb-6">
        <MessageCircle className="w-6 h-6 text-purple-400" />
        <h3 className="text-2xl font-semibold ">Send a Message</h3>
      </div>

      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="block  font-medium mb-2">Name</div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full bg-white/5 border  rounded-lg px-4 py-3  placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
              placeholder="Your name"
            />
          </div>
          <div>
            <div className="block  font-medium mb-2">Email</div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-white/5 border  rounded-lg px-4 py-3  placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <div className="block  font-medium mb-2">Message</div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="5"
            className="w-full bg-white/5 border  rounded-lg px-4 py-3  placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200 resize-none"
            placeholder="Tell me about your project or just say hello!"
          ></textarea>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600  font-semibold py-4 px-8 rounded-lg transition-all duration-200 hover:transform hover:scale-105 flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
