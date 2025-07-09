import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const initialMissing = [
  { name: 'Eve Adams', department: 'Mathematics', reason: 'New Hire' },
  { name: 'Frank Green', department: 'Science', reason: 'Transferred' },
];

export default function MissingStaffSection() {
  const [missing, setMissing] = useState(initialMissing);
  const [added, setAdded] = useState<string[]>([]);

  const handleAdd = (name: string) => {
    setAdded([...added, name]);
    setMissing(missing.filter(m => m.name !== name));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Missing Staff on Payroll</CardTitle>
        <CardDescription>Automatically search and add missing staff to payroll.</CardDescription>
      </CardHeader>
      <CardContent>
        <table className="w-full text-sm mb-4">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2 font-medium">Name</th>
              <th className="text-left p-2 font-medium">Department</th>
              <th className="text-left p-2 font-medium">Reason</th>
              <th className="text-left p-2 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {missing.map((m, idx) => (
              <tr key={idx} className="border-b">
                <td className="p-2">{m.name}</td>
                <td className="p-2">{m.department}</td>
                <td className="p-2">{m.reason}</td>
                <td className="p-2">
                  <Button size="sm" onClick={() => handleAdd(m.name)}>Add to Payroll</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {added.length > 0 && (
          <div className="mt-4 text-green-600 font-semibold">Added to payroll: {added.join(', ')}</div>
        )}
      </CardContent>
    </Card>
  );
} 