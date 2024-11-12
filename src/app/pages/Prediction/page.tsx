
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
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary chart elements
ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

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
  const [scrip, setScrip] = useState("");
  const [data, setData] = useState<string>("");
  const [days, setDays] = useState<string>("");
  const [actualPrices, setActualPrices] = useState<string>("");
  const [response, setResponse] = useState<PredictResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handlePrediction = async () => {
    setError(null); // Reset error state

    try {
      const requestData = {
        scrip,
        data: data.split(",").map(Number), // Parse data as an array of floats
        days: days.split(",").map(Number), // Parse days as an array of integers
        actual_prices: actualPrices.split(",").map(Number), // Parse actual_prices as an array of floats
      };

      const res = await axios.post<PredictResponse>(
        "https://d3b4-34-16-174-80.ngrok-free.app/predict",
        requestData,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(res.data);
      setResponse(res.data);
    } catch (err) {
      if (err instanceof AxiosError) {
        console.error("Error fetching prediction:", err);
        setError(err.response?.data?.detail || "Failed to fetch prediction");
      } else {
        console.error("Unexpected error:", err);
        setError("Failed to fetch prediction");
      }
    }
  };

  // Use useEffect to dynamically load necessary scripts with error handling
  useEffect(() => {
    // Function to dynamically load external scripts
    const loadScript = (src: string, onError: () => void) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onerror = onError;
      document.body.appendChild(script);
    };

    // Load html5shiv and respond.js with error handlers
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
    <div className="max-w-2xl mx-auto p-4">
      <div className="mb-4">
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
          className="p-2 border border-gray-300 rounded w-full mb-2"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Days for Prediction (comma-separated)"
          className="p-2 border border-gray-300 rounded w-full mb-2"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Actual Prices (comma-separated)"
          className="p-2 border border-gray-300 rounded w-full mb-4"
          value={actualPrices}
          onChange={(e) => setActualPrices(e.target.value)}
        />
        <button className="bg-blue-500 text-white p-2 mt-4 rounded w-full" onClick={handlePrediction}>
          Get Prediction
        </button>
      </div>

      {error && <div className="text-red-500 mt-4 text-center">{error}</div>}

      {response && (
        <div className="mt-8 bg-gray-100 p-4 rounded shadow-md">
          <h2 className="text-xl font-semibold">Prediction Results for {response.scrip}</h2>
          <div className="mt-4">
            <p>
              <strong>Current Price:</strong> ${response.current_price}
            </p>
            <p>
              <strong>Metrics:</strong>
            </p>
            <ul className="list-disc ml-6">
              <li>
                <strong>Mean Price:</strong> {response.metrics.mean}
              </li>
              <li>
                <strong>Max Price:</strong> {response.metrics.max}
              </li>
              <li>
                <strong>Standard Deviation:</strong> {response.metrics.standard_deviation}
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <p>
              <strong>Evaluation Metrics:</strong>
            </p>
            <ul className="list-disc ml-6">
              <li>
                <strong>MSE:</strong> {response.evaluation.mse}
              </li>
              <li>
                <strong>MAE:</strong> {response.evaluation.mae}
              </li>
            </ul>
          </div>

          {/* Chart for Predicted Prices */}
          <div className="mt-6">
            <Line
              data={{
                labels: response.future_predictions.days.map((day: number) => `Day ${day}`),
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
  );
}












// import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
// import DefaultLayout from "@/components/Layouts/DefaultLaout";
// import React, { useState } from "react";
// import axios from "axios"; // Import axios


// const PredictPage = () => {
//   const [scrip, setScrip] = useState<string>("ACI");//   const [prices, setPrices] = useState<string>("145.67, 146.45, 147.56, 149.23, 150.23");
//   const [days, setDays] = useState<string[]>(["7", "10", "15", "30", "45", "365"]);
//   const [actual_price, setActual_price] = useState<string>("153.00, 155.00, 157.50, 164.50, 172.00, 330.00");
//   const [prediction, setPrediction] = useState<any>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Parse input data
//     const priceData = prices.split(",").map((price) => parseFloat(price.trim()));
//     const actualPriceData = actual_price.split(",").map((price) => parseFloat(price.trim()));
//     const dayData = days.map((day) => parseInt(day));

//     // Log the parsed data before sending the request
//     // console.log("Payload Data:", {
//     //   scrip,
//     //   data: priceData,
//     //   actual_prices: actualPriceData,
//     //   days: dayData,
//     // });

//     try {
//       const response = await axios.post(
//         "https://stockprediction-fastapi-backend-1.onrender.com/predict",
//         {
//           scrip,
//           data: priceData,
//           actual_prices: actualPriceData, // Ensure this matches the backend's expected field
//           days: dayData,
//         },
//         { headers: { "Content-Type": "application/json" } }
//       );

//       console.log("Response Status:", response.status); // Log the response status
//       console.log("Received Prediction Result:", response.data); // Log the result from the backend
//       setPrediction(response.data); // Set the response to state
//     } catch (error) {
//       console.error("Error fetching prediction:", error);
//     }
//   };
  

//   return (
//     <DefaultLayout>
//       <div className="mx-auto w-full max-w-[1080px]">
//         <Breadcrumb pageName="Stock Prediction" />
//         <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
//           <h1 className="text-4xl font-bold text-center mb-8">Stock Prediction</h1>
//           <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
//             <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Stock Price Prediction</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="block text-gray-600 font-medium mb-2" htmlFor="scrip">
//                   Stock Scrip (e.g., ACI)
//                 </label>
//                 <input
//                   type="text"
//                   id="scrip"
//                   value={scrip}
//                   onChange={(e) => setScrip(e.target.value)}
//                   className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-indigo-500"
//                   placeholder="Enter stock scrip"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-600 font-medium mb-2" htmlFor="prices">
//                   Historical Prices (comma-separated)
//                 </label>
//                 <input
//                   type="text"
//                   id="prices"
//                   value={prices}
//                   onChange={(e) => setPrices(e.target.value)}
//                   className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-indigo-500"
//                   placeholder="e.g., 145.67, 146.45, 147.56"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-600 font-medium mb-2" htmlFor="days">
//                   Prediction Days
//                 </label>
//                 <select
//                   id="days"
//                   multiple
//                   value={days}
//                   onChange={(e) => {
//                     const selectedDays = Array.from(e.target.selectedOptions, option => option.value);
//                     setDays(selectedDays);
//                   }}
//                   className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-indigo-500"
//                 >
//                   <option value="7">7 Days</option>
//                   <option value="10">10 Days</option>
//                   <option value="15">15 Days</option>
//                   <option value="30">30 Days</option>
//                   <option value="45">45 Days</option>
//                   <option value="365">365 Days</option>
//                 </select>
//                 <p className="text-gray-500 text-sm mt-2">Hold Ctrl (Windows) or Cmd (Mac) to select multiple days</p>
//               </div>
//               <div>
//                 <label className="block text-gray-600 font-medium mb-2" htmlFor="actual_prices">
//                   Actual Prices (comma-separated)
//                 </label>
//                 <input
//                   type="text"
//                   id="actual_prices"
//                   value={actual_price}
//                   onChange={(e) => setActual_price(e.target.value)}
//                   className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-indigo-500"
//                   placeholder="e.g., 153.00, 155.00, 157.50"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-indigo-500 text-white py-2 rounded-lg font-medium hover:bg-indigo-600 transition duration-200"
//               >
//                 Get Prediction
//               </button>
//             </form>
//             {prediction && (
//               <div className="mt-6 p-4 bg-gray-50 rounded-lg">
//                 <h3 className="text-lg font-semibold text-gray-700">Prediction Results</h3>
//                 <p className="mt-2 text-gray-600"><strong>Scrip:</strong> {prediction.scrip}</p>
//                 <p className="text-gray-600"><strong>Current Price:</strong> {prediction.current_price}</p>
//                 <div className="text-gray-600 mt-2">
//                   <strong>Future Predictions:</strong>
//                   <ul className="list-disc ml-6 mt-1">
//                     {prediction.future_predictions.days.map((day: number, index: number) => (
//                       <li key={day}>
//                         Day {day}: ${prediction.future_predictions.predicted_prices[index].toFixed(2)}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div className="text-gray-600 mt-4">
//                   <strong>Metrics:</strong>
//                   <p>Mean: {prediction.metrics.mean.toFixed(2)}</p>
//                   <p>Max: {prediction.metrics.max.toFixed(2)}</p>
//                   <p>Standard Deviation: {prediction.metrics.standard_deviation.toFixed(2)}</p>
//                 </div>
//                 <div className="text-gray-600 mt-4">
//                   <strong>Evaluation:</strong>
//                   <p>Mean Squared Error (MSE): {prediction.evaluation.mse.toFixed(4)}</p>
//                   <p>Mean Absolute Error (MAE): {prediction.evaluation.mae.toFixed(2)}</p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </DefaultLayout>
//   );
// };

