import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageSquare } from 'lucide-react';

const generalMessages = [
  { from: 'School Admin', message: 'School will be closed for public holiday on Jan 15.', time: '2 days ago' },
  { from: 'Head Teacher', message: 'End of term exams start Dec 20.', time: '1 week ago' },
  { from: 'School Admin', message: 'Sports day is scheduled for Jan 8.', time: '2 weeks ago' },
];

const childrenMessages = [
  {
    name: 'John Doe',
    class: 'S2A',
    messages: [
      { from: 'Mathematics Teacher', message: 'Great improvement in algebra work!', time: '2 days ago' },
      { from: 'Class Teacher', message: 'Please ensure homework is completed on time.', time: '1 week ago' },
      { from: 'School Admin', message: 'Reminder: Fee payment due soon.', time: '1 week ago' },
    ],
  },
  {
    name: 'Jane Doe',
    class: 'P5B',
    messages: [
      { from: 'English Teacher', message: 'Jane is participating well in class.', time: '3 days ago' },
      { from: 'Class Teacher', message: 'Field trip permission slip needed.', time: '1 week ago' },
      { from: 'School Admin', message: 'Sports day is next week.', time: '2 weeks ago' },
    ],
  },
];

export default function CommunicationSection() {
  return (
    <div className="space-y-8">
      {/* General Communication */}
      <Card>
        <CardHeader>
          <CardTitle>General Communication</CardTitle>
          <CardDescription>School-wide announcements and messages</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {generalMessages.map((message, i) => (
              <div key={i} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <MessageSquare className="h-4 w-4 text-orange-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-medium text-sm">{message.from}</p>
                    <span className="text-xs text-gray-500">{message.time}</span>
                  </div>
                  <p className="text-sm text-gray-700">{message.message}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      {/* Per-child Communication */}
      {childrenMessages.map((child, idx) => (
        <Card key={idx}>
          <CardHeader>
            <CardTitle>{child.name} <span className="text-sm text-gray-500 font-normal">({child.class})</span></CardTitle>
            <CardDescription>Recent messages from teachers and school</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {child.messages.map((message, i) => (
                <div key={i} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <MessageSquare className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-medium text-sm">{message.from}</p>
                      <span className="text-xs text-gray-500">{message.time}</span>
                    </div>
                    <p className="text-sm text-gray-700">{message.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 