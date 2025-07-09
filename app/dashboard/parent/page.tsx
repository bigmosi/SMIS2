'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Heart,
  DollarSign,
  BookOpen,
  Calendar,
  TrendingUp,
  MessageSquare,
  Bell,
  LogOut,
  Menu,
  X,
  User,
  Award,
  Clock,
  CheckCircle,
  AlertCircle,
  Send,
  FilePlus
} from 'lucide-react';
import FeesSection from '@/components/parent/FeesSection';
import AcademicProgressSection from '@/components/parent/AcademicProgressSection';
import EventsSection from '@/components/parent/EventsSection';
import CommunicationSection from '@/components/parent/CommunicationSection';
import ProfileSection from '@/components/parent/ProfileSection';
import FeedbackSection from '@/components/parent/FeedbackSection';
import VacancyApplicationSection from '@/components/parent/VacancyApplicationSection';

export default function ParentDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const studentInfo = {
    name: 'John Doe',
    class: 'S2A',
    studentId: 'STU001234',
    photo: '/api/placeholder/60/60'
  };

  const stats = [
    { title: 'Outstanding Fees', value: 'UGX 120,000', icon: DollarSign, color: 'bg-red-500', status: 'Due in 5 days' },
    { title: 'Current Average', value: '85%', icon: BookOpen, color: 'bg-blue-500', status: 'Good Performance' },
    { title: 'Attendance Rate', value: '94%', icon: CheckCircle, color: 'bg-green-500', status: 'Excellent' },
    { title: 'Upcoming Events', value: '3', icon: Calendar, color: 'bg-purple-500', status: 'This week' },
  ];

  const recentGrades = [
    { subject: 'Mathematics', grade: '88%', date: '2 days ago', trend: 'up' },
    { subject: 'English', grade: '92%', date: '1 week ago', trend: 'up' },
    { subject: 'Science', grade: '76%', date: '1 week ago', trend: 'down' },
    { subject: 'History', grade: '85%', date: '2 weeks ago', trend: 'up' },
  ];

  const feeBreakdown = [
    { item: 'Tuition Fee', amount: 'UGX 350,000', paid: 'UGX 230,000', remaining: 'UGX 120,000' },
    { item: 'Activity Fee', amount: 'UGX 50,000', paid: 'UGX 50,000', remaining: 'UGX 0' },
    { item: 'Transport Fee', amount: 'UGX 80,000', paid: 'UGX 80,000', remaining: 'UGX 0' },
  ];

  const upcomingEvents = [
    { event: 'Parent-Teacher Meeting', date: 'Dec 15, 2024', time: '2:00 PM', type: 'meeting' },
    { event: 'End of Term Exams', date: 'Dec 20, 2024', time: '9:00 AM', type: 'exam' },
    { event: 'Sports Day', date: 'Jan 8, 2025', time: '10:00 AM', type: 'event' },
  ];

  const recentMessages = [
    { from: 'Mathematics Teacher', message: 'Great improvement in algebra work!', time: '2 days ago' },
    { from: 'Class Teacher', message: 'Please ensure homework is completed on time.', time: '1 week ago' },
    { from: 'School Admin', message: 'Reminder: Fee payment due soon.', time: '1 week ago' },
  ];

  const menuItems = [
    { icon: Heart, label: 'Overview' },
    { icon: DollarSign, label: 'Fees' },
    { icon: BookOpen, label: 'Academic Progress' },
    { icon: Calendar, label: 'Events' },
    { icon: MessageSquare, label: 'Communication' },
    { icon: Send, label: 'Feedback' },
    { icon: FilePlus, label: 'Vacancy Application' },
    { icon: User, label: 'Profile' },
  ];
  const [activeSection, setActiveSection] = useState('Overview');

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 lg:block`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-orange-500" />
            <span className="text-xl font-bold text-gray-900">Parent Portal</span>
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
        
        {/* Student Info */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="h-6 w-6 text-gray-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">{studentInfo.name}</p>
              <p className="text-sm text-gray-600">{studentInfo.class} • {studentInfo.studentId}</p>
            </div>
          </div>
        </div>
        
        <nav className="mt-6">
          <div className="px-4 space-y-1">
            {menuItems.map((item, index) => (
              <Button
                key={index}
                variant={activeSection === item.label ? "default" : "ghost"}
                className={`w-full justify-start ${activeSection === item.label ? 'bg-orange-500 text-white' : 'text-gray-700'}`}
                onClick={() => setActiveSection(item.label)}
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
              <h1 className="text-2xl font-bold text-gray-900">Parent Dashboard</h1>
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
          {activeSection === 'Overview' && (
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
                        <Badge variant="secondary" className="text-xs">
                          {stat.status}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Grades */}
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Recent Grades</CardTitle>
                    <CardDescription>Your child's latest academic performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentGrades.map((grade, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <BookOpen className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{grade.subject}</p>
                              <p className="text-sm text-gray-600">{grade.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-gray-900">{grade.grade}</span>
                            <TrendingUp className={`h-4 w-4 ${grade.trend === 'up' ? 'text-green-500' : 'text-red-500'}`} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Upcoming Events */}
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Events</CardTitle>
                    <CardDescription>Important dates and activities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingEvents.map((event, index) => (
                        <div key={index} className="p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-medium text-sm">{event.event}</h3>
                            <Badge variant="outline" className="text-xs">
                              {event.type}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Calendar className="h-4 w-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Clock className="h-4 w-4" />
                            <span>{event.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Messages */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Recent Messages</CardTitle>
                  <CardDescription>Communication from teachers and school</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentMessages.map((message, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <MessageSquare className="h-4 w-4 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <p className="font-medium text-sm">{message.from}</p>
                            <span className="text-xs text-gray-500">{message.time}</span>
                          </div>
                          <p className="text-sm text-gray-700">{message.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </>
          )}
          {activeSection === 'Fees' && (
            <FeesSection />
          )}
          {activeSection === 'Academic Progress' && (
            <AcademicProgressSection />
          )}
          {activeSection === 'Events' && (
            <EventsSection />
          )}
          {activeSection === 'Communication' && (
            <CommunicationSection />
          )}
          {activeSection === 'Profile' && (
            <ProfileSection />
          )}
          {activeSection === 'Feedback' && <FeedbackSection />}
          {activeSection === 'Vacancy Application' && <VacancyApplicationSection />}
        </main>
      </div>
    </div>
  );
}