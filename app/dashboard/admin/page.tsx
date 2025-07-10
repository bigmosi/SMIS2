"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import {
  Users,
  School,
  DollarSign,
  Database,
  Shield,
  Settings,
  Bell,
  Activity,
  UserPlus,
  BookOpen,
  Calendar,
  LogOut,
  Menu,
  X
} from 'lucide-react';

import UserManagement from '@/components/admin/UserManagement';
import DatabaseManagement from '@/components/admin/DatabaseManagement';
import SecuritySettings from '@/components/admin/SecuritySettings';
import SystemConfig from '@/components/admin/SystemConfig';
import NotificationsCenter from '@/components/admin/NotificationsCenter';
import { SchoolSettings } from '@/components/admin/SchoolSettings';
export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('User Management');

  const stats = [
    { title: 'Total Students', value: '1,247', icon: Users, color: 'bg-blue-500', change: '+12%' },
    { title: 'Total Staff', value: '98', icon: School, color: 'bg-green-500', change: '+3%' },
    { title: 'Monthly Revenue', value: 'UGX 45M', icon: DollarSign, color: 'bg-yellow-500', change: '+8%' },
    { title: 'System Health', value: '99.9%', icon: Activity, color: 'bg-purple-500', change: '+0.1%' },
  ];

  const recentActivities = [
    { action: 'New teacher registration', user: 'John Doe', time: '2 hours ago', type: 'success' },
    { action: 'Fee payment processed', user: 'Student #1234', time: '3 hours ago', type: 'info' },
    { action: 'System backup completed', user: 'System', time: '4 hours ago', type: 'success' },
    { action: 'Failed login attempt', user: 'Unknown', time: '5 hours ago', type: 'warning' },
  ];

  const systemAlerts = [
    { message: 'Monthly backup scheduled for tonight', type: 'info' },
    { message: 'Server maintenance window: Dec 15, 2-4 AM', type: 'warning' },
    { message: 'New security update available', type: 'success' },
  ];

  const menuItems = [
    { icon: Users, label: 'User Management' },
    { icon: School, label: 'School Settings' },
    { icon: Database, label: 'Database' },
    { icon: Shield, label: 'Security' },
    { icon: Settings, label: 'System Config' },
    { icon: Bell, label: 'Notifications' },
  ];

  const renderActiveSection = () => {
    switch(activeSection) {
      case 'User Management':
        return <UserManagement />;
      case 'School Settings':
        return <SchoolSettings />;
      case 'Database':
        return <DatabaseManagement />;
      case 'Security':
        return <SecuritySettings />;
      case 'System Config':
        return <SystemConfig />;
      case 'Notifications':
        return <NotificationsCenter />;
      default:
        return <UserManagement />;
    }
  };

  return (
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 lg:block`}>
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-red-500" />
              <span className="text-xl font-bold text-gray-900">SMIS Admin</span>
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
                      className={`w-full justify-start ${activeSection === item.label ? 'bg-red-500 text-white' : 'text-gray-700'}`}
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
            {activeSection === 'User Management' && (
                <>
                  {/* Stats Grid - Only shown on User Management dashboard */}
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

                  {/* Quick Actions */}
                  <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Button className="h-20 flex-col space-y-2 bg-blue-600 hover:bg-blue-700">
                      <UserPlus className="h-6 w-6" />
                      <span>Add New User</span>
                    </Button>
                    <Button className="h-20 flex-col space-y-2 bg-green-600 hover:bg-green-700">
                      <BookOpen className="h-6 w-6" />
                      <span>Manage Roles</span>
                    </Button>
                    <Button className="h-20 flex-col space-y-2 bg-purple-600 hover:bg-purple-700">
                      <Calendar className="h-6 w-6" />
                      <span>Access Logs</span>
                    </Button>
                    <Button className="h-20 flex-col space-y-2 bg-orange-600 hover:bg-orange-700">
                      <Activity className="h-6 w-6" />
                      <span>User Reports</span>
                    </Button>
                  </div>
                </>
            )}

            {/* Render the active section component */}
            {renderActiveSection()}

            {/* System Alerts - Shown on all pages */}
            {activeSection !== 'Notifications' && (
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>System Alerts</CardTitle>
                    <CardDescription>Important system notifications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {systemAlerts.map((alert, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className={`w-2 h-2 rounded-full mt-2 ${
                                alert.type === 'success' ? 'bg-green-500' :
                                    alert.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                            }`} />
                            <p className="text-sm text-gray-700">{alert.message}</p>
                          </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
            )}
          </main>
        </div>
      </div>
  );
}