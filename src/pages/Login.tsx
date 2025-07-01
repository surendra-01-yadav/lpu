
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, User, Lock, Mail, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    studentId: "",
    role: "student"
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Add scroll-based animations
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const elements = document.querySelectorAll('.floating-element');
      elements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - redirect to appropriate dashboard
    if (formData.role === 'student') {
      navigate('/students');
    } else if (formData.role === 'faculty') {
      navigate('/faculty');
    } else {
      navigate('/academics');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900/20 to-black overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="floating-element absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-full blur-xl animate-float"></div>
        <div className="floating-element absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-orange-400/10 to-white/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="floating-element absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-white/10 to-orange-300/20 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* 3D Floating LPU Logo */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl animate-float card-3d">
          <GraduationCap className="w-10 h-10 text-white animate-glow" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen p-6">
        <div className="w-full max-w-md perspective">
          {/* 3D Card Container */}
          <div className={`relative w-full h-[500px] transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
            
            {/* Login Card (Front) */}
            <Card className={`absolute inset-0 glass border-0 backface-hidden ${isFlipped ? 'invisible' : 'visible'}`}>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h1 className="text-3xl font-bold gradient-text font-orbitron mb-2">LPU Portal</h1>
                  <p className="text-gray-400">Sign in to your account</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-orange-500" />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="pl-10 glass border-orange-500/30 focus:border-orange-500 text-white placeholder-gray-400"
                        required
                      />
                    </div>

                    <div className="relative">
                      <Lock className="absolute left-3 top-3 w-5 h-5 text-orange-500" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="pl-10 pr-10 glass border-orange-500/30 focus:border-orange-500 text-white placeholder-gray-400"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-orange-500"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>

                    <div className="relative">
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full p-3 glass border-orange-500/30 focus:border-orange-500 text-white bg-transparent rounded-md"
                      >
                        <option value="student" className="bg-gray-800">Student</option>
                        <option value="faculty" className="bg-gray-800">Faculty</option>
                        <option value="admin" className="bg-gray-800">Admin</option>
                      </select>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-3 animate-glow"
                  >
                    Sign In
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <button
                    onClick={() => setIsFlipped(true)}
                    className="text-orange-500 hover:text-orange-400 font-medium transition-colors"
                  >
                    New user? Create account
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Registration Card (Back) */}
            <Card className={`absolute inset-0 glass border-0 backface-hidden rotate-y-180 ${isFlipped ? 'visible' : 'invisible'}`}>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h1 className="text-3xl font-bold gradient-text font-orbitron mb-2">Join LPU</h1>
                  <p className="text-gray-400">Create your account</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-4">
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-orange-500" />
                      <Input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="pl-10 glass border-orange-500/30 focus:border-orange-500 text-white placeholder-gray-400"
                        required
                      />
                    </div>

                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-orange-500" />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="pl-10 glass border-orange-500/30 focus:border-orange-500 text-white placeholder-gray-400"
                        required
                      />
                    </div>

                    <div className="relative">
                      <GraduationCap className="absolute left-3 top-3 w-5 h-5 text-orange-500" />
                      <Input
                        type="text"
                        name="studentId"
                        placeholder="Student/Faculty ID"
                        value={formData.studentId}
                        onChange={handleInputChange}
                        className="pl-10 glass border-orange-500/30 focus:border-orange-500 text-white placeholder-gray-400"
                        required
                      />
                    </div>

                    <div className="relative">
                      <Lock className="absolute left-3 top-3 w-5 h-5 text-orange-500" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="pl-10 pr-10 glass border-orange-500/30 focus:border-orange-500 text-white placeholder-gray-400"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-orange-500"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-3 animate-glow"
                  >
                    Create Account
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <button
                    onClick={() => setIsFlipped(false)}
                    className="text-orange-500 hover:text-orange-400 font-medium transition-colors"
                  >
                    Already have account? Sign in
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm">
        <p>© 2024 Lovely Professional University. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Login;
