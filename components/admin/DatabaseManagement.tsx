import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Database,
  HardDrive,
  RefreshCw,
  Download,
  Upload,
  Archive,
  Trash2,
  AlertTriangle,
  CheckCircle,
  Activity,
  Server,
  Clock,
  BarChart3,
  Settings,
  Play,
  Pause
} from 'lucide-react';

// Define types
type StatusType = 'Success' | 'Failed' | 'Running' | 'Completed';
type BackupType = 'Automatic' | 'Manual';

interface DbStat {
  name: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface BackupHistoryItem {
  date: string;
  type: BackupType;
  size: string;
  status: StatusType;
}

interface TableStat {
  name: string;
  records: number;
  size: string;
  lastUpdated: string;
}

interface MaintenanceTask {
  task: string;
  lastRun: string;
  status: StatusType;
  duration: string;
}

export default function DatabaseManagement() {
  const [activeTab, setActiveTab] = useState<'overview' | 'backup' | 'tables' | 'maintenance'>('overview');
  const [isBackupRunning, setIsBackupRunning] = useState(false);
  const [lastBackup, setLastBackup] = useState('2024-07-10 02:30:00');

  const dbStats: DbStat[] = [
    { name: 'Total Size', value: '2.4 GB', icon: HardDrive, color: 'bg-blue-500' },
    { name: 'Tables', value: '47', icon: Database, color: 'bg-green-500' },
    { name: 'Records', value: '125,430', icon: BarChart3, color: 'bg-purple-500' },
    { name: 'Uptime', value: '99.9%', icon: Activity, color: 'bg-yellow-500' }
  ];

  const backupHistory: BackupHistoryItem[] = [
    { date: '2024-07-10 02:30:00', type: 'Automatic', size: '2.4 GB', status: 'Success' },
    { date: '2024-07-09 02:30:00', type: 'Automatic', size: '2.3 GB', status: 'Success' },
    { date: '2024-07-08 14:15:00', type: 'Manual', size: '2.3 GB', status: 'Success' },
    { date: '2024-07-08 02:30:00', type: 'Automatic', size: '2.3 GB', status: 'Failed' },
    { date: '2024-07-07 02:30:00', type: 'Automatic', size: '2.2 GB', status: 'Success' }
  ];

  const tableStats: TableStat[] = [
    { name: 'students', records: 1247, size: '450 MB', lastUpdated: '2 hours ago' },
    { name: 'teachers', records: 98, size: '12 MB', lastUpdated: '1 day ago' },
    { name: 'fees_transactions', records: 15620, size: '850 MB', lastUpdated: '30 minutes ago' },
    { name: 'attendance', records: 89450, size: '650 MB', lastUpdated: '1 hour ago' },
    { name: 'academic_records', records: 8540, size: '320 MB', lastUpdated: '3 hours ago' },
    { name: 'payroll', records: 4560, size: '180 MB', lastUpdated: '1 day ago' }
  ];

  const maintenanceTasks: MaintenanceTask[] = [
    { task: 'Index Optimization', lastRun: '2024-07-09 03:00:00', status: 'Completed', duration: '15 min' },
    { task: 'Database Cleanup', lastRun: '2024-07-08 03:15:00', status: 'Completed', duration: '8 min' },
    { task: 'Statistics Update', lastRun: '2024-07-10 01:00:00', status: 'Completed', duration: '5 min' },
    { task: 'Log Cleanup', lastRun: '2024-07-09 02:00:00', status: 'Completed', duration: '3 min' }
  ];

  const handleBackup = () => {
    setIsBackupRunning(true);
    // Simulate backup process
    setTimeout(() => {
      setIsBackupRunning(false);
      setLastBackup(new Date().toISOString().slice(0, 19).replace('T', ' '));
    }, 5000);
  };

  const getStatusColor = (status: StatusType) => {
    switch(status) {
      case 'Success': return 'bg-green-100 text-green-800';
      case 'Failed': return 'bg-red-100 text-red-800';
      case 'Running': return 'bg-blue-100 text-blue-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Database Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {dbStats.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full ${stat.color}`}>
                  <stat.icon className="h-5 w-5 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
        {(['overview', 'backup', 'tables', 'maintenance'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab
                ? 'bg-white text-red-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Server className="h-5 w-5 mr-2" />
                Database Health
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Connection Status</span>
                <Badge className="bg-green-100 text-green-800">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Connected
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Performance</span>
                <div className="flex items-center space-x-2">
                  <Progress value={85} className="w-20" />
                  <span className="text-sm font-medium">85%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Storage Used</span>
                <div className="flex items-center space-x-2">
                  <Progress value={60} className="w-20" />
                  <span className="text-sm font-medium">60%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Last Backup</span>
                <span className="text-sm text-gray-900">{lastBackup}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Backup completed successfully</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Index optimization completed</p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Database cleanup performed</p>
                    <p className="text-xs text-gray-500">2 days ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Backup Tab */}
      {activeTab === 'backup' && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Archive className="h-5 w-5 mr-2" />
                Backup Management
              </CardTitle>
              <CardDescription>
                Create and manage database backups
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 mb-6">
                <Button 
                  onClick={handleBackup} 
                  disabled={isBackupRunning}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {isBackupRunning ? (
                    <>
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                      Creating Backup...
                    </>
                  ) : (
                    <>
                      <Archive className="h-4 w-4 mr-2" />
                      Create Backup
                    </>
                  )}
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Latest
                </Button>
                <Button variant="outline">
                  <Upload className="h-4 w-4 mr-2" />
                  Restore Backup
                </Button>
              </div>

              {isBackupRunning && (
                <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <RefreshCw className="h-5 w-5 text-blue-600 animate-spin" />
                    <div>
                      <p className="text-sm font-medium text-blue-900">Creating database backup...</p>
                      <p className="text-xs text-blue-700">This may take a few minutes</p>
                    </div>
                  </div>
                  <Progress value={65} className="mt-2" />
                </div>
              )}

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">Date</th>
                      <th className="text-left p-3 font-semibold">Type</th>
                      <th className="text-left p-3 font-semibold">Size</th>
                      <th className="text-left p-3 font-semibold">Status</th>
                      <th className="text-left p-3 font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {backupHistory.map((backup, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-3 text-gray-900">{backup.date}</td>
                        <td className="p-3">
                          <Badge variant="outline">{backup.type}</Badge>
                        </td>
                        <td className="p-3 text-gray-900">{backup.size}</td>
                        <td className="p-3">
                          <Badge className={getStatusColor(backup.status)}>
                            {backup.status}
                          </Badge>
                        </td>
                        <td className="p-3">
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="h-4 w-4" />
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

      {/* Tables Tab */}
      {activeTab === 'tables' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Database className="h-5 w-5 mr-2" />
              Database Tables
            </CardTitle>
            <CardDescription>
              Overview of all database tables and their statistics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold">Table Name</th>
                    <th className="text-left p-3 font-semibold">Records</th>
                    <th className="text-left p-3 font-semibold">Size</th>
                    <th className="text-left p-3 font-semibold">Last Updated</th>
                  </tr>
                </thead>
                <tbody>
                  {tableStats.map((table, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-3 text-gray-900">{table.name}</td>
                      <td className="p-3 text-gray-900">{table.records}</td>
                      <td className="p-3 text-gray-900">{table.size}</td>
                      <td className="p-3 text-gray-900">{table.lastUpdated}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Maintenance Tab */}
      {activeTab === 'maintenance' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Settings className="h-5 w-5 mr-2" />
              Maintenance Tasks
            </CardTitle>
            <CardDescription>
              Scheduled maintenance tasks for database optimization
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {maintenanceTasks.map((task, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{task.task}</p>
                    <p className="text-xs text-gray-500">Last run: {task.lastRun}</p>
                  </div>
                  <Badge className={`px-3 py-1 ${getStatusColor(task.status)}`}>
                    {task.status}
                  </Badge>
                  <span className="text-xs text-gray-500">Duration: {task.duration}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}