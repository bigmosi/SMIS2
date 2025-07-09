import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

const initialDeductions = [
  { employee: 'Alice Smith', type: 'Advance', amount: 200000 },
  { employee: 'Bob Johnson', type: 'Loan', amount: 150000 },
];

export default function DeductionsSection() {
  const [deductions, setDeductions] = useState(initialDeductions);
  const [showAdd, setShowAdd] = useState(false);
  const [newDeduction, setNewDeduction] = useState({ employee: '', type: '', amount: '' });

  const handleAdd = () => {
    setDeductions([...deductions, { ...newDeduction, amount: Number(newDeduction.amount) }]);
    setShowAdd(false);
    setNewDeduction({ employee: '', type: '', amount: '' });
  };

  const handleDelete = (idx: number) => {
    setDeductions(deductions.filter((_, i) => i !== idx));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Deductions Management</CardTitle>
        <CardDescription>Manage advances and other deductions per employee.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex justify-between items-center">
          <span className="font-semibold">Deductions</span>
          <Dialog open={showAdd} onOpenChange={setShowAdd}>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline" onClick={() => setShowAdd(true)}>Add Deduction</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Deduction</DialogTitle>
              </DialogHeader>
              <Input placeholder="Employee Name" value={newDeduction.employee} onChange={e => setNewDeduction({ ...newDeduction, employee: e.target.value })} className="mb-2" />
              <Input placeholder="Type (e.g. Advance)" value={newDeduction.type} onChange={e => setNewDeduction({ ...newDeduction, type: e.target.value })} className="mb-2" />
              <Input placeholder="Amount" type="number" value={newDeduction.amount} onChange={e => setNewDeduction({ ...newDeduction, amount: e.target.value })} />
              <DialogFooter>
                <Button onClick={handleAdd} disabled={!newDeduction.employee || !newDeduction.type || !newDeduction.amount}>Add</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <table className="w-full text-sm mb-4">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2 font-medium">Employee</th>
              <th className="text-left p-2 font-medium">Type</th>
              <th className="text-left p-2 font-medium">Amount</th>
              <th className="text-left p-2 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {deductions.map((d, idx) => (
              <tr key={idx} className="border-b">
                <td className="p-2">{d.employee}</td>
                <td className="p-2">{d.type}</td>
                <td className="p-2">{d.amount.toLocaleString()}</td>
                <td className="p-2">
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(idx)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
} 