import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

const initialCodes = [
  { code: 'OT', type: 'Earning', description: 'Overtime' },
  { code: 'ADV', type: 'Deduction', description: 'Advance' },
];

export default function EarningsDeductionsCodesSection() {
  const [codes, setCodes] = useState(initialCodes);
  const [showAdd, setShowAdd] = useState(false);
  const [newCode, setNewCode] = useState({ code: '', type: 'Earning', description: '' });

  const handleAdd = () => {
    setCodes([...codes, newCode]);
    setShowAdd(false);
    setNewCode({ code: '', type: 'Earning', description: '' });
  };

  const handleDelete = (idx: number) => {
    setCodes(codes.filter((_, i) => i !== idx));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Earnings & Deductions Codes</CardTitle>
        <CardDescription>Define codes for earnings and deductions.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex justify-between items-center">
          <span className="font-semibold">Codes</span>
          <Dialog open={showAdd} onOpenChange={setShowAdd}>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline" onClick={() => setShowAdd(true)}>Add Code</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Code</DialogTitle>
              </DialogHeader>
              <Input placeholder="Code (e.g. OT)" value={newCode.code} onChange={e => setNewCode({ ...newCode, code: e.target.value })} className="mb-2" />
              <select className="w-full border rounded p-2 mb-2" value={newCode.type} onChange={e => setNewCode({ ...newCode, type: e.target.value })}>
                <option value="Earning">Earning</option>
                <option value="Deduction">Deduction</option>
              </select>
              <Input placeholder="Description" value={newCode.description} onChange={e => setNewCode({ ...newCode, description: e.target.value })} />
              <DialogFooter>
                <Button onClick={handleAdd} disabled={!newCode.code || !newCode.description}>Add</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <table className="w-full text-sm mb-4">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2 font-medium">Code</th>
              <th className="text-left p-2 font-medium">Type</th>
              <th className="text-left p-2 font-medium">Description</th>
              <th className="text-left p-2 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {codes.map((c, idx) => (
              <tr key={idx} className="border-b">
                <td className="p-2">{c.code}</td>
                <td className="p-2">{c.type}</td>
                <td className="p-2">{c.description}</td>
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