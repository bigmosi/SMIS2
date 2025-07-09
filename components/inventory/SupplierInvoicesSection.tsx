import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

const initialInvoices = [
  { supplier: 'Stationery World', item: 'Printer Paper', quantity: 10, total: 250000 },
  { supplier: 'Tech Supplies Ltd', item: 'Whiteboard Marker', quantity: 20, total: 100000 },
];

export default function SupplierInvoicesSection() {
  const [invoices, setInvoices] = useState(initialInvoices);
  const [showAdd, setShowAdd] = useState(false);
  const [newInvoice, setNewInvoice] = useState({ supplier: '', item: '', quantity: '', total: '' });

  const handleAdd = () => {
    setInvoices([...invoices, { ...newInvoice, quantity: Number(newInvoice.quantity), total: Number(newInvoice.total) }]);
    setShowAdd(false);
    setNewInvoice({ supplier: '', item: '', quantity: '', total: '' });
  };

  const handleDelete = (idx: number) => {
    setInvoices(invoices.filter((_, i) => i !== idx));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Supplier Invoices (Incoming Stock)</CardTitle>
        <CardDescription>Capture supplier invoices for incoming stock.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex justify-between items-center">
          <span className="font-semibold">Invoices</span>
          <Dialog open={showAdd} onOpenChange={setShowAdd}>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline" onClick={() => setShowAdd(true)}>Add Invoice</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Invoice</DialogTitle>
              </DialogHeader>
              <Input placeholder="Supplier" value={newInvoice.supplier} onChange={e => setNewInvoice({ ...newInvoice, supplier: e.target.value })} className="mb-2" />
              <Input placeholder="Item" value={newInvoice.item} onChange={e => setNewInvoice({ ...newInvoice, item: e.target.value })} className="mb-2" />
              <Input placeholder="Quantity" type="number" value={newInvoice.quantity} onChange={e => setNewInvoice({ ...newInvoice, quantity: e.target.value })} className="mb-2" />
              <Input placeholder="Total" type="number" value={newInvoice.total} onChange={e => setNewInvoice({ ...newInvoice, total: e.target.value })} />
              <DialogFooter>
                <Button onClick={handleAdd} disabled={!newInvoice.supplier || !newInvoice.item || !newInvoice.quantity || !newInvoice.total}>Add</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <table className="w-full text-sm mb-4">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2 font-medium">Supplier</th>
              <th className="text-left p-2 font-medium">Item</th>
              <th className="text-left p-2 font-medium">Quantity</th>
              <th className="text-left p-2 font-medium">Total</th>
              <th className="text-left p-2 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv, idx) => (
              <tr key={idx} className="border-b">
                <td className="p-2">{inv.supplier}</td>
                <td className="p-2">{inv.item}</td>
                <td className="p-2">{inv.quantity}</td>
                <td className="p-2">{inv.total.toLocaleString()}</td>
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