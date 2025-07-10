'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { BarChart3, TrendingUp, TrendingDown, Users, ClipboardList } from 'lucide-react';

export default function Grades() {
  const gradingStats = [
    { title: 'Pending Grades', value: '23', icon: ClipboardList, color: 'bg-orange-500' },
    { title: 'Graded This Week', value: '47', icon: BarChart3, color: 'bg-green-500' },
    { title: 'Class Average', value: '82%', icon: TrendingUp, color: 'bg-blue-500' },
    { title: 'Students Tracked', value: '248', icon: Users, color: 'bg-purple-500' },
  ];

  const recentGrades = [
    { 
      assignment: 'Algebra Test', 
      class: 'S1A - Mathematics', 
      average: 85, 
      graded: 42, 
      total: 42,
      status: 'completed'
    },
    { 
      assignment: 'Geometry Quiz', 
      class: 'S1B - Mathematics', 
      average: 78, 
      graded: 23, 
      total: 38,
      status: 'pending'
    },
    { 
      assignment: 'Trigonometry Test', 
      class: 'S2A - Mathematics', 
      average: 88, 
      graded: 45, 
      total: 45,
      status: 'completed'
    },
    { 
      assignment: 'Calculus Problem Set', 
      class: 'S2B - Mathematics', 
      average: 0, 
      graded: 0, 
      total: 41,
      status: 'not_started'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'not_started': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Grades</h2>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {gradingStats.map((stat, index) => (
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
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Grades */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Assignments</CardTitle>
          <CardDescription>Track your grading progress</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentGrades.map((grade, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{grade.assignment}</h3>
                    <p className="text-sm text-gray-600">{grade.class}</p>
                  </div>
                  <Badge className={getStatusColor(grade.status)}>
                    {grade.status.replace('_', ' ')}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-600">Progress</span>
                      <span className="text-sm font-medium">{grade.graded}/{grade.total}</span>
                    </div>
                    <Progress value={(grade.graded / grade.total) * 100} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-600">Average</span>
                      <span className="text-sm font-medium">
                        {grade.average > 0 ? `${grade.average}%` : 'N/A'}
                      </span>
                    </div>
                    <div className="flex items-center">
                      {grade.average >= 85 ? (
                        <TrendingUp className="h-4 w-4 text-green-500" />
                      ) : grade.average >= 70 ? (
                        <BarChart3 className="h-4 w-4 text-yellow-500" />
                      ) : grade.average > 0 ? (
                        <TrendingDown className="h-4 w-4 text-red-500" />
                      ) : (
                        <div className="h-4 w-4" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
