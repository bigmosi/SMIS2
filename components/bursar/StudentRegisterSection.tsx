import { useState, ChangeEvent } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

const initialStudents = [
  { name: 'John Doe', class: 'P.5', stream: 'East', type: 'Day', parent: 'Jane Doe', parentContact: '0700000000', photo: '' },
  { name: 'Mary Smith', class: 'P.6', stream: 'West', type: 'Boarder', parent: 'Paul Smith', parentContact: '0711111111', photo: '' },
];

export default function StudentRegisterSection() {
  const [students, setStudents] = useState(initialStudents);
  const [showAdd, setShowAdd] = useState(false);
  const [newStudent, setNewStudent] = useState({ name: '', class: '', stream: '', type: 'Day', parent: '', parentContact: '', photo: '' });
  const [photoFile, setPhotoFile] = useState<File | null>(null);

  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewStudent((prev) => ({ ...prev, photo: reader.result as string }));
      };
      reader.readAsDataURL(file);
      setPhotoFile(file);
    }
  };

  const handleAdd = () => {
    setStudents([...students, newStudent]);
    setShowAdd(false);
    setNewStudent({ name: '', class: '', stream: '', type: 'Day', parent: '', parentContact: '', photo: '' });
    setPhotoFile(null);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Student Register</CardTitle>
        <CardDescription>Register new students and view the list.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex justify-between items-center">
          <span className="font-semibold">Students</span>
          <Dialog open={showAdd} onOpenChange={setShowAdd}>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline" onClick={() => setShowAdd(true)}>Add Student</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Student</DialogTitle>
              </DialogHeader>
              <Input placeholder="Name" value={newStudent.name} onChange={e => setNewStudent({ ...newStudent, name: e.target.value })} className="mb-2" />
              <Input placeholder="Class" value={newStudent.class} onChange={e => setNewStudent({ ...newStudent, class: e.target.value })} className="mb-2" />
              <Input placeholder="Stream" value={newStudent.stream} onChange={e => setNewStudent({ ...newStudent, stream: e.target.value })} className="mb-2" />
              <select className="w-full border rounded p-2 mb-2" value={newStudent.type} onChange={e => setNewStudent({ ...newStudent, type: e.target.value })}>
                <option value="Day">Day</option>
                <option value="Boarder">Boarder</option>
              </select>
              <Input placeholder="Parent/Guardian Name" value={newStudent.parent} onChange={e => setNewStudent({ ...newStudent, parent: e.target.value })} className="mb-2" />
              <Input placeholder="Parent/Guardian Contact" value={newStudent.parentContact} onChange={e => setNewStudent({ ...newStudent, parentContact: e.target.value })} className="mb-2" />
              {/* Photo upload */}
              <div className="mb-2">
                <label className="block text-sm font-medium mb-1">Student Photo</label>
                <input type="file" accept="image/*" onChange={handlePhotoChange} />
                {newStudent.photo && (
                  <img src={newStudent.photo} alt="Preview" className="w-16 h-16 rounded-full object-cover mt-2" />
                )}
              </div>
              <DialogFooter>
                <Button onClick={handleAdd} disabled={!newStudent.name || !newStudent.class || !newStudent.stream || !newStudent.parent || !newStudent.parentContact}>Add</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[800px]">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2 font-medium">Photo</th>
                <th className="text-left p-2 font-medium">Name</th>
                <th className="text-left p-2 font-medium">Class</th>
                <th className="text-left p-2 font-medium">Stream</th>
                <th className="text-left p-2 font-medium">Type</th>
                <th className="text-left p-2 font-medium">Parent/Guardian</th>
                <th className="text-left p-2 font-medium">Contact</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s, idx) => (
                <tr key={idx} className="border-b">
                  <td className="p-2">
                    {s.photo ? <img src={s.photo} alt={s.name} className="w-10 h-10 rounded-full object-cover" /> : <span className="text-xs text-gray-400">No Photo</span>}
                  </td>
                  <td className="p-2">{s.name}</td>
                  <td className="p-2">{s.class}</td>
                  <td className="p-2">{s.stream}</td>
                  <td className="p-2">{s.type}</td>
                  <td className="p-2">{s.parent}</td>
                  <td className="p-2">{s.parentContact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
} 