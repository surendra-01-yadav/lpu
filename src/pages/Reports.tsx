
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3,
  Download,
  FileText,
  TrendingUp,
  Users,
  GraduationCap,
  BookOpen,
  Award,
  Calendar,
  Filter
} from "lucide-react";

const Reports = () => {
  const reportCategories = [
    {
      title: "Student Reports",
      description: "Enrollment, attendance, and performance reports",
      icon: GraduationCap,
      reports: [
        { name: "Student Enrollment Report", lastGenerated: "2 hours ago", format: "PDF" },
        { name: "Attendance Summary", lastGenerated: "1 day ago", format: "Excel" },
        { name: "Academic Performance", lastGenerated: "3 days ago", format: "PDF" },
        { name: "Graduation Statistics", lastGenerated: "1 week ago", format: "PDF" },
      ],
    },
    {
      title: "Faculty Reports",
      description: "Faculty performance and workload analysis",
      icon: Users,
      reports: [
        { name: "Faculty Workload Report", lastGenerated: "4 hours ago", format: "Excel" },
        { name: "Course Assignment Summary", lastGenerated: "2 days ago", format: "PDF" },
        { name: "Faculty Performance Review", lastGenerated: "1 week ago", format: "PDF" },
        { name: "Department Wise Faculty", lastGenerated: "5 days ago", format: "Excel" },
      ],
    },
    {
      title: "Academic Reports",
      description: "Course performance and curriculum analysis",
      icon: BookOpen,
      reports: [
        { name: "Course Completion Rates", lastGenerated: "6 hours ago", format: "PDF" },
        { name: "Semester Wise Analysis", lastGenerated: "1 day ago", format: "Excel" },
        { name: "Curriculum Effectiveness", lastGenerated: "2 weeks ago", format: "PDF" },
        { name: "Exam Results Summary", lastGenerated: "3 days ago", format: "PDF" },
      ],
    },
    {
      title: "Financial Reports",
      description: "Fee collection and financial statistics",
      icon: BarChart3,
      reports: [
        { name: "Fee Collection Report", lastGenerated: "1 day ago", format: "Excel" },
        { name: "Outstanding Payments", lastGenerated: "2 hours ago", format: "PDF" },
        { name: "Department Budget Analysis", lastGenerated: "1 week ago", format: "Excel" },
        { name: "Scholarship Distribution", lastGenerated: "4 days ago", format: "PDF" },
      ],
    },
  ];

  const quickStats = [
    {
      title: "Reports Generated Today",
      value: "23",
      change: "+12%",
      icon: FileText,
    },
    {
      title: "Scheduled Reports",
      value: "8",
      change: "+2",
      icon: Calendar,
    },
    {
      title: "Data Accuracy",
      value: "99.2%",
      change: "+0.3%",
      icon: TrendingUp,
    },
    {
      title: "Export Requests",
      value: "156",
      change: "+8%",
      icon: Download,
    },
  ];

  return (
    <Layout title="Reports & Analytics">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center space-x-2">
            <BarChart3 className="w-6 h-6 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Report
            </Button>
            <Button size="sm">
              <FileText className="w-4 h-4 mr-2" />
              Generate Custom Report
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickStats.map((stat) => (
            <Card key={stat.title} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                    <p className="text-sm text-green-600 mt-1">{stat.change}</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Report Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {reportCategories.map((category) => (
            <Card key={category.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <category.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.reports.map((report, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{report.name}</p>
                        <p className="text-xs text-gray-500">Last generated: {report.lastGenerated}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-xs">
                          {report.format}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <Button variant="outline" className="w-full">
                    Generate New Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="w-5 h-5" />
              <span>Recent Report Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-green-50">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium text-green-900">Student Enrollment Report generated successfully</p>
                    <p className="text-xs text-green-600">2 hours ago • Downloaded 5 times</p>
                  </div>
                </div>
                <Badge variant="outline" className="bg-white">PDF</Badge>
              </div>
              
              <div className="flex items-center justify-between p-3 rounded-lg bg-blue-50">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium text-blue-900">Faculty Workload Report generated successfully</p>
                    <p className="text-xs text-blue-600">4 hours ago • Downloaded 12 times</p>
                  </div>
                </div>
                <Badge variant="outline" className="bg-white">Excel</Badge>
              </div>
              
              <div className="flex items-center justify-between p-3 rounded-lg bg-orange-50">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium text-orange-900">Course Completion Report scheduled for generation</p>
                    <p className="text-xs text-orange-600">6 hours ago • Scheduled for tomorrow 9:00 AM</p>
                  </div>
                </div>
                <Badge variant="outline" className="bg-white">Scheduled</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Export Options */}
        <Card>
          <CardHeader>
            <CardTitle>Bulk Export Options</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <GraduationCap className="w-6 h-6" />
                <span className="text-sm">All Student Data</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Users className="w-6 h-6" />
                <span className="text-sm">Faculty Records</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <BookOpen className="w-6 h-6" />
                <span className="text-sm">Course Data</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Award className="w-6 h-6" />
                <span className="text-sm">Academic Records</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Reports;
