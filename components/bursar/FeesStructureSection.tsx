import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

const initialFees = [
  { class: 'P.5', term: 'Term 1', amount: 350000 },
  { class: 'P.6', term: 'Term 1', amount: 370000 },
];

export default function FeesStructureSection() {
  const [fees, setFees] = useState(initialFees);
  const [showAdd, setShowAdd] = useState(false);
  const [newFee, setNewFee] = useState({ class: '', term: '', amount: '' });

  const handleAdd = () => {
    setFees([...fees, { ...newFee, amount: Number(newFee.amount) }]);
    setShowAdd(false);
    setNewFee({ class: '', term: '', amount: '' });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Fees Structure</CardTitle>
        <CardDescription>Define and manage fees structure per class and term.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex justify-between items-center">
          <span className="font-semibold">Fees Structure</span>
          <Dialog open={showAdd} onOpenChange={setShowAdd}>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline" onClick={() => setShowAdd(true)}>Add Fee</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Fee</DialogTitle>
              </DialogHeader>
              <Input placeholder="Class" value={newFee.class} onChange={e => setNewFee({ ...newFee, class: e.target.value })} className="mb-2" />
              <Input placeholder="Term" value={newFee.term} onChange={e => setNewFee({ ...newFee, term: e.target.value })} className="mb-2" />
              <Input placeholder="Amount" type="number" value={newFee.amount} onChange={e => setNewFee({ ...newFee, amount: e.target.value })} />
              <DialogFooter>
                <Button onClick={handleAdd} disabled={!newFee.class || !newFee.term || !newFee.amount}>Add</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <table className="w-full text-sm mb-4">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2 font-medium">Class</th>
              <th className="text-left p-2 font-medium">Term</th>
              <th className="text-left p-2 font-medium">Amount</th>
            </tr>
          </thead>
          <tbody>
            {fees.map((f, idx) => (
              <tr key={idx} className="border-b">
                <td className="p-2">{f.class}</td>
                <td className="p-2">{f.term}</td>
                <td className="p-2">{f.amount.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
} 