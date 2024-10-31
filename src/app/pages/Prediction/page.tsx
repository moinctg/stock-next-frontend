"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React, { useState } from "react";
import axios from "axios"; // Import axios


const PredictPage = () => {
  const [scrip, setScrip] = useState<string>("ACI");
  const [prices, setPrices] = useState<string>("145.67, 146.45, 147.56, 149.23, 150.23");
  const [days, setDays] = useState<string[]>(["7", "10", "15", "30", "45", "365"]);
  const [actual_price, setActual_price] = useState<string>("153.00, 155.00, 157.50, 164.50, 172.00, 330.00");
  const [prediction, setPrediction] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Parse input data
    const priceData = prices.split(",").map((price) => parseFloat(price.trim()));
    const actualPriceData = actual_price.split(",").map((price) => parseFloat(price.trim()));
    const dayData = days.map((day) => parseInt(day));

    // Log the parsed data before sending the request
    // console.log("Payload Data:", {
    //   scrip,
    //   data: priceData,
    //   actual_prices: actualPriceData,
    //   days: dayData,
    // });

    try {
      const response = await axios.post(
        "https://stockprediction-fastapi-backend-1.onrender.com/predict",
        {
          scrip,
          data: priceData,
          actual_prices: actualPriceData, // Ensure this matches the backend's expected field
          days: dayData,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Response Status:", response.status); // Log the response status
      console.log("Received Prediction Result:", response.data); // Log the result from the backend
      setPrediction(response.data); // Set the response to state
    } catch (error) {
      console.error("Error fetching prediction:", error);
    }
  };
  

  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[1080px]">
        <Breadcrumb pageName="Stock Prediction" />
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
          <h1 className="text-4xl font-bold text-center mb-8">Stock Prediction</h1>
          <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
            <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Stock Price Prediction</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-600 font-medium mb-2" htmlFor="scrip">
                  Stock Scrip (e.g., ACI)
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
              <div>
                <label className="block text-gray-600 font-medium mb-2" htmlFor="actual_prices">
                  Actual Prices (comma-separated)
                </label>
                <input
                  type="text"
                  id="actual_prices"
                  value={actual_price}
                  onChange={(e) => setActual_price(e.target.value)}
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-indigo-500"
                  placeholder="e.g., 153.00, 155.00, 157.50"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-2 rounded-lg font-medium hover:bg-indigo-600 transition duration-200"
              >
                Get Prediction
              </button>
            </form>
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
      </div>
    </DefaultLayout>
  );
};

export default PredictPage;
