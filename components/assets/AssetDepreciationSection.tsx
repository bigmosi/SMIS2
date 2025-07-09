import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const demoAssets = [
  { asset: 'Dell Laptop', cost: 2500000, purchaseDate: '2023-01-15', years: 1, rate: 20 },
  { asset: 'Generator', cost: 5000000, purchaseDate: '2022-09-10', years: 2, rate: 10 },
];

function calcDepreciation(cost: number, years: number, rate: number) {
  // Simple straight-line depreciation
  return Math.max(0, Math.round(cost * (1 - (rate / 100) * years)));
}

export default function AssetDepreciationSection() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 1200); // Simulate download
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Asset Depreciation</CardTitle>
        <CardDescription>Manage and view asset depreciation.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm mb-4 min-w-[600px]">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2 font-medium">Asset</th>
                <th className="text-left p-2 font-medium">Cost</th>
                <th className="text-left p-2 font-medium">Purchase Date</th>
                <th className="text-left p-2 font-medium">Years</th>
                <th className="text-left p-2 font-medium">Depreciation Rate (%)</th>
                <th className="text-left p-2 font-medium">Current Value</th>
              </tr>
            </thead>
            <tbody>
              {demoAssets.map((a, idx) => (
                <tr key={idx} className="border-b">
                  <td className="p-2">{a.asset}</td>
                  <td className="p-2">{a.cost.toLocaleString()}</td>
                  <td className="p-2">{a.purchaseDate}</td>
                  <td className="p-2">{a.years}</td>
                  <td className="p-2">{a.rate}</td>
                  <td className="p-2">{calcDepreciation(a.cost, a.years, a.rate).toLocaleString()}</td>
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