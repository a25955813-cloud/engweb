import React, { useState, useEffect } from "react";

// استخدام أيقونات من React Icons
import {
  FaBookOpen,
  FaCalculator,
  FaAtom,
  FaFlask,
  FaRuler,
  FaCog,
  FaWrench,
  FaGlobe,
  FaMicrochip,
  FaChevronRight,
  FaBars,
  FaTimes,
  FaGraduationCap,
  FaAward,
  FaUsers,
  FaTrendingUp,
  FaArrowRight,
} from "react-icons/fa";

// استخدام framer-motion للحركات السلسة
import { motion, AnimatePresence } from "framer-motion";

const subjects = [
  {
    id: "math",
    name: "Mathematics",
    icon: FaCalculator,
    gradient: "from-blue-500 via-blue-600 to-indigo-600",
    bgGradient: "bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600",
    topics: ["Calculus", "Integration", "Algebra"],
    description:
      "Master the foundation of engineering through advanced mathematical concepts",
  },
  {
    id: "physics",
    name: "Physics",
    icon: FaAtom,
    gradient: "from-purple-500 via-purple-600 to-pink-600",
    bgGradient: "bg-gradient-to-br from-purple-500 via-purple-600 to-pink-600",
    topics: ["Mechanics", "Electricity", "Motion"],
    description: "Explore the fundamental laws governing our physical world",
  },
  {
    id: "chemistry",
    name: "Chemistry",
    icon: FaFlask,
    gradient: "from-green-500 via-emerald-600 to-teal-600",
    bgGradient: "bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600",
    topics: ["Organic", "Inorganic", "Analytical"],
    description: "Understand molecular structures and chemical reactions",
  },
  {
    id: "drawing",
    name: "Engineering Drawing",
    icon: FaRuler,
    gradient: "from-orange-500 via-red-500 to-pink-500",
    bgGradient: "bg-gradient-to-br from-orange-500 via-red-500 to-pink-500",
    topics: ["Projections", "Views", "Sections"],
    description: "Develop technical drawing and visualization skills",
  },
  {
    id: "statics",
    name: "Statics",
    icon: FaCog,
    gradient: "from-red-500 via-rose-600 to-pink-600",
    bgGradient: "bg-gradient-to-br from-red-500 via-rose-600 to-pink-600",
    topics: ["Forces", "Moments", "Equilibrium"],
    description: "Study forces and their effects on stationary objects",
  },
  {
    id: "dynamics",
    name: "Dynamics",
    icon: FaWrench,
    gradient: "from-indigo-500 via-blue-600 to-cyan-600",
    bgGradient: "bg-gradient-to-br from-indigo-500 via-blue-600 to-cyan-600",
    topics: ["Motion", "Velocity", "Acceleration"],
    description: "Analyze motion and forces in dynamic systems",
  },
  {
    id: "mechanics",
    name: "Mechanics",
    icon: FaCog,
    gradient: "from-teal-500 via-cyan-600 to-blue-600",
    bgGradient: "bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-600",
    topics: ["Materials", "Stress", "Strain"],
    description: "Understand material behavior under various loads",
  },
  {
    id: "production",
    name: "Production",
    icon: FaWrench,
    gradient: "from-yellow-500 via-orange-500 to-red-500",
    bgGradient: "bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500",
    topics: ["Manufacturing", "Quality", "Management"],
    description: "Learn modern production and manufacturing processes",
  },
  {
    id: "english",
    name: "English Language",
    icon: FaGlobe,
    gradient: "from-pink-500 via-purple-500 to-indigo-500",
    bgGradient: "bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500",
    topics: ["Reading", "Writing", "Speaking"],
    description: "Enhance communication skills for global engineering",
  },
  {
    id: "technology",
    name: "Technology",
    icon: FaMicrochip,
    gradient: "from-cyan-500 via-blue-500 to-purple-500",
    bgGradient: "bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500",
    topics: ["Programming", "Computing", "Networks"],
    description: "Master cutting-edge technological tools and systems",
  },
];

const stats = [
  {
    icon: FaBookOpen,
    value: "10+",
    label: "Core Subjects",
    color: "text-blue-400",
  },
  {
    icon: FaUsers,
    value: "1000+",
    label: "Students",
    color: "text-purple-400",
  },
  {
    icon: FaGraduationCap,
    value: "50+",
    label: "Expert Faculty",
    color: "text-green-400",
  },
  {
    icon: FaAward,
    value: "100%",
    label: "Success Rate",
    color: "text-orange-400",
  },
];

// مكونات الحركات
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function EngineeringWebsite() {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white">
      {/* الخلفية المتحركة */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* الهيدر */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black bg-opacity-80 backdrop-blur-xl shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur opacity-75"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform">
                  <FaGraduationCap className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Engineering Faculty
                </h1>
                <p className="text-sm text-blue-300">Beni Suef University</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              {["Home", "Subjects", "About", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white hover:text-blue-400 transition-colors"
            >
              {menuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* القائمة الجوال */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black bg-opacity-90 backdrop-blur-xl"
              onClick={() => setMenuOpen(false)}
            ></div>
            <motion.nav
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="relative flex flex-col items-center justify-center h-full space-y-8 text-2xl"
            >
              {["Home", "Subjects", "About", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-blue-400 transition-colors"
                  onClick={() => setMenuOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {item}
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* قسم البطل */}
      <section id="home" className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-block mb-6 px-6 py-2 bg-blue-500 bg-opacity-20 backdrop-blur-sm rounded-full border border-blue-400 border-opacity-30"
          >
            <span className="text-blue-300 font-semibold">
              🎓 Welcome to Excellence
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Engineering
            </span>
            <br />
            <span className="text-white">Your Future</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Explore comprehensive engineering courses and embark on your journey
            to become a world-class engineer at Beni Suef University
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-6 flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-bold text-lg hover:from-blue-600 hover:to-purple-700 transition-all shadow-2xl flex items-center space-x-2"
            >
              <span>Start Learning</span>
              <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white bg-opacity-10 backdrop-blur-md rounded-full font-bold text-lg hover:bg-opacity-20 transition-all border-2 border-white border-opacity-30 hover:border-opacity-50"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* قسم الإحصائيات */}
      <section className="py-16 px-6 relative z-10">
        <div className="container mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="group bg-white bg-opacity-5 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-10 hover:border-opacity-30 transition-all hover:bg-opacity-10 text-center"
                >
                  <Icon
                    className={`w-12 h-12 mx-auto mb-4 ${stat.color} group-hover:scale-110 transition-transform`}
                  />
                  <div className={`text-5xl font-black mb-2 ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* قسم المواد */}
      <section id="subjects" className="py-24 px-6 relative z-10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Core Subjects
            </h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive curriculum designed to build strong engineering
              fundamentals
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          >
            {subjects.map((subject) => {
              const Icon = subject.icon;
              return (
                <motion.div
                  key={subject.id}
                  variants={fadeInUp}
                  onClick={() => setSelectedSubject(subject)}
                  className="group cursor-pointer"
                >
                  <div className="relative bg-white bg-opacity-5 backdrop-blur-xl rounded-3xl p-6 border border-white border-opacity-10 hover:border-opacity-30 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${subject.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    ></div>
                    <div className="relative z-10">
                      <div
                        className={`w-16 h-16 ${subject.bgGradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                      >
                        <Icon className="w-8 h-8" />
                      </div>
                      <h4 className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                        {subject.name}
                      </h4>
                      <div className="space-y-2 mb-4">
                        {subject.topics.map((topic, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-gray-400 text-sm group-hover:text-gray-300 transition-colors"
                          >
                            <div
                              className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${subject.gradient} mr-2`}
                            ></div>
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center text-blue-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Learn More</span>
                        <FaChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* نافذة المواد */}
      <AnimatePresence>
        {selectedSubject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedSubject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-10 max-w-3xl w-full border-2 border-blue-500 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center space-x-6">
                  <div
                    className={`w-20 h-20 ${selectedSubject.bgGradient} rounded-2xl flex items-center justify-center shadow-2xl`}
                  >
                    {React.createElement(selectedSubject.icon, {
                      className: "w-10 h-10",
                    })}
                  </div>
                  <div>
                    <h3 className="text-4xl font-black mb-2">
                      {selectedSubject.name}
                    </h3>
                    <p className="text-gray-400">
                      {selectedSubject.description}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedSubject(null)}
                  className="text-gray-400 hover:text-white hover:rotate-90 transition-all"
                >
                  <FaTimes className="w-8 h-8" />
                </button>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-2xl font-bold text-blue-300 mb-4">
                    Key Topics
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {selectedSubject.topics.map((topic, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`bg-gradient-to-br ${selectedSubject.gradient} bg-opacity-10 rounded-2xl p-5 border border-white border-opacity-10 hover:border-opacity-30 transition-all hover:scale-105`}
                      >
                        <p className="text-lg font-semibold">{topic}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full mt-8 px-8 py-4 ${selectedSubject.bgGradient} rounded-2xl font-bold text-lg hover:shadow-2xl transition-all flex items-center justify-center space-x-2 group`}
                >
                  <span>Start Learning Now</span>
                  <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* قسم الدعوة للإجراء */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-16 overflow-hidden"
          >
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-5xl font-black mb-6">
                Ready to Begin Your Journey?
              </h3>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Join thousands of students building their engineering careers at
                Beni Suef University
              </p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-12 py-5 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl"
              >
                Enroll Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* الفوتر */}
      <footer className="bg-black bg-opacity-50 backdrop-blur-xl py-12 px-6 border-t border-blue-500 border-opacity-30 relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <FaGraduationCap className="w-6 h-6" />
                </div>
                <span className="text-xl font-bold">Engineering Faculty</span>
              </div>
              <p className="text-gray-400">
                Building the engineers of tomorrow at Beni Suef University
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-blue-400">Quick Links</h4>
              <div className="space-y-2">
                {["About Us", "Admissions", "Faculty", "Research"].map(
                  (link) => (
                    <a
                      key={link}
                      href="#"
                      className="block text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  )
                )}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-blue-400">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>Beni Suef, Egypt</p>
                <p>info@engineering.bsu.edu.eg</p>
                <p>+20 123 456 7890</p>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400 mb-3">
              © 2024 Engineering Faculty - Beni Suef University. All rights
              reserved.
            </p>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-400 border-opacity-30">
              <FaMicrochip className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">Developed by</span>
              <span className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Engineer Omar Selem
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
