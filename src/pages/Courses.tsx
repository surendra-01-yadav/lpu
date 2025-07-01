
import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Plus, 
  Filter, 
  Download,
  Eye,
  Edit,
  Trash2,
  BookOpen,
  Clock,
  Users,
  Calendar
} from "lucide-react";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const courses = [
    {
      id: "CS101",
      name: "Introduction to Computer Science",
      department: "Computer Science",
      instructor: "Dr. Rajesh Kumar",
      credits: 4,
      semester: "Fall 2024",
      enrolledStudents: 45,
      maxCapacity: 60,
      schedule: "Mon, Wed, Fri - 10:00 AM",
      status: "Active",
      description: "Fundamental concepts of computer science and programming",
    },
    {
      id: "EE201",
      name: "Digital Electronics",
      department: "Electronics Engineering",
      instructor: "Prof. Meera Sharma",
      credits: 3,
      semester: "Fall 2024",
      enrolledStudents: 38,
      maxCapacity: 50,
      schedule: "Tue, Thu - 2:00 PM",
      status: "Active",
      description: "Introduction to digital circuits and logic design",
    },
    {
      id: "ME301",
      name: "Thermodynamics",
      department: "Mechanical Engineering",
      instructor: "Dr. Suresh Patel",
      credits: 4,
      semester: "Fall 2024",
      enrolledStudents: 32,
      maxCapacity: 40,
      schedule: "Mon, Wed, Fri - 1:00 PM",
      status: "Active",
      description: "Principles of thermodynamics and heat transfer",
    },
    {
      id: "BA401",
      name: "Strategic Management",
      department: "Business Administration",
      instructor: "Prof. Anita Singh",
      credits: 3,
      semester: "Fall 2024",
      enrolledStudents: 0,
      maxCapacity: 30,
      schedule: "Tue, Thu - 11:00 AM",
      status: "Cancelled",
      description: "Advanced strategic planning and management concepts",
    },
  ];

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout title="Course Management">
      <div className="space-y-6">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Courses</h1>
            <Badge variant="secondary">{courses.length} Total</Badge>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Course
            </Button>
          </div>
        </div>

        {/* Search and Filter */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Search className="w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search courses by name, code, department, or instructor..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1"
              />
            </div>
          </CardContent>
        </Card>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">{course.name}</CardTitle>
                    <p className="text-sm text-gray-600">{course.id} • {course.department}</p>
                  </div>
                  <Badge variant={course.status === 'Active' ? 'default' : course.status === 'Cancelled' ? 'destructive' : 'secondary'}>
                    {course.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-gray-600">{course.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Instructor</p>
                      <p className="text-sm font-medium">{course.instructor}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Credits</p>
                      <p className="text-sm font-medium">{course.credits}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600">Semester</p>
                    <p className="text-sm font-medium">{course.semester}</p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <p className="text-sm">{course.schedule}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-gray-400" />
                      <p className="text-sm">
                        {course.enrolledStudents}/{course.maxCapacity} students
                      </p>
                    </div>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${(course.enrolledStudents / course.maxCapacity) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t">
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                  </div>
                  <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No courses found matching your search criteria.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </Layout>
  );
};

export default Courses;
