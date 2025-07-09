import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

const initialRates = [
  { type: 'NSSF', rate: 10, effective: '2024-01-01' },
  { type: 'PAYE', rate: 30, effective: '2024-01-01' },
];

export default function RatesSetupSection() {
  const [rates, setRates] = useState(initialRates);
  const [showAdd, setShowAdd] = useState(false);
  const [newRate, setNewRate] = useState({ type: '', rate: '', effective: '' });

  const handleAdd = () => {
    setRates([...rates, { type: newRate.type, rate: Number(newRate.rate), effective: newRate.effective }]);
    setShowAdd(false);
    setNewRate({ type: '', rate: '', effective: '' });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>NSSF & PAYE Rates</CardTitle>
        <CardDescription>Set up NSSF and PAYE rates with effective dates.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex justify-between items-center">
          <span className="font-semibold">Rates</span>
          <Dialog open={showAdd} onOpenChange={setShowAdd}>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline" onClick={() => setShowAdd(true)}>Add Rate</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Rate</DialogTitle>
              </DialogHeader>
              <Input placeholder="Type (NSSF or PAYE)" value={newRate.type} onChange={e => setNewRate({ ...newRate, type: e.target.value })} className="mb-2" />
              <Input placeholder="Rate (%)" type="number" value={newRate.rate} onChange={e => setNewRate({ ...newRate, rate: e.target.value })} className="mb-2" />
              <Input placeholder="Effective Date" type="date" value={newRate.effective} onChange={e => setNewRate({ ...newRate, effective: e.target.value })} />
              <DialogFooter>
                <Button onClick={handleAdd} disabled={!newRate.type || !newRate.rate || !newRate.effective}>Add</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <table className="w-full text-sm mb-4">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2 font-medium">Type</th>
              <th className="text-left p-2 font-medium">Rate (%)</th>
              <th className="text-left p-2 font-medium">Effective Date</th>
            </tr>
          </thead>
          <tbody>
            {rates.map((r, idx) => (
              <tr key={idx} className="border-b">
                <td className="p-2">{r.type}</td>
                <td className="p-2">{r.rate}</td>
                <td className="p-2">{r.effective}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
} 