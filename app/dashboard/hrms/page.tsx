"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  UserCheck,
  Briefcase,
  FileText,
  BarChart3,
  LogOut,
  Menu,
  X,
  ClipboardList,
  CalendarCheck,
  AlertCircle,
} from "lucide-react";
import PayrollSetupSection from '@/components/hrms/PayrollSetupSection';
import RatesSetupSection from '@/components/hrms/RatesSetupSection';
import EarningsDeductionsCodesSection from '@/components/hrms/EarningsDeductionsCodesSection';
import BanksSection from '@/components/hrms/BanksSection';
import EmployeeRegisterSection from '@/components/hrms/EmployeeRegisterSection';
import DeductionsSection from '@/components/hrms/DeductionsSection';
import PayrollProcessingSection from '@/components/hrms/PayrollProcessingSection';
import MissingStaffSection from '@/components/hrms/MissingStaffSection';

const stats = [
  { title: "Total Staff", value: "128", icon: Users, color: "bg-blue-500" },
  { title: "Active", value: "112", icon: UserCheck, color: "bg-green-500" },
  { title: "On Leave", value: "8", icon: CalendarCheck, color: "bg-yellow-500" },
  { title: "Departments", value: "7", icon: Briefcase, color: "bg-purple-500" },
];

const staffList = [
  { name: "Alice Smith", department: "Mathematics", role: "Teacher", status: "Active" },
  { name: "Bob Johnson", department: "Science", role: "Lab Technician", status: "On Leave" },
  { name: "Carol White", department: "Administration", role: "Secretary", status: "Active" },
  { name: "David Brown", department: "Sports", role: "Coach", status: "Active" },
];

const recentActivities = [
  { activity: "New staff orientation completed", time: "2 days ago", type: "success" },
  { activity: "Leave request approved for Bob Johnson", time: "3 days ago", type: "info" },
  { activity: "Performance review scheduled", time: "1 week ago", type: "warning" },
  { activity: "Staff meeting held", time: "2 weeks ago", type: "info" },
];

const menuItems = [
  { icon: Users, label: "Staff Overview" },
  { icon: ClipboardList, label: "Staff List" },
  { icon: Briefcase, label: "Payroll Setup" },
  { icon: BarChart3, label: "NSSF & PAYE Rates" },
  { icon: FileText, label: "Earnings & Deductions Codes" },
  { icon: FileText, label: "Banks" },
  { icon: FileText, label: "Employee Register" },
  { icon: FileText, label: "Deductions" },
  { icon: FileText, label: "Payroll Processing" },
  { icon: AlertCircle, label: "Missing Staff" },
  { icon: CalendarCheck, label: "Leave Requests" },
  { icon: FileText, label: "Reports" },
];

export default function HRMSDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Staff Overview");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 lg:block`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <Briefcase className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">HRMS</span>
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
                className={`w-full justify-start ${activeSection === item.label ? "bg-blue-500 text-white" : "text-gray-700"}`}
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
              <h1 className="text-2xl font-bold text-gray-900">HRMS Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => (window.location.href = "/")}> <LogOut className="h-5 w-5" /> </Button>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          {activeSection === "Staff Overview" && (
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
                  </Card>
                ))}
              </div>
              {/* Recent HR Activities */}
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle>Recent HR Activities</CardTitle>
                  <CardDescription>Latest HR updates and actions</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="relative border-l border-blue-200 ml-4">
                    {recentActivities.map((activity, index) => (
                      <li key={index} className="mb-6 ml-6">
                        <span className={`absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full ${
                          activity.type === "success"
                            ? "bg-green-500"
                            : activity.type === "warning"
                            ? "bg-yellow-400"
                            : "bg-blue-500"
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button className="h-16 flex-col space-y-1 bg-blue-600 hover:bg-blue-700 text-white">
                  Add Staff
                </Button>
                <Button className="h-16 flex-col space-y-1 bg-green-600 hover:bg-green-700 text-white">
                  View Leave Requests
                </Button>
                <Button className="h-16 flex-col space-y-1 bg-purple-600 hover:bg-purple-700 text-white">
                  Generate Report
                </Button>
              </div>
            </div>
          )}
          {activeSection === "Staff List" && (
            <Card>
              <CardHeader>
                <CardTitle>Staff List</CardTitle>
                <CardDescription>All staff members and their status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-medium">Name</th>
                        <th className="text-left p-3 font-medium">Department</th>
                        <th className="text-left p-3 font-medium">Role</th>
                        <th className="text-left p-3 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {staffList.map((staff, idx) => (
                        <tr key={idx} className="border-b hover:bg-gray-50">
                          <td className="p-3 font-medium">{staff.name}</td>
                          <td className="p-3">{staff.department}</td>
                          <td className="p-3">{staff.role}</td>
                          <td className="p-3">
                            <Badge variant={staff.status === "Active" ? "default" : "secondary"}>{staff.status}</Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}
          {activeSection === "Payroll Setup" && <PayrollSetupSection />}
          {activeSection === "NSSF & PAYE Rates" && <RatesSetupSection />}
          {activeSection === "Earnings & Deductions Codes" && <EarningsDeductionsCodesSection />}
          {activeSection === "Banks" && <BanksSection />}
          {activeSection === "Employee Register" && <EmployeeRegisterSection />}
          {activeSection === "Deductions" && <DeductionsSection />}
          {activeSection === "Payroll Processing" && <PayrollProcessingSection />}
          {activeSection === "Missing Staff" && <MissingStaffSection />}
          {activeSection === "Leave Requests" && (
            <Card>
              <CardHeader>
                <CardTitle>Leave Requests</CardTitle>
                <CardDescription>Staff leave requests (demo)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-gray-600">No leave requests at this time.</div>
              </CardContent>
            </Card>
          )}
          {activeSection === "Reports" && (
            <Card>
              <CardHeader>
                <CardTitle>HR Reports</CardTitle>
                <CardDescription>Download and view HR reports (demo)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-gray-600">No reports available yet.</div>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </div>
  );
} 