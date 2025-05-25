// src/pages/Home.jsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Quote, Heart, Smile, Brain, Flame, Sun, Moon, BookOpenCheck, Star, Leaf
} from "lucide-react";

const poetryTypes = [
  { name: "Romantic", icon: <Heart className="w-5 h-5 text-pink-500" /> },
  { name: "Joyful", icon: <Smile className="w-5 h-5 text-yellow-500" /> },
  { name: "Reflective", icon: <Brain className="w-5 h-5 text-blue-600" /> },
  { name: "Inspirational", icon: <Flame className="w-5 h-5 text-orange-500" /> },
  { name: "Nature", icon: <Leaf className="w-5 h-5 text-lime-500" /> },
  { name: "Daylight", icon: <Sun className="w-5 h-5 text-green-500" /> },
  { name: "Night Musings", icon: <Moon className="w-5 h-5 text-indigo-500" /> },
  { name: "Book-Inspired", icon: <BookOpenCheck className="w-5 h-5 text-amber-700" /> },
  { name: "Stardust", icon: <Star className="w-5 h-5 text-teal-500" /> },
  { name: "Classic Verse", icon: <Quote className="w-5 h-5 text-purple-500" /> },
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <motion.h1
        className="text-4xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        EurekaAi - Poetry Generator
      </motion.h1>
      <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
        Explore a world of AI-generated poetry across various moods and themes to touch hearts and minds.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {poetryTypes.map((type, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-md rounded-xl p-4 flex items-center gap-3 border border-gray-200"
          >
            {type.icon}
            <Link
              to="/pages/Name"
              state={{ category: type.name }}
              className="text-lg text-gray-800 hover:underline"
            >
              {type.name}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
