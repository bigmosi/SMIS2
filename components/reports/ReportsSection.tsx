import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const demoReports = [
  { name: 'Attendance Report', date: 'Jul 1, 2025', summary: 'Summary of student attendance for the term.' },
  { name: 'Exam Results', date: 'Jun 28, 2025', summary: 'Detailed exam results for all classes.' },
  { name: 'Fee Statement', date: 'Jun 20, 2025', summary: 'Fee payment and outstanding balances.' },
  { name: 'Performance Analysis', date: 'Jun 15, 2025', summary: 'Academic performance analysis by class.' },
];

export default function ReportsSection() {
  const { toast } = useToast();
  const [viewReport, setViewReport] = useState(null as null | typeof demoReports[0]);
  const [showGenerate, setShowGenerate] = useState(false);
  const [newReport, setNewReport] = useState({ name: '', type: '', from: '', to: '' });

  const handleDownload = (reportName: string) => {
    toast({ title: `Downloading ${reportName}...` });
  };

  const handleGenerate = () => {
    toast({ title: `Report '${newReport.name}' generated!` });
    setShowGenerate(false);
    setNewReport({ name: '', type: '', from: '', to: '' });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Reports</CardTitle>
        <CardDescription>Download and view school reports</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex justify-end">
          <Dialog open={showGenerate} onOpenChange={setShowGenerate}>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline" onClick={() => setShowGenerate(true)}>
                Generate New Report
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Generate New Report</DialogTitle>
                <DialogDescription>Fill in the details to generate a custom report.</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Report Name</label>
                  <Input value={newReport.name} onChange={e => setNewReport({ ...newReport, name: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Type</label>
                  <Input value={newReport.type} onChange={e => setNewReport({ ...newReport, type: e.target.value })} placeholder="e.g. Attendance, Fee, Performance" />
                </div>
                <div className="flex space-x-2">
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-1">From</label>
                    <Input type="date" value={newReport.from} onChange={e => setNewReport({ ...newReport, from: e.target.value })} />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-1">To</label>
                    <Input type="date" value={newReport.to} onChange={e => setNewReport({ ...newReport, to: e.target.value })} />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleGenerate} disabled={!newReport.name || !newReport.type || !newReport.from || !newReport.to}>Generate</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className="space-y-4">
          {demoReports.map((report, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded border">
              <div>
                <p className="font-medium text-gray-900">{report.name}</p>
                <p className="text-xs text-gray-600">{report.date}</p>
              </div>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" onClick={() => handleDownload(report.name)}>
                  Download
                </Button>
                <Dialog open={viewReport === report} onOpenChange={open => setViewReport(open ? report : null)}>
                  <DialogTrigger asChild>
                    <Button size="sm" variant="secondary" onClick={() => setViewReport(report)}>
                      View
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{report.name}</DialogTitle>
                      <DialogDescription>{report.date}</DialogDescription>
                    </DialogHeader>
                    <div className="py-4 text-gray-700">
                      {report.summary}
                    </div>
                    <DialogFooter>
                      <Button onClick={() => setViewReport(null)}>Close</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 