import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const initialBalances = [
  { student: 'John Doe', balance: 120000 },
  { student: 'Mary Smith', balance: 50000 },
];

export default function FeesBalanceListSection() {
  const [balances] = useState(initialBalances);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Fees Balance List</CardTitle>
        <CardDescription>List of students with outstanding balances.</CardDescription>
      </CardHeader>
      <CardContent>
        <table className="w-full text-sm mb-4 min-w-[400px]">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2 font-medium">Student</th>
              <th className="text-left p-2 font-medium">Outstanding Balance</th>
            </tr>
          </thead>
          <tbody>
            {balances.map((b, idx) => (
              <tr key={idx} className="border-b">
                <td className="p-2">{b.student}</td>
                <td className="p-2">{b.balance.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
} 