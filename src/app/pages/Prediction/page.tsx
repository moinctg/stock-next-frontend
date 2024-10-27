"use client";

import React, { useState } from 'react';

const PredictPage = () => {
  const [scrip, setScrip] = useState<string>('AAPL');
  const [prices, setPrices] = useState<string>('145.67, 146.45, 147.56, 149.23, 150.23');
  const [days, setDays] = useState<string[]>(['7', '10', '15', '30', '45', '365']);
  const [prediction, setPrediction] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://3240-34-148-26-126.ngrok-free.app"/predict-lstm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scrip,
          data: prices.split(',').map((price) => parseFloat(price.trim())),
          days: days.map((day) => parseInt(day)),
        }),
      });
      const result = await response.json();
      setPrediction(result);
    } catch (error) {
      console.error('Error fetching prediction:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Stock Price Prediction</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Scrip Input */}
          <div>
            <label className="block text-gray-600 font-medium mb-2" htmlFor="scrip">
              Stock Scrip (e.g., AAPL)
            </label>
            <input
              type="text"
              id="scrip"
              value={scrip}
              onChange={(e) => setScrip(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-indigo-500"
              placeholder="Enter stock scrip"
            />
          </div>

          {/* Prices Input */}
          <div>
            <label className="block text-gray-600 font-medium mb-2" htmlFor="prices">
              Historical Prices (comma-separated)
            </label>
            <input
              type="text"
              id="prices"
              value={prices}
              onChange={(e) => setPrices(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-indigo-500"
              placeholder="e.g., 145.67, 146.45, 147.56"
            />
          </div>

          {/* Days Dropdown */}
          <div>
            <label className="block text-gray-600 font-medium mb-2" htmlFor="days">
              Prediction Days
            </label>
            <select
              id="days"
              multiple
              value={days}
              onChange={(e) => {
                const selectedDays = Array.from(e.target.selectedOptions, option => option.value);
                setDays(selectedDays);
              }}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-indigo-500"
            >
              <option value="7">7 Days</option>
              <option value="10">10 Days</option>
              <option value="15">15 Days</option>
              <option value="30">30 Days</option>
              <option value="45">45 Days</option>
              <option value="365">365 Days</option>
            </select>
            <p className="text-gray-500 text-sm mt-2">Hold Ctrl (Windows) or Cmd (Mac) to select multiple days</p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg font-medium hover:bg-indigo-600 transition duration-200"
          >
            Get Prediction
          </button>
        </form>

        {/* Prediction Results */}
        {prediction && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700">Prediction Results</h3>
            <p className="mt-2 text-gray-600"><strong>Scrip:</strong> {prediction.scrip}</p>
            <p className="text-gray-600"><strong>Current Price:</strong> {prediction.current_price}</p>
            <div className="text-gray-600 mt-2">
              <strong>Future Predictions:</strong>
              <ul className="list-disc ml-6 mt-1">
                {prediction.future_predictions.days.map((day: number, index: number) => (
                  <li key={day}>
                    Day {day}: ${prediction.future_predictions.predicted_prices[index].toFixed(2)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-gray-600 mt-4">
              <strong>Metrics:</strong>
              <p>Mean: {prediction.metrics.mean.toFixed(2)}</p>
              <p>Max: {prediction.metrics.max.toFixed(2)}</p>
              <p>Standard Deviation: {prediction.metrics.standard_deviation.toFixed(2)}</p>
            </div>
            <div className="text-gray-600 mt-4">
              <strong>Evaluation:</strong>
              <p>Mean Squared Error (MSE): {prediction.evaluation.mse.toFixed(4)}</p>
              <p>Mean Absolute Error (MAE): {prediction.evaluation.mae.toFixed(2)}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PredictPage;
