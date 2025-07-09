import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const demoUpcomingEvents = [
  { event: 'Parent-Teacher Meeting', date: 'Dec 15, 2024', type: 'meeting' },
  { event: 'End of Term Exams', date: 'Dec 20, 2024', type: 'exam' },
  { event: 'Sports Day', date: 'Jan 8, 2025', type: 'event' },
  { event: 'New Term Registration', date: 'Jan 15, 2025', type: 'admin' },
];

export default function EventsSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Events</CardTitle>
        <CardDescription>Important dates and activities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {demoUpcomingEvents.map((event, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-sm">{event.event}</p>
                <p className="text-xs text-gray-600">{event.date}</p>
              </div>
              <Badge variant="outline" className="text-xs">
                {event.type}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 