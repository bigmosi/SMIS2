import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Bell,
  BellRing,
  AlertTriangle,
  CheckCircle,
  Info,
  Settings,
  Trash2,
  Shield,
  Database,
  DollarSign,
  BookOpen,
  Clock,
  AlertCircle,
  Users
} from 'lucide-react';

// Define missing types
type Notification = {
  id: number;
  type: string;
  title: string;
  message: string;
  timestamp: string;
  priority: 'high' | 'medium' | 'low';
  read: boolean;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
};

type NotificationFilter = {
  id: string;
  label: string;
  count: number;
};

type NotificationStat = {
  label: string;
  value: number;
  color: string;
};

export default function NotificationsCenter() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: 'security',
      title: 'Failed Login Attempts Detected',
      message: 'Multiple failed login attempts from IP 192.168.1.100. Account has been temporarily locked.',
      timestamp: '2 minutes ago',
      priority: 'high',
      read: false,
      icon: Shield,
      color: 'text-red-500'
    },
    {
      id: 2,
      type: 'system',
      title: 'System Backup Completed',
      message: 'Daily backup completed successfully. 2.1 GB of data backed up to secure storage.',
      timestamp: '1 hour ago',
      priority: 'medium',
      read: false,
      icon: Database,
      color: 'text-green-500'
    },
    {
      id: 3,
      type: 'financial',
      title: 'Payment Received',
      message: 'Fee payment of UGX 450,000 received from student ID #1234 - John Doe.',
      timestamp: '2 hours ago',
      priority: 'low',
      read: true,
      icon: DollarSign,
      color: 'text-blue-500'
    },
    {
      id: 4,
      type: 'academic',
      title: 'New Course Registration',
      message: 'Advanced Mathematics course has been registered by 15 new students.',
      timestamp: '3 hours ago',
      priority: 'low',
      read: false,
      icon: BookOpen,
      color: 'text-purple-500'
    },
    {
      id: 5,
      type: 'system',
      title: 'Server Maintenance Scheduled',
      message: 'System maintenance scheduled for December 15, 2024 from 2:00 AM to 4:00 AM.',
      timestamp: '5 hours ago',
      priority: 'medium',
      read: true,
      icon: Settings,
      color: 'text-yellow-500'
    },
    {
      id: 6,
      type: 'user',
      title: 'New Staff Member Added',
      message: 'Sarah Johnson has been added as a new Mathematics teacher.',
      timestamp: '1 day ago',
      priority: 'low',
      read: true,
      icon: Users,
      color: 'text-green-500'
    },
    {
      id: 7,
      type: 'security',
      title: 'Security Update Available',
      message: 'A critical security update is available for the system. Please apply immediately.',
      timestamp: '2 days ago',
      priority: 'high',
      read: false,
      icon: Shield,
      color: 'text-red-500'
    },
    {
      id: 8,
      type: 'system',
      title: 'Database Performance Alert',
      message: 'Database query response time has increased by 15%. Consider optimization.',
      timestamp: '3 days ago',
      priority: 'medium',
      read: true,
      icon: Database,
      color: 'text-yellow-500'
    }
  ]);

  const filters: NotificationFilter[] = [
    { id: 'all', label: 'All Notifications', count: notifications.length },
    { id: 'unread', label: 'Unread', count: notifications.filter(n => !n.read).length },
    { id: 'security', label: 'Security', count: notifications.filter(n => n.type === 'security').length },
    { id: 'system', label: 'System', count: notifications.filter(n => n.type === 'system').length },
    { id: 'financial', label: 'Financial', count: notifications.filter(n => n.type === 'financial').length },
    { id: 'academic', label: 'Academic', count: notifications.filter(n => n.type === 'academic').length },
    { id: 'user', label: 'User Management', count: notifications.filter(n => n.type === 'user').length },
  ];

  const notificationStats: NotificationStat[] = [
    { label: 'Total Notifications', value: notifications.length, color: 'bg-blue-500' },
    { label: 'Unread', value: notifications.filter(n => !n.read).length, color: 'bg-red-500' },
    { label: 'High Priority', value: notifications.filter(n => n.priority === 'high').length, color: 'bg-yellow-500' },
    { label: 'Today', value: notifications.filter(n => n.timestamp.includes('hour') || n.timestamp.includes('minute')).length, color: 'bg-green-500' },
  ];

  const getPriorityColor = (priority: Notification['priority']): string => {
    switch(priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityIcon = (priority: Notification['priority']): JSX.Element => {
    switch(priority) {
      case 'high': return <AlertTriangle className="h-4 w-4" />;
      case 'medium': return <AlertCircle className="h-4 w-4" />;
      case 'low': return <Info className="h-4 w-4" />;
      default: return <Info className="h-4 w-4" />;
    }
  };

  const filteredNotifications: Notification[] = notifications.filter(notification => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'unread') return !notification.read;
    return notification.type === selectedFilter;
  });

  const markAsRead = (id: number): void => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = (): void => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id: number): void => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Notification Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {notificationStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full ${stat.color}`}>
                  <Bell className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Notification Controls */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center space-x-2">
                <BellRing className="h-5 w-5" />
                <span>Notifications</span>
              </CardTitle>
              <CardDescription>Manage system notifications and alerts</CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Button onClick={markAllAsRead} variant="outline" size="sm">
                Mark All as Read
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={selectedFilter === filter.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(filter.id)}
                className="flex items-center space-x-2"
              >
                <span>{filter.label}</span>
                <Badge variant="secondary" className="ml-2">
                  {filter.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Notifications List */}
          <div className="space-y-4">
            {filteredNotifications.length === 0 ? (
              <div className="text-center py-8">
                <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No notifications found</p>
              </div>
            ) : (
              filteredNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 border rounded-lg transition-all hover:shadow-md ${
                    !notification.read ? 'bg-blue-50 border-blue-200' : 'bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                      <div className={`p-2 rounded-full ${
                        !notification.read ? 'bg-blue-100' : 'bg-gray-100'
                      }`}>
                        <notification.icon className={`h-5 w-5 ${notification.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className={`font-medium ${
                            !notification.read ? 'text-gray-900' : 'text-gray-700'
                          }`}>
                            {notification.title}
                          </h3>
                          <Badge 
                            variant="outline" 
                            className={`${getPriorityColor(notification.priority)} text-xs`}
                          >
                            {getPriorityIcon(notification.priority)}
                            <span className="ml-1 capitalize">{notification.priority}</span>
                          </Badge>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {notification.timestamp}
                          </span>
                          <span className="capitalize">{notification.type}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      {!notification.read && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => markAsRead(notification.id)}
                        >
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteNotification(notification.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings className="h-5 w-5" />
            <span>Notification Settings</span>
          </CardTitle>
          <CardDescription>Configure how and when you receive notifications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium">Email Notifications</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Security Alerts</span>
                  <Badge variant="default">Enabled</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">System Updates</span>
                  <Badge variant="default">Enabled</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Financial Alerts</span>
                  <Badge variant="secondary">Disabled</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">User Activities</span>
                  <Badge variant="secondary">Disabled</Badge>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Push Notifications</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Critical Alerts</span>
                  <Badge variant="default">Enabled</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">System Maintenance</span>
                  <Badge variant="default">Enabled</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Daily Summaries</span>
                  <Badge variant="secondary">Disabled</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Performance Alerts</span>
                  <Badge variant="default">Enabled</Badge>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t">
            <Button>Save Settings</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}