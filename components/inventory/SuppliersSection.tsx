import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

const initialSuppliers = [
  { name: 'Stationery World', accountCode: 'SUP001' },
  { name: 'Tech Supplies Ltd', accountCode: 'SUP002' },
];

export default function SuppliersSection() {
  const [suppliers, setSuppliers] = useState(initialSuppliers);
  const [showAdd, setShowAdd] = useState(false);
  const [newSupplier, setNewSupplier] = useState({ name: '', accountCode: '' });

  const handleAdd = () => {
    setSuppliers([...suppliers, newSupplier]);
    setShowAdd(false);
    setNewSupplier({ name: '', accountCode: '' });
  };

  const handleDelete = (idx: number) => {
    setSuppliers(suppliers.filter((_, i) => i !== idx));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Suppliers</CardTitle>
        <CardDescription>Register suppliers and allocate account codes.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex justify-between items-center">
          <span className="font-semibold">Suppliers</span>
          <Dialog open={showAdd} onOpenChange={setShowAdd}>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline" onClick={() => setShowAdd(true)}>Add Supplier</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Supplier</DialogTitle>
              </DialogHeader>
              <Input placeholder="Supplier Name" value={newSupplier.name} onChange={e => setNewSupplier({ ...newSupplier, name: e.target.value })} className="mb-2" />
              <Input placeholder="Account Code" value={newSupplier.accountCode} onChange={e => setNewSupplier({ ...newSupplier, accountCode: e.target.value })} />
              <DialogFooter>
                <Button onClick={handleAdd} disabled={!newSupplier.name || !newSupplier.accountCode}>Add</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <table className="w-full text-sm mb-4">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2 font-medium">Name</th>
              <th className="text-left p-2 font-medium">Account Code</th>
              <th className="text-left p-2 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((s, idx) => (
              <tr key={idx} className="border-b">
                <td className="p-2">{s.name}</td>
                <td className="p-2">{s.accountCode}</td>
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