import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const demoStudents = [
  { name: 'John Doe', class: 'S1A', status: 'Paid', paid: 'UGX 350,000', due: 'UGX 0' },
  { name: 'Jane Smith', class: 'S1B', status: 'Pending', paid: 'UGX 120,000', due: 'UGX 80,000' },
  { name: 'Samuel Green', class: 'S2A', status: 'Paid', paid: 'UGX 280,000', due: 'UGX 0' },
  { name: 'Emily Brown', class: 'S2B', status: 'Pending', paid: 'UGX 95,000', due: 'UGX 55,000' },
];

export default function StudentsSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Students</CardTitle>
        <CardDescription>Fee payment status for all students</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[600px]">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4 font-medium">Name</th>
                <th className="text-left p-4 font-medium">Class</th>
                <th className="text-left p-4 font-medium">Fee Status</th>
                <th className="text-left p-4 font-medium">Amount Paid</th>
                <th className="text-left p-4 font-medium">Amount Due</th>
              </tr>
            </thead>
            <tbody>
              {demoStudents.map((student, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium">{student.name}</td>
                  <td className="p-4">{student.class}</td>
                  <td className="p-4">
                    <Badge variant={student.status === 'Paid' ? 'default' : 'secondary'}>
                      {student.status}
                    </Badge>
                  </td>
                  <td className="p-4 text-green-600 font-semibold">{student.paid}</td>
                  <td className="p-4 text-red-600 font-semibold">{student.due}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
} 