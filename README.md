# Web App for Mildew Risk Calculator 
## Overview
React and express web app that displays a Mildew Risk Forecast. Uses vite-express 
1. Input Lat and Long 
2. Input days for Forecast. Min: 4 Max: 16
3. Choose Timezone

## Development Mode 
```bash
npm install
yarn dev
```
Default Port runnning on 3000. 

## Production Mode
``` bash
npm install 
yarn build
yarn start 
```
Production mode creates dist directory to serve static files better suited for production. 

## Docker Usage
```bash
docker build -t <name> .
docker run -d --name <containername> -p 3000:3000 <imagename> 
```
## TODO
- Change port using ENV variable. Current Implmentation has it directly set in ```src/server/main.ts```