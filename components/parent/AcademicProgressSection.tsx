import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp } from 'lucide-react';

const childrenAcademic = [
  {
    name: 'John Doe',
    class: 'S2A',
    grades: [
      { subject: 'Mathematics', grade: '88%', date: '2 days ago', trend: 'up' },
      { subject: 'English', grade: '92%', date: '1 week ago', trend: 'up' },
      { subject: 'Science', grade: '76%', date: '1 week ago', trend: 'down' },
      { subject: 'History', grade: '85%', date: '2 weeks ago', trend: 'up' },
    ],
  },
  {
    name: 'Jane Doe',
    class: 'P5B',
    grades: [
      { subject: 'Mathematics', grade: '81%', date: '2 days ago', trend: 'up' },
      { subject: 'English', grade: '78%', date: '1 week ago', trend: 'down' },
      { subject: 'Science', grade: '90%', date: '1 week ago', trend: 'up' },
      { subject: 'History', grade: '87%', date: '2 weeks ago', trend: 'up' },
    ],
  },
];

export default function AcademicProgressSection() {
  return (
    <div className="space-y-8">
      {childrenAcademic.map((child, idx) => (
        <Card key={idx}>
          <CardHeader>
            <CardTitle>{child.name} <span className="text-sm text-gray-500 font-normal">({child.class})</span></CardTitle>
            <CardDescription>Recent academic performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[600px]">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-medium">Subject</th>
                    <th className="text-left p-3 font-medium">Grade</th>
                    <th className="text-left p-3 font-medium">Date</th>
                    <th className="text-left p-3 font-medium">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {child.grades.map((grade, i) => (
                    <tr key={i} className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">{grade.subject}</td>
                      <td className="p-3 font-semibold">{grade.grade}</td>
                      <td className="p-3 text-gray-600">{grade.date}</td>
                      <td className="p-3">
                        <TrendingUp className={`h-4 w-4 inline ${grade.trend === 'up' ? 'text-green-500' : 'text-red-500'}`} />
                        <span className={`ml-2 text-xs ${grade.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>{grade.trend === 'up' ? 'Improving' : 'Declining'}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 