import "./App.css";
import { useEffect, useState } from "react";
import React from 'react'
import IndexCard from "./custom/components/IndexCard";
import {Header} from "./custom/components/header";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import IndexForecast from "./custom/functions/index-forecast";
import {ForecastForm} from "./custom/components/ForecastForm";
import { c } from "node_modules/vite/dist/node/types.d-aGj9QkWt";
import { Car } from "lucide-react";
import { error } from "console";


interface RiskDataItem {
  date: string;
  risk_index: number;
}

function App() {
 
  const [riskData, setRiskData] = useState<RiskDataItem[]>([]);
  const highestIndex = Math.max(...riskData.map((item) => item.risk_index));
  const [position, setPosition] = useState({    
    lat: 10.14,
    lng: -100.29})
  const [days, setDays] = useState(7);
  const [timezone, setTimezone] = useState("GMT-10");
  //const [showForecast, setShowForecast] = useState(false); 
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
    //setShowForecast(true);
    generateMildex();
    
  }

  return (
    
    <>
    
      <div className="min-h-screen p-8">
        <div className="mx-auto bg-theme-light  max-w-7xl">
          <Header />
        
           <div className={`grid gap-8 ${riskData.length <= 0 ? 'grid-cols-1' : 'md:grid-cols-[400px,1fr]'}`}>
              <Card className="bg-theme-light shadow-md border border-theme-medium/20">
                <CardHeader>
                  <CardTitle className="text-theme-dark">Location Details</CardTitle>
                </CardHeader>

                <CardContent className="">
                  <ForecastForm onSubmit={handleFormSubmit} position={position} setPosition={setPosition} days={days} setDays={setDays} 
                  timezone={timezone} setTimezone={setTimezone} isLoading={isLoading} />
                </CardContent>
              
              </Card>
            {riskData.length > 0 && 
            <IndexForecast items={riskData} />
          }
           </div>
        </div>
      </div>
    
    </>
    
  )
}

export default App
