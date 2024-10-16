// import BacChart from "@/components/Charts/BasicChart";
"use client"

import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Reports: React.FC = () => {
    const [reports, setReports] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get('https://882a-35-237-184-14.ngrok-free.app/reports');
        const reportData = JSON.parse(response.data.reports);
       
        setReports(reportData);
      } catch (error) {
        console.error("Error fetching reports:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  // Prepare data for charts
  const chartData = reports.map((report, index) => ({
    name: `Report ${index + 1}`,
    prediction: report.prediction,
    accuracy: report.accuracy,
    timestamp: new Date(report.timestamp).toLocaleString(),
  }));

  return (
    

      <DefaultLayout>
        <Breadcrumb pageName="Basic Chart" />

        <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Prediction Reports with Charts</h1>

      {loading ? (
        <p>Loading reports...</p>
      ) : (
        <>
          <h2 className="text-xl font-semibold mt-4">Prediction Line Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="prediction" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>

          <h2 className="text-xl font-semibold mt-8">Model Accuracy Bar Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="accuracy" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>

          <ul className="mt-4">
            {reports.map((report, index) => (
              <li key={index} className="mb-4 p-4 border rounded shadow">
                <p><strong>Input Data:</strong> {report.input_data.join(', ')}</p>
                <p><strong>Prediction:</strong> {report.prediction}</p>
                <p><strong>Model:</strong> {report.model}</p>
                <p><strong>Timestamp:</strong> {new Date(report.timestamp).toLocaleString()}</p>
                <p><strong>Accuracy:</strong> {report.accuracy}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
      </DefaultLayout>
    );
  };
  
  export default Reports;
  