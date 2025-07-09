import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

const initialBills = [
  { student: 'John Doe', item: 'Tuition', amount: 350000 },
  { student: 'Mary Smith', item: 'Art Fee', amount: 20000 },
];

export default function StudentBillingSection() {
  const [bills, setBills] = useState(initialBills);
  const [showAdd, setShowAdd] = useState(false);
  const [newBill, setNewBill] = useState({ student: '', item: '', amount: '' });

  const handleAdd = () => {
    setBills([...bills, { ...newBill, amount: Number(newBill.amount) }]);
    setShowAdd(false);
    setNewBill({ student: '', item: '', amount: '' });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Student Billing</CardTitle>
        <CardDescription>View and generate student bills, including individual invoicing and discounts.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex justify-between items-center">
          <span className="font-semibold">Bills</span>
          <Dialog open={showAdd} onOpenChange={setShowAdd}>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline" onClick={() => setShowAdd(true)}>Add Bill</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Bill</DialogTitle>
              </DialogHeader>
              <Input placeholder="Student" value={newBill.student} onChange={e => setNewBill({ ...newBill, student: e.target.value })} className="mb-2" />
              <Input placeholder="Item (e.g. Tuition, Art Fee)" value={newBill.item} onChange={e => setNewBill({ ...newBill, item: e.target.value })} className="mb-2" />
              <Input placeholder="Amount" type="number" value={newBill.amount} onChange={e => setNewBill({ ...newBill, amount: e.target.value })} />
              <DialogFooter>
                <Button onClick={handleAdd} disabled={!newBill.student || !newBill.item || !newBill.amount}>Add</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <table className="w-full text-sm mb-4 min-w-[500px]">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2 font-medium">Student</th>
              <th className="text-left p-2 font-medium">Item</th>
              <th className="text-left p-2 font-medium">Amount</th>
            </tr>
          </thead>
          <tbody>
            {bills.map((b, idx) => (
              <tr key={idx} className="border-b">
                <td className="p-2">{b.student}</td>
                <td className="p-2">{b.item}</td>
                <td className="p-2">{b.amount.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
} 