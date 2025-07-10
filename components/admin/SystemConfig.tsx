import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Server,
  Database,
  Shield,
  Settings,
  RefreshCw,
  Download,
  Upload,
  AlertTriangle,
  CheckCircle,
  Clock,
  HardDrive,
  Cpu,
  MemoryStick,
  Network,
  Power,
  Monitor
} from 'lucide-react';

// Define types
type StatusVariant = 
  | 'running' | 'success' | 'current' | 'good' | 'normal' 
  | 'warning' | 'error' | 'stopped';

type SystemInfo = {
  label: string;
  value: string;
  status: StatusVariant;
};

type PerformanceMetric = {
  name: string;
  value: number;
  color: string;
  icon: React.ComponentType<{ className?: string }>;
};

type SystemService = {
  name: string;
  status: StatusVariant;
  uptime: string;
  port: string;
};

type ConfigSetting = {
  name: string;
  value: string;
  editable: boolean;
};

type ConfigCategory = {
  category: string;
  settings: ConfigSetting[];
};

export default function SystemConfig() {
  const [isRestarting, setIsRestarting] = useState(false);
  const [isBackingUp, setIsBackingUp] = useState(false);
  const [backupProgress, setBackupProgress] = useState(0);

  const systemInfo: SystemInfo[] = [
    { label: 'System Version', value: 'SMIS v2.4.1', status: 'current' },
    { label: 'Database Version', value: 'PostgreSQL 14.2', status: 'current' },
    { label: 'Last Backup', value: '2 hours ago', status: 'success' },
    { label: 'Uptime', value: '15 days, 6 hours', status: 'good' },
    { label: 'Active Users', value: '147', status: 'normal' },
    { label: 'Storage Used', value: '2.1 TB / 5 TB', status: 'warning' },
  ];

  const performanceMetrics: PerformanceMetric[] = [
    { name: 'CPU Usage', value: 35, color: 'bg-green-500', icon: Cpu },
    { name: 'Memory Usage', value: 68, color: 'bg-yellow-500', icon: MemoryStick },
    { name: 'Disk Usage', value: 42, color: 'bg-blue-500', icon: HardDrive },
    { name: 'Network I/O', value: 23, color: 'bg-purple-500', icon: Network },
  ];

  const systemServices: SystemService[] = [
    { name: 'Web Server', status: 'running', uptime: '15d 6h', port: '80, 443' },
    { name: 'Database Server', status: 'running', uptime: '15d 6h', port: '5432' },
    { name: 'Email Service', status: 'running', uptime: '15d 6h', port: '25, 587' },
    { name: 'Backup Service', status: 'running', uptime: '2h 15m', port: 'N/A' },
    { name: 'Authentication Service', status: 'running', uptime: '15d 6h', port: '8080' },
    { name: 'File Storage', status: 'warning', uptime: '12d 3h', port: '21, 22' },
  ];

  const configSettings: ConfigCategory[] = [
    { 
      category: 'General Settings',
      settings: [
        { name: 'System Name', value: 'SMIS - School Management System', editable: true },
        { name: 'Institution Name', value: 'Kampala International School', editable: true },
        { name: 'Time Zone', value: 'Africa/Kampala (UTC+3)', editable: true },
        { name: 'Academic Year', value: '2024/2025', editable: true },
      ]
    },
    {
      category: 'Security Settings',
      settings: [
        { name: 'Session Timeout', value: '30 minutes', editable: true },
        { name: 'Password Policy', value: 'Strong (8+ chars, mixed case)', editable: true },
        { name: 'Two-Factor Auth', value: 'Enabled for Admins', editable: true },
        { name: 'API Rate Limiting', value: '1000 requests/hour', editable: true },
      ]
    },
    {
      category: 'Database Settings',
      settings: [
        { name: 'Connection Pool Size', value: '50', editable: true },
        { name: 'Query Timeout', value: '30 seconds', editable: true },
        { name: 'Auto Backup', value: 'Daily at 2:00 AM', editable: true },
        { name: 'Backup Retention', value: '30 days', editable: true },
      ]
    }
  ];

  const handleRestart = async () => {
    setIsRestarting(true);
    // Simulate restart process
    setTimeout(() => {
      setIsRestarting(false);
      alert('System restart completed successfully!');
    }, 3000);
  };

  const handleBackup = async () => {
    setIsBackingUp(true);
    setBackupProgress(0);
    
    // Simulate backup progress
    const interval = setInterval(() => {
      setBackupProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsBackingUp(false);
          alert('Backup completed successfully!');
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const getStatusColor = (status: StatusVariant): string => {
    switch(status) {
      case 'running':
      case 'success':
      case 'current':
      case 'good':
      case 'normal':
        return 'bg-green-500';
      case 'warning':
        return 'bg-yellow-500';
      case 'error':
      case 'stopped':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: StatusVariant): JSX.Element => {
    switch(status) {
      case 'running':
      case 'success':
      case 'current':
      case 'good':
      case 'normal':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'error':
      case 'stopped':
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* System Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {systemInfo.map((info, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{info.label}</p>
                  <p className="text-lg font-semibold text-gray-900">{info.value}</p>
                </div>
                {getStatusIcon(info.status)}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Performance Metrics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Monitor className="h-5 w-5" />
            <span>System Performance</span>
          </CardTitle>
          <CardDescription>Real-time system resource usage</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <metric.icon className="h-4 w-4 text-gray-500" />
                    <span className="text-sm font-medium">{metric.name}</span>
                  </div>
                  <span className="text-sm font-semibold">{metric.value}%</span>
                </div>
                <Progress value={metric.value} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* System Services */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Server className="h-5 w-5" />
            <span>System Services</span>
          </CardTitle>
          <CardDescription>Status of critical system services</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {systemServices.map((service, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(service.status)}`} />
                  <div>
                    <p className="font-medium">{service.name}</p>
                    <p className="text-sm text-gray-500">Port: {service.port}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant={service.status === 'running' ? 'default' : 'secondary'}>
                    {service.status}
                  </Badge>
                  <p className="text-sm text-gray-500 mt-1">Uptime: {service.uptime}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Configuration Settings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {configSettings.map((category, categoryIndex) => (
          <Card key={categoryIndex}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="h-5 w-5" />
                <span>{category.category}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {category.settings.map((setting, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{setting.name}</p>
                      <p className="text-sm text-gray-500">{setting.value}</p>
                    </div>
                    {setting.editable && (
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* System Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Power className="h-5 w-5" />
            <span>System Actions</span>
          </CardTitle>
          <CardDescription>Critical system operations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button 
              onClick={handleBackup}
              disabled={isBackingUp}
              className="h-20 flex-col space-y-2 bg-blue-600 hover:bg-blue-700"
            >
              <Download className="h-6 w-6" />
              <span>{isBackingUp ? 'Backing up...' : 'Create Backup'}</span>
            </Button>
            <Button className="h-20 flex-col space-y-2 bg-green-600 hover:bg-green-700">
              <Upload className="h-6 w-6" />
              <span>Restore Backup</span>
            </Button>
            <Button className="h-20 flex-col space-y-2 bg-purple-600 hover:bg-purple-700">
              <RefreshCw className="h-6 w-6" />
              <span>Update System</span>
            </Button>
            <Button 
              onClick={handleRestart}
              disabled={isRestarting}
              className="h-20 flex-col space-y-2 bg-red-600 hover:bg-red-700"
            >
              <Power className="h-6 w-6" />
              <span>{isRestarting ? 'Restarting...' : 'Restart System'}</span>
            </Button>
          </div>
          
          {isBackingUp && (
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Backup Progress</span>
                <span className="text-sm">{backupProgress}%</span>
              </div>
              <Progress value={backupProgress} className="h-2" />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}