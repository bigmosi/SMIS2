import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

const initialItems = [
  { name: 'Printer Paper', price: 25000 },
  { name: 'Whiteboard Marker', price: 5000 },
];

export default function InventoryItemsSection() {
  const [items, setItems] = useState(initialItems);
  const [showAdd, setShowAdd] = useState(false);
  const [newItem, setNewItem] = useState({ name: '', price: '' });

  const handleAdd = () => {
    setItems([...items, { name: newItem.name, price: Number(newItem.price) }]);
    setShowAdd(false);
    setNewItem({ name: '', price: '' });
  };

  const handleDelete = (idx: number) => {
    setItems(items.filter((_, i) => i !== idx));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Inventory Items</CardTitle>
        <CardDescription>Register inventory items and their prices.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex justify-between items-center">
          <span className="font-semibold">Items</span>
          <Dialog open={showAdd} onOpenChange={setShowAdd}>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline" onClick={() => setShowAdd(true)}>Add Item</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Item</DialogTitle>
              </DialogHeader>
              <Input placeholder="Item Name" value={newItem.name} onChange={e => setNewItem({ ...newItem, name: e.target.value })} className="mb-2" />
              <Input placeholder="Price" type="number" value={newItem.price} onChange={e => setNewItem({ ...newItem, price: e.target.value })} />
              <DialogFooter>
                <Button onClick={handleAdd} disabled={!newItem.name || !newItem.price}>Add</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <table className="w-full text-sm mb-4">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2 font-medium">Name</th>
              <th className="text-left p-2 font-medium">Price</th>
              <th className="text-left p-2 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr key={idx} className="border-b">
                <td className="p-2">{item.name}</td>
                <td className="p-2">{item.price.toLocaleString()}</td>
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