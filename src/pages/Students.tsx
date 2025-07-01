
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
  GraduationCap
} from "lucide-react";

const Students = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const students = [
    {
      id: "ST001",
      name: "Rahul Sharma",
      email: "rahul.sharma@lpu.in",
      course: "Computer Science",
      year: "3rd Year",
      status: "Active",
      gpa: "8.5",
      phone: "+91 9876543210",
    },
    {
      id: "ST002",
      name: "Priya Patel",
      email: "priya.patel@lpu.in",
      course: "Electronics Engineering",
      year: "2nd Year",
      status: "Active",
      gpa: "9.2",
      phone: "+91 9876543211",
    },
    {
      id: "ST003",
      name: "Amit Kumar",
      email: "amit.kumar@lpu.in",
      course: "Mechanical Engineering",
      year: "4th Year",
      status: "Active",
      gpa: "7.8",
      phone: "+91 9876543212",
    },
    {
      id: "ST004",
      name: "Sneha Singh",
      email: "sneha.singh@lpu.in",
      course: "Business Administration",
      year: "1st Year",
      status: "Inactive",
      gpa: "8.1",
      phone: "+91 9876543213",
    },
  ];

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout title="Student Management">
      <div className="space-y-6">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 animate-slide-in">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg animate-float">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                Students
              </h1>
              <Badge variant="secondary" className="bg-orange-100 text-orange-800 hover:bg-orange-200 transition-colors">
                {students.length} Total
              </Badge>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="border-orange-200 hover:bg-orange-50 hover:border-orange-300 transition-all hover:scale-105">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="border-orange-200 hover:bg-orange-50 hover:border-orange-300 transition-all hover:scale-105">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <Plus className="w-4 h-4 mr-2" />
              Add Student
            </Button>
          </div>
        </div>

        {/* Search and Filter */}
        <Card className="border-orange-200 shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Search className="w-5 h-5 text-orange-600" />
              </div>
              <Input
                placeholder="Search students by name, email, or course..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 border-orange-200 focus:ring-orange-500 focus:border-orange-500 transition-all"
              />
            </div>
          </CardContent>
        </Card>

        {/* Students Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredStudents.map((student, index) => (
            <Card 
              key={student.id} 
              className="border-orange-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white/90 backdrop-blur-sm animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow animate-float">
                      <span className="text-white font-semibold text-lg">
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <CardTitle className="text-lg text-gray-800 group-hover:text-orange-700 transition-colors">
                        {student.name}
                      </CardTitle>
                      <p className="text-sm text-orange-600 font-medium">{student.id}</p>
                    </div>
                  </div>
                  <Badge 
                    variant={student.status === 'Active' ? 'default' : 'secondary'}
                    className={student.status === 'Active' 
                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700' 
                      : 'bg-gray-100 text-gray-600'
                    }
                  >
                    {student.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <p className="text-sm text-orange-700 font-medium">Course</p>
                    <p className="text-sm font-semibold text-orange-800">{student.course}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-3 rounded-lg">
                      <p className="text-sm text-orange-700 font-medium">Year</p>
                      <p className="text-sm font-semibold text-orange-800">{student.year}</p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-3 rounded-lg">
                      <p className="text-sm text-orange-700 font-medium">GPA</p>
                      <p className="text-sm font-semibold text-orange-800">{student.gpa}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="text-sm font-medium text-orange-600">{student.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="text-sm font-medium">{student.phone}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-orange-200">
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" className="hover:bg-orange-100 hover:text-orange-700 transition-all hover:scale-105">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-orange-100 hover:text-orange-700 transition-all hover:scale-105">
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                  </div>
                  <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50 transition-all hover:scale-110">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredStudents.length === 0 && (
          <Card className="border-orange-200 shadow-lg bg-white/80 backdrop-blur-sm animate-fade-in-up">
            <CardContent className="p-12 text-center">
              <div className="p-4 bg-orange-100 rounded-full inline-block mb-4 animate-float">
                <GraduationCap className="w-12 h-12 text-orange-600" />
              </div>
              <p className="text-gray-600 text-lg">No students found matching your search criteria.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </Layout>
  );
};

export default Students;
