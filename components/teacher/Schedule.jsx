'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Users, Plus } from 'lucide-react';

export default function Schedule() {
  const todaySchedule = [
    {
      time: '8:00 AM',
      subject: 'Mathematics',
      class: 'S1A',
      room: 'Room 101',
      students: 42,
      topic: 'Quadratic Equations'
    },
    {
      time: '10:00 AM',
      subject: 'Mathematics',
      class: 'S1B',
      room: 'Room 101',
      students: 38,
      topic: 'Factorization'
    },
    {
      time: '2:00 PM',
      subject: 'Mathematics',
      class: 'S2A',
      room: 'Room 102',
      students: 45,
      topic: 'Trigonometry'
    },
    {
      time: '4:00 PM',
      subject: 'Mathematics',
      class: 'S2B',
      room: 'Room 102',
      students: 41,
      topic: 'Calculus Basics'
    }
  ];

  const upcomingEvents = [
    { event: 'Parent-Teacher Meeting', date: 'Tomorrow 3:00 PM', type: 'meeting' },
    { event: 'Department Meeting', date: 'Friday 9:00 AM', type: 'meeting' },
    { event: 'S1A Field Trip', date: 'Next Monday', type: 'trip' },
    { event: 'Mid-term Exams', date: 'Next Week', type: 'exam' }
  ];

  const getEventColor = (type) => {
    switch (type) {
      case 'meeting': return 'bg-blue-100 text-blue-800';
      case 'trip': return 'bg-green-100 text-green-800';
      case 'exam': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Schedule</h2>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Event
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Schedule */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Today's Classes
            </CardTitle>
            <CardDescription>Your schedule for today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {todaySchedule.map((lesson, index) => (
                <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="font-semibold">{lesson.time}</span>
                    </div>
                    <Badge variant="outline">{lesson.class}</Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{lesson.subject}</h3>
                  <p className="text-gray-600 mb-2">{lesson.topic}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {lesson.room}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {lesson.students} students
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Important dates and events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-sm">{event.event}</h4>
                      <p className="text-xs text-gray-600 mt-1">{event.date}</p>
                    </div>
                    <Badge className={getEventColor(event.type)} variant="secondary">
                      {event.type}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
