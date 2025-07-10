'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Calendar, Clock, Edit, Eye, Plus, Download } from 'lucide-react';

export default function LessonPlans() {
  const lessonPlans = [
    {
      title: 'Quadratic Equations - Introduction',
      class: 'S1A - Mathematics',
      date: 'Today',
      duration: '45 min',
      status: 'ready',
      objectives: ['Understand quadratic equations', 'Solve basic problems'],
      materials: ['Whiteboard', 'Worksheets', 'Calculator']
    },
    {
      title: 'Factorization Methods',
      class: 'S1B - Mathematics',
      date: 'Today',
      duration: '45 min',
      status: 'ready',
      objectives: ['Learn factorization techniques', 'Apply to real problems'],
      materials: ['Textbook', 'Practice sheets']
    },
    {
      title: 'Trigonometry - Sine and Cosine',
      class: 'S2A - Mathematics',
      date: 'Tomorrow',
      duration: '50 min',
      status: 'draft',
      objectives: ['Understand trigonometric ratios', 'Calculate angles'],
      materials: ['Scientific calculator', 'Trigonometry charts']
    },
    {
      title: 'Calculus - Derivatives',
      class: 'S2B - Mathematics',
      date: 'Next Week',
      duration: '50 min',
      status: 'planning',
      objectives: ['Introduction to derivatives', 'Basic differentiation'],
      materials: ['Graphing tools', 'Function worksheets']
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'ready': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'planning': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Lesson Plans</h2>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus className="h-4 w-4 mr-2" />
          New Lesson Plan
        </Button>
      </div>

      <div className="grid gap-6">
        {lessonPlans.map((plan, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    {plan.title}
                  </CardTitle>
                  <CardDescription className="mt-1">{plan.class}</CardDescription>
                </div>
                <Badge className={getStatusColor(plan.status)}>
                  {plan.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {plan.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {plan.duration}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Learning Objectives</h4>
                    <ul className="space-y-1">
                      {plan.objectives.map((objective, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Materials Needed</h4>
                    <div className="flex flex-wrap gap-1">
                      {plan.materials.map((material, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {material}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Export
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}