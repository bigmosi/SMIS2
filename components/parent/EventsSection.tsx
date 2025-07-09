import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';

const generalEvents = [
  { event: 'Parent-Teacher Meeting', date: 'Dec 15, 2024', time: '2:00 PM', type: 'meeting' },
  { event: 'End of Term Exams', date: 'Dec 20, 2024', time: '9:00 AM', type: 'exam' },
  { event: 'Sports Day', date: 'Jan 8, 2025', time: '10:00 AM', type: 'event' },
  { event: 'Class Trip', date: 'Jan 12, 2025', time: '8:00 AM', type: 'trip' },
];

const childrenEvents = [
  {
    name: 'John Doe',
    class: 'S2A',
    events: [
      { event: 'Parent-Teacher Meeting', date: 'Dec 15, 2024', time: '2:00 PM', type: 'meeting' },
      { event: 'End of Term Exams', date: 'Dec 20, 2024', time: '9:00 AM', type: 'exam' },
      { event: 'Sports Day', date: 'Jan 8, 2025', time: '10:00 AM', type: 'event' },
    ],
  },
  {
    name: 'Jane Doe',
    class: 'P5B',
    events: [
      { event: 'Parent-Teacher Meeting', date: 'Dec 15, 2024', time: '2:00 PM', type: 'meeting' },
      { event: 'Class Trip', date: 'Jan 12, 2025', time: '8:00 AM', type: 'trip' },
      { event: 'Sports Day', date: 'Jan 8, 2025', time: '10:00 AM', type: 'event' },
    ],
  },
];

export default function EventsSection() {
  return (
    <div className="space-y-8">
      {/* General School Events */}
      <Card>
        <CardHeader>
          <CardTitle>General School Events</CardTitle>
          <CardDescription>School-wide upcoming events and activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {generalEvents.map((event, i) => (
              <div key={i} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-sm">{event.event}</h3>
                  <Badge variant="outline" className="text-xs">
                    {event.type}
                  </Badge>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>{event.time}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      {/* Per-child Events */}
      {childrenEvents.map((child, idx) => (
        <Card key={idx}>
          <CardHeader>
            <CardTitle>{child.name} <span className="text-sm text-gray-500 font-normal">({child.class})</span></CardTitle>
            <CardDescription>Upcoming events and activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {child.events.map((event, i) => (
                <div key={i} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-sm">{event.event}</h3>
                    <Badge variant="outline" className="text-xs">
                      {event.type}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
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