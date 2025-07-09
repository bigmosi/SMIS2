import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const demoPayroll = [
  { name: 'Alice Smith', gross: 1200000, deductions: 200000, net: 1000000 },
  { name: 'Bob Johnson', gross: 900000, deductions: 150000, net: 750000 },
];

export default function PayrollProcessingSection() {
  const [processing, setProcessing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleProcess = () => {
    setProcessing(true);
    setTimeout(() => {
      setShowResults(true);
      setProcessing(false);
    }, 1500);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payroll Processing</CardTitle>
        <CardDescription>Process payroll and generate payment sheets, pay slips, and schedules.</CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={handleProcess} disabled={processing} className="mb-4 w-full">
          {processing ? 'Processing...' : 'PROCESS'}
        </Button>
        {showResults && (
          <div className="space-y-4">
            <div className="font-semibold text-green-700">Payroll processed successfully (demo)!</div>
            <table className="w-full text-sm mb-4">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2 font-medium">Name</th>
                  <th className="text-left p-2 font-medium">Gross</th>
                  <th className="text-left p-2 font-medium">Deductions</th>
                  <th className="text-left p-2 font-medium">Net Pay</th>
                </tr>
              </thead>
              <tbody>
                {demoPayroll.map((p, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="p-2">{p.name}</td>
                    <td className="p-2">{p.gross.toLocaleString()}</td>
                    <td className="p-2">{p.deductions.toLocaleString()}</td>
                    <td className="p-2">{p.net.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="space-y-2">
              <div>Download: <Button size="sm" variant="outline">Payment Sheet</Button> <Button size="sm" variant="outline">Pay Slips</Button> <Button size="sm" variant="outline">EFT List</Button> <Button size="sm" variant="outline">NSSF Schedule</Button> <Button size="sm" variant="outline">PAYE Schedule</Button></div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
} 