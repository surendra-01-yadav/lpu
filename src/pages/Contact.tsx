
import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  User,
  Building,
  Globe
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: "Lovely Professional University, Phagwara, Punjab 144411, India",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91-1824-517000",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@lpu.co.in",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Mon - Sat: 9:00 AM - 6:00 PM",
      color: "from-orange-500 to-red-600"
    }
  ];

  const departments = [
    { name: "Admissions", email: "admissions@lpu.co.in", phone: "+91-1824-517000" },
    { name: "Academic Affairs", email: "academics@lpu.co.in", phone: "+91-1824-517001" },
    { name: "Student Services", email: "student.services@lpu.co.in", phone: "+91-1824-517002" },
    { name: "International Office", email: "international@lpu.co.in", phone: "+91-1824-517003" },
  ];

  return (
    <Layout title="Contact Us">
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 p-8 md:p-12 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-orbitron animate-glow">
              Get in Touch
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Have questions? We're here to help. Reach out to us and we'll get back to you as soon as possible.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 animate-parallax"></div>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 scroll-reveal">
          {contactInfo.map((info, index) => (
            <Card key={info.title} className="perspective hover:shadow-2xl transition-all duration-300 border-0 glass">
              <CardContent className="p-6 text-center card-3d">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${info.color} shadow-lg flex items-center justify-center animate-float`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{info.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{info.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="glass border-0 scroll-reveal">
            <CardHeader>
              <CardTitle className="text-2xl font-bold gradient-text font-orbitron flex items-center space-x-2">
                <MessageCircle className="w-6 h-6" />
                <span>Send us a Message</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="flex items-center space-x-2 mb-2">
                      <User className="w-4 h-4 text-orange-600" />
                      <span>Full Name</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="glass border-orange-200 focus:border-orange-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="flex items-center space-x-2 mb-2">
                      <Mail className="w-4 h-4 text-orange-600" />
                      <span>Email</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="glass border-orange-200 focus:border-orange-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="flex items-center space-x-2 mb-2">
                      <Phone className="w-4 h-4 text-orange-600" />
                      <span>Phone Number</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="glass border-orange-200 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="flex items-center space-x-2 mb-2">
                      <Building className="w-4 h-4 text-orange-600" />
                      <span>Subject</span>
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Subject of your inquiry"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="glass border-orange-200 focus:border-orange-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="flex items-center space-x-2 mb-2">
                    <MessageCircle className="w-4 h-4 text-orange-600" />
                    <span>Message</span>
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-3 glass border border-orange-200 rounded-lg focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white placeholder-gray-500"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-3 text-lg flex items-center justify-center space-x-2 card-3d"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Map and Departments */}
          <div className="space-y-6">
            {/* Google Map */}
            <Card className="glass border-0 scroll-reveal">
              <CardHeader>
                <CardTitle className="text-xl font-bold gradient-text font-orbitron flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>Find Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3414.4097087096487!2d75.7037!3d31.2547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5f5e9c489cf3%3A0x4049a5409d53c300!2sLovely%20Professional%20University!5e0!3m2!1sen!2sin!4v1699123456789!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-orange-500 text-white p-2 rounded-full animate-glow">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Department Contacts */}
            <Card className="glass border-0 scroll-reveal">
              <CardHeader>
                <CardTitle className="text-xl font-bold gradient-text font-orbitron flex items-center space-x-2">
                  <Building className="w-5 h-5" />
                  <span>Department Contacts</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={dept.name} className="p-4 glass rounded-lg border border-orange-200/30 hover:bg-orange-50/50 dark:hover:bg-orange-900/10 transition-all duration-300 card-3d">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{dept.name}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Mail className="w-4 h-4 text-orange-600" />
                          <span>{dept.email}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Phone className="w-4 h-4 text-orange-600" />
                          <span>{dept.phone}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Social Media & Quick Links */}
        <Card className="glass border-0 scroll-reveal">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold gradient-text font-orbitron mb-4">Connect With Us</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Stay updated with the latest news and announcements from LPU.
                </p>
                <div className="flex space-x-4">
                  {[
                    { name: "Facebook", color: "bg-blue-600" },
                    { name: "Twitter", color: "bg-sky-500" },
                    { name: "LinkedIn", color: "bg-blue-700" },
                    { name: "Instagram", color: "bg-pink-600" },
                    { name: "YouTube", color: "bg-red-600" },
                  ].map((social, index) => (
                    <div key={social.name} className={`w-12 h-12 ${social.color} rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform duration-300 animate-float`} style={{ animationDelay: `${index * 0.1}s` }}>
                      <Globe className="w-5 h-5" />
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold gradient-text font-orbitron mb-4">Quick Links</h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Admissions",
                    "Academic Calendar",
                    "Student Portal",
                    "Faculty Portal",
                    "Library",
                    "Campus Life",
                    "Research",
                    "Placements"
                  ].map((link, index) => (
                    <Button key={link} variant="ghost" className="justify-start text-left hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:text-orange-600 transition-colors duration-300">
                      {link}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Contact;
