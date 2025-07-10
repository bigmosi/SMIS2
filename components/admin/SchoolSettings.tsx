"use client";
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { School, Calendar, Clock, BookOpen, MapPin, Globe, Mail, Settings } from 'lucide-react';

export function SchoolSettings() {
  const [schoolInfo, setSchoolInfo] = useState({
    name: 'Kampala International School',
    motto: 'Excellence in Education',
    address: 'Plot 123, Kampala Road, Uganda',
    email: 'info@kis.edu.ug',
    phone: '+256 412 345678',
    website: 'www.kis.edu.ug',
    academicYear: '2023-2024',
    timezone: 'Africa/Kampala',
    currency: 'UGX',
    enableOnlinePayments: true,
    enableSmsNotifications: true,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSchoolInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (name: string, checked: boolean) => {
    setSchoolInfo(prev => ({ ...prev, [name]: checked }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setSchoolInfo(prev => ({ ...prev, [name]: value }));
  };

  const saveSettings = () => {
    // Here you would typically make an API call to save the settings
    console.log('Saving settings:', schoolInfo);
    alert('School settings saved successfully!');
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <School className="h-6 w-6 mr-2" />
            Basic School Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">School Name</Label>
              <Input
                id="name"
                name="name"
                value={schoolInfo.name}
                onChange={handleInputChange}
                placeholder="Enter school name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="motto">School Motto</Label>
              <Input
                id="motto"
                name="motto"
                value={schoolInfo.motto}
                onChange={handleInputChange}
                placeholder="Enter school motto"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="address"
                name="address"
                value={schoolInfo.address}
                onChange={handleInputChange}
                className="pl-10"
                placeholder="Enter school address"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={schoolInfo.email}
                  onChange={handleInputChange}
                  className="pl-10"
                  placeholder="Enter school email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                value={schoolInfo.phone}
                onChange={handleInputChange}
                placeholder="Enter school phone"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <div className="relative">
                <Globe className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="website"
                  name="website"
                  value={schoolInfo.website}
                  onChange={handleInputChange}
                  className="pl-10"
                  placeholder="Enter school website"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="h-6 w-6 mr-2" />
            Academic Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="academicYear">Current Academic Year</Label>
              <Input
                id="academicYear"
                name="academicYear"
                value={schoolInfo.academicYear}
                onChange={handleInputChange}
                placeholder="e.g. 2023-2024"
              />
            </div>
            <div className="space-y-2">
              <Label>Timezone</Label>
              <Select
                value={schoolInfo.timezone}
                onValueChange={(value) => handleSelectChange('timezone', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Africa/Kampala">Africa/Kampala (EAT)</SelectItem>
                  <SelectItem value="Africa/Nairobi">Africa/Nairobi (EAT)</SelectItem>
                  <SelectItem value="Africa/Johannesburg">Africa/Johannesburg (SAST)</SelectItem>
                  <SelectItem value="UTC">UTC</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Currency</Label>
            <Select
              value={schoolInfo.currency}
              onValueChange={(value) => handleSelectChange('currency', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="UGX">Ugandan Shilling (UGX)</SelectItem>
                <SelectItem value="KES">Kenyan Shilling (KES)</SelectItem>
                <SelectItem value="TZS">Tanzanian Shilling (TZS)</SelectItem>
                <SelectItem value="USD">US Dollar (USD)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Settings className="h-6 w-6 mr-2" />
            System Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label>Enable Online Payments</Label>
              <p className="text-sm text-gray-500">
                Allow parents to pay fees through online payment gateways
              </p>
            </div>
            <Switch
              checked={schoolInfo.enableOnlinePayments}
              onCheckedChange={(checked) => handleSwitchChange('enableOnlinePayments', checked)}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label>Enable SMS Notifications</Label>
              <p className="text-sm text-gray-500">
                Send important notifications via SMS to parents and staff
              </p>
            </div>
            <Switch
              checked={schoolInfo.enableSmsNotifications}
              onCheckedChange={(checked) => handleSwitchChange('enableSmsNotifications', checked)}
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button onClick={saveSettings} className="bg-red-600 hover:bg-red-700">
          Save Settings
        </Button>
      </div>
    </div>
  );
}