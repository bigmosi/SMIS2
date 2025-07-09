import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const analyticsData = [
  { title: 'Revenue Trend', value: '+8.2%', description: 'This month vs last month', color: 'text-green-600' },
  { title: 'Outstanding Fees Trend', value: '-2.1%', description: 'This month vs last month', color: 'text-red-600' },
  { title: 'Top Fee Category', value: 'Tuition Fees', description: 'UGX 28.5M collected', color: 'text-blue-600' },
  { title: 'Most Outstanding', value: 'Boarding Fees', description: 'UGX 1.7M due', color: 'text-yellow-600' },
];

export default function AnalyticsSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Finance Analytics</CardTitle>
        <CardDescription>Key financial trends and insights</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {analyticsData.map((item, idx) => (
            <Card key={idx} className="bg-gray-50">
              <CardHeader>
                <CardTitle className={`text-base ${item.color}`}>{item.title}</CardTitle>
                <CardDescription className={`text-3xl font-bold ${item.color}`}>{item.value}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-xs text-gray-500">{item.description}</span>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <Card className="bg-white border-dashed border-2 border-gray-200 flex items-center justify-center h-48">
            <span className="text-gray-400">[Pie Chart Placeholder: Fee Categories]</span>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
} 