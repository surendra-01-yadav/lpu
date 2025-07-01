
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  User, 
  Award,
  Target,
  TrendingUp,
  FileText,
  Bell,
  Download
} from "lucide-react";

const StudentDashboard = () => {
  const [attendanceData, setAttendanceData] = useState({
    present: 85,
    total: 100,
    percentage: 85
  });

  const [marksData, setMarksData] = useState([
    { subject: "Mathematics", internal: 85, external: 78, total: 163 },
    { subject: "Physics", internal: 92, external: 85, total: 177 },
    { subject: "Chemistry", internal: 78, external: 82, total: 160 },
    { subject: "Computer Science", internal: 95, external: 88, total: 183 }
  ]);

  const [upcomingEvents, setUpcomingEvents] = useState([
    { title: "Mid-term Examination", date: "2024-07-15", type: "exam" },
    { title: "Project Submission", date: "2024-07-20", type: "assignment" },
    { title: "Sports Meet", date: "2024-07-25", type: "event" }
  ]);

  useEffect(() => {
    // Animate cards on load
    const cards = document.querySelectorAll('.dashboard-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('animate-slide-in-up');
      }, index * 100);
    });
  }, []);

  const CircularProgress = ({ percentage, size = 120, strokeWidth = 8 }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative inline-flex items-center justify-center">
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255, 165, 0, 0.2)"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#gradient)"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff6b35" />
              <stop offset="100%" stopColor="#f7931e" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">{percentage}%</span>
        </div>
      </div>
    );
  };

  return (
    <Layout title="Student Dashboard">
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="dashboard-card glass rounded-3xl p-8 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-0">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold gradient-text font-orbitron mb-2">
                Welcome back, John Doe
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Student ID: 12345678 | B.Tech Computer Science Engineering
              </p>
            </div>
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl animate-float">
              <User className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Overall Attendance", value: "85%", icon: Clock, color: "from-blue-500 to-cyan-500" },
            { title: "Current CGPA", value: "8.5", icon: Award, color: "from-green-500 to-emerald-500" },
            { title: "Pending Assignments", value: "3", icon: FileText, color: "from-yellow-500 to-orange-500" },
            { title: "Upcoming Exams", value: "2", icon: Calendar, color: "from-purple-500 to-pink-500" }
          ].map((stat, index) => (
            <Card key={stat.title} className="dashboard-card glass border-0 hover:shadow-2xl transition-all duration-300 card-3d group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Dashboard Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Attendance Card */}
          <Card className="dashboard-card glass border-0 card-3d hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Clock className="w-5 h-5 mr-2 text-orange-500" />
                Attendance Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-6">
                <CircularProgress percentage={attendanceData.percentage} />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Present</span>
                  <span className="text-green-400">{attendanceData.present} days</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Total</span>
                  <span className="text-white">{attendanceData.total} days</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Absent</span>
                  <span className="text-red-400">{attendanceData.total - attendanceData.present} days</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Marks Card */}
          <Card className="dashboard-card glass border-0 card-3d hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <TrendingUp className="w-5 h-5 mr-2 text-orange-500" />
                Academic Performance
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {marksData.map((subject, index) => (
                  <div key={subject.subject} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-white">{subject.subject}</span>
                      <span className="text-sm text-orange-400">{subject.total}/200</span>
                    </div>
                    <Progress 
                      value={(subject.total / 200) * 100} 
                      className="h-2 bg-gray-700"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Timetable and Assignments */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Today's Schedule */}
          <Card className="dashboard-card glass border-0 card-3d hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Calendar className="w-5 h-5 mr-2 text-orange-500" />
                Today's Schedule
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {[
                  { time: "09:00 AM", subject: "Mathematics", room: "Room 101" },
                  { time: "11:00 AM", subject: "Physics", room: "Lab 201" },
                  { time: "02:00 PM", subject: "Computer Science", room: "Room 301" }
                ].map((class_, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 glass rounded-lg hover:bg-orange-500/10 transition-colors">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-glow"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">{class_.subject}</p>
                      <p className="text-xs text-gray-400">{class_.time} • {class_.room}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Assignments */}
          <Card className="dashboard-card glass border-0 card-3d hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <FileText className="w-5 h-5 mr-2 text-orange-500" />
                Pending Assignments
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {[
                  { title: "Data Structures Project", due: "Jul 15", priority: "high" },
                  { title: "Physics Lab Report", due: "Jul 18", priority: "medium" },
                  { title: "Math Problem Set", due: "Jul 22", priority: "low" }
                ].map((assignment, index) => (
                  <div key={index} className="flex items-center justify-between p-3 glass rounded-lg hover:bg-orange-500/10 transition-colors">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">{assignment.title}</p>
                      <p className="text-xs text-gray-400">Due: {assignment.due}</p>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${
                      assignment.priority === 'high' ? 'bg-red-500' :
                      assignment.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                    }`}></div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="dashboard-card glass border-0 card-3d hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Bell className="w-5 h-5 mr-2 text-orange-500" />
                Recent Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {[
                  { title: "New assignment posted", time: "2 hours ago", type: "assignment" },
                  { title: "Exam schedule updated", time: "1 day ago", type: "exam" },
                  { title: "Fee payment reminder", time: "3 days ago", type: "payment" }
                ].map((notification, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 glass rounded-lg hover:bg-orange-500/10 transition-colors">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 animate-glow"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">{notification.title}</p>
                      <p className="text-xs text-gray-400">{notification.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="dashboard-card glass border-0">
          <CardHeader>
            <CardTitle className="text-white">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: "View Timetable", icon: Calendar, color: "from-blue-500 to-cyan-500" },
                { title: "Download Results", icon: Download, color: "from-green-500 to-emerald-500" },
                { title: "Submit Assignment", icon: FileText, color: "from-yellow-500 to-orange-500" },
                { title: "Contact Faculty", icon: User, color: "from-purple-500 to-pink-500" }
              ].map((action, index) => (
                <Button
                  key={action.title}
                  variant="outline"
                  className={`h-20 flex flex-col items-center justify-center space-y-2 glass border-orange-500/30 hover:bg-gradient-to-br hover:${action.color} hover:text-white transition-all duration-300 card-3d`}
                >
                  <action.icon className="w-6 h-6" />
                  <span className="text-xs">{action.title}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default StudentDashboard;
