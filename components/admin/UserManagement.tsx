import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Users,
  UserPlus,
  UserX,
  Edit3,
  Shield,
  Eye,
  Search,
  Filter,
  Download,
  Upload,
  MoreVertical,
  Check,
  X,
  AlertCircle
} from 'lucide-react';

// Define types
type UserStatus = 'active' | 'inactive';
type UserRole = 'Principal' | 'Teacher' | 'Bursar' | 'IT Support' | 'Secretary';

interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  department: string;
  status: UserStatus;
  lastLogin: string;
  phone: string;
}

interface RoleStat {
  name: UserRole;
  count: number;
  color: string;
}

interface NewUser {
  name: string;
  email: string;
  role: UserRole;
  department: string;
  phone: string;
}

export default function UserManagement() {
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState<UserRole | 'all'>('all');
  const [showAddUser, setShowAddUser] = useState(false);
  const [newUser, setNewUser] = useState<NewUser>({
    name: '',
    email: '',
    role: 'Teacher',
    department: '',
    phone: ''
  });

  const users: User[] = [
    {
      id: 1,
      name: 'John Mukasa',
      email: 'john.mukasa@school.com',
      role: 'Principal',
      department: 'Administration',
      status: 'active',
      lastLogin: '2 hours ago',
      phone: '+256 777 123456'
    },
    {
      id: 2,
      name: 'Sarah Nakato',
      email: 'sarah.nakato@school.com',
      role: 'Teacher',
      department: 'Mathematics',
      status: 'active',
      lastLogin: '1 day ago',
      phone: '+256 777 234567'
    },
    {
      id: 3,
      name: 'David Ssemakula',
      email: 'david.ssemakula@school.com',
      role: 'Bursar',
      department: 'Finance',
      status: 'active',
      lastLogin: '3 hours ago',
      phone: '+256 777 345678'
    },
    {
      id: 4,
      name: 'Mary Namusoke',
      email: 'mary.namusoke@school.com',
      role: 'Teacher',
      department: 'English',
      status: 'inactive',
      lastLogin: '1 week ago',
      phone: '+256 777 456789'
    },
    {
      id: 5,
      name: 'Peter Kiggundu',
      email: 'peter.kiggundu@school.com',
      role: 'IT Support',
      department: 'Technology',
      status: 'active',
      lastLogin: '30 minutes ago',
      phone: '+256 777 567890'
    }
  ];

  const roles: RoleStat[] = [
    { name: 'Principal', count: 1, color: 'bg-red-500' },
    { name: 'Teacher', count: 45, color: 'bg-blue-500' },
    { name: 'Bursar', count: 3, color: 'bg-green-500' },
    { name: 'IT Support', count: 2, color: 'bg-purple-500' },
    { name: 'Secretary', count: 4, color: 'bg-yellow-500' }
  ];

  const handleUserSelect = (userId: number) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const handleAddUser = () => {
    // Add user logic here
    console.log('Adding user:', newUser);
    setShowAddUser(false);
    setNewUser({ name: '', email: '', role: 'Teacher', department: '', phone: '' });
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const getRoleColor = (role: UserRole) => {
    switch(role) {
      case 'Principal': return 'bg-red-100 text-red-800';
      case 'Teacher': return 'bg-blue-100 text-blue-800';
      case 'Bursar': return 'bg-green-100 text-green-800';
      case 'IT Support': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: UserStatus) => {
    return status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  return (
    <div className="space-y-6">
      {/* Role Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {roles.map((role, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{role.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{role.count}</p>
                </div>
                <div className={`w-3 h-3 rounded-full ${role.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => setShowAddUser(true)} className="bg-blue-600 hover:bg-blue-700">
            <UserPlus className="h-4 w-4 mr-2" />
            Add User
          </Button>
          <Button variant="outline">
            <Upload className="h-4 w-4 mr-2" />
            Import Users
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Users
          </Button>
        </div>
        
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value as UserRole | 'all')}
          >
            <option value="all">All Roles</option>
            <option value="Principal">Principal</option>
            <option value="Teacher">Teacher</option>
            <option value="Bursar">Bursar</option>
            <option value="IT Support">IT Support</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>Users ({filteredUsers.length})</CardTitle>
          <CardDescription>
            Manage user accounts and permissions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">
                    <input
                      type="checkbox"
                      className="rounded"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedUsers(filteredUsers.map(u => u.id));
                        } else {
                          setSelectedUsers([]);
                        }
                      }}
                    />
                  </th>
                  <th className="text-left p-3 font-semibold">Name</th>
                  <th className="text-left p-3 font-semibold">Email</th>
                  <th className="text-left p-3 font-semibold">Role</th>
                  <th className="text-left p-3 font-semibold">Department</th>
                  <th className="text-left p-3 font-semibold">Status</th>
                  <th className="text-left p-3 font-semibold">Last Login</th>
                  <th className="text-left p-3 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="border-b hover:bg-gray-50">
                    <td className="p-3">
                      <input
                        type="checkbox"
                        className="rounded"
                        checked={selectedUsers.includes(user.id)}
                        onChange={() => handleUserSelect(user.id)}
                      />
                    </td>
                    <td className="p-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                          <Users className="h-4 w-4 text-gray-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.phone}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3 text-gray-900">{user.email}</td>
                    <td className="p-3">
                      <Badge className={getRoleColor(user.role)}>
                        {user.role}
                      </Badge>
                    </td>
                    <td className="p-3 text-gray-900">{user.department}</td>
                    <td className="p-3">
                      <Badge className={getStatusColor(user.status)}>
                        {user.status}
                      </Badge>
                    </td>
                    <td className="p-3 text-gray-500">{user.lastLogin}</td>
                    <td className="p-3">
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit3 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4" />
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

      {/* Add User Modal */}
      {showAddUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md mx-4">
            <CardHeader>
              <CardTitle>Add New User</CardTitle>
              <CardDescription>Create a new user account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newUser.name}
                  onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newUser.email}
                  onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newUser.role}
                  onChange={(e) => setNewUser({...newUser, role: e.target.value as UserRole})}
                >
                  <option value="Teacher">Teacher</option>
                  <option value="Principal">Principal</option>
                  <option value="Bursar">Bursar</option>
                  <option value="IT Support">IT Support</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newUser.department}
                  onChange={(e) => setNewUser({...newUser, department: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newUser.phone}
                  onChange={(e) => setNewUser({...newUser, phone: e.target.value})}
                />
              </div>
              <div className="flex space-x-2 pt-4">
                <Button onClick={handleAddUser} className="flex-1">
                  <Check className="h-4 w-4 mr-2" />
                  Add User
                </Button>
                <Button variant="outline" onClick={() => setShowAddUser(false)} className="flex-1">
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Selected Users Actions */}
      {selectedUsers.length > 0 && (
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-blue-900">
                  {selectedUsers.length} user(s) selected
                </span>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Shield className="h-4 w-4 mr-2" />
                  Change Role
                </Button>
                <Button variant="outline" size="sm">
                  <UserX className="h-4 w-4 mr-2" />
                  Deactivate
                </Button>
                <Button variant="outline" size="sm" onClick={() => setSelectedUsers([])}>
                  <X className="h-4 w-4 mr-2" />
                  Clear Selection
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}