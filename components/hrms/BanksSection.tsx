import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

const initialBanks = [
  { name: 'Bank of Africa', branch: 'Main', code: '001' },
  { name: 'Equity Bank', branch: 'City', code: '002' },
];

export default function BanksSection() {
  const [banks, setBanks] = useState(initialBanks);
  const [showAdd, setShowAdd] = useState(false);
  const [newBank, setNewBank] = useState({ name: '', branch: '', code: '' });

  const handleAdd = () => {
    setBanks([...banks, newBank]);
    setShowAdd(false);
    setNewBank({ name: '', branch: '', code: '' });
  };

  const handleDelete = (idx: number) => {
    setBanks(banks.filter((_, i) => i !== idx));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Banks</CardTitle>
        <CardDescription>Define banks and their details.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex justify-between items-center">
          <span className="font-semibold">Banks</span>
          <Dialog open={showAdd} onOpenChange={setShowAdd}>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline" onClick={() => setShowAdd(true)}>Add Bank</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Bank</DialogTitle>
              </DialogHeader>
              <Input placeholder="Bank Name" value={newBank.name} onChange={e => setNewBank({ ...newBank, name: e.target.value })} className="mb-2" />
              <Input placeholder="Branch" value={newBank.branch} onChange={e => setNewBank({ ...newBank, branch: e.target.value })} className="mb-2" />
              <Input placeholder="Bank Code" value={newBank.code} onChange={e => setNewBank({ ...newBank, code: e.target.value })} />
              <DialogFooter>
                <Button onClick={handleAdd} disabled={!newBank.name || !newBank.branch || !newBank.code}>Add</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <table className="w-full text-sm mb-4">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2 font-medium">Name</th>
              <th className="text-left p-2 font-medium">Branch</th>
              <th className="text-left p-2 font-medium">Code</th>
              <th className="text-left p-2 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {banks.map((b, idx) => (
              <tr key={idx} className="border-b">
                <td className="p-2">{b.name}</td>
                <td className="p-2">{b.branch}</td>
                <td className="p-2">{b.code}</td>
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