'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Clock, FileText, Users, BookOpen, Plus, Eye, Edit } from 'lucide-react';

export default function MyClasses() {
  const myClasses = [
    { 
      id: 1,
      class: 'S1A - Mathematics', 
      students: 42, 
      nextLesson: 'Today 10:00 AM',
      assignments: 3,
      attendance: 95,
      subject: 'Mathematics',
      room: 'Room 101',
      topic: 'Quadratic Equations'
    },
    { 
      id: 2,
      class: 'S1B - Mathematics', 
      students: 38, 
      nextLesson: 'Today 2:00 PM',
      assignments: 2,
      attendance: 92,
      subject: 'Mathematics',
      room: 'Room 101',
      topic: 'Factorization'
    },
    { 
      id: 3,
      class: 'S2A - Mathematics', 
      students: 45, 
      nextLesson: 'Tomorrow 9:00 AM',
      assignments: 4,
      attendance: 97,
      subject: 'Mathematics',
      room: 'Room 102',
      topic: 'Trigonometry'
    },
    { 
      id: 4,
      class: 'S2B - Mathematics', 
      students: 41, 
      nextLesson: 'Tomorrow 11:00 AM',
      assignments: 1,
      attendance: 89,
      subject: 'Mathematics',
      room: 'Room 102',
      topic: 'Calculus Basics'
    },
  ];

  const classStats = {
    totalClasses: myClasses.length,
    totalStudents: myClasses.reduce((sum, cls) => sum + cls.students, 0),
    averageAttendance: Math.round(myClasses.reduce((sum, cls) => sum + cls.attendance, 0) / myClasses.length),
    totalAssignments: myClasses.reduce((sum, cls) => sum + cls.assignments, 0)
  };

  const getAttendanceColor = (attendance) => {
    if (attendance >= 95) return 'text-green-600';
    if (attendance >= 85) return 'text-yellow-600';
    return 'text-red-600';
  };

  const handleViewClass = (classId) => {
    console.log('Viewing class:', classId);
    // Add navigation logic here
  };

  const handleEditClass = (classId) => {
    console.log('Editing class:', classId);
    // Add edit logic here
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">My Classes</h2>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Class
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card className="bg-purple-50 border-purple-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600">Total Classes</p>
                <p className="text-2xl font-bold text-purple-900">{classStats.totalClasses}</p>
              </div>
              <BookOpen className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600">Total Students</p>
                <p className="text-2xl font-bold text-blue-900">{classStats.totalStudents}</p>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600">Avg Attendance</p>
                <p className="text-2xl font-bold text-green-900">{classStats.averageAttendance}%</p>
              </div>
              <Clock className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-orange-50 border-orange-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-600">Assignments</p>
                <p className="text-2xl font-bold text-orange-900">{classStats.totalAssignments}</p>
              </div>
              <FileText className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Classes Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {myClasses.map((cls) => (
          <Card key={cls.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">{cls.class}</CardTitle>
                  <CardDescription className="mt-1">
                    Next: {cls.topic}
                  </CardDescription>
                </div>
                <Badge variant="outline" className="bg-gray-50">
                  <Users className="h-3 w-3 mr-1" />
                  {cls.students}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Class Details */}
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

                {/* Attendance Progress */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Attendance Rate</span>
                    <span className={`text-sm font-medium ${getAttendanceColor(cls.attendance)}`}>
                      {cls.attendance}%
                    </span>
                  </div>
                  <Progress 
                    value={cls.attendance} 
                    className="h-2"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center pt-2">
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleViewClass(cls.id)}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleEditClass(cls.id)}
                    >
                      <Edit className="h-4 w-4 mr-1" />
                      Manage
                    </Button>
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="flex items-center gap-1">
                    <div className={`w-2 h-2 rounded-full ${
                      cls.attendance >= 95 ? 'bg-green-500' : 
                      cls.attendance >= 85 ? 'bg-yellow-500' : 'bg-red-500'
                    }`} />
                    <span className="text-xs text-gray-500">
                      {cls.attendance >= 95 ? 'Excellent' : 
                       cls.attendance >= 85 ? 'Good' : 'Needs Attention'}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" className="h-16 flex-col space-y-2">
            <Plus className="h-5 w-5" />
            <span>Create Assignment</span>
          </Button>
          <Button variant="outline" className="h-16 flex-col space-y-2">
            <Clock className="h-5 w-5" />
            <span>Take Attendance</span>
          </Button>
          <Button variant="outline" className="h-16 flex-col space-y-2">
            <BookOpen className="h-5 w-5" />
            <span>View All Students</span>
          </Button>
        </div>
      </div>
    </div>
  );
}