import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const demoMovements = [
  { asset: 'Dell Laptop', from: 'Main Campus', to: 'Branch B', date: '2024-06-10' },
  { asset: 'Generator', from: 'Branch B', to: 'Main Campus', date: '2024-07-01' },
];

export default function AssetMovementReportsSection() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 1200); // Simulate download
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Asset Movement Reports</CardTitle>
        <CardDescription>Generate and download asset movement reports.</CardDescription>
      </CardHeader>
      <CardContent>
        <table className="w-full text-sm mb-4">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2 font-medium">Asset</th>
              <th className="text-left p-2 font-medium">From</th>
              <th className="text-left p-2 font-medium">To</th>
              <th className="text-left p-2 font-medium">Date</th>
            </tr>
          </thead>
          <tbody>
            {demoMovements.map((m, idx) => (
              <tr key={idx} className="border-b">
                <td className="p-2">{m.asset}</td>
                <td className="p-2">{m.from}</td>
                <td className="p-2">{m.to}</td>
                <td className="p-2">{m.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button onClick={handleDownload} disabled={downloading} variant="outline">
          <Download className="h-4 w-4 mr-2" />
          {downloading ? 'Downloading...' : 'Download Report'}
        </Button>
      </CardContent>
    </Card>
  );
} 