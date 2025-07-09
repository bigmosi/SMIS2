import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const demoStock = [
  { item: 'Printer Paper', counted: 3 },
  { item: 'Whiteboard Marker', counted: 5 },
];

export default function StockTakingSection() {
  const [taken, setTaken] = useState(false);

  const handleTakeStock = () => {
    setTaken(true);
    setTimeout(() => setTaken(false), 2000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Stock Taking</CardTitle>
        <CardDescription>Carry out stock taking at end of every month.</CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={handleTakeStock} disabled={taken} className="mb-4">
          {taken ? 'Stock Taken!' : 'Take Stock Now'}
        </Button>
        <table className="w-full text-sm mb-4">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2 font-medium">Item</th>
              <th className="text-left p-2 font-medium">Counted</th>
            </tr>
          </thead>
          <tbody>
            {demoStock.map((row, idx) => (
              <tr key={idx} className="border-b">
                <td className="p-2">{row.item}</td>
                <td className="p-2">{row.counted}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {taken && <div className="text-green-600 font-semibold">Stock taking completed successfully!</div>}
      </CardContent>
    </Card>
  );
} 