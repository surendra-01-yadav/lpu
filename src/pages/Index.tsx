
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  School,
  TrendingUp,
  Calendar,
  Bell,
  ChevronRight,
  Star,
  Globe,
  Award,
  Lightbulb
} from "lucide-react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Scroll reveal animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      title: "Total Students",
      value: "30,000+",
      change: "+12.5%",
      trend: "up",
      icon: GraduationCap,
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Faculty Members",
      value: "2,500+",
      change: "+8.3%",
      trend: "up",
      icon: Users,
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Programs Offered",
      value: "200+",
      change: "+15.2%",
      trend: "up",
      icon: BookOpen,
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "Departments",
      value: "50+",
      change: "+5.0%",
      trend: "up",
      icon: School,
      color: "from-orange-500 to-red-600"
    },
  ];

  const features = [
    {
      title: "Student Portal",
      description: "Access your academic records, attendance, and more",
      icon: GraduationCap,
      href: "/students",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Faculty Portal",
      description: "Manage courses, grades, and student interactions",
      icon: Users,
      href: "/faculty",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Course Catalog",
      description: "Explore our comprehensive course offerings",
      icon: BookOpen,
      href: "/courses",
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "Admin Panel",
      description: "Comprehensive management tools for administrators",
      icon: School,
      href: "/academics",
      color: "from-orange-500 to-red-600"
    },
  ];

  const achievements = [
    { icon: Star, label: "NAAC A++ Accredited" },
    { icon: Globe, label: "Global University" },
    { icon: Award, label: "Top 100 Universities" },
    { icon: Lightbulb, label: "Innovation Hub" },
  ];

  return (
    <Layout title="LPU University Management System">
      <div className="space-y-8">
        {/* Hero Section */}
        <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 p-8 md:p-12 text-white transition-all duration-1000 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 font-orbitron animate-glow">
                Welcome to LPU
              </h1>
              <p className="text-xl md:text-2xl mb-2 font-light">
                Lovely Professional University
              </p>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Experience the future of education with our cutting-edge University Management System. 
                Streamline your academic journey with innovative technology and seamless digital experiences.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-2 glass rounded-full px-4 py-2 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                    <achievement.icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{achievement.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 animate-parallax"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-white/5 to-transparent rounded-full translate-y-1/2 -translate-x-1/2 animate-parallax"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 scroll-reveal">
          {stats.map((stat, index) => (
            <Card key={stat.title} className="perspective hover:shadow-2xl transition-all duration-300 border-0 glass">
              <CardContent className="p-6 card-3d">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center space-x-1 text-green-600 dark:text-green-400">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">{stat.change}</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white font-orbitron">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Features Grid */}
        <div className="scroll-reveal">
          <h2 className="text-3xl font-bold text-center mb-8 gradient-text font-orbitron">
            Explore Our Platform
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={feature.title} className="perspective hover:shadow-2xl transition-all duration-300 border-0 glass group cursor-pointer">
                <CardContent className="p-8 card-3d">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                    </div>
                    <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-2 transition-all duration-300" />
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium"
                    onClick={() => window.location.href = feature.href}
                  >
                    Access Portal
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <Card className="scroll-reveal glass border-0">
          <CardHeader>
            <CardTitle className="text-2xl font-bold gradient-text font-orbitron flex items-center space-x-2">
              <Lightbulb className="w-6 h-6" />
              <span>Quick Actions</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="h-24 flex-col space-y-2 bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white card-3d">
                <GraduationCap className="w-8 h-8" />
                <span className="text-sm font-medium">Enroll Student</span>
              </Button>
              <Button variant="outline" className="h-24 flex-col space-y-2 glass border-orange-200 hover:bg-orange-50 dark:hover:bg-orange-900/20 card-3d">
                <Users className="w-8 h-8 text-orange-600" />
                <span className="text-sm font-medium">Add Faculty</span>
              </Button>
              <Button variant="outline" className="h-24 flex-col space-y-2 glass border-orange-200 hover:bg-orange-50 dark:hover:bg-orange-900/20 card-3d">
                <BookOpen className="w-8 h-8 text-orange-600" />
                <span className="text-sm font-medium">Create Course</span>
              </Button>
              <Button variant="outline" className="h-24 flex-col space-y-2 glass border-orange-200 hover:bg-orange-50 dark:hover:bg-orange-900/20 card-3d">
                <Calendar className="w-8 h-8 text-orange-600" />
                <span className="text-sm font-medium">Schedule Event</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Announcements */}
        <Card className="scroll-reveal glass border-0">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-2xl font-bold gradient-text font-orbitron flex items-center space-x-2">
              <Bell className="w-6 h-6" />
              <span>Latest Announcements</span>
            </CardTitle>
            <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 dark:hover:bg-orange-900/20">
              View All
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: "Spring Semester Registration Open",
                  description: "Register for Spring 2024 courses. Early registration deadline: March 15th",
                  time: "2 hours ago",
                  type: "Academic"
                },
                {
                  title: "Campus Innovation Challenge 2024",
                  description: "Participate in our annual innovation challenge with prizes worth ₹5 Lakhs",
                  time: "1 day ago",
                  type: "Event"
                },
                {
                  title: "Library Extended Hours",
                  description: "Central Library will remain open 24/7 during examination period",
                  time: "2 days ago",
                  type: "Facility"
                }
              ].map((announcement, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-xl glass hover:bg-orange-50/50 dark:hover:bg-orange-900/10 transition-all duration-300 card-3d">
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mt-2 animate-glow"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{announcement.title}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{announcement.description}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="text-xs text-gray-400">{announcement.time}</span>
                      <span className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-2 py-1 rounded-full">
                        {announcement.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Home;
