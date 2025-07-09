import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const analyticsData = [
  { title: 'Average Student Performance', value: '82%', description: 'Across all classes' },
  { title: 'Attendance Rate', value: '94%', description: 'This term' },
  { title: 'Fee Collection', value: '89%', description: 'Of total expected' },
  { title: 'Top Performing Class', value: 'S3A', description: 'Average: 91%' },
];

export default function AnalyticsSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Analytics</CardTitle>
        <CardDescription>Key school metrics and insights</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {analyticsData.map((item, idx) => (
            <Card key={idx} className="bg-blue-50">
              <CardHeader>
                <CardTitle className="text-base text-gray-700">{item.title}</CardTitle>
                <CardDescription className="text-3xl font-bold text-blue-700">{item.value}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-xs text-gray-500">{item.description}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 