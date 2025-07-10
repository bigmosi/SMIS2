'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Clock, Plus, Edit, Eye } from 'lucide-react';

export default function Assignments() {
  const assignments = [
    {
      title: 'Quadratic Equations Test',
      class: 'S1A - Mathematics',
      dueDate: 'Due in 2 days',
      submitted: 35,
      total: 42,
      status: 'active'
    },
    {
      title: 'Algebra Problem Set',
      class: 'S1B - Mathematics',
      dueDate: 'Due tomorrow',
      submitted: 28,
      total: 38,
      status: 'active'
    },
    {
      title: 'Trigonometry Quiz',
      class: 'S2A - Mathematics',
      dueDate: 'Due in 5 days',
      submitted: 0,
      total: 45,
      status: 'draft'
    },
    {
      title: 'Geometry Worksheet',
      class: 'S2B - Mathematics',
      dueDate: 'Completed',
      submitted: 41,
      total: 41,
      status: 'completed'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Assignments</h2>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus className="h-4 w-4 mr-2" />
          New Assignment
        </Button>
      </div>

      <div className="grid gap-4">
        {assignments.map((assignment, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-lg">{assignment.title}</h3>
                    <Badge className={getStatusColor(assignment.status)}>
                      {assignment.status}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-2">{assignment.class}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {assignment.dueDate}
                    </div>
                    <div className="flex items-center gap-1">
                      <FileText className="h-4 w-4" />
                      {assignment.submitted}/{assignment.total} submitted
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
