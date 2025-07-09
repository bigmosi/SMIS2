import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

const initialContracts = [
  { type: 'Permanent', salary: 1200000 },
  { type: 'Contract', salary: 900000 },
  { type: 'Casual', salary: 500000 },
];

export default function PayrollSetupSection() {
  const [contracts, setContracts] = useState(initialContracts);
  const [showAdd, setShowAdd] = useState(false);
  const [newContract, setNewContract] = useState({ type: '', salary: '' });
  const [processing, setProcessing] = useState(false);
  const [payrollGenerated, setPayrollGenerated] = useState(false);

  const handleAdd = () => {
    setContracts([...contracts, { type: newContract.type, salary: Number(newContract.salary) }]);
    setShowAdd(false);
    setNewContract({ type: '', salary: '' });
  };

  const handleProcess = () => {
    setProcessing(true);
    setTimeout(() => {
      setPayrollGenerated(true);
      setProcessing(false);
    }, 1500);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payroll Setup</CardTitle>
        <CardDescription>Set up payroll by contract type and monthly salary.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex justify-between items-center">
          <span className="font-semibold">Contract Types</span>
          <Dialog open={showAdd} onOpenChange={setShowAdd}>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline" onClick={() => setShowAdd(true)}>Add Contract Type</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Contract Type</DialogTitle>
              </DialogHeader>
              <Input placeholder="Type (e.g. Permanent)" value={newContract.type} onChange={e => setNewContract({ ...newContract, type: e.target.value })} className="mb-2" />
              <Input placeholder="Monthly Salary" type="number" value={newContract.salary} onChange={e => setNewContract({ ...newContract, salary: e.target.value })} />
              <DialogFooter>
                <Button onClick={handleAdd} disabled={!newContract.type || !newContract.salary}>Add</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <table className="w-full text-sm mb-4">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2 font-medium">Type</th>
              <th className="text-left p-2 font-medium">Monthly Salary</th>
            </tr>
          </thead>
          <tbody>
            {contracts.map((c, idx) => (
              <tr key={idx} className="border-b">
                <td className="p-2">{c.type}</td>
                <td className="p-2">{c.salary.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button onClick={handleProcess} disabled={processing} className="mt-2 w-full">
          {processing ? 'Processing...' : 'PROCESS'}
        </Button>
        {payrollGenerated && <div className="mt-4 text-green-600 font-semibold">Payroll generated successfully (demo)!</div>}
      </CardContent>
    </Card>
  );
} 