import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

const initialTransfers = [
  { item: 'Printer Paper', quantity: 5, branch: 'Branch B' },
  { item: 'Whiteboard Marker', quantity: 10, branch: 'Branch C' },
];

export default function BranchTransfersSection() {
  const [transfers, setTransfers] = useState(initialTransfers);
  const [showAdd, setShowAdd] = useState(false);
  const [newTransfer, setNewTransfer] = useState({ item: '', quantity: '', branch: '' });
  const [printing, setPrinting] = useState<number | null>(null);

  const handleAdd = () => {
    setTransfers([...transfers, { ...newTransfer, quantity: Number(newTransfer.quantity) }]);
    setShowAdd(false);
    setNewTransfer({ item: '', quantity: '', branch: '' });
  };

  const handleDelete = (idx: number) => {
    setTransfers(transfers.filter((_, i) => i !== idx));
  };

  const handlePrint = (idx: number) => {
    setPrinting(idx);
    setTimeout(() => setPrinting(null), 1200); // Simulate print
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Branch Transfers</CardTitle>
        <CardDescription>Capture stock released to other branches and print delivery notes.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex justify-between items-center">
          <span className="font-semibold">Transfers</span>
          <Dialog open={showAdd} onOpenChange={setShowAdd}>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline" onClick={() => setShowAdd(true)}>Add Transfer</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Branch Transfer</DialogTitle>
              </DialogHeader>
              <Input placeholder="Item" value={newTransfer.item} onChange={e => setNewTransfer({ ...newTransfer, item: e.target.value })} className="mb-2" />
              <Input placeholder="Quantity" type="number" value={newTransfer.quantity} onChange={e => setNewTransfer({ ...newTransfer, quantity: e.target.value })} className="mb-2" />
              <Input placeholder="Branch" value={newTransfer.branch} onChange={e => setNewTransfer({ ...newTransfer, branch: e.target.value })} />
              <DialogFooter>
                <Button onClick={handleAdd} disabled={!newTransfer.item || !newTransfer.quantity || !newTransfer.branch}>Add</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm mb-4 min-w-[600px]">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2 font-medium">Item</th>
                <th className="text-left p-2 font-medium">Quantity</th>
                <th className="text-left p-2 font-medium">Branch</th>
                <th className="text-left p-2 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {transfers.map((t, idx) => (
                <tr key={idx} className="border-b">
                  <td className="p-2">{t.item}</td>
                  <td className="p-2">{t.quantity}</td>
                  <td className="p-2">{t.branch}</td>
                  <td className="p-2 space-x-2">
                    <Button size="sm" variant="outline" onClick={() => handlePrint(idx)} disabled={printing === idx}>{printing === idx ? 'Printing...' : 'Print Note'}</Button>
                    <Button size="sm" variant="destructive" onClick={() => handleDelete(idx)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
} 