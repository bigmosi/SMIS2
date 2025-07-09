import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const demoMovements = [
  { item: 'Printer Paper', inQty: 10, outQty: 7 },
  { item: 'Whiteboard Marker', inQty: 20, outQty: 15 },
];

export default function StockMovementReportsSection() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 1200); // Simulate download
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Stock Movement Reports</CardTitle>
        <CardDescription>Generate and download stock movement reports.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm mb-4 min-w-[500px]">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2 font-medium">Item</th>
                <th className="text-left p-2 font-medium">Incoming Qty</th>
                <th className="text-left p-2 font-medium">Outgoing Qty</th>
              </tr>
            </thead>
            <tbody>
              {demoMovements.map((m, idx) => (
                <tr key={idx} className="border-b">
                  <td className="p-2">{m.item}</td>
                  <td className="p-2">{m.inQty}</td>
                  <td className="p-2">{m.outQty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Button onClick={handleDownload} disabled={downloading} variant="outline">
          <Download className="h-4 w-4 mr-2" />
          {downloading ? 'Downloading...' : 'Download Report'}
        </Button>
      </CardContent>
    </Card>
  );
} 