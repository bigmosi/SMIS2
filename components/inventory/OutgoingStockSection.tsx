import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

const initialOutgoing = [
  { item: 'Printer Paper', quantity: 2, recipient: 'Admin Office' },
  { item: 'Whiteboard Marker', quantity: 5, recipient: 'Class P.5' },
];

export default function OutgoingStockSection() {
  const [outgoing, setOutgoing] = useState(initialOutgoing);
  const [showAdd, setShowAdd] = useState(false);
  const [newOut, setNewOut] = useState({ item: '', quantity: '', recipient: '' });

  const handleAdd = () => {
    setOutgoing([...outgoing, { ...newOut, quantity: Number(newOut.quantity) }]);
    setShowAdd(false);
    setNewOut({ item: '', quantity: '', recipient: '' });
  };

  const handleDelete = (idx: number) => {
    setOutgoing(outgoing.filter((_, i) => i !== idx));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Outgoing Stock</CardTitle>
        <CardDescription>Capture items released (outgoing stock).</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex justify-between items-center">
          <span className="font-semibold">Outgoing Stock</span>
          <Dialog open={showAdd} onOpenChange={setShowAdd}>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline" onClick={() => setShowAdd(true)}>Add Outgoing</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Outgoing Stock</DialogTitle>
              </DialogHeader>
              <Input placeholder="Item" value={newOut.item} onChange={e => setNewOut({ ...newOut, item: e.target.value })} className="mb-2" />
              <Input placeholder="Quantity" type="number" value={newOut.quantity} onChange={e => setNewOut({ ...newOut, quantity: e.target.value })} className="mb-2" />
              <Input placeholder="Recipient" value={newOut.recipient} onChange={e => setNewOut({ ...newOut, recipient: e.target.value })} />
              <DialogFooter>
                <Button onClick={handleAdd} disabled={!newOut.item || !newOut.quantity || !newOut.recipient}>Add</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <table className="w-full text-sm mb-4">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2 font-medium">Item</th>
              <th className="text-left p-2 font-medium">Quantity</th>
              <th className="text-left p-2 font-medium">Recipient</th>
              <th className="text-left p-2 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {outgoing.map((o, idx) => (
              <tr key={idx} className="border-b">
                <td className="p-2">{o.item}</td>
                <td className="p-2">{o.quantity}</td>
                <td className="p-2">{o.recipient}</td>
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