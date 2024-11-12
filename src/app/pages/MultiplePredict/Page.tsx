'use client'
import { useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js';
  
  ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

interface PredictionResponse {
  scrip: string;
  current_price: number;
  future_predictions: number[];
  metrics: {
    mse: number;
    mae: number;
    r_squared: number;
  };
}

const Prediction = () => {
  const [scrip, setScrip] = useState<string>('');
  const [historicalData, setHistoricalData] = useState<number[]>([]);
  const [modelType,setModelType] = useState<string>('linear_regression');
  const [response, setResponse] = useState<PredictionResponse | null>(null);

  const handlePrediction = async () => {
    try {
      const res = await axios.post('https://stockprediction-fastapi-backend-1.onrender.com/predict_multiple', {
        scrip,
        historical_data: historicalData,
        model_type: modelType,
      });
      setResponse(res.data);
    } catch (error) {
      console.error("Error fetching prediction:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="mb-4 bg-white p-6 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Enter Scrip Code"
          className="p-2 border border-gray-300 rounded w-full mb-2"
          value={scrip}
          onChange={(e) => setScrip(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Historical Data (comma-separated)"
          className="p-2 border border-gray-300 rounded w-full"
          value={historicalData.join(', ')}
          onChange={(e) =>
            setHistoricalData(e.target.value.split(',').map((item) => parseFloat(item.trim())))
          }
        />

<select
          className="p-2 border border-gray-300 rounded w-full mb-2"
          value={modelType}
          onChange={(e) => setModelType(e.target.value)}
        >
          <option value="linear_regression">Linear Regression</option>
          {/* <option value="lstm">LSTM</option> */}
          <option value="random_forest">Random Forest</option>
          <option value="xgboost">Xgboost</option>
          <option value="arima">Arima</option>
        </select>
        <button
          className="bg-blue-500 text-white p-2 mt-4 rounded w-full"
          onClick={handlePrediction}
        >
          Get Prediction
        </button>
      </div>

      {response && (
        <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center">Prediction Results for {response.scrip}</h2>
          <div className="mt-4 text-lg">
            <p><strong>Current Price:</strong> ${response.current_price}</p>
            <p className="mt-2"><strong>Metrics:</strong></p>
            <ul className="list-disc ml-6">
              <li><strong>MSE:</strong> {response.metrics.mse}</li>
              <li><strong>MAE:</strong> {response.metrics.mae}</li>
              <li><strong>R²:</strong> {response.metrics.r_squared}</li>
            </ul>
          </div>

          <div className="mt-6">
            <Line
              data={{
                labels: response.future_predictions.map((_, index) => `Day ${index + 1}`),
                datasets: [
                  {
                    label: 'Predicted Prices',
                    data: response.future_predictions,
                    borderColor: 'rgba(75,192,192,1)',
                    backgroundColor: 'rgba(75,192,192,0.2)',
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
  );
};

export default Prediction;
