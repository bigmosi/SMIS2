import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { DollarSign, AlertCircle } from 'lucide-react';
import { useState } from 'react';

const childrenFees = [
  {
    name: 'John Doe',
    class: 'S2A',
    paycode: 'STU001234',
    fees: [
      { item: 'Tuition Fee', amount: 'UGX 350,000', paid: 'UGX 230,000', remaining: 'UGX 120,000' },
      { item: 'Activity Fee', amount: 'UGX 50,000', paid: 'UGX 50,000', remaining: 'UGX 0' },
      { item: 'Transport Fee', amount: 'UGX 80,000', paid: 'UGX 80,000', remaining: 'UGX 0' },
    ],
    outstanding: 'UGX 120,000',
    due: 'in 5 days',
  },
  {
    name: 'Jane Doe',
    class: 'P5B',
    paycode: 'STU001567',
    fees: [
      { item: 'Tuition Fee', amount: 'UGX 300,000', paid: 'UGX 220,000', remaining: 'UGX 80,000' },
      { item: 'Activity Fee', amount: 'UGX 40,000', paid: 'UGX 40,000', remaining: 'UGX 0' },
      { item: 'Transport Fee', amount: 'UGX 70,000', paid: 'UGX 70,000', remaining: 'UGX 0' },
    ],
    outstanding: 'UGX 80,000',
    due: 'in 3 days',
  },
];

const paybillNumber = '123456';

export default function FeesSection() {
  const [payModal, setPayModal] = useState<{ child: typeof childrenFees[0] | null }>({ child: null });
  return (
    <div className="space-y-8">
      {childrenFees.map((child, idx) => (
        <Card key={idx}>
          <CardHeader>
            <CardTitle>{child.name} <span className="text-sm text-gray-500 font-normal">({child.class})</span></CardTitle>
            <CardDescription>Paycode: <span className="font-mono text-blue-600">{child.paycode}</span></CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-medium">Fee Item</th>
                    <th className="text-left p-3 font-medium">Total Amount</th>
                    <th className="text-left p-3 font-medium">Paid</th>
                    <th className="text-left p-3 font-medium">Remaining</th>
                    <th className="text-left p-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {child.fees.map((fee, i) => (
                    <tr key={i} className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">{fee.item}</td>
                      <td className="p-3">{fee.amount}</td>
                      <td className="p-3 text-green-600">{fee.paid}</td>
                      <td className="p-3 text-red-600">{fee.remaining}</td>
                      <td className="p-3">
                        <Badge variant={fee.remaining === 'UGX 0' ? 'default' : 'destructive'}>
                          {fee.remaining === 'UGX 0' ? 'Paid' : 'Outstanding'}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Card className="border-red-200 bg-red-50 mb-2">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-red-700 text-base">
                  <AlertCircle className="h-5 w-5" />
                  <span>Fee Payment Reminder</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-red-700 font-medium">Outstanding balance: {child.outstanding}</p>
                    <p className="text-red-600 text-sm">Payment due {child.due}</p>
                  </div>
                  <Dialog open={payModal.child === child} onOpenChange={open => setPayModal({ child: open ? child : null })}>
                    <DialogTrigger asChild>
                      <Button variant="destructive" onClick={() => setPayModal({ child })}>
                        <DollarSign className="h-4 w-4 mr-2" />
                        Pay Now
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Pay Fees for {child.name}</DialogTitle>
                        <DialogDescription>Mobile Money Payment Instructions</DialogDescription>
                      </DialogHeader>
                      <div className="py-4 text-gray-700 space-y-2">
                        <div>To pay for <span className="font-semibold">{child.name}</span>:</div>
                        <ol className="list-decimal ml-6 space-y-1 text-sm">
                          <li>Go to your mobile money app or dial <span className="font-mono">*XYZ#</span></li>
                          <li>Enter School Paybill/Merchant Number: <span className="font-mono font-bold">{paybillNumber}</span></li>
                          <li>Enter Student Paycode: <span className="font-mono font-bold">{child.paycode}</span></li>
                          <li>Enter Amount: <span className="font-mono font-bold">{child.outstanding}</span></li>
                          <li>Confirm payment</li>
                        </ol>
                      </div>
                      <DialogFooter>
                        <Button onClick={() => setPayModal({ child: null })} className="w-full">Done</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 