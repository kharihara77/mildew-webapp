import "./App.css";
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from "react";
import React from 'react'
import IndexCard from "./custom/components/IndexCard";
import {Header} from "./custom/components/header";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import IndexForecast from "./custom/functions/index-forecast";
import {ForecastForm} from "./custom/components/ForecastForm";
import { LineChartComponent } from "./custom/components/linechart";
//import { c } from "node_modules/vite/dist/node/types.d-aGj9QkWt";
import { Car } from "lucide-react";
import { error } from "console";
import {OrbitProgress} from "react-loading-indicators"
import { RiskTable } from "./custom/components/table";
import { ChartLine } from 'lucide-react';
import Map from "./custom/components/map";






interface RiskDataItem {
  date: string;
  risk_index: number;
  high_temp: number;
  low_temp: number;
  max_humidity: number;
  min_humidity: number;
  max_wind_speed: number;
  dominant_wind_direction: number;
  total_precipitation: number;
  precipitation_probability: number;
}

function App() {
 
  const [riskData, setRiskData] = useState<RiskDataItem[]>([]);
  const highestIndex = Math.max(...riskData.map((item) => item.risk_index));
  const [position, setPosition] = useState({    
    lat: 36.77,
    lng: -119.41})
  const [days, setDays] = useState(7);
  const [timezone, setTimezone] = useState("GMT-10");
  const [isLoading, setIsLoading] = useState(false);
  
useEffect(() => {
  document.title = "Mildew Index";
}, []);
const generateMildex = () => {
  const params = {
    lat: position.lat,
    long: position.lng,
    timezone: timezone,
    days: days
  };
  console.log(params);
  setIsLoading(true);
  try {
  const response = fetch("/mildex_forecast", {
    method: "POST",
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then(res => res.json())
    .then(data => {
      setRiskData(data);
      console.log(data);
      setIsLoading(false);
  }) .catch(error => {
    console.log(error);
    setIsLoading(false);
  });

  } catch (error) {
    console.log(error);
    setIsLoading(false);
  }
}
  const handleFormSubmit = (latitude:number, longitude:number, days:number) => {
    setPosition({ lat: latitude, lng: longitude });
    setDays(days);
    generateMildex();
    
  }

  return (
    
    <>

    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
    <Header />
      <div className=" px-2 py-10 pb-16">
        <div className="container mx-auto ">
          
        
           {/* <div className={`grid gap-8 ${riskData.length <= 0 ? 'grid-cols-1' : 'md:grid-cols-[400px,1fr]'}`}> */}
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">    
      {/* Input Parameters Form - Left Side */}
      <div className="lg:col-span-4 lg:sticky lg:top-4 lg:self-start max-h-[calc(100vh-1rem)] ">
            
          <ForecastForm onSubmit={handleFormSubmit} position={position} setPosition={setPosition} days={days} setDays={setDays} 
          timezone={timezone} setTimezone={setTimezone} isLoading={isLoading} />
                
      </div> 
      
      <div className="lg:col-span-8 ">
        {isLoading ?(
          <div className="flex justify-center items-center h-64">
          <OrbitProgress  color="#0D5856" size="medium"  textColor="#580d0f" />
          
        </div>
        ) : riskData.length > 0 ? (
          <div className="p-4">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8">Forecast Results</h2>
            <LineChartComponent data={riskData} days={days} />
            <div className="mt-6">
            <RiskTable items={riskData} />
            {/* <IndexForecast items={riskData} /> */}
            </div>
          </div>
        ):(
          <div className="flex flex-col justify-center items-center h-64 text-center p-6 border border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
            <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">No Results Yet</h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-md">
              Enter the  parameters  and click "Get Forecast" to generate your
              forecast.
            </p>
          </div>
        )}
            </div>
      </div>
    </div>
  </div>
  </div>
    
    </>
    
  )
}

export default App
