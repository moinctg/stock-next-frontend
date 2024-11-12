"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,  // Registering PointElement to fix "point" error
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js elements
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

// Define PredictResponse interface
interface PredictResponse {
  scrip: string;
  current_price: number;
  future_predictions: {
    days: number[];
    predicted_prices: number[];
  };
  metrics: {
    mean: number;
    max: number;
    standard_deviation: number;
  };
  evaluation: {
    mse: number;
    mae: number;
  };
}

export default function PredictionComponent() {
  const [scrip, setScrip] = useState<string>("");
  const [data, setData] = useState<string>("");
  const [days, setDays] = useState<string>("");
  const [actualPrices, setActualPrices] = useState<string>("");
  const [response, setResponse] = useState<PredictResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handlePrediction = async () => {
    setError(null);

    try {
      const requestData = {
        scrip,
        data: data.split(",").map(Number), // Parse data as an array of numbers
        days: days.split(",").map(Number), // Parse days as an array of numbers
        actual_prices: actualPrices.split(",").map(Number), // Parse actual prices as an array of numbers
      };

      const res = await axios.post<PredictResponse>(
        "https://stockprediction-fastapi-backend-1.onrender.com/predict",
        requestData,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(res.data);
      setResponse(res.data);
    } catch (err) {
      const errorMsg = err instanceof AxiosError && err.response?.data?.detail
        ? err.response.data.detail
        : "Failed to fetch prediction";
      console.error("Error fetching prediction:", err);
      setError(typeof errorMsg === "string" ? errorMsg : JSON.stringify(errorMsg));
    }
  };

  // Dynamic loading of scripts with error handling
  useEffect(() => {
    const loadScript = (src: string, onError: () => void) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onerror = onError;
      document.body.appendChild(script);
    };

    loadScript(
      "https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js",
      () => console.error("Failed to load html5shiv")
    );
    loadScript(
      "https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js",
      () => console.error("Failed to load respond.js")
    );
  }, []);

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-2xl p-4">
        <Breadcrumb pageName="Stock Prediction" />
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-center mb-6">Stock Price Prediction</h2>
          
          {/* Input fields */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter Scrip Code"
              className="p-2 border border-gray-300 rounded w-full"
              value={scrip}
              onChange={(e) => setScrip(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Historical Data (comma-separated)"
              className="p-2 border border-gray-300 rounded w-full"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Days for Prediction (comma-separated)"
              className="p-2 border border-gray-300 rounded w-full"
              value={days}
              onChange={(e) => setDays(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Actual Prices (comma-separated)"
              className="p-2 border border-gray-300 rounded w-full"
              value={actualPrices}
              onChange={(e) => setActualPrices(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white p-2 mt-4 rounded w-full"
              onClick={handlePrediction}
            >
              Get Prediction
            </button>
          </div>

          {error && <div className="text-red-500 mt-4 text-center">{error}</div>}

          {/* Display prediction results and chart */}
          {response && (
            <div className="mt-8 bg-gray-100 p-4 rounded shadow-md">
              <h2 className="text-xl font-semibold">Prediction Results for {response.scrip}</h2>
              <div className="mt-4">
                <p><strong>Current Price:</strong> ${response.current_price}</p>
                <div className="mt-2">
                  <strong>Metrics:</strong>
                  <ul className="list-disc ml-6">
                    <li><strong>Mean Price:</strong> {response.metrics.mean}</li>
                    <li><strong>Max Price:</strong> {response.metrics.max}</li>
                    <li><strong>Standard Deviation:</strong> {response.metrics.standard_deviation}</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <strong>Evaluation Metrics:</strong>
                <ul className="list-disc ml-6">
                  <li><strong>MSE:</strong> {response.evaluation.mse}</li>
                  <li><strong>MAE:</strong> {response.evaluation.mae}</li>
                </ul>
              </div>

              {/* Chart displaying predicted prices */}
              <div className="mt-6">
                <Line
                  data={{
                    labels: response.future_predictions.days.map(day => `Day ${day}`),
                    datasets: [
                      {
                        label: "Predicted Prices",
                        data: response.future_predictions.predicted_prices,
                        borderColor: "rgba(75,192,192,1)",
                        backgroundColor: "rgba(75,192,192,0.2)",
                        fill: true,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    scales: {
                      y: {
                        beginAtZero: false,
                      },
                    },
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </DefaultLayout>
  );
}
