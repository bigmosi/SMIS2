import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { User } from 'lucide-react';

const parentInfo = {
  name: 'Mary Doe',
  email: 'mary.doe@gmail.com',
  phone: '+256 700 123456',
};

const children = [
  {
    name: 'John Doe',
    class: 'S2A',
    studentId: 'STU001234',
    photo: '',
  },
  {
    name: 'Jane Doe',
    class: 'P5B',
    studentId: 'STU001567',
    photo: '',
  },
];

export default function ProfileSection() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Parent Profile</CardTitle>
          <CardDescription>Contact information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 mb-2">
            <div className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-gray-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">{parentInfo.name}</p>
              <p className="text-sm text-gray-600">{parentInfo.email}</p>
              <p className="text-sm text-gray-600">{parentInfo.phone}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      {children.map((child, idx) => (
        <Card key={idx}>
          <CardHeader>
            <CardTitle>{child.name} <span className="text-sm text-gray-500 font-normal">({child.class})</span></CardTitle>
            <CardDescription>Student ID: <span className="font-mono text-blue-600">{child.studentId}</span></CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-gray-500" />
              </div>
              <div>
                <p className="font-medium text-gray-900">{child.name}</p>
                <p className="text-sm text-gray-600">Class: {child.class}</p>
                <p className="text-sm text-gray-600">Student ID: {child.studentId}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 