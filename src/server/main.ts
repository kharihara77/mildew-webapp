import express from "express";
import dayjs from "dayjs";
import ViteExpress from "vite-express";
import { spawn } from 'node:child_process';
import { R } from "node_modules/tsx/dist/types-Cxp8y2TL.js";
import * as path from 'path';


import cors from 'cors';
const app = express();

app.use(express.json());
//app.use(cors())


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


//add error handling for data types 
app.post("/mildex_forecast", (req, res) => {
  const apikey = process.env.API_KEY;
  const params = req.body;
  fetch('https://mildew-195452479641.us-central1.run.app/mildex/mildex_forecast',{
    method: 'POST',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-API-KEY': apikey || ''
    },
    body: JSON.stringify(params)
    })
    .then(response => {
      if (!response.ok) {
        console.log(response);
        throw new Error('Network response was not ok');
      }
      return response.json();
    }) 
      .then(data =>{ 
      if (data.error) {
        throw new Error(data.error);
      }
      const riskDataItems:RiskDataItem[] = data.message.map((item:[string, number, number, number, number,number, number, number, number, number]) => ({
        date: item[0],
        risk_index: item[1],
        high_temp: item[2],
        low_temp: item[3],
        max_humidity: item[4],
        min_humidity: item[5],
        max_wind_speed: item[6],
        dominant_wind_direction: item[7],
        total_precipitation: item[8],
        precipitation_probability: item[9],
      }));
      console.log(riskDataItems);
      res.send(riskDataItems);
    })
    .catch(error => {
      console.log(error);
      res.status(500).send('Error fetching data');
    });
  

  
});

ViteExpress.listen(app, 8080, () => {
  console.log("Server is listening on port 8080...");
});
