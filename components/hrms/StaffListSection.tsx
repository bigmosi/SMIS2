import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const initialStaff = [
  { name: 'Alice Smith', department: 'Mathematics', role: 'Teacher', status: 'Active' },
  { name: 'Bob Johnson', department: 'Science', role: 'Lab Technician', status: 'On Leave' },
  { name: 'Carol White', department: 'Administration', role: 'Secretary', status: 'Active' },
  { name: 'David Brown', department: 'Sports', role: 'Coach', status: 'Active' },
];

export default function StaffListSection() {
  const [staff, setStaff] = useState(initialStaff);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState<{ open: boolean; idx: number | null }>({ open: false, idx: null });
  const [showView, setShowView] = useState<{ open: boolean; idx: number | null }>({ open: false, idx: null });
  const [newStaff, setNewStaff] = useState({ name: '', department: '', role: '', status: 'Active' });
  const [editStaff, setEditStaff] = useState({ name: '', department: '', role: '', status: 'Active' });

  // Add staff
  const handleAdd = () => {
    setStaff([...staff, newStaff]);
    setShowAdd(false);
    setNewStaff({ name: '', department: '', role: '', status: 'Active' });
  };

  // Edit staff
  const handleEdit = () => {
    if (showEdit.idx !== null) {
      const updated = [...staff];
      updated[showEdit.idx] = editStaff;
      setStaff(updated);
      setShowEdit({ open: false, idx: null });
    }
  };

  // Delete staff
  const handleDelete = (idx: number) => {
    setStaff(staff.filter((_, i) => i !== idx));
  };

  // Open edit modal
  const openEdit = (idx: number) => {
    setEditStaff(staff[idx]);
    setShowEdit({ open: true, idx });
  };

  // Open view modal
  const openView = (idx: number) => {
    setShowView({ open: true, idx });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Staff List</CardTitle>
        <CardDescription>All staff members and their status</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Add Staff Modal */}
        <Dialog open={showAdd} onOpenChange={setShowAdd}>
          <DialogTrigger asChild>
            <Button size="sm" variant="outline" onClick={() => setShowAdd(true)}>
              Add Staff
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Staff</DialogTitle>
              <DialogDescription>Enter staff details below.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <Input placeholder="Name" value={newStaff.name} onChange={e => setNewStaff({ ...newStaff, name: e.target.value })} />
              <Input placeholder="Department" value={newStaff.department} onChange={e => setNewStaff({ ...newStaff, department: e.target.value })} />
              <Input placeholder="Role" value={newStaff.role} onChange={e => setNewStaff({ ...newStaff, role: e.target.value })} />
              <select className="w-full border rounded p-2" value={newStaff.status} onChange={e => setNewStaff({ ...newStaff, status: e.target.value })}>
                <option value="Active">Active</option>
                <option value="On Leave">On Leave</option>
              </select>
            </div>
            <DialogFooter>
              <Button onClick={handleAdd} disabled={!newStaff.name || !newStaff.department || !newStaff.role}>Add</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        {/* Edit Staff Modal */}
        <Dialog open={showEdit.open} onOpenChange={open => setShowEdit({ open, idx: open ? showEdit.idx : null })}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Staff</DialogTitle>
              <DialogDescription>Update staff details below.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <Input placeholder="Name" value={editStaff.name} onChange={e => setEditStaff({ ...editStaff, name: e.target.value })} />
              <Input placeholder="Department" value={editStaff.department} onChange={e => setEditStaff({ ...editStaff, department: e.target.value })} />
              <Input placeholder="Role" value={editStaff.role} onChange={e => setEditStaff({ ...editStaff, role: e.target.value })} />
              <select className="w-full border rounded p-2" value={editStaff.status} onChange={e => setEditStaff({ ...editStaff, status: e.target.value })}>
                <option value="Active">Active</option>
                <option value="On Leave">On Leave</option>
              </select>
            </div>
            <DialogFooter>
              <Button onClick={handleEdit} disabled={!editStaff.name || !editStaff.department || !editStaff.role}>Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        {/* View Staff Modal */}
        <Dialog open={showView.open} onOpenChange={open => setShowView({ open, idx: open ? showView.idx : null })}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Staff Details</DialogTitle>
            </DialogHeader>
            {showView.idx !== null && (
              <div className="space-y-2">
                <div><span className="font-semibold">Name:</span> {staff[showView.idx].name}</div>
                <div><span className="font-semibold">Department:</span> {staff[showView.idx].department}</div>
                <div><span className="font-semibold">Role:</span> {staff[showView.idx].role}</div>
                <div><span className="font-semibold">Status:</span> {staff[showView.idx].status}</div>
              </div>
            )}
            <DialogFooter>
              <Button onClick={() => setShowView({ open: false, idx: null })}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3 font-medium">Name</th>
                <th className="text-left p-3 font-medium">Department</th>
                <th className="text-left p-3 font-medium">Role</th>
                <th className="text-left p-3 font-medium">Status</th>
                <th className="text-left p-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {staff.map((s, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-medium">{s.name}</td>
                  <td className="p-3">{s.department}</td>
                  <td className="p-3">{s.role}</td>
                  <td className="p-3">
                    <Badge variant={s.status === 'Active' ? 'default' : 'secondary'}>{s.status}</Badge>
                  </td>
                  <td className="p-3 space-x-2">
                    <Button size="sm" variant="secondary" onClick={() => openView(idx)}>View</Button>
                    <Button size="sm" variant="outline" onClick={() => openEdit(idx)}>Edit</Button>
                    <Button size="sm" variant="destructive" onClick={() => handleDelete(idx)}>Delete</Button>
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