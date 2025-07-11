import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Select } from '@/components/ui/select';

const demoStatements = {
  'Printer Paper': [
    { date: '2024-07-01', type: 'In', qty: 10, ref: 'Invoice #123' },
    { date: '2024-07-03', type: 'Out', qty: 2, ref: 'Issued to Admin' },
    { date: '2024-07-05', type: 'Out', qty: 5, ref: 'Branch B' },
  ],
  'Whiteboard Marker': [
    { date: '2024-07-02', type: 'In', qty: 20, ref: 'Invoice #124' },
    { date: '2024-07-04', type: 'Out', qty: 5, ref: 'Class P.5' },
    { date: '2024-07-06', type: 'Out', qty: 10, ref: 'Branch C' },
  ],
};

export default function StockStatementSection() {
  const [selected, setSelected] = useState('Printer Paper');
  const statement = demoStatements[selected as keyof typeof demoStatements] || [];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Stock Statement</CardTitle>
        <CardDescription>View stock statement for any inventory item.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Select Item:</label>
          <select className="w-full border rounded p-2" value={selected} onChange={e => setSelected(e.target.value)}>
            {Object.keys(demoStatements).map(item => (
              <option key={String(item)} value={String(item)}>{String(item)}</option>
            ))}
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm mb-4 min-w-[600px]">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2 font-medium">Date</th>
                <th className="text-left p-2 font-medium">Type</th>
                <th className="text-left p-2 font-medium">Quantity</th>
                <th className="text-left p-2 font-medium">Reference</th>
              </tr>
            </thead>
            <tbody>
              {statement.map((row, idx) => (
                <tr key={idx} className="border-b">
                  <td className="p-2">{row.date}</td>
                  <td className="p-2">{row.type}</td>
                  <td className="p-2">{row.qty}</td>
                  <td className="p-2">{row.ref}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
} 