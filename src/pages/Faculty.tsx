
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
  Users,
  Mail,
  Phone
} from "lucide-react";

const Faculty = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const faculty = [
    {
      id: "FC001",
      name: "Dr. Rajesh Kumar",
      email: "rajesh.kumar@lpu.in",
      department: "Computer Science",
      position: "Professor",
      experience: "15 years",
      status: "Active",
      phone: "+91 9876543220",
      specialization: "Machine Learning, AI",
    },
    {
      id: "FC002",
      name: "Prof. Meera Sharma",
      email: "meera.sharma@lpu.in",
      department: "Electronics Engineering",
      position: "Associate Professor",
      experience: "12 years",
      status: "Active",
      phone: "+91 9876543221",
      specialization: "VLSI Design, Embedded Systems",
    },
    {
      id: "FC003",
      name: "Dr. Suresh Patel",
      email: "suresh.patel@lpu.in",
      department: "Mechanical Engineering",
      position: "Assistant Professor",
      experience: "8 years",
      status: "Active",
      phone: "+91 9876543222",
      specialization: "Thermodynamics, Heat Transfer",
    },
    {
      id: "FC004",
      name: "Prof. Anita Singh",
      email: "anita.singh@lpu.in",
      department: "Business Administration",
      position: "Professor",
      experience: "18 years",
      status: "On Leave",
      phone: "+91 9876543223",
      specialization: "Marketing, Strategic Management",
    },
  ];

  const filteredFaculty = faculty.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout title="Faculty Management">
      <div className="space-y-6">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center space-x-2">
            <Users className="w-6 h-6 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Faculty</h1>
            <Badge variant="secondary">{faculty.length} Total</Badge>
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
              Add Faculty
            </Button>
          </div>
        </div>

        {/* Search and Filter */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Search className="w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search faculty by name, department, or specialization..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1"
              />
            </div>
          </CardContent>
        </Card>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredFaculty.map((member) => (
            <Card key={member.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">
                        {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <p className="text-sm text-gray-600">{member.id}</p>
                      <p className="text-sm font-medium text-blue-600">{member.position}</p>
                    </div>
                  </div>
                  <Badge variant={member.status === 'Active' ? 'default' : 'secondary'}>
                    {member.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600">Department</p>
                    <p className="text-sm font-medium">{member.department}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Experience</p>
                    <p className="text-sm font-medium">{member.experience}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Specialization</p>
                    <p className="text-sm font-medium">{member.specialization}</p>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <p className="text-sm text-blue-600">{member.email}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <p className="text-sm">{member.phone}</p>
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

        {filteredFaculty.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No faculty members found matching your search criteria.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </Layout>
  );
};

export default Faculty;
