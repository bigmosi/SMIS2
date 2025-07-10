'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, TrendingDown, Award, AlertCircle, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function StudentProgress() {
  const studentStats = [
    { title: 'Total Students', value: '248', change: '+12', trend: 'up' },
    { title: 'Above Average', value: '142', change: '+8', trend: 'up' },
    { title: 'Need Support', value: '23', change: '-3', trend: 'down' },
    { title: 'Perfect Attendance', value: '89', change: '+5', trend: 'up' }
  ];

  const topStudents = [
    { name: 'Sarah Johnson', class: 'S1A', average: 96, trend: 'up', attendance: 100 },
    { name: 'Michael Chen', class: 'S2A', average: 94, trend: 'up', attendance: 98 },
    { name: 'Emma Wilson', class: 'S1B', average: 92, trend: 'stable', attendance: 95 },
    { name: 'David Rodriguez', class: 'S2B', average: 91, trend: 'up', attendance: 97 }
  ];

  const needsAttention = [
    { name: 'Alex Thompson', class: 'S1A', average: 65, trend: 'down', attendance: 82, issue: 'Low grades' },
    { name: 'Lisa Park', class: 'S1B', average: 78, trend: 'down', attendance: 70, issue: 'Attendance' },
    { name: 'Jordan Lee', class: 'S2A', average: 68, trend: 'down', attendance: 85, issue: 'Struggling' },
    { name: 'Taylor Smith', class: 'S2B', average: 72, trend: 'stable', attendance: 75, issue: 'Inconsistent' }
  ];

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'down': return <TrendingDown className="h-4 w-4 text-red-500" />;
      default: return <div className="h-4 w-4" />;
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'up': return 'text-green-600';
      case 'down': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Student Progress</h2>
        <Button variant="outline">
          <Search className="h-4 w-4 mr-2" />
          Search Students
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {studentStats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                {getTrendIcon(stat.trend)}
              </div>
              <div className="flex items-center gap-2">
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <Badge variant="secondary" className={getTrendColor(stat.trend)}>
                  {stat.change}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performers */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-yellow-500" />
              Top Performers
            </CardTitle>
            <CardDescription>Students excelling in their studies</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topStudents.map((student, index) => (
                <div key={index} className="p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">{student.name}</h3>
                      <p className="text-sm text-gray-600">{student.class}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-800">
                        {student.average}% avg
                      </Badge>
                      {getTrendIcon(student.trend)}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-600">Grade</span>
                        <span className="text-sm font-medium">{student.average}%</span>
                      </div>
                      <Progress value={student.average} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-600">Attendance</span>
                        <span className="text-sm font-medium">{student.attendance}%</span>
                      </div>
                      <Progress value={student.attendance} className="h-2" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        {/* Students Needing Attention */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-red-500" />
              Students Needing Attention
            </CardTitle>
            <CardDescription>Students who require additional support</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {needsAttention.map((student, index) => (
                <div key={index} className="p-4 bg-red-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">{student.name}</h3>
                      <p className="text-sm text-gray-600">{student.class}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-red-100 text-red-800">
                        {student.average}% avg
                      </Badge>
                      {getTrendIcon(student.trend)}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-600">Grade</span>
                        <span className="text-sm font-medium">{student.average}%</span>
                      </div>
                      <Progress value={student.average} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-600">Attendance</span>
                        <span className="text-sm font-medium">{student.attendance}%</span>
                      </div>
                      <Progress value={student.attendance} className="h-2" />
                    </div>
                  </div>
                  {student.issue && (
                    <p className="mt-2 text-sm text-red-600">Issue: {student.issue}</p>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        </div>
        </div>
    );
}