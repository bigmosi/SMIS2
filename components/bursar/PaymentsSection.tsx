import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const demoPayments = [
  { student: 'John Doe', amount: 'UGX 350,000', type: 'Tuition Fee', status: 'Paid', date: '2 hours ago' },
  { student: 'Jane Smith', amount: 'UGX 120,000', type: 'Activity Fee', status: 'Paid', date: '3 hours ago' },
  { student: 'Bob Johnson', amount: 'UGX 280,000', type: 'Tuition Fee', status: 'Pending', date: '1 day ago' },
  { student: 'Mary Wilson', amount: 'UGX 95,000', type: 'Transport Fee', status: 'Paid', date: '2 days ago' },
  { student: 'Alice Brown', amount: 'UGX 150,000', type: 'Boarding Fee', status: 'Pending', date: '3 days ago' },
];

export default function PaymentsSection() {
  const { toast } = useToast();
  const [payments, setPayments] = useState(demoPayments);

  const sendReminder = (student: string) => {
    toast({ title: `Reminder sent to ${student}` });
  };

  const sendBulkReminders = () => {
    const pending = payments.filter(p => p.status === 'Pending');
    if (pending.length === 0) {
      toast({ title: 'No pending payments to remind.' });
      return;
    }
    toast({ title: `Reminders sent to ${pending.length} students with pending payments.` });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payments</CardTitle>
        <CardDescription>All recent payment transactions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex justify-end">
          <Button size="sm" variant="outline" onClick={sendBulkReminders}>
            Send Reminders to All Pending
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4 font-medium">Student</th>
                <th className="text-left p-4 font-medium">Amount</th>
                <th className="text-left p-4 font-medium">Type</th>
                <th className="text-left p-4 font-medium">Status</th>
                <th className="text-left p-4 font-medium">Date</th>
                <th className="text-left p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((transaction, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium">{transaction.student}</td>
                  <td className="p-4 text-green-600 font-semibold">{transaction.amount}</td>
                  <td className="p-4">{transaction.type}</td>
                  <td className="p-4">
                    <Badge variant={transaction.status === 'Paid' ? 'default' : 'secondary'}>
                      {transaction.status}
                    </Badge>
                  </td>
                  <td className="p-4 text-gray-600">{transaction.date}</td>
                  <td className="p-4">
                    {transaction.status === 'Pending' && (
                      <Button size="sm" variant="outline" onClick={() => sendReminder(transaction.student)}>
                        Send Reminder
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
} 