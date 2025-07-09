import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export default function FeedbackSection() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setFeedback('');
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send Feedback</CardTitle>
        <CardDescription>Send your feedback or suggestions to the school.</CardDescription>
      </CardHeader>
      <CardContent>
        <Textarea
          placeholder="Type your feedback here..."
          value={feedback}
          onChange={e => setFeedback(e.target.value)}
          className="mb-4"
          rows={4}
        />
        <Button onClick={handleSubmit} disabled={!feedback || submitted} className="mb-2">
          {submitted ? 'Submitted!' : 'Submit Feedback'}
        </Button>
        {submitted && <div className="text-green-600 font-medium">Thank you for your feedback!</div>}
      </CardContent>
    </Card>
  );
} 