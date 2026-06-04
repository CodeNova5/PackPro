"use client";
import { useState } from "react";
// Import crisp interface icons from Lucide
import { 
  Home, 
  GraduationCap, 
  BookOpen, 
  Library, 
  MessageSquare, 
  Bell, 
  Menu, 
  Search, 
  Star, 
  Users, 
  ChevronRight,
  Check,
  Sparkles,
  Award,
  Users2
} from "lucide-react";

// Import official brand icons for your courses
import { 
  SiPython, 
  SiJavascript, 
  SiReact, 
  SiRust, 
  SiR, 
  SiLinux, 
} from "react-icons/si";

const Logo = () => (
  <svg viewBox="0 0 80 60" className="w-10 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
      <linearGradient id="cwpGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#22d3ee" />
        <stop offset="100%" stopColor="#4ade80" />
      </linearGradient>
    </defs>
    <polygon points="40,4 60,16 60,28 40,18 20,28 20,16" fill="url(#logoGrad)" opacity="0.9" />
    <polygon points="20,28 40,18 40,30 20,40" fill="url(#logoGrad)" opacity="0.6" />
    <polygon points="60,28 40,18 40,30 60,40" fill="url(#logoGrad)" opacity="0.8" />
    <text x="8" y="58" fontFamily="'Exo 2', sans-serif" fontWeight="800" fontSize="14" fill="url(#cwpGrad)">CWP</text>
  </svg>
);

const courses = [
  { id: 1, title: "Python Mastery", lang: "Python", level: "Beginner", price: "$49", color: "from-blue-600/20 to-cyan-500/10 border-blue-500/30", icon: <SiPython className="w-12 h-12 text-[#3776AB]" />, students: "12.4k", rating: "4.9" },
  { id: 2, title: "Full-Stack JavaScript", lang: "JavaScript", level: "Intermediate", price: "$79", color: "from-yellow-600/20 to-orange-500/10 border-yellow-500/30", icon: <SiJavascript className="w-10 h-10 text-[#F7DF1E] rounded" />, students: "9.8k", rating: "4.8" },
  { id: 3, title: "React & Next.js", lang: "React", level: "Intermediate", price: "$89", color: "from-cyan-600/20 to-blue-500/10 border-cyan-500/30", icon: <SiReact className="w-12 h-12 text-[#61DAFB]" />, students: "8.2k", rating: "4.9" },
  { id: 4, title: "Rust Systems Programming", lang: "Rust", level: "Advanced", price: "$99", color: "from-orange-600/20 to-red-500/10 border-orange-500/30", icon: <SiRust className="w-12 h-12 text-[#A72145]" />, students: "3.1k", rating: "4.7" },
  { id: 5, title: "Data Science with R", lang: "R / Python", level: "Intermediate", price: "$69", color: "from-violet-600/20 to-purple-500/10 border-purple-500/30", icon: <SiR className="w-12 h-12 text-[#276DC3]" />, students: "5.6k", rating: "4.8" },
  { id: 6, title: "DevOps & Cloud Systems", lang: "Linux / AWS", level: "Advanced", price: "$119", color: "from-green-600/20 to-emerald-500/10 border-emerald-500/30", icon: (
    <div className="flex gap-2 items-center">
      <SiLinux className="w-8 h-8 text-[#FCC624]" />
      <span className="text-sm font-bold text-[#FF9900]">AWS</span>
    </div>
  ), students: "4.3k", rating: "4.9" },
];

const books = [
  { id: 1, title: "Clean Code in Python", author: "Alex Chen", label: "PY", price: "$34", rentPrice: "$8/mo", color: "bg-gradient-to-br from-blue-900 to-slate-900 border-blue-500/30" },
  { id: 2, title: "JavaScript: The Good Parts", author: "Maya Rodriguez", label: "JS", price: "$28", rentPrice: "$6/mo", color: "bg-gradient-to-br from-amber-950 to-slate-900 border-yellow-600/30" },
  { id: 3, title: "System Design at Scale", author: "Priya Nair", label: "SD", price: "$42", rentPrice: "$10/mo", color: "bg-gradient-to-br from-purple-950 to-slate-900 border-purple-500/30" },
  { id: 4, title: "The Rust Programming Language", author: "Steve Klabnik", label: "RS", price: "$38", rentPrice: "$9/mo", color: "bg-gradient-to-br from-orange-950 to-slate-900 border-orange-600/30" },
  { id: 5, title: "Data Structures & Algorithms", author: "Tom Mitchell", label: "DS", price: "$45", rentPrice: "$11/mo", color: "bg-gradient-to-br from-emerald-950 to-slate-900 border-emerald-500/30" },
  { id: 6, title: "DevOps Handbook", author: "Gene Kim", label: "DO", price: "$36", rentPrice: "$8/mo", color: "bg-gradient-to-br from-rose-950 to-slate-900 border-rose-500/30" },
];

const testimonials = [
  { name: "Aisha Okonkwo", role: "Software Engineer @ Google", text: "CWP Academy completely transformed my career. The project-based curriculum gave me real skills I use every day.", avatar: "AO" },
  { name: "Carlos Mendez", role: "Freelance Developer", text: "The book rental feature is genius — I saved hundreds of dollars while studying for interviews. Highly recommend.", avatar: "CM" },
  { name: "Sarah Lim", role: "Data Scientist @ Meta", text: "Best investment I've made. The instructors are world-class and the community support is unmatched.", avatar: "SL" },
];

const features = [
  { icon: <Sparkles className="w-6 h-6 text-cyan-400" />, title: "Project-Based Learning", desc: "Build real-world projects from day one. Every concept is reinforced with hands-on practice." },
  { icon: <BookOpen className="w-6 h-6 text-green-400" />, title: "Flexible Book Rentals", desc: "Rent premium textbooks monthly. No commitment, no overpriced PDFs — just affordable knowledge." },
  { icon: <Award className="w-6 h-6 text-violet-400" />, title: "Industry Certificates", desc: "Earn certificates recognized by top tech companies. Stand out in every job application." },
  { icon: <Users2 className="w-6 h-6 text-blue-400" />, title: "Mentor Network", desc: "Get paired with experienced devs who've been where you want to go. Real guidance, real growth." },
];

const navItems = [
  { label: "Home", icon: <Home className="w-4 h-4" /> },
  { label: "Courses", icon: <GraduationCap className="w-4 h-4" /> },
  { label: "Bookstore", icon: <BookOpen className="w-4 h-4" /> },
  { label: "My Library", icon: <Library className="w-4 h-4" /> },
  { label: "Support", icon: <MessageSquare className="w-4 h-4" /> },
];

export default function CWPAcademy() {
  const [activeNav, setActiveNav] = useState("Home");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [enrolled, setEnrolled] = useState<Record<number, boolean>>({});
  const [cart, setCart] = useState<Record<number, "bought" | "rented">>({});

  const handleEnroll = (id: number) => setEnrolled(prev => ({ ...prev, [id]: true }));
  const handleBuy = (id: number) => setCart(prev => ({ ...prev, [id]: "bought" }));
  const handleRent = (id: number) => setCart(prev => ({ ...prev, [id]: "rented" }));

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveNav(id === "courses-section" ? "Courses" : id === "bookstore-section" ? "Bookstore" : "Home");
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white font-['Exo_2',sans-serif] flex">
      {/* Sidebar overlay on mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#0d0e14] border-r border-white/5 z-30 flex flex-col transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Brand */}
        <div className="px-6 pt-7 pb-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <Logo />
            <div>
              <p className="text-sm font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 uppercase">
                CWP
              </p>
              <p className="text-[10px] tracking-[0.2em] text-white/40 uppercase">Academy</p>
            </div>
          </div>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-3 py-5 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                setActiveNav(item.label);
                if (item.label === "Courses") scrollTo("courses-section");
                else if (item.label === "Bookstore") scrollTo("bookstore-section");
                else scrollTo("hero-section");
              }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                ${activeNav === item.label
                  ? "bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 border border-cyan-500/30"
                  : "text-white/50 hover:text-white/90 hover:bg-white/5"
                }`}
            >
              <span className="flex-shrink-0">{item.icon}</span>
              {item.label}
              {activeNav === item.label && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400" />
              )}
            </button>
          ))}
        </nav>

        {/* User profile */}
        <div className="px-4 py-5 border-t border-white/5">
          <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-white/5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-xs font-bold">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-white/80 truncate">Jane Developer</p>
              <p className="text-[10px] text-white/40 truncate">Pro Member</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-[#0a0b0f]/80 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex items-center justify-between">
          <button
            className="lg:hidden text-white/60 hover:text-white p-1"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="hidden lg:flex items-center gap-2 text-xs text-white/30 font-medium tracking-widest uppercase">
            <span className="text-cyan-400">▸</span> Dashboard
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses, books..."
                className="bg-white/5 border border-white/10 rounded-lg pl-9 pr-12 py-2 text-sm text-white/70 placeholder-white/25 w-56 focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all"
              />
              <Search className="w-4 h-4 text-white/25 absolute left-3 top-1/2 -translate-y-1/2" />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/25 text-[10px] font-mono tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">⌘K</span>
            </div>
            <button className="relative p-2 text-white/40 hover:text-white/80 transition-colors">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-cyan-400 rounded-full" />
            </button>
          </div>
        </header>

        <main className="flex-1">
          {/* Hero Section */}
          <section id="hero-section" className="relative px-6 lg:px-12 pt-16 pb-20 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 text-xs text-cyan-400 font-semibold tracking-wide mb-6 uppercase">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                New Cohort Now Open — Limited Seats
              </div>

              <h1 className="text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight mb-6">
                Master{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500">
                  Programming.
                </span>
                <br />
                Accelerate Your
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                  Tech Career.
                </span>
              </h1>

              <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-xl">
                Industry-grade courses, flexible book rentals, and a community of 50,000+ developers pushing boundaries together.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollTo("courses-section")}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  Explore Courses <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollTo("bookstore-section")}
                  className="px-8 py-3.5 rounded-xl border border-white/15 text-white/80 font-bold text-sm tracking-wide hover:bg-white/5 hover:border-white/25 hover:text-white transition-all duration-200"
                >
                  Browse Bookstore 📚
                </button>
              </div>

              <div className="flex flex-wrap gap-8 mt-12">
                {[["50k+", "Active Students"], ["200+", "Expert Courses"], ["98%", "Job Placement"], ["4.9★", "Avg Rating"]].map(([num, label]) => (
                  <div key={label} className="flex flex-col gap-0.5">
                    <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">{num}</span>
                    <span className="text-xs text-white/35 tracking-wide uppercase font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="px-6 lg:px-12 py-16 border-t border-white/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 hover:bg-white/[0.06] hover:border-cyan-500/20 transition-all duration-300 group"
                >
                  <div className="mb-4 p-2.5 bg-white/5 rounded-xl w-fit group-hover:scale-110 transition-transform">{f.icon}</div>
                  <h3 className="font-bold text-sm text-white/90 mb-2 group-hover:text-cyan-400 transition-colors">{f.title}</h3>
                  <p className="text-xs text-white/40 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Courses Section */}
          <section id="courses-section" className="px-6 lg:px-12 py-16 border-t border-white/5">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-xs tracking-[0.2em] text-cyan-400 uppercase font-semibold mb-2">Learn & Build</p>
                <h2 className="text-3xl font-black tracking-tight">Featured Courses</h2>
              </div>
              <button className="inline-flex items-center gap-1 text-xs text-white/40 hover:text-cyan-400 transition-colors font-medium hidden sm:flex">
                View all 200+ courses <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-[#0d0e14] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/15 hover:shadow-xl hover:shadow-black/40 transition-all duration-300 group flex flex-col"
                >
                  {/* High Tech Card Header Header */}
                  <div className={`h-28 bg-gradient-to-br ${course.color} border-b flex items-center justify-center relative transition-colors duration-300`}>
                    <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                    <div className="relative z-10 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] transform group-hover:scale-110 transition-transform duration-300">
                      {course.icon}
                    </div>
                    <span className="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-black/50 text-white/90 border border-white/10 tracking-wide uppercase">
                      {course.level}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-bold text-sm text-white/90 leading-snug group-hover:text-cyan-400 transition-colors">{course.title}</h3>
                      <span className="text-cyan-400 font-black text-sm ml-2 shrink-0">{course.price}</span>
                    </div>
                    <p className="text-xs text-white/40 mb-4 font-medium">{course.lang}</p>

                    <div className="flex items-center gap-4 text-[10px] text-white/35 mb-4 mt-auto border-t border-white/5 pt-3">
                      <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {course.students} students</span>
                      <span className="flex items-center gap-0.5"><Star className="w-3 h-3 fill-yellow-500 text-yellow-500" /> {course.rating}</span>
                    </div>

                    <button
                      onClick={() => handleEnroll(course.id)}
                      className={`w-full py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all duration-200 inline-flex items-center justify-center gap-1.5
                        ${enrolled[course.id]
                          ? "bg-green-500/10 border border-green-500/20 text-green-400 cursor-default"
                          : "bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 text-cyan-400 hover:from-cyan-500/20 hover:to-blue-600/20 hover:border-cyan-400/50"
                        }`}
                    >
                      {enrolled[course.id] ? (
                        <>
                          <Check className="w-3.5 h-3.5" /> Enrolled
                        </>
                      ) : "Enroll Now"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bookstore Section */}
          <section id="bookstore-section" className="px-6 lg:px-12 py-16 border-t border-white/5">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-xs tracking-[0.2em] text-green-400 uppercase font-semibold mb-2">Knowledge Library</p>
                <h2 className="text-3xl font-black tracking-tight">Bookstore</h2>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-xs text-green-400 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1 font-medium">
                  📚 Rent from $6/mo
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {books.map((book) => (
                <div
                  key={book.id}
                  className="bg-[#0d0e14] border border-white/[0.06] rounded-2xl p-5 hover:border-white/12 hover:shadow-xl hover:shadow-black/40 transition-all duration-300 flex flex-col gap-4 group"
                >
                  <div className="flex items-center gap-4">
                    {/* Pure Custom Tailwind High-Fidelity Interactive Book Cover */}
                    <div className={`w-16 h-20 rounded-r-md relative ${book.color} border flex flex-col justify-between p-2 shadow-md shrink-0 select-none overflow-hidden transform group-hover:scale-105 transition-transform duration-300`}>
                      {/* Left Edge Book Bind Shadow Mimicry */}
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-black/30 backdrop-blur-[0.5px]" />
                      {/* Gloss Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                      
                      <span className="text-[9px] font-black tracking-widest text-white/40 border-b border-white/10 pb-0.5 w-fit uppercase">
                        {book.label}
                      </span>
                      <div className="w-1 h-1 rounded-full bg-white/20 self-end mb-1" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-sm text-white/90 leading-snug mb-1 truncate group-hover:text-green-400 transition-colors">{book.title}</h3>
                      <p className="text-xs text-white/40 mb-2 truncate">{book.author}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-white/80 font-black text-sm">{book.price}</span>
                        <span className="text-[10px] text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20 font-medium">
                          or {book.rentPrice}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleBuy(book.id)}
                      className={`flex-1 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all duration-200 inline-flex items-center justify-center gap-1
                        ${cart[book.id] === "bought"
                          ? "bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 cursor-default"
                          : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-90 hover:scale-[1.01] active:scale-[0.99]"
                        }`}
                    >
                      {cart[book.id] === "bought" ? (
                        <>
                          <Check className="w-3.5 h-3.5" /> Purchased
                        </>
                      ) : "Buy Now"}
                    </button>
                    <button
                      onClick={() => handleRent(book.id)}
                      className={`flex-1 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all duration-200 inline-flex items-center justify-center gap-1
                        ${cart[book.id] === "rented"
                          ? "bg-green-500/10 border border-green-500/20 text-green-400 cursor-default"
                          : "border border-green-500/20 text-green-400 hover:bg-green-500/10 transition-colors"
                        }`}
                    >
                      {cart[book.id] === "rented" ? (
                        <>
                          <Check className="w-3.5 h-3.5" /> Rented
                        </>
                      ) : "Rent Book"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="px-6 lg:px-12 py-16 border-t border-white/5">
            <div className="text-center mb-10">
              <p className="text-xs tracking-[0.2em] text-violet-400 uppercase font-semibold mb-2">Student Stories</p>
              <h2 className="text-3xl font-black tracking-tight">What Our Alumni Say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:border-violet-500/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center text-xs font-black">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white/90">{t.name}</p>
                      <p className="text-[11px] text-violet-400 font-medium">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed italic">"{t.text}"</p>
                  <div className="flex gap-0.5 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Banner */}
          <section className="px-6 lg:px-12 py-16 border-t border-white/5">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-500/15 via-blue-600/10 to-violet-600/15 border border-cyan-500/20 p-10 lg:p-14 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(34,211,238,0.08)_0%,_transparent_70%)] pointer-events-none" />
              <div className="relative">
                <h2 className="text-4xl font-black tracking-tight mb-4">
                  Start Building Your Future
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Today.</span>
                </h2>
                <p className="text-white/50 mb-8 max-w-lg mx-auto">
                  Join 50,000+ developers who chose CWP Academy to launch and accelerate their tech careers.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <button
                    onClick={() => scrollTo("courses-section")}
                    className="px-10 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-200"
                  >
                    Get Started Free
                  </button>
                  <button className="px-10 py-3.5 rounded-xl border border-white/15 text-white/70 font-bold text-sm hover:bg-white/5 hover:text-white transition-all duration-200">
                    View All Plans
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-white/5 px-6 lg:px-12 py-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Logo />
                <span className="text-xs text-white/25 font-medium">© 2024 CWP Academy. All rights reserved.</span>
              </div>
              <div className="flex items-center gap-6 text-xs text-white/30">
                {["Privacy", "Terms", "Careers", "Contact"].map((item) => (
                  <a key={item} href="#" className="hover:text-white/60 transition-colors">{item}</a>
                ))}
              </div>
            </div>
          </footer>
        </main>
      </div>

      {/* Load Exo 2 font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;700;800;900&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}