import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

const initialEmployees = [
  { name: 'Alice Smith', paymentMode: 'Bank', bank: 'Bank of Africa', account: '123456', nssf: 'NSSF001' },
  { name: 'Bob Johnson', paymentMode: 'Cash', bank: '', account: '', nssf: 'NSSF002' },
];

export default function EmployeeRegisterSection() {
  const [employees, setEmployees] = useState(initialEmployees);
  const [showAdd, setShowAdd] = useState(false);
  const [newEmployee, setNewEmployee] = useState({ name: '', paymentMode: 'Bank', bank: '', account: '', nssf: '' });

  const handleAdd = () => {
    setEmployees([...employees, newEmployee]);
    setShowAdd(false);
    setNewEmployee({ name: '', paymentMode: 'Bank', bank: '', account: '', nssf: '' });
  };

  const handleDelete = (idx: number) => {
    setEmployees(employees.filter((_, i) => i !== idx));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Employee Register</CardTitle>
        <CardDescription>Manage payment modes, bank accounts, and NSSF numbers for employees.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex justify-between items-center">
          <span className="font-semibold">Employees</span>
          <Dialog open={showAdd} onOpenChange={setShowAdd}>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline" onClick={() => setShowAdd(true)}>Add Employee</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Employee</DialogTitle>
              </DialogHeader>
              <Input placeholder="Name" value={newEmployee.name} onChange={e => setNewEmployee({ ...newEmployee, name: e.target.value })} className="mb-2" />
              <select className="w-full border rounded p-2 mb-2" value={newEmployee.paymentMode} onChange={e => setNewEmployee({ ...newEmployee, paymentMode: e.target.value })}>
                <option value="Bank">Bank</option>
                <option value="Cash">Cash</option>
                <option value="Mobile Money">Mobile Money</option>
              </select>
              {newEmployee.paymentMode === 'Bank' && (
                <>
                  <Input placeholder="Bank Name" value={newEmployee.bank} onChange={e => setNewEmployee({ ...newEmployee, bank: e.target.value })} className="mb-2" />
                  <Input placeholder="Account Number" value={newEmployee.account} onChange={e => setNewEmployee({ ...newEmployee, account: e.target.value })} className="mb-2" />
                </>
              )}
              <Input placeholder="NSSF Number" value={newEmployee.nssf} onChange={e => setNewEmployee({ ...newEmployee, nssf: e.target.value })} />
              <DialogFooter>
                <Button onClick={handleAdd} disabled={!newEmployee.name || !newEmployee.nssf}>Add</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <table className="w-full text-sm mb-4 min-w-[700px]">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2 font-medium">Name</th>
              <th className="text-left p-2 font-medium">Payment Mode</th>
              <th className="text-left p-2 font-medium">Bank</th>
              <th className="text-left p-2 font-medium">Account</th>
              <th className="text-left p-2 font-medium">NSSF</th>
              <th className="text-left p-2 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((e, idx) => (
              <tr key={idx} className="border-b">
                <td className="p-2">{e.name}</td>
                <td className="p-2">{e.paymentMode}</td>
                <td className="p-2">{e.bank}</td>
                <td className="p-2">{e.account}</td>
                <td className="p-2">{e.nssf}</td>
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