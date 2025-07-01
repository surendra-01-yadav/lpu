
import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Users, 
  BookOpen, 
  Calendar, 
  Clock, 
  Upload,
  Award,
  FileText,
  PlusCircle,
  TrendingUp,
  CheckCircle
} from "lucide-react";

const FacultyDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [students, setStudents] = useState([
    { id: "12345678", name: "John Doe", attendance: 85, marks: 78 },
    { id: "12345679", name: "Jane Smith", attendance: 92, marks: 85 },
    { id: "12345680", name: "Mike Johnson", attendance: 78, marks: 72 }
  ]);

  const [newAssignment, setNewAssignment] = useState({
    title: "",
    description: "",
    dueDate: "",
    subject: ""
  });

  const handleAttendanceUpdate = (studentId: string, isPresent: boolean) => {
    setStudents(students.map(student => 
      student.id === studentId 
        ? { ...student, attendance: isPresent ? student.attendance + 1 : student.attendance }
        : student
    ));
  };

  const handleAssignmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New assignment:", newAssignment);
    setNewAssignment({ title: "", description: "", dueDate: "", subject: "" });
  };

  return (
    <Layout title="Faculty Dashboard">
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="glass rounded-3xl p-8 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-0">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold gradient-text font-orbitron mb-2">
                Welcome, Dr. Sarah Wilson
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Faculty ID: FAC001 | Computer Science Department
              </p>
            </div>
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl animate-float">
              <Users className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 glass rounded-2xl p-2 border-0">
          {[
            { id: "overview", label: "Overview", icon: TrendingUp },
            { id: "attendance", label: "Attendance", icon: Clock },
            { id: "assignments", label: "Assignments", icon: FileText },
            { id: "schedule", label: "Schedule", icon: Calendar }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { title: "Total Students", value: "156", icon: Users, color: "from-blue-500 to-cyan-500" },
                { title: "Active Courses", value: "4", icon: BookOpen, color: "from-green-500 to-emerald-500" },
                { title: "Pending Assignments", value: "12", icon: FileText, color: "from-yellow-500 to-orange-500" },
                { title: "Average Attendance", value: "85%", icon: Clock, color: "from-purple-500 to-pink-500" }
              ].map((stat, index) => (
                <Card key={stat.title} className="glass border-0 hover:shadow-2xl transition-all duration-300 card-3d group">
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

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass border-0 card-3d">
                <CardHeader>
                  <CardTitle className="text-white">Recent Student Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {students.slice(0, 5).map((student) => (
                      <div key={student.id} className="flex items-center justify-between p-3 glass rounded-lg">
                        <div>
                          <p className="font-medium text-white">{student.name}</p>
                          <p className="text-sm text-gray-400">ID: {student.id}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-orange-400">Marks: {student.marks}</p>
                          <p className="text-sm text-gray-400">Attendance: {student.attendance}%</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass border-0 card-3d">
                <CardHeader>
                  <CardTitle className="text-white">Upcoming Classes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { time: "10:00 AM", subject: "Data Structures", room: "Room 301", students: 45 },
                      { time: "02:00 PM", subject: "Algorithms", room: "Room 302", students: 38 },
                      { time: "04:00 PM", subject: "Database Systems", room: "Lab 201", students: 32 }
                    ].map((class_, index) => (
                      <div key={index} className="flex items-center justify-between p-3 glass rounded-lg">
                        <div>
                          <p className="font-medium text-white">{class_.subject}</p>
                          <p className="text-sm text-gray-400">{class_.time} • {class_.room}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-orange-400">{class_.students} students</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Attendance Tab */}
        {activeTab === "attendance" && (
          <Card className="glass border-0 card-3d">
            <CardHeader>
              <CardTitle className="text-white">Mark Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Input
                    placeholder="Select Date"
                    type="date"
                    className="glass border-orange-500/30 text-white"
                  />
                  <select className="glass border-orange-500/30 text-white bg-transparent rounded-md p-2">
                    <option value="" className="bg-gray-800">Select Subject</option>
                    <option value="ds" className="bg-gray-800">Data Structures</option>
                    <option value="algo" className="bg-gray-800">Algorithms</option>
                    <option value="db" className="bg-gray-800">Database Systems</option>
                  </select>
                  <select className="glass border-orange-500/30 text-white bg-transparent rounded-md p-2">
                    <option value="" className="bg-gray-800">Select Class</option>
                    <option value="cse-a" className="bg-gray-800">CSE-A</option>
                    <option value="cse-b" className="bg-gray-800">CSE-B</option>
                  </select>
                </div>

                <div className="space-y-3">
                  {students.map((student) => (
                    <div key={student.id} className="flex items-center justify-between p-4 glass rounded-lg hover:bg-orange-500/10 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-medium">
                            {student.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-white">{student.name}</p>
                          <p className="text-sm text-gray-400">ID: {student.id}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          onClick={() => handleAttendanceUpdate(student.id, true)}
                          className="bg-green-600 hover:bg-green-700 text-white"
                        >
                          Present
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleAttendanceUpdate(student.id, false)}
                          className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                        >
                          Absent
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end space-x-4 pt-4">
                  <Button variant="outline" className="border-gray-500 text-gray-400">
                    Cancel
                  </Button>
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                    Save Attendance
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Assignments Tab */}
        {activeTab === "assignments" && (
          <div className="space-y-6">
            <Card className="glass border-0 card-3d">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <PlusCircle className="w-5 h-5 mr-2 text-orange-500" />
                  Create New Assignment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAssignmentSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Assignment Title"
                      value={newAssignment.title}
                      onChange={(e) => setNewAssignment({...newAssignment, title: e.target.value})}
                      className="glass border-orange-500/30 text-white"
                      required
                    />
                    <select
                      value={newAssignment.subject}
                      onChange={(e) => setNewAssignment({...newAssignment, subject: e.target.value})}
                      className="glass border-orange-500/30 text-white bg-transparent rounded-md p-2"
                      required
                    >
                      <option value="" className="bg-gray-800">Select Subject</option>
                      <option value="ds" className="bg-gray-800">Data Structures</option>
                      <option value="algo" className="bg-gray-800">Algorithms</option>
                      <option value="db" className="bg-gray-800">Database Systems</option>
                    </select>
                  </div>
                  <Textarea
                    placeholder="Assignment Description"
                    value={newAssignment.description}
                    onChange={(e) => setNewAssignment({...newAssignment, description: e.target.value})}
                    className="glass border-orange-500/30 text-white min-h-[100px]"
                    required
                  />
                  <Input
                    type="datetime-local"
                    value={newAssignment.dueDate}
                    onChange={(e) => setNewAssignment({...newAssignment, dueDate: e.target.value})}
                    className="glass border-orange-500/30 text-white"
                    required
                  />
                  <div className="flex justify-end space-x-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="border-gray-500 text-gray-400"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                    >
                      Create Assignment
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card className="glass border-0 card-3d">
              <CardHeader>
                <CardTitle className="text-white">Recent Assignments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: "Binary Search Tree Implementation", subject: "Data Structures", dueDate: "2024-07-20", submissions: 25, total: 45 },
                    { title: "Sorting Algorithms Analysis", subject: "Algorithms", dueDate: "2024-07-25", submissions: 38, total: 42 },
                    { title: "Database Design Project", subject: "Database Systems", dueDate: "2024-07-30", submissions: 12, total: 35 }
                  ].map((assignment, index) => (
                    <div key={index} className="flex items-center justify-between p-4 glass rounded-lg hover:bg-orange-500/10 transition-colors">
                      <div>
                        <p className="font-medium text-white">{assignment.title}</p>
                        <p className="text-sm text-gray-400">{assignment.subject} • Due: {assignment.dueDate}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-orange-400">{assignment.submissions}/{assignment.total} submitted</p>
                        <div className="w-24 h-2 bg-gray-700 rounded-full mt-1">
                          <div
                            className="h-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
                            style={{ width: `${(assignment.submissions / assignment.total) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Schedule Tab */}
        {activeTab === "schedule" && (
          <Card className="glass border-0 card-3d">
            <CardHeader>
              <CardTitle className="text-white">Weekly Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                  <div key={day} className="space-y-2">
                    <h3 className="font-medium text-center text-white p-2 glass rounded-lg">{day}</h3>
                    <div className="space-y-2">
                      {day !== "Sunday" && (
                        <>
                          <div className="p-3 glass rounded-lg text-center hover:bg-orange-500/10 transition-colors">
                            <p className="text-xs text-gray-400">10:00 AM</p>
                            <p className="text-sm font-medium text-white">Data Structures</p>
                            <p className="text-xs text-gray-400">Room 301</p>
                          </div>
                          <div className="p-3 glass rounded-lg text-center hover:bg-orange-500/10 transition-colors">
                            <p className="text-xs text-gray-400">02:00 PM</p>
                            <p className="text-sm font-medium text-white">Algorithms</p>
                            <p className="text-xs text-gray-400">Room 302</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </Layout>
  );
};

export default FacultyDashboard;
