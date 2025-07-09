'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  GraduationCap, 
  Eye,
  EyeOff,
  LogIn
} from 'lucide-react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Demo user credentials with their roles
  const demoUsers = {
    'admin@school.edu': { password: 'admin123', role: 'admin', name: 'System Administrator' },
    'bursar@school.edu': { password: 'bursar123', role: 'bursar', name: 'Finance Manager' },
    'headteacher@school.edu': { password: 'head123', role: 'head-teacher', name: 'Head Teacher' },
    'teacher@school.edu': { password: 'teacher123', role: 'teacher', name: 'Mathematics Teacher' },
    'parent@gmail.com': { password: 'parent123', role: 'parent', name: 'Parent Portal' },
    'hrms@school.edu': { password: 'hrms123', role: 'hrms', name: 'HR Manager' },
    'inventory@school.edu': { password: 'inventory123', role: 'inventory', name: 'Inventory Manager' },
    'asset@school.edu': { password: 'asset123', role: 'assets', name: 'Asset Manager' },
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Simulate authentication process
    setTimeout(() => {
      const user = demoUsers[email as keyof typeof demoUsers];
      
      if (user && user.password === password) {
        // Successful login - redirect to appropriate dashboard
        window.location.href = `/dashboard/${user.role}`;
      } else {
        // Invalid credentials
        setError('Invalid email or password. Please try again.');
        setIsLoading(false);
      }
    }, 1000);
  };

  const useDemoCredentials = (userEmail: string) => {
    setEmail(userEmail);
    setPassword(demoUsers[userEmail as keyof typeof demoUsers].password);
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="flex items-center space-x-3">
              <GraduationCap className="h-12 w-12 text-blue-600" />
              <h1 className="text-4xl font-bold text-gray-900">SMIS</h1>
            </div>
          </div>
          <p className="text-gray-600">School Management Information System</p>
        </div>

        {/* Login Card */}
        <Card className="shadow-xl">
          <CardHeader className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-blue-500 flex items-center justify-center mb-4">
              <LogIn className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
            <CardDescription>
              Sign in to access your dashboard
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-12 pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-12 px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-500" />
                    )}
                  </Button>
                </div>
              </div>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    id="remember"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <Label htmlFor="remember" className="text-sm text-gray-600">
                    Remember me
                  </Label>
                </div>
                <Button variant="link" className="text-sm text-blue-600 hover:text-blue-800">
                  Forgot password?
                </Button>
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium"
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-3 font-medium">Demo Accounts:</p>
              <div className="space-y-2">
                {Object.entries(demoUsers).map(([userEmail, userData]) => (
                  <div key={userEmail} className="flex items-center justify-between p-2 bg-white rounded border">
                    <div className="text-xs">
                      <p className="font-medium text-gray-900">{userData.name}</p>
                      <p className="text-gray-500">{userEmail}</p>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => useDemoCredentials(userEmail)}
                      className="text-xs"
                    >
                      Use
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-600">
          <p>© 2025 SMIS. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}