'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  UserCheck,
  Users,
  BookOpen,
  Calendar,
  TrendingUp,
  GraduationCap,
  ClipboardList,
  Bell,
  LogOut,
  Menu,
  X,
  FileText,
  BarChart3,
  Award,
  AlertTriangle
} from 'lucide-react';

import StudentsTable from '@/components/StudentsTable';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import EventsSection from '@/components/EventsSection';
import ReportsSection from '@/components/reports/ReportsSection';
import AnalyticsSection from '@/components/reports/AnalyticsSection';

export default function HeadTeacherDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('School Overview');

  const stats = [
    { title: 'Total Students', value: '1,247', icon: Users, color: 'bg-blue-500', change: '+12' },
    { title: 'Teaching Staff', value: '78', icon: UserCheck, color: 'bg-green-500', change: '+3' },
    { title: 'Active Classes', value: '45', icon: BookOpen, color: 'bg-purple-500', change: '+2' },
    { title: 'Average Grade', value: '82%', icon: Award, color: 'bg-orange-500', change: '+3%' },
  ];

  const classPerformance = [
    { class: 'S1A', students: 42, average: 85, attendance: 95 },
    { class: 'S1B', students: 38, average: 78, attendance: 92 },
    { class: 'S2A', students: 45, average: 88, attendance: 94 },
    { class: 'S2B', students: 41, average: 82, attendance: 89 },
    { class: 'S3A', students: 39, average: 91, attendance: 96 },
    { class: 'S3B', students: 37, average: 79, attendance: 87 },
  ];

  const recentActivities = [
    { activity: 'Monthly exam results approved', time: '2 hours ago', type: 'success' },
    { activity: 'New teacher orientation completed', time: '1 day ago', type: 'info' },
    { activity: 'Parent meeting scheduled', time: '2 days ago', type: 'warning' },
    { activity: 'Sports day preparation started', time: '3 days ago', type: 'info' },
  ];

  const upcomingEvents = [
    { event: 'Parent-Teacher Meeting', date: 'Dec 15, 2024', type: 'meeting' },
    { event: 'End of Term Exams', date: 'Dec 20, 2024', type: 'exam' },
    { event: 'Sports Day', date: 'Jan 8, 2025', type: 'event' },
    { event: 'New Term Registration', date: 'Jan 15, 2025', type: 'admin' },
  ];

  const menuItems = [
    { icon: UserCheck, label: 'School Overview' },
    { icon: Users, label: 'Students' },
    { icon: BookOpen, label: 'Academic' },
    { icon: Calendar, label: 'Events' },
    { icon: ClipboardList, label: 'Reports' },
    { icon: BarChart3, label: 'Analytics' },
  ];

  const demoStudents = [
    { name: 'John Doe', class: 'S1A', age: 14, gender: 'Male' },
    { name: 'Jane Smith', class: 'S1B', age: 13, gender: 'Female' },
    { name: 'Samuel Green', class: 'S2A', age: 15, gender: 'Male' },
    { name: 'Emily Brown', class: 'S2B', age: 14, gender: 'Female' },
    { name: 'Michael Lee', class: 'S3A', age: 16, gender: 'Male' },
    { name: 'Sophia White', class: 'S3B', age: 15, gender: 'Female' },
  ];

  const demoSubjects = [
    { subject: 'Mathematics', teacher: 'Mr. John Smith', class: 'S1A' },
    { subject: 'English', teacher: 'Ms. Jane Doe', class: 'S1B' },
    { subject: 'Biology', teacher: 'Dr. Samuel Green', class: 'S2A' },
    { subject: 'Chemistry', teacher: 'Mrs. Emily Brown', class: 'S2B' },
    { subject: 'History', teacher: 'Mr. Michael Lee', class: 'S3A' },
    { subject: 'Geography', teacher: 'Ms. Sophia White', class: 'S3B' },
  ];

  const demoTimetable = {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    slots: [
      { time: '8:00-9:00', subjects: ['Mathematics', 'English', 'Biology', 'Chemistry', 'History'] },
      { time: '9:00-10:00', subjects: ['English', 'Mathematics', 'Chemistry', 'Biology', 'Geography'] },
      { time: '10:00-11:00', subjects: ['Biology', 'History', 'Mathematics', 'English', 'Chemistry'] },
      { time: '11:00-12:00', subjects: ['Chemistry', 'Geography', 'English', 'Mathematics', 'Biology'] },
      { time: '12:00-1:00', subjects: ['History', 'Biology', 'Geography', 'History', 'Mathematics'] },
    ],
  };

  const demoAcademicUpdates = [
    { text: 'New Mathematics syllabus uploaded', date: '2 days ago' },
    { text: 'End of term exams scheduled for Dec 20', date: '5 days ago' },
    { text: 'Biology practicals updated', date: '1 week ago' },
    { text: 'English essay competition announced', date: '2 weeks ago' },
  ];

  const [subjects, setSubjects] = useState(demoSubjects);
  const [exams, setExams] = useState<{ subject: string; class: string; date: string; time: string }[]>([]);
  const [showAddSubject, setShowAddSubject] = useState(false);
  const [showViewResults, setShowViewResults] = useState(false);
  const [showScheduleExam, setShowScheduleExam] = useState(false);
  const [newSubject, setNewSubject] = useState({ subject: '', teacher: '', class: '' });
  const [newExam, setNewExam] = useState({ subject: '', class: '', date: '', time: '' });
  const { toast } = useToast();

  const handleAddSubject = () => {
    setSubjects([...subjects, newSubject]);
    setShowAddSubject(false);
    setNewSubject({ subject: '', teacher: '', class: '' });
    toast({ title: 'Subject added!' });
  };

  const handleScheduleExam = () => {
    setExams([...exams, newExam]);
    setShowScheduleExam(false);
    setNewExam({ subject: '', class: '', date: '', time: '' });
    toast({ title: 'Exam scheduled!' });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 lg:block`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <UserCheck className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-bold text-gray-900">Head Teacher</span>
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
                className={`w-full justify-start ${activeSection === item.label ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
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
              <h1 className="text-2xl font-bold text-gray-900">School Management</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => window.location.href = '/'}>
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {activeSection === 'School Overview' && (
            <div className="space-y-8 mb-8">
              {/* Stats Cards Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="flex flex-col items-center justify-center p-6 shadow-md border-0 bg-gradient-to-br from-blue-100 to-white">
                    <div className={`p-4 rounded-full ${stat.color} mb-4`}>
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                    <Badge variant="secondary" className="text-green-600">{stat.change}</Badge>
                  </Card>
                ))}
              </div>

              {/* Performance & Attendance */}
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle>Class Performance & Attendance</CardTitle>
                  <CardDescription>Academic performance and attendance by class</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border rounded-lg">
                      <thead className="bg-blue-50">
                        <tr>
                          <th className="text-left p-3 font-semibold">Class</th>
                          <th className="text-left p-3 font-semibold">Students</th>
                          <th className="text-left p-3 font-semibold">Average</th>
                          <th className="text-left p-3 font-semibold">Attendance</th>
                        </tr>
                      </thead>
                      <tbody>
                        {classPerformance.map((cls, index) => (
                          <tr key={index} className="border-b hover:bg-blue-50">
                            <td className="p-3 font-medium">{cls.class}</td>
                            <td className="p-3">{cls.students}</td>
                            <td className="p-3">
                              <div className="flex items-center space-x-2">
                                <span className="font-medium">{cls.average}%</span>
                                <Progress value={cls.average} className="w-16 h-2" />
                              </div>
                            </td>
                            <td className="p-3">
                              <Badge variant={cls.attendance >= 90 ? 'default' : 'secondary'}>
                                {cls.attendance}%
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activities Timeline */}
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                  <CardDescription>Latest school activities and updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="relative border-l border-blue-200 ml-4">
                    {recentActivities.map((activity, index) => (
                      <li key={index} className="mb-6 ml-6">
                        <span className={`absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full ${
                          activity.type === 'success' ? 'bg-green-500' : 
                          activity.type === 'warning' ? 'bg-yellow-400' : 'bg-blue-500'
                        }`}>
                          <span className="w-3 h-3 bg-white rounded-full"></span>
                        </span>
                        <div className="flex flex-col">
                          <span className="font-medium text-gray-900">{activity.activity}</span>
                          <span className="text-xs text-gray-500">{activity.time}</span>
                        </div>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button
                  className="h-20 flex-col space-y-2 bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                  onClick={() => setActiveSection('Reports')}
                >
                  <ClipboardList className="h-6 w-6" />
                  <span>Generate Report</span>
                </Button>
                <Button
                  className="h-20 flex-col space-y-2 bg-green-600 hover:bg-green-700 text-white shadow-lg"
                  onClick={() => setActiveSection('Events')}
                >
                  <Calendar className="h-6 w-6" />
                  <span>Schedule Event</span>
                </Button>
                <Button
                  className="h-20 flex-col space-y-2 bg-purple-600 hover:bg-purple-700 text-white shadow-lg"
                  onClick={() => setActiveSection('Analytics')}
                >
                  <BarChart3 className="h-6 w-6" />
                  <span>View Analytics</span>
                </Button>
                <Button
                  className="h-20 flex-col space-y-2 bg-orange-600 hover:bg-orange-700 text-white shadow-lg"
                  onClick={() => setActiveSection('Academic')}
                >
                  <FileText className="h-6 w-6" />
                  <span>Academic Records</span>
                </Button>
              </div>

              {/* Attention Required */}
              <Card className="border-yellow-300 bg-yellow-50 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-yellow-700">
                    <AlertTriangle className="h-5 w-5" />
                    <span>Attention Required</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-yellow-700">• 3 teachers have pending performance reviews</p>
                    <p className="text-yellow-700">• Parent-teacher meeting requires preparation</p>
                    <p className="text-yellow-700">• End of term examination schedule needs approval</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          {activeSection === 'Students' && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Students</CardTitle>
                <CardDescription>List of all students under your supervision</CardDescription>
              </CardHeader>
              <CardContent>
                <StudentsTable />
              </CardContent>
            </Card>
          )}
          {activeSection === 'Academic' && (
            <div className="space-y-8 mb-8">
              {/* Subjects Table */}
              <Card>
                <CardHeader>
                  <CardTitle>Subjects</CardTitle>
                  <CardDescription>Overview of subjects and assigned teachers</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Subject</TableHead>
                        <TableHead>Teacher</TableHead>
                        <TableHead>Class</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {subjects.map((subject, idx) => (
                        <TableRow key={idx}>
                          <TableCell>{subject.subject}</TableCell>
                          <TableCell>{subject.teacher}</TableCell>
                          <TableCell>{subject.class}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* Timetable */}
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Timetable</CardTitle>
                  <CardDescription>Class schedule for the week</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border">
                      <thead>
                        <tr>
                          <th className="p-2 border">Time</th>
                          {demoTimetable.days.map((day) => (
                            <th key={day} className="p-2 border">{day}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {demoTimetable.slots.map((slot, i) => (
                          <tr key={i}>
                            <td className="p-2 border font-medium">{slot.time}</td>
                            {slot.subjects.map((subj, j) => (
                              <td key={j} className="p-2 border">{subj}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Academic Updates */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Academic Updates</CardTitle>
                  <CardDescription>Latest changes and announcements</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {demoAcademicUpdates.map((update, idx) => (
                      <li key={idx} className="p-3 bg-gray-50 rounded border text-gray-700 flex justify-between items-center">
                        <span>{update.text}</span>
                        <span className="text-xs text-gray-400">{update.date}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Dialog open={showAddSubject} onOpenChange={setShowAddSubject}>
                  <DialogTrigger asChild>
                    <Button className="h-16 flex-col space-y-1 bg-blue-600 hover:bg-blue-700 text-white" onClick={() => setShowAddSubject(true)}>
                      Add Subject
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add Subject</DialogTitle>
                      <DialogDescription>Enter subject details below.</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label>Subject</Label>
                        <Input value={newSubject.subject} onChange={e => setNewSubject({ ...newSubject, subject: e.target.value })} />
                      </div>
                      <div>
                        <Label>Teacher</Label>
                        <Input value={newSubject.teacher} onChange={e => setNewSubject({ ...newSubject, teacher: e.target.value })} />
                      </div>
                      <div>
                        <Label>Class</Label>
                        <Input value={newSubject.class} onChange={e => setNewSubject({ ...newSubject, class: e.target.value })} />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button onClick={handleAddSubject} disabled={!newSubject.subject || !newSubject.teacher || !newSubject.class}>Add</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <Dialog open={showViewResults} onOpenChange={setShowViewResults}>
                  <DialogTrigger asChild>
                    <Button className="h-16 flex-col space-y-1 bg-green-600 hover:bg-green-700 text-white" onClick={() => setShowViewResults(true)}>
                      View Results
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Student Results</DialogTitle>
                      <DialogDescription>Recent exam results (demo data)</DialogDescription>
                    </DialogHeader>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Student</TableHead>
                          <TableHead>Subject</TableHead>
                          <TableHead>Score</TableHead>
                          <TableHead>Grade</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {demoResults.map((result, idx) => (
                          <TableRow key={idx}>
                            <TableCell>{result.student}</TableCell>
                            <TableCell>{result.subject}</TableCell>
                            <TableCell>{result.score}</TableCell>
                            <TableCell>{result.grade}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </DialogContent>
                </Dialog>
                <Dialog open={showScheduleExam} onOpenChange={setShowScheduleExam}>
                  <DialogTrigger asChild>
                    <Button className="h-16 flex-col space-y-1 bg-purple-600 hover:bg-purple-700 text-white" onClick={() => setShowScheduleExam(true)}>
                      Schedule Exam
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Schedule Exam</DialogTitle>
                      <DialogDescription>Enter exam details below.</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label>Subject</Label>
                        <Input value={newExam.subject} onChange={e => setNewExam({ ...newExam, subject: e.target.value })} />
                      </div>
                      <div>
                        <Label>Class</Label>
                        <Input value={newExam.class} onChange={e => setNewExam({ ...newExam, class: e.target.value })} />
                      </div>
                      <div>
                        <Label>Date</Label>
                        <Input type="date" value={newExam.date} onChange={e => setNewExam({ ...newExam, date: e.target.value })} />
                      </div>
                      <div>
                        <Label>Time</Label>
                        <Input type="time" value={newExam.time} onChange={e => setNewExam({ ...newExam, time: e.target.value })} />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button onClick={handleScheduleExam} disabled={!newExam.subject || !newExam.class || !newExam.date || !newExam.time}>Schedule</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          )}
          {activeSection === 'Events' && (
            <EventsSection />
          )}
          {activeSection === 'Reports' && (
            <ReportsSection />
          )}
          {activeSection === 'Analytics' && (
            <AnalyticsSection />
          )}
        </main>
      </div>
    </div>
  );
}

const demoResults = [
  { student: 'John Doe', subject: 'Mathematics', score: 88, grade: 'A' },
  { student: 'Jane Smith', subject: 'English', score: 75, grade: 'B' },
  { student: 'Samuel Green', subject: 'Biology', score: 92, grade: 'A+' },
  { student: 'Emily Brown', subject: 'Chemistry', score: 68, grade: 'C' },
  { student: 'Michael Lee', subject: 'History', score: 81, grade: 'B+' },
  { student: 'Sophia White', subject: 'Geography', score: 95, grade: 'A+' },
];