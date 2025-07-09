import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const financeSummary = [
  { label: 'Total Revenue', value: 'UGX 45.2M', color: 'bg-green-500' },
  { label: 'Outstanding Fees', value: 'UGX 12.8M', color: 'bg-red-500' },
  { label: 'Expenses', value: 'UGX 18.4M', color: 'bg-yellow-500' },
  { label: 'Net Balance', value: 'UGX 26.8M', color: 'bg-blue-500' },
];

const financeTransactions = [
  { type: 'Income', description: 'Tuition Fees', amount: 'UGX 2,500,000', date: 'Jul 1, 2025' },
  { type: 'Expense', description: 'Stationery Purchase', amount: 'UGX 350,000', date: 'Jun 29, 2025' },
  { type: 'Income', description: 'Transport Fees', amount: 'UGX 800,000', date: 'Jun 28, 2025' },
  { type: 'Expense', description: 'Sports Equipment', amount: 'UGX 600,000', date: 'Jun 25, 2025' },
];

export default function FinanceSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Finance Overview</CardTitle>
        <CardDescription>Summary of school finances</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {financeSummary.map((item, idx) => (
            <Card key={idx} className="flex flex-col items-center justify-center p-4 shadow border-0">
              <div className={`p-3 rounded-full mb-2 ${item.color}`}></div>
              <p className="text-sm text-gray-600 mb-1">{item.label}</p>
              <p className="text-xl font-bold text-gray-900">{item.value}</p>
            </Card>
          ))}
        </div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Recent Transactions</h3>
          <Button size="sm" variant="outline">Download</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3 font-medium">Type</th>
                <th className="text-left p-3 font-medium">Description</th>
                <th className="text-left p-3 font-medium">Amount</th>
                <th className="text-left p-3 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {financeTransactions.map((tx, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <Badge variant={tx.type === 'Income' ? 'default' : 'secondary'} className={tx.type === 'Income' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}>
                      {tx.type}
                    </Badge>
                  </td>
                  <td className="p-3">{tx.description}</td>
                  <td className="p-3 font-semibold {tx.type === 'Income' ? 'text-green-600' : 'text-yellow-700'}">{tx.amount}</td>
                  <td className="p-3 text-gray-600">{tx.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
} 