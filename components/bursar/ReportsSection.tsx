import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const reports = [
  { name: 'Fees Collection Report', description: 'Summary of all fees collected this term.' },
  { name: 'Outstanding Balances', description: 'List of students with unpaid balances.' },
  { name: 'Student Ledgers', description: 'Detailed statements for each student.' },
  { name: 'Expenses Report', description: 'Summary of all expenses.' },
  { name: 'Budget Report', description: 'Budget and vote book summary.' },
  { name: 'Bank Reconciliation', description: 'Bank reconciliation statement.' },
  { name: 'Cash Book', description: 'Cash book for the period.' },
  { name: 'Journal Entries', description: 'All journal entries (simple format).' },
  { name: 'Audit Trail', description: 'Security and audit trail log.' },
];

export default function ReportsSection() {
  const [downloading, setDownloading] = useState<string | null>(null);

  const handleDownload = (name: string) => {
    setDownloading(name);
    setTimeout(() => setDownloading(null), 1200); // Simulate download
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Financial & Student Reports</CardTitle>
        <CardDescription>Generate and download key reports for finance and student management.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reports.map((report, idx) => (
            <div key={idx} className="flex items-center justify-between border-b pb-3">
              <div>
                <div className="font-medium">{report.name}</div>
                <div className="text-xs text-gray-500">{report.description}</div>
              </div>
              <Button size="sm" variant="outline" onClick={() => handleDownload(report.name)} disabled={downloading === report.name}>
                <Download className="h-4 w-4 mr-2" />
                {downloading === report.name ? 'Downloading...' : 'Download'}
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 