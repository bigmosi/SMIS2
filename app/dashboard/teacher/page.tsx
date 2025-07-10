"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen,
  Users,
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  BarChart3,
  Bell,
  LogOut,
  Menu,
  X,
  ClipboardList,
  Award,
  AlertCircle,
  Plus,
  Home
} from 'lucide-react';
import Assignments from '@/components/teacher/Assignments';
import LessonPlans from '@/components/teacher/LessonPlans';
import StudentProgress from '@/components/teacher/StudentProgress';
import MyClasses from '@/components/teacher/MyClasses';
import Schedule from '@/components/teacher/Schedule';
import Grades from '@/components/teacher/Grades';

export default function TeacherDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Dashboard');

  const stats = [
    { title: 'My Classes', value: '6', icon: BookOpen, color: 'bg-purple-500', change: '+1' },
    { title: 'Total Students', value: '248', icon: Users, color: 'bg-blue-500', change: '+12' },
    { title: 'Pending Grades', value: '23', icon: ClipboardList, color: 'bg-orange-500', change: '-5' },
    { title: 'Attendance Rate', value: '94%', icon: CheckCircle, color: 'bg-green-500', change: '+2%' },
  ];

  const myClasses = [
    { 
      class: 'S1A - Mathematics', 
      students: 42, 
      nextLesson: 'Today 10:00 AM',
      assignments: 3,
      attendance: 95
    },
    { 
      class: 'S1B - Mathematics', 
      students: 38, 
      nextLesson: 'Today 2:00 PM',
      assignments: 2,
      attendance: 92
    },
    { 
      class: 'S2A - Mathematics', 
      students: 45, 
      nextLesson: 'Tomorrow 9:00 AM',
      assignments: 4,
      attendance: 97
    },
    { 
      class: 'S2B - Mathematics', 
      students: 41, 
      nextLesson: 'Tomorrow 11:00 AM',
      assignments: 1,
      attendance: 89
    },
  ];

  const pendingTasks = [
    { task: 'Grade S1A Math Quiz', deadline: 'Due in 2 days', priority: 'high' },
    { task: 'Prepare lesson plan for Algebra', deadline: 'Due tomorrow', priority: 'medium' },
    { task: 'Update attendance records', deadline: 'Due today', priority: 'high' },
    { task: 'Review S2B assignments', deadline: 'Due in 3 days', priority: 'low' },
  ];

  const recentActivities = [
    { activity: 'Graded S1A Mathematics test', time: '2 hours ago', type: 'success' },
    { activity: 'Updated lesson plan for Geometry', time: '1 day ago', type: 'info' },
    { activity: 'Marked attendance for S2A', time: '2 days ago', type: 'info' },
    { activity: 'Submitted monthly report', time: '3 days ago', type: 'success' },
  ];

  const upcomingLessons = [
    { subject: 'Mathematics', class: 'S1A', time: 'Today 10:00 AM', topic: 'Quadratic Equations' },
    { subject: 'Mathematics', class: 'S1B', time: 'Today 2:00 PM', topic: 'Factorization' },
    { subject: 'Mathematics', class: 'S2A', time: 'Tomorrow 9:00 AM', topic: 'Trigonometry' },
  ];

  const menuItems = [
    { icon: Home, label: 'Dashboard' },
    { icon: BookOpen, label: 'My Classes' },
    { icon: ClipboardList, label: 'Assignments' },
    { icon: Award, label: 'Grades' },
    { icon: Calendar, label: 'Schedule' },
    { icon: FileText, label: 'Lesson Plans' },
    { icon: BarChart3, label: 'Student Progress' },
  ];

  const renderActiveSection = () => {
    switch(activeSection) {
      case 'Dashboard':
        return (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                      <div className={`p-3 rounded-full ${stat.color}`}>
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <Badge variant="secondary" className="text-green-600">
                        {stat.change}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* My Classes */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>My Classes</CardTitle>
                  <CardDescription>Overview of your assigned classes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {myClasses.map((cls, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-900">{cls.class}</h3>
                          <Badge variant="outline">{cls.students} students</Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-gray-500" />
                            <span>{cls.nextLesson}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <FileText className="h-4 w-4 text-gray-500" />
                            <span>{cls.assignments} assignments</span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm text-gray-600">Attendance</span>
                            <span className="text-sm font-medium">{cls.attendance}%</span>
                          </div>
                          <Progress value={cls.attendance} className="h-2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Pending Tasks */}
              <Card>
                <CardHeader>
                  <CardTitle>Pending Tasks</CardTitle>
                  <CardDescription>Your to-do items</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {pendingTasks.map((task, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          task.priority === 'high' ? 'bg-red-500' : 
                          task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                        }`} />
                        <div className="flex-1">
                          <p className="font-medium text-sm">{task.task}</p>
                          <p className="text-xs text-gray-600">{task.deadline}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Lessons */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Upcoming Lessons</CardTitle>
                <CardDescription>Your scheduled lessons for today and tomorrow</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {upcomingLessons.map((lesson, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{lesson.subject}</h3>
                        <Badge variant="outline">{lesson.class}</Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span>{lesson.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <BookOpen className="h-4 w-4 text-gray-500" />
                          <span>{lesson.topic}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activities */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>Your recent teaching activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${
                          activity.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
                        }`} />
                        <p className="font-medium text-gray-900">{activity.activity}</p>
                      </div>
                      <span className="text-sm text-gray-500">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button className="h-20 flex-col space-y-2 bg-purple-600 hover:bg-purple-700">
                <Plus className="h-6 w-6" />
                <span>New Assignment</span>
              </Button>
              <Button className="h-20 flex-col space-y-2 bg-blue-600 hover:bg-blue-700">
                <ClipboardList className="h-6 w-6" />
                <span>Grade Papers</span>
              </Button>
              <Button className="h-20 flex-col space-y-2 bg-green-600 hover:bg-green-700">
                <Calendar className="h-6 w-6" />
                <span>Schedule Lesson</span>
              </Button>
              <Button className="h-20 flex-col space-y-2 bg-orange-600 hover:bg-orange-700">
                <BarChart3 className="h-6 w-6" />
                <span>View Progress</span>
              </Button>
            </div>

            {/* Urgent Tasks Alert */}
            <Card className="mt-6 border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-red-700">
                  <AlertCircle className="h-5 w-5" />
                  <span>Urgent Tasks</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-red-700">• S1A Math Quiz grades due today</p>
                  <p className="text-red-700">• Attendance records need updating</p>
                  <p className="text-red-700">• Parent meeting preparation required</p>
                </div>
              </CardContent>
            </Card>
          </>
        );
      case 'My Classes':
        return <MyClasses />;
      case 'Assignments':
        return <Assignments />;
      case 'Grades':
        return <Grades />;
      case 'Schedule':
        return <Schedule />;
      case 'Lesson Plans':
        return <LessonPlans />;
      case 'Student Progress':
        return <StudentProgress />;
      default:
        return <MyClasses />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 lg:block`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-purple-500" />
            <span className="text-xl font-bold text-gray-900">Teacher</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <nav className="mt-6">
          <div className="px-4 space-y-1">
            {menuItems.map((item, index) => (
              <Button
                key={index}
                variant={activeSection === item.label ? "default" : "ghost"}
                className={`w-full justify-start ${activeSection === item.label ? 'bg-purple-500 text-white' : 'text-gray-700'}`}
                onClick={() => {
                  setActiveSection(item.label);
                  setSidebarOpen(false);
                }}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.label}
              </Button>
            ))}
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
              <h1 className="text-2xl font-bold text-gray-900">{activeSection}</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
              <Button variant="ghost" size="sm" onClick={() => window.location.href = '/'}>
                <LogOut className="h-5 w-5" />
                <span className="sr-only">Logout</span>
              </Button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {renderActiveSection()}
        </main>
      </div>
    </div>
  );
}