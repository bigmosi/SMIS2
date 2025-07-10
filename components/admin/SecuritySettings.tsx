import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Shield,
  Lock,
  Key,
  AlertTriangle,
  CheckCircle,
  Eye,
  EyeOff,
  UserX,
  Globe,
  Smartphone,
  Clock,
  Activity,
  Settings,
  RefreshCw,
  Download,
  Upload,
  Ban,
  Unlock
} from 'lucide-react';

type EventType = 'success' | 'warning' | 'error' | 'info';

interface SecurityEvent {
  event: string;
  user: string;
  ip: string;
  time: string;
  type: EventType;
}
export default function SecuritySettings() {
  const [activeTab, setActiveTab] = useState('overview');
  const [showApiKey, setShowApiKey] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [passwordPolicy, setPasswordPolicy] = useState({
    minLength: 8,
    requireUppercase: true,
    requireNumbers: true,
    requireSpecialChars: true
  });

  const securityMetrics = [
    { name: 'Security Score', value: '92%', icon: Shield, color: 'bg-green-500', status: 'Excellent' },
    { name: 'Active Sessions', value: '23', icon: Activity, color: 'bg-blue-500', status: 'Normal' },
    { name: 'Failed Logins', value: '5', icon: UserX, color: 'bg-yellow-500', status: 'Low' },
    { name: 'Blocked IPs', value: '12', icon: Ban, color: 'bg-red-500', status: 'Active' }
  ];

  const recentSecurityEvents: SecurityEvent[] = [
    { event: 'Successful admin login', user: 'john.mukasa@school.com', ip: '192.168.1.100', time: '2 hours ago', type: 'success' },
    { event: 'Failed login attempt', user: 'unknown@example.com', ip: '45.33.32.156', time: '3 hours ago', type: 'warning' },
    { event: 'Password changed', user: 'sarah.nakato@school.com', ip: '192.168.1.105', time: '5 hours ago', type: 'info' },
    { event: 'Account locked', user: 'test@school.com', ip: '203.0.113.45', time: '6 hours ago', type: 'error' },
    { event: 'Two-factor authentication enabled', user: 'david.ssemakula@school.com', ip: '192.168.1.102', time: '1 day ago', type: 'success' }
  ];

  const activeSessions = [
    { user: 'John Mukasa', device: 'Chrome on Windows', location: 'Kampala, Uganda', lastActive: '2 minutes ago', ip: '192.168.1.100' },
    { user: 'Sarah Nakato', device: 'Safari on iPhone', location: 'Kampala, Uganda', lastActive: '15 minutes ago', ip: '192.168.1.105' },
    { user: 'David Ssemakula', device: 'Firefox on Linux', location: 'Kampala, Uganda', lastActive: '1 hour ago', ip: '192.168.1.102' },
    { user: 'Mary Namusoke', device: 'Edge on Windows', location: 'Entebbe, Uganda', lastActive: '3 hours ago', ip: '192.168.1.108' }
  ];

  const blockedIPs = [
    { ip: '45.33.32.156', reason: 'Multiple failed login attempts', blocked: '2 hours ago', attempts: 15 },
    { ip: '203.0.113.45', reason: 'Suspicious activity', blocked: '6 hours ago', attempts: 8 },
    { ip: '198.51.100.23', reason: 'Brute force attack', blocked: '1 day ago', attempts: 25 },
    { ip: '192.0.2.88', reason: 'Unauthorized access attempt', blocked: '2 days ago', attempts: 12 }
  ];

  const getEventTypeColor = (type: EventType) => {
    switch(type) {
      case 'success': return 'bg-green-100 text-green-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'error': return 'bg-red-100 text-red-800';
      case 'info': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getEventIcon = (type: EventType) => {
    switch(type) {
      case 'success': return <CheckCircle className="h-4 w-4" />;
      case 'warning': return <AlertTriangle className="h-4 w-4" />;
      case 'error': return <UserX className="h-4 w-4" />;
      case 'info': return <Activity className="h-4 w-4" />;
      default: return <Activity className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Security Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {securityMetrics.map((metric, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{metric.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                  <p className="text-xs text-gray-500">{metric.status}</p>
                </div>
                <div className={`p-3 rounded-full ${metric.color}`}>
                  <metric.icon className="h-5 w-5 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
        {['overview', 'authentication', 'sessions', 'access-control', 'logs'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab
                ? 'bg-white text-red-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Security Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Two-Factor Authentication</span>
                <Badge className="bg-green-100 text-green-800">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Enabled
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">SSL Certificate</span>
                <Badge className="bg-green-100 text-green-800">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Valid
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Password Policy</span>
                <Badge className="bg-green-100 text-green-800">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Enforced
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">IP Restrictions</span>
                <Badge className="bg-yellow-100 text-yellow-800">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  Partial
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Backup Encryption</span>
                <Badge className="bg-green-100 text-green-800">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Enabled
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2" />
                Recent Security Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentSecurityEvents.slice(0, 5).map((event, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`p-1 rounded-full ${getEventTypeColor(event.type)}`}>
                      {getEventIcon(event.type)}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{event.event}</p>
                      <p className="text-xs text-gray-500">{event.user} • {event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Authentication Tab */}
      {activeTab === 'authentication' && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Key className="h-5 w-5 mr-2" />
                Authentication Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Two-Factor Authentication</h3>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">SMS/Email 2FA</p>
                    <p className="text-sm text-gray-600">Require second factor for all logins</p>
                  </div>
                  <Button
                    variant={twoFactorEnabled ? "default" : "outline"}
                    onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                  >
                    {twoFactorEnabled ? 'Enabled' : 'Disabled'}
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Password Policy</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Minimum length (8 characters)</span>
                    <input
                      type="number"
                      min="6"
                      max="32"
                      value={passwordPolicy.minLength}
                      onChange={(e) => setPasswordPolicy({...passwordPolicy, minLength: parseInt(e.target.value)})}
                      className="w-20 px-2 py-1 border rounded"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Require uppercase letters</span>
                    <input
                      type="checkbox"
                      checked={passwordPolicy.requireUppercase}
                      onChange={(e) => setPasswordPolicy({...passwordPolicy, requireUppercase: e.target.checked})}
                      className="rounded"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Require numbers</span>
                    <input
                      type="checkbox"
                      checked={passwordPolicy.requireNumbers}
                      onChange={(e) => setPasswordPolicy({...passwordPolicy, requireNumbers: e.target.checked})}
                      className="rounded"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Require special characters</span>
                    <input
                      type="checkbox"
                      checked={passwordPolicy.requireSpecialChars}
                      onChange={(e) => setPasswordPolicy({...passwordPolicy, requireSpecialChars: e.target.checked})}
                      className="rounded"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">API Access</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm flex-1">API Key</span>
                    <div className="flex items-center space-x-2">
                      <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                        {showApiKey ? 'smis_api_key_abc123xyz789' : '••••••••••••••••••••'}
                      </code>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowApiKey(!showApiKey)}
                      >
                        {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Regenerate Key
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download Config
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Sessions Tab */}
      {activeTab === 'sessions' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="h-5 w-5 mr-2" />
              Active Sessions
            </CardTitle>
            <CardDescription>
              Monitor and manage active user sessions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold">User</th>
                    <th className="text-left p-3 font-semibold">Device</th>
                    <th className="text-left p-3 font-semibold">Location</th>
                    <th className="text-left p-3 font-semibold">Last Active</th>
                    <th className="text-left p-3 font-semibold">IP Address</th>
                    <th className="text-left p-3 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {activeSessions.map((session, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium text-gray-900">{session.user}</td>
                      <td className="p-3 text-gray-900">{session.device}</td>
                      <td className="p-3 text-gray-900">{session.location}</td>
                      <td className="p-3 text-gray-500">{session.lastActive}</td>
                      <td className="p-3 text-gray-900">{session.ip}</td>
                      <td className="p-3">
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <UserX className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Access Control Tab */}
      {activeTab === 'access-control' && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Ban className="h-5 w-5 mr-2" />
                IP Access Control
              </CardTitle>
              <CardDescription>
                Manage IP restrictions and blocked addresses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Button className="mr-2">
                  <Ban className="h-4 w-4 mr-2" />
                  Block IP
                </Button>
                <Button variant="outline">
                  <Upload className="h-4 w-4 mr-2" />
                  Import IP List
                </Button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">IP Address</th>
                      <th className="text-left p-3 font-semibold">Reason</th>
                      <th className="text-left p-3 font-semibold">Blocked</th>
                      <th className="text-left p-3 font-semibold">Attempts</th>
                      <th className="text-left p-3 font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blockedIPs.map((ip, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-3 font-mono text-gray-900">{ip.ip}</td>
                        <td className="p-3 text-gray-900">{ip.reason}</td>
                        <td className="p-3 text-gray-500">{ip.blocked}</td>
                        <td className="p-3 text-gray-900">{ip.attempts}</td>
                        <td className="p-3">
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm">
                              <Unlock className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Logs Tab */}
      {activeTab === 'logs' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Security Logs
            </CardTitle>
            <CardDescription>
              Complete security event history
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex justify-between items-center">
              <div className="flex space-x-2">
                <select className="px-3 py-2 border rounded-md">
                  <option>All Events</option>
                  <option>Login Events</option>
                  <option>Failed Attempts</option>
                  <option>Admin Actions</option>
                </select>
                <input
                  type="date"
                  className="px-3 py-2 border rounded-md"
                />
              </div>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export Logs
              </Button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold">Event</th>
                    <th className="text-left p-3 font-semibold">User</th>
                    <th className="text-left p-3 font-semibold">IP Address</th>
                    <th className="text-left p-3 font-semibold">Time</th>
                    <th className="text-left p-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentSecurityEvents.map((event, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium text-gray-900">{event.event}</td>
                      <td className="p-3 text-gray-900">{event.user}</td>
                      <td className="p-3 font-mono text-gray-900">{event.ip}</td>
                      <td className="p-3 text-gray-500">{event.time}</td>
                      <td className="p-3">
                        <Badge className={getEventTypeColor(event.type)}>
                          {event.type}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
