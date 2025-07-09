import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

const categories = ['Machinery and Equipment', 'Land', 'Electrical and Electronics'];
const locations = ['Main Campus', 'Branch B'];

const initialAssets = [
  { name: 'Dell Laptop', category: 'Electrical and Electronics', location: 'Main Campus', cost: 2500000, purchaseDate: '2023-01-15' },
  { name: 'Generator', category: 'Machinery and Equipment', location: 'Branch B', cost: 5000000, purchaseDate: '2022-09-10' },
];

export default function AssetsSection() {
  const [assets, setAssets] = useState(initialAssets);
  const [showAdd, setShowAdd] = useState(false);
  const [newAsset, setNewAsset] = useState({ name: '', category: categories[0], location: locations[0], cost: '', purchaseDate: '' });

  const handleAdd = () => {
    setAssets([...assets, { ...newAsset, cost: Number(newAsset.cost) }]);
    setShowAdd(false);
    setNewAsset({ name: '', category: categories[0], location: locations[0], cost: '', purchaseDate: '' });
  };

  const handleDelete = (idx: number) => {
    setAssets(assets.filter((_, i) => i !== idx));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Assets Register</CardTitle>
        <CardDescription>Register assets with cost, purchase date, category, and location.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex justify-between items-center">
          <span className="font-semibold">Assets</span>
          <Dialog open={showAdd} onOpenChange={setShowAdd}>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline" onClick={() => setShowAdd(true)}>Add Asset</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Asset</DialogTitle>
              </DialogHeader>
              <Input placeholder="Asset Name" value={newAsset.name} onChange={e => setNewAsset({ ...newAsset, name: e.target.value })} className="mb-2" />
              <select className="w-full border rounded p-2 mb-2" value={newAsset.category} onChange={e => setNewAsset({ ...newAsset, category: e.target.value })}>
                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
              <select className="w-full border rounded p-2 mb-2" value={newAsset.location} onChange={e => setNewAsset({ ...newAsset, location: e.target.value })}>
                {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>
              <Input placeholder="Cost Price" type="number" value={newAsset.cost} onChange={e => setNewAsset({ ...newAsset, cost: e.target.value })} className="mb-2" />
              <Input placeholder="Purchase Date" type="date" value={newAsset.purchaseDate} onChange={e => setNewAsset({ ...newAsset, purchaseDate: e.target.value })} />
              <DialogFooter>
                <Button onClick={handleAdd} disabled={!newAsset.name || !newAsset.cost || !newAsset.purchaseDate}>Add</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <table className="w-full text-sm mb-4">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2 font-medium">Name</th>
              <th className="text-left p-2 font-medium">Category</th>
              <th className="text-left p-2 font-medium">Location</th>
              <th className="text-left p-2 font-medium">Cost</th>
              <th className="text-left p-2 font-medium">Purchase Date</th>
              <th className="text-left p-2 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset, idx) => (
              <tr key={idx} className="border-b">
                <td className="p-2">{asset.name}</td>
                <td className="p-2">{asset.category}</td>
                <td className="p-2">{asset.location}</td>
                <td className="p-2">{asset.cost.toLocaleString()}</td>
                <td className="p-2">{asset.purchaseDate}</td>
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