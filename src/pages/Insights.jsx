import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Card from '../components/common/Card';

const Insights = () => {
  const marketData = [
    { year: '2020', value: 150 },
    { year: '2021', value: 180 },
    { year: '2022', value: 220 },
    { year: '2023', value: 280 },
    { year: '2024', value: 350 }
  ];

  const insights = [
    {
      title: 'Ukiah Market Growth',
      content: 'Property values increased by 15% in the last year, driven by limited inventory and growing demand.'
    },
    {
      title: 'Petaluma Development',
      content: 'New zoning laws support mixed-use development, creating opportunities for innovative projects.'
    },
    {
      title: 'Sustainability Trends',
      content: 'Green building practices showing 25% increase in adoption, leading to higher property values.'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-blue-600 py-20">
        <div className="container mx-auto px-4 text-white">
          <h1 className="text-5xl font-bold mb-6 mt-20">Market Insights</h1>
          <p className="text-xl max-w-2xl">Understanding market trends and opportunities in our target regions</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Market Growth Trends</h2>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={marketData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#2563eb" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <Card
                key={index}
                title={insight.title}
                className="hover:shadow-xl transition-shadow"
              >
                <p className="text-gray-600">{insight.content}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Invest With Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Local Market Expertise</h3>
                <p className="text-gray-600">Deep understanding of regional markets and growth opportunities.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Proven Track Record</h3>
                <p className="text-gray-600">Consistent returns and successful project completions.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Innovative Approach</h3>
                <p className="text-gray-600">Combining sustainable practices with modern design principles.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Strong Partnerships</h3>
                <p className="text-gray-600">Network of reliable contractors, architects, and consultants.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;