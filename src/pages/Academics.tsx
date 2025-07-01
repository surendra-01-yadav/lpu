
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  School,
  Calendar,
  FileText,
  Award,
  Clock,
  Users,
  BookOpen,
  CheckCircle
} from "lucide-react";

const Academics = () => {
  const academicActivities = [
    {
      id: 1,
      title: "Mid-term Examinations",
      description: "Semester 1 mid-term exams for all courses",
      date: "March 25 - April 2, 2024",
      status: "Upcoming",
      type: "Examination",
      participants: "All Students",
    },
    {
      id: 2,
      title: "Faculty Development Program",
      description: "Workshop on modern teaching methodologies",
      date: "March 18, 2024",
      status: "Scheduled",
      type: "Training",
      participants: "Faculty Members",
    },
    {
      id: 3,
      title: "Research Symposium",
      description: "Annual research presentation and competition",
      date: "April 15, 2024",
      status: "Planning",
      type: "Event",
      participants: "PhD Students",
    },
    {
      id: 4,
      title: "Semester Registration",
      description: "Course registration for Summer 2024 semester",
      date: "March 10 - 20, 2024",
      status: "Active",
      type: "Registration",
      participants: "All Students",
    },
  ];

  const academicStats = [
    {
      title: "Active Semesters",
      value: "2",
      icon: Calendar,
      color: "blue",
    },
    {
      title: "Total Subjects",
      value: "245",
      icon: BookOpen,
      color: "green",
    },
    {
      title: "Upcoming Exams",
      value: "12",
      icon: FileText,
      color: "orange",
    },
    {
      title: "Graduation Pending",
      value: "156",
      icon: Award,
      color: "purple",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'default';
      case 'Upcoming':
        return 'secondary';
      case 'Scheduled':
        return 'outline';
      case 'Planning':
        return 'secondary';
      default:
        return 'secondary';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Examination':
        return FileText;
      case 'Training':
        return Users;
      case 'Event':
        return Award;
      case 'Registration':
        return CheckCircle;
      default:
        return Calendar;
    }
  };

  return (
    <Layout title="Academic Management">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-2">
          <School className="w-6 h-6 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">Academic Management</h1>
        </div>

        {/* Academic Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {academicStats.map((stat) => (
            <Card key={stat.title} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-${stat.color}-50`}>
                    <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="h-20 flex-col space-y-2">
                <Calendar className="w-6 h-6" />
                <span className="text-sm">Schedule Exam</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <FileText className="w-6 h-6" />
                <span className="text-sm">Generate Report</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Award className="w-6 h-6" />
                <span className="text-sm">Create Event</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Users className="w-6 h-6" />
                <span className="text-sm">Faculty Meeting</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Academic Activities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Academic Activities</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {academicActivities.map((activity) => {
                const IconComponent = getTypeIcon(activity.type);
                return (
                  <div key={activity.id} className="flex items-start space-x-4 p-4 rounded-lg border hover:bg-gray-50 transition-colors">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <IconComponent className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{activity.title}</h3>
                        <Badge variant={getStatusColor(activity.status)}>
                          {activity.status}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-2">{activity.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{activity.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{activity.participants}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {activity.type}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Academic Calendar */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Important Dates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                  <div>
                    <p className="font-medium text-red-900">Exam Registration Deadline</p>
                    <p className="text-sm text-red-600">March 20, 2024</p>
                  </div>
                  <Badge variant="destructive">Urgent</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                  <div>
                    <p className="font-medium text-yellow-900">Mid-term Exams Begin</p>
                    <p className="text-sm text-yellow-600">March 25, 2024</p>
                  </div>
                  <Badge variant="outline">Upcoming</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <div>
                    <p className="font-medium text-green-900">Summer Registration Opens</p>
                    <p className="text-sm text-green-600">April 1, 2024</p>
                  </div>
                  <Badge variant="secondary">Scheduled</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Department Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Computer Science</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                    <span className="text-sm text-gray-600">92%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Electronics Engineering</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '88%' }}></div>
                    </div>
                    <span className="text-sm text-gray-600">88%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Mechanical Engineering</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <span className="text-sm text-gray-600">85%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Business Administration</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                    <span className="text-sm text-gray-600">90%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Academics;
