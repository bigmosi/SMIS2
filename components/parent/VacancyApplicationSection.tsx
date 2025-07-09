import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function VacancyApplicationSection() {
  const [form, setForm] = useState({ childName: '', class: '', type: 'Day', parentContact: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setForm({ childName: '', class: '', type: 'Day', parentContact: '' });
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Apply for Vacancy</CardTitle>
        <CardDescription>Apply for a new student admission or transfer.</CardDescription>
      </CardHeader>
      <CardContent>
        <Input
          placeholder="Child's Name"
          name="childName"
          value={form.childName}
          onChange={handleChange}
          className="mb-2"
        />
        <Input
          placeholder="Class Applying For"
          name="class"
          value={form.class}
          onChange={handleChange}
          className="mb-2"
        />
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="w-full border rounded p-2 mb-2"
        >
          <option value="Day">Day</option>
          <option value="Boarder">Boarder</option>
        </select>
        <Input
          placeholder="Parent Contact"
          name="parentContact"
          value={form.parentContact}
          onChange={handleChange}
          className="mb-2"
        />
        <Button onClick={handleSubmit} disabled={!form.childName || !form.class || !form.parentContact || submitted} className="mb-2">
          {submitted ? 'Application Sent!' : 'Apply'}
        </Button>
        {submitted && <div className="text-green-600 font-medium">Your application has been submitted!</div>}
      </CardContent>
    </Card>
  );
} 