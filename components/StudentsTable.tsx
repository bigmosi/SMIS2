import { Button } from '@/components/ui/button';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';

const demoStudents = [
  { name: 'John Doe', class: 'S1A', age: 14, gender: 'Male' },
  { name: 'Jane Smith', class: 'S1B', age: 13, gender: 'Female' },
  { name: 'Samuel Green', class: 'S2A', age: 15, gender: 'Male' },
  { name: 'Emily Brown', class: 'S2B', age: 14, gender: 'Female' },
  { name: 'Michael Lee', class: 'S3A', age: 16, gender: 'Male' },
  { name: 'Sophia White', class: 'S3B', age: 15, gender: 'Female' },
];

export default function StudentsTable() {
  return (
    <div className="overflow-x-auto">
      <Table className="min-w-[600px]">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Class</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {demoStudents.map((student, idx) => (
            <TableRow key={idx}>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.class}</TableCell>
              <TableCell>{student.age}</TableCell>
              <TableCell>{student.gender}</TableCell>
              <TableCell>
                <Button size="sm" variant="outline">View</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
} 