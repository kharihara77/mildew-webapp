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
  risk_index: number;
  date: string;
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
      const riskDataItems:RiskDataItem[] = data.message.map((item:[string, number]) => ({
        risk_index: item[1],
        date: item[0]
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
