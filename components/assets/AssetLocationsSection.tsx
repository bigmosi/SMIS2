import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

const initialLocations = [
  { name: 'Main Campus' },
  { name: 'Branch B' },
];

export default function AssetLocationsSection() {
  const [locations, setLocations] = useState(initialLocations);
  const [showAdd, setShowAdd] = useState(false);
  const [newLocation, setNewLocation] = useState({ name: '' });

  const handleAdd = () => {
    setLocations([...locations, newLocation]);
    setShowAdd(false);
    setNewLocation({ name: '' });
  };

  const handleDelete = (idx: number) => {
    setLocations(locations.filter((_, i) => i !== idx));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Asset Locations</CardTitle>
        <CardDescription>Capture and manage asset locations.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex justify-between items-center">
          <span className="font-semibold">Locations</span>
          <Dialog open={showAdd} onOpenChange={setShowAdd}>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline" onClick={() => setShowAdd(true)}>Add Location</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Location</DialogTitle>
              </DialogHeader>
              <Input placeholder="Location Name" value={newLocation.name} onChange={e => setNewLocation({ name: e.target.value })} />
              <DialogFooter>
                <Button onClick={handleAdd} disabled={!newLocation.name}>Add</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <table className="w-full text-sm mb-4">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2 font-medium">Name</th>
              <th className="text-left p-2 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((loc, idx) => (
              <tr key={idx} className="border-b">
                <td className="p-2">{loc.name}</td>
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