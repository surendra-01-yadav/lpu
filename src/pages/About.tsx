
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Award,
  Globe,
  Users,
  BookOpen,
  Star,
  Lightbulb,
  Target,
  Eye,
  Heart,
  TrendingUp
} from "lucide-react";

const About = () => {
  useEffect(() => {
    // Parallax scroll effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const milestones = [
    { year: "2005", event: "LPU Foundation", description: "Established as a private university" },
    { year: "2010", event: "International Recognition", description: "Gained global accreditation" },
    { year: "2015", event: "50,000 Students", description: "Reached major enrollment milestone" },
    { year: "2020", event: "Digital Transformation", description: "Launched online learning platform" },
    { year: "2024", event: "Innovation Hub", description: "Opened state-of-the-art research facility" },
  ];

  const values = [
    {
      icon: Eye,
      title: "Vision",
      description: "To be a world-class university that nurtures innovation, excellence, and global citizenship.",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Target,
      title: "Mission",
      description: "To provide transformative education that empowers students to become leaders and innovators.",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Heart,
      title: "Values",
      description: "Integrity, Excellence, Innovation, Inclusivity, and Social Responsibility.",
      color: "from-pink-500 to-rose-600"
    }
  ];

  const achievements = [
    { icon: Award, title: "NAAC A++ Accredited", description: "Highest grade by National Assessment" },
    { icon: Globe, title: "Global Partnerships", description: "200+ international collaborations" },
    { icon: Users, title: "Diverse Community", description: "Students from 50+ countries" },
    { icon: BookOpen, title: "Research Excellence", description: "1000+ research publications annually" },
    { icon: Star, title: "Industry Connect", description: "500+ corporate partnerships" },
    { icon: Lightbulb, title: "Innovation Hub", description: "50+ startups incubated" },
  ];

  return (
    <Layout title="About LPU">
      <div className="space-y-12">
        {/* Hero Section with Parallax */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 p-12 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="parallax-element absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="parallax-element absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-white/5 to-transparent rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 font-orbitron animate-glow">
              About Lovely Professional University
            </h1>
            <p className="text-xl mb-8 font-light opacity-90">
              Pioneering Excellence in Education Since 2005
            </p>
            <p className="text-lg opacity-80 max-w-3xl mx-auto leading-relaxed">
              LPU stands as a beacon of academic excellence, innovation, and inclusive education. 
              With a commitment to nurturing future leaders and fostering global citizenship, 
              we continue to redefine the landscape of higher education in India and beyond.
            </p>
          </div>
        </div>

        {/* Vision, Mission, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 scroll-reveal">
          {values.map((value, index) => (
            <Card key={value.title} className="perspective hover:shadow-2xl transition-all duration-300 border-0 glass">
              <CardContent className="p-8 text-center card-3d">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${value.color} shadow-lg flex items-center justify-center animate-float`} style={{ animationDelay: `${index * 0.2}s` }}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text font-orbitron">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline */}
        <div className="scroll-reveal">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text font-orbitron">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 to-orange-600"></div>
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <Card className="glass border-0 hover:shadow-lg transition-all duration-300 card-3d">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-3 h-3 bg-orange-500 rounded-full animate-glow"></div>
                        <span className="text-2xl font-bold text-orange-600 font-orbitron">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{milestone.event}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-4 h-4 bg-orange-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg animate-glow"></div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="scroll-reveal">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text font-orbitron">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={achievement.title} className="perspective hover:shadow-2xl transition-all duration-300 border-0 glass group">
                <CardContent className="p-6 card-3d">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{achievement.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <Card className="scroll-reveal glass border-0">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-center mb-8 gradient-text font-orbitron">LPU by Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "30,000+", label: "Students", icon: Users },
                { number: "2,500+", label: "Faculty", icon: Users },
                { number: "200+", label: "Programs", icon: BookOpen },
                { number: "50+", label: "Countries", icon: Globe },
              ].map((stat, index) => (
                <div key={stat.label} className="animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-lg flex items-center justify-center animate-float">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white font-orbitron mb-2">{stat.number}</div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="scroll-reveal text-center">
          <Card className="glass border-0 bg-gradient-to-br from-orange-500/10 to-orange-600/10">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4 gradient-text font-orbitron">Join the LPU Family</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Be part of a community that values excellence, innovation, and global perspectives. 
                Your journey to success starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 text-lg font-medium">
                  Apply Now
                </Button>
                <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/20 px-8 py-3 text-lg font-medium">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default About;
