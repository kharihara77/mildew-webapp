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
// function changeDateFormat(date: string) {
//   const formattedDate = dayjs(date, 'YYYY-MM-DD');
//   console.log(formattedDate.day()); 

 
// }

// function createAbsolutePath(relativePath: string) {
//   const curDir = import.meta.dirname;
//   const absolutePath = path.resolve(curDir, relativePath);
//   return absolutePath;
// }

// // TODO: Change to relative path for python process
// app.get("/hello", (req, res) => {
//   var lat = req.query.lat as string || "";
//   var long = req.query.long as string || "";
  
//   // create the absolute paths for calling python and the mildew script
//   // TODO: Change so that is hits the api endpoint
//   const pythonPath = createAbsolutePath('../../../python/.venv/bin/python3');
//   const scriptPath = createAbsolutePath('../../../python/MildewModule/mildex.py');
  


//   const pythonProcess = spawn(pythonPath, [scriptPath,lat,long, "GMT-10", "10"]);
  
//     let dataToSend:string = "";

//   pythonProcess.stdout.on('data',  function (data: any)   {
//     dataToSend += data.toString();
//     console.log('Pipe data from python script ...' + dataToSend);
    
//   });

//   pythonProcess.on('close', (code: any) => {
//     console.log(`child process close all stdio with code ${code}`);
    

//     const riskData: RiskDataItem[] = JSON.parse(dataToSend).map((item: [number, string]) => ({
//       risk_index: Math.round(item[0]), // Convert to integer
//       date: item[1] // Keep as string
//     }));

//     res.send(riskData);
//   });

// });

// app.get("/mildex_forecast", (req, res) => {
//   const params ={
//     lat: -15,
//     long: 100,
//     timezone: "GMT-10",
//     days: 10
//   };
  
//   console.log(params);
//   fetch('https://mildew-195452479641.us-central1.run.app/mildex/mildex_forecast',{
//     method: 'POST',
//     headers:{
//       'accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(params)
//     })
//     .then(res => res.json())
//     .then(data =>{ console.log(data);})
  
// });

//add error handling for data types 
app.post("/mildex_forecast", (req, res) => {
  const params = req.body;
  fetch('https://mildew-195452479641.us-central1.run.app/mildex/mildex_forecast',{
    method: 'POST',
    headers:{
      'accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
    })
    .then(res => res.json())
    .then(data =>{ 
      const riskDataItems:RiskDataItem[] = data.message.map((item:[number, string]) => ({
        risk_index: item[0],
        date: item[1]
      }));
      console.log(riskDataItems);
      res.send(riskDataItems);
    })
  

  
});

ViteExpress.listen(app, 8080, () =>
  console.log("Server is listening on port 8080..."),
);
