
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  School, 
  BarChart3, 
  Menu,
  X,
  Home,
  Moon,
  Sun,
  MessageCircle
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Student Portal", href: "/students", icon: GraduationCap },
  { name: "Faculty Portal", href: "/faculty", icon: Users },
  { name: "Course Page", href: "/courses", icon: BookOpen },
  { name: "Admin Panel", href: "/academics", icon: School },
  { name: "About", href: "/about", icon: BarChart3 },
  { name: "Contact", href: "/contact", icon: MessageCircle },
];

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({ children, title = "LPU University Management" }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-50 lg:hidden bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 glass shadow-2xl border-r border-white/20 transform transition-all duration-300 ease-in-out lg:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="flex h-16 items-center justify-between px-6 border-b border-white/20 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="flex items-center space-x-3 animate-slide-in-up">
            <div className="w-10 h-10 bg-gradient-to-br from-white to-orange-100 rounded-xl flex items-center justify-center shadow-lg animate-float">
              <GraduationCap className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white font-orbitron">LPU</h1>
              <p className="text-xs text-orange-100 font-medium">University</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-white hover:bg-white/20"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <nav className="mt-6 px-3">
          <ul className="space-y-2">
            {navigation.map((item, index) => (
              <li key={item.name} className="animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 group hover:scale-105 transform card-3d",
                      isActive
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg animate-glow"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-orange-100 hover:to-orange-200 dark:hover:from-orange-900/30 dark:hover:to-orange-800/30 hover:text-orange-800 dark:hover:text-orange-200"
                    )
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="w-5 h-5 mr-3 transition-transform group-hover:scale-110" />
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Decorative element */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="glass rounded-xl p-4 text-gray-800 dark:text-white animate-slide-in-up border border-orange-200/30">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center animate-glow">
                <GraduationCap className="w-4 h-4 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <p className="text-sm font-medium">Academic Year</p>
                <p className="text-xs opacity-70">2024-2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top header */}
        <header className="glass shadow-sm border-b border-white/20 sticky top-0 z-40">
          <div className="flex h-16 items-center justify-between px-6">
            <div className="flex items-center animate-slide-in-up">
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden mr-2 hover:bg-orange-100 dark:hover:bg-orange-900/30"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              </Button>
              <h2 className="text-xl font-semibold gradient-text font-orbitron">
                {title}
              </h2>
            </div>
            <div className="flex items-center space-x-4 animate-slide-in-up">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="hover:bg-orange-100 dark:hover:bg-orange-900/30"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                ) : (
                  <Moon className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                )}
              </Button>
              <NavLink
                to="/login"
                className="text-sm font-medium text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors"
              >
                Login
              </NavLink>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Admin User</p>
                <p className="text-xs text-orange-600 dark:text-orange-400">Administrator</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow animate-float">
                <span className="text-white text-sm font-medium">AU</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6 animate-slide-in-up">
          {children}
        </main>
      </div>

      {/* AI Chatbot */}
      <div className="chatbot-container">
        {chatbotOpen && (
          <div className="glass rounded-xl p-4 mb-4 w-80 max-h-96 overflow-y-auto animate-slide-in-up">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-800 dark:text-white">LPU Assistant</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setChatbotOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <p>👋 Hello! I'm your LPU Assistant.</p>
              <p>How can I help you today?</p>
              <div className="flex flex-wrap gap-2 mt-3">
                <Button size="sm" variant="outline" className="text-xs">Student Portal</Button>
                <Button size="sm" variant="outline" className="text-xs">Course Info</Button>
                <Button size="sm" variant="outline" className="text-xs">Faculty Help</Button>
              </div>
            </div>
          </div>
        )}
        <div
          className="chatbot-bubble animate-float"
          onClick={() => setChatbotOpen(!chatbotOpen)}
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
}
