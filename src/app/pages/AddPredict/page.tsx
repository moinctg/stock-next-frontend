"use client"
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useState, ChangeEvent } from 'react';
import axios from 'axios';

// import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import SettingBoxes from "@/components/SettingBoxes";

// export const metadata: Metadata = {
//   title: "Next.js Settings Page | NextAdmin - Next.js Dashboard c",
//   description: "This is Next.js Settings page for NextAdmin Dashboard Kit",
// };

interface StockData {
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
  }
const AddPredict = () => {
    const [data, setData] = useState<StockData>({
        open: '',
        high: '',
        low: '',
        close: '',
        volume: '',
      });
    
      const [prediction, setPrediction] = useState<number | null>(null);
      const [error, setError] = useState<string | null>(null);
    
      const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData({
          ...data,
          [name]: value,
        });
      };
    
      const fetchPrediction = async () => {
        try {
          const response = await axios.post('https://6abd-34-168-41-80.ngrok-free.app/predict', {
            data: [
              parseFloat(data.open),
              parseFloat(data.high),
              parseFloat(data.low),
              parseFloat(data.close),
              parseFloat(data.volume),
            ],
          });
          setPrediction(response.data.prediction);
          console.log(response)
          setError(null);
        } catch (err) {
          setError('Failed to fetch prediction. Please try again later.');
          setPrediction(null);
        }
      };
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[1080px]">
        <Breadcrumb pageName="AddPrediction" />
        
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Stock Prediction</h1>

      <div className="space-y-4 w-full max-w-md">
        <div className="flex flex-col">
          <label className="mb-2 text-gray-700 font-semibold">Open:</label>
          <input
            type="text"
            name="open"
            value={data.open}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-gray-700 font-semibold">High:</label>
          <input
            type="text"
            name="high"
            value={data.high}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-gray-700 font-semibold">Low:</label>
          <input
            type="text"
            name="low"
            value={data.low}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-gray-700 font-semibold">Close:</label>
          <input
            type="text"
            name="close"
            value={data.close}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-gray-700 font-semibold">Volume:</label>
          <input
            type="text"
            name="volume"
            value={data.volume}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <button
          onClick={fetchPrediction}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Get Prediction
        </button>
      </div>

      {prediction !== null && (
        <div className="mt-6 text-xl font-bold text-green-600">
          Prediction Is: {prediction}
        </div>
      )}
      {error && <p className="mt-6 text-red-600">{error}</p>}
    </div>
    </div>
    </DefaultLayout>
  );
};

export default AddPredict;