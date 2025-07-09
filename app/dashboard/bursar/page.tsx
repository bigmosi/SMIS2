'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Calculator,
  DollarSign,
  CreditCard,
  TrendingUp,
  Users,
  AlertCircle,
  Download,
  Send,
  Bell,
  LogOut,
  Menu,
  X,
  FileText,
  PieChart,
  BarChart3
} from 'lucide-react';
import PaymentsSection from '@/components/bursar/PaymentsSection';
import FinanceSection from '@/components/bursar/FinanceSection';
import StudentsSection from '@/components/bursar/StudentsSection';
import AnalyticsSection from '@/components/bursar/AnalyticsSection';
import StudentRegisterSection from '@/components/bursar/StudentRegisterSection';
import FeesStructureSection from '@/components/bursar/FeesStructureSection';
import StudentBillingSection from '@/components/bursar/StudentBillingSection';
import FeesBalanceListSection from '@/components/bursar/FeesBalanceListSection';
import ReportsSection from '@/components/bursar/ReportsSection';

export default function BursarDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const stats = [
    { title: 'Total Revenue', value: 'UGX 45.2M', icon: DollarSign, color: 'bg-green-500', change: '+8.2%' },
    { title: 'Outstanding Fees', value: 'UGX 12.8M', icon: AlertCircle, color: 'bg-red-500', change: '-2.1%' },
    { title: 'Paid Students', value: '1,089', icon: Users, color: 'bg-blue-500', change: '+5.7%' },
    { title: 'Monthly Growth', value: '12.3%', icon: TrendingUp, color: 'bg-purple-500', change: '+1.4%' },
  ];

  const recentTransactions = [
    { student: 'John Doe', amount: 'UGX 350,000', type: 'Tuition Fee', status: 'Paid', date: '2 hours ago' },
    { student: 'Jane Smith', amount: 'UGX 120,000', type: 'Activity Fee', status: 'Paid', date: '3 hours ago' },
    { student: 'Bob Johnson', amount: 'UGX 280,000', type: 'Tuition Fee', status: 'Pending', date: '1 day ago' },
    { student: 'Mary Wilson', amount: 'UGX 95,000', type: 'Transport Fee', status: 'Paid', date: '2 days ago' },
  ];

  const feeCategories = [
    { name: 'Tuition Fees', collected: 85, target: 100, amount: 'UGX 28.5M' },
    { name: 'Activity Fees', collected: 92, target: 100, amount: 'UGX 8.2M' },
    { name: 'Transport Fees', collected: 78, target: 100, amount: 'UGX 6.8M' },
    { name: 'Boarding Fees', collected: 88, target: 100, amount: 'UGX 1.7M' },
  ];

  const menuItems = [
    { icon: Calculator, label: 'Fee Management' },
    { icon: CreditCard, label: 'Payments' },
    { icon: FileText, label: 'Reports' },
    { icon: PieChart, label: 'Analytics' },
    { icon: Users, label: 'Students' },
    { icon: Send, label: 'SMS Reminders' },
    { icon: DollarSign, label: 'Finance' },
    { icon: Users, label: 'Student Register' },
    { icon: FileText, label: 'Fees Structure' },
    { icon: DollarSign, label: 'Student Billing' },
    { icon: AlertCircle, label: 'Fees Balance List' },
  ];
  const [activeSection, setActiveSection] = useState('Fee Management');

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 lg:block`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <Calculator className="h-8 w-8 text-green-500" />
            <span className="text-xl font-bold text-gray-900">Bursar</span>
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
                className={`w-full justify-start ${activeSection === item.label ? 'bg-green-500 text-white' : 'text-gray-700'}`}
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
              <h1 className="text-2xl font-bold text-gray-900">Finance Dashboard</h1>
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
          {activeSection === 'Fee Management' && (
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
                        <Badge variant="secondary" className={stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                          {stat.change}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Fee Collection Progress */}
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Fee Collection Progress</CardTitle>
                    <CardDescription>Collection status by fee category</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {feeCategories.map((category, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{category.name}</span>
                          <div className="text-right">
                            <span className="text-sm font-semibold">{category.amount}</span>
                            <div className="text-xs text-gray-500">{category.collected}% collected</div>
                          </div>
                        </div>
                        <Progress value={category.collected} className="h-3" />
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>Common financial tasks</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700">
                      <Send className="h-4 w-4 mr-2" />
                      Send Fee Reminders
                    </Button>
                    <Button className="w-full justify-start bg-green-600 hover:bg-green-700">
                      <Download className="h-4 w-4 mr-2" />
                      Generate Report
                    </Button>
                    <Button className="w-full justify-start bg-purple-600 hover:bg-purple-700">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      View Analytics
                    </Button>
                    <Button className="w-full justify-start bg-orange-600 hover:bg-orange-700">
                      <FileText className="h-4 w-4 mr-2" />
                      Export Data
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </>
          )}
          {activeSection === 'Payments' && (
            <PaymentsSection />
          )}
          {activeSection === 'Finance' && (
            <FinanceSection />
          )}
          {activeSection === 'Students' && (
            <StudentsSection />
          )}
          {activeSection === 'Analytics' && (
            <AnalyticsSection />
          )}
          {activeSection === 'Student Register' && <StudentRegisterSection />}
          {activeSection === 'Fees Structure' && <FeesStructureSection />}
          {activeSection === 'Student Billing' && <StudentBillingSection />}
          {activeSection === 'Fees Balance List' && <FeesBalanceListSection />}
          {activeSection === 'Reports' && <ReportsSection />}

          {/* Outstanding Fees Alert */}
          <Card className="mt-6 border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-red-700">
                <AlertCircle className="h-5 w-5" />
                <span>Outstanding Fees Alert</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-red-700 font-medium">158 students have outstanding fees</p>
                  <p className="text-red-600 text-sm">Total outstanding amount: UGX 12.8M</p>
                </div>
                <Button variant="destructive">
                  <Send className="h-4 w-4 mr-2" />
                  Send Reminders
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}