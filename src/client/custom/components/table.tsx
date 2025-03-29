import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Car } from "lucide-react";
import { CalendarDays } from 'lucide-react';
import { Thermometer, Wind, Droplet, CloudRain  } from "lucide-react"





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
export function RiskTable({ items }: { items: RiskDataItem[] }) {
    const getWindDirection = (heading: number) => {
        const arrows =  ["↑", "↗", "→", "↘", "↓", "↙", "←", "↖"];
        const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
        const index= Math.floor(heading / 45) % 8; // Each direction is 45 degrees (8 sectors 360/8) Use mod 8 to get the index\
        return arrows[index] + " " + directions[index];

    }
    const getRiskColor = (riskIndex: number) => {
        const colors = ["bg-green-100 text-green-800", "bg-yellow-100 text-yellow-800", "bg-red-100 text-red-800"];
        if (riskIndex < 40) {
            return colors[0];
        }
        else if (riskIndex < 60) {

            return colors[1];
        }
        else {
            return colors[2];
        }
    }

    return (
    <Card className="border-theme-dark_compliment/80 border-2">
        <CardHeader>
        <div className="flex items-center justify-left gap-3 mb-2">
            <div className="bg-gradient-to-r from-theme-dark/80 to-theme-dark/90 rounded-full p-2">
                    <CalendarDays className="h-4 w-4 text-theme-light" />
             </div>
            <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-200">Daily Mildew Risk Index</CardTitle>
        </div>
            <CardDescription className="text-base  text-gray-600">Breakdown of Mildew Risk for each day</CardDescription>
        </CardHeader>
        <CardContent className=" overflow-x-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="">Date</TableHead>
                        <TableHead className=" ">Risk Index</TableHead>
                        <TableHead className=" ">
                            <div className="flex items-center gap-1">
                                <Thermometer className="h-4 w-4" />
                                <span>Low/High Temp </span>
                            </div>                            
                        </TableHead>
                        <TableHead className=" ">
                            <div className="flex items-center gap-1">
                                <Droplet className="h-4 w-4" />
                                Low/High Humidity 
                            </div>                            
                        </TableHead>
                        <TableHead className=" ">
                            <div className="flex items-center gap-1">
                                <CloudRain className="h-4 w-4" />
                                <span>Precipitation</span>
                            </div>                            
                        </TableHead>
                
                        <TableHead className=" ">
                            <div className="flex items-center gap-1">
                                <Wind className="h-4 w-4" />
                                <span>Wind</span>
                            </div>                            
                        </TableHead>
                        
                    </TableRow>
                </TableHeader>
                <TableBody className="">
                    {items.map((item) => (
                        <TableRow  className="" key={item.date}>
                            <TableCell className="py-4" >{item.date}</TableCell>
                            <TableCell className=" text-center">
                            <span className={`px-3 py-1 rounded-full text-sm font-bold ${getRiskColor(item.risk_index)}`}>
                                {item.risk_index}
                            </span>
                            </TableCell>
                            <TableCell className="text-center">
                                <div className=" flex items-center justify-center gap-2 text-sm/6">
                                    <span className="font-extralight"> {item.low_temp}°F</span>
                                    <span> / </span> 
                                    <span className="font-medium"> {item.high_temp}°F</span>
                                </div>
    
                            </TableCell>
                            <TableCell className="">
                                
                                <div className="flex items-center justify-center gap-2 text-sm/6 ">
                                    <span className="font-extralight">{item.min_humidity}% </span> 
                                    <span> / </span> 
                                    <span className="font-medium">{item.max_humidity}%</span>
                                
                                </div>
                            </TableCell>
                            <TableCell className="">
                                
                                <div className="flex items-center justify-center gap-2 text-sm/6 ">
                                    <span className="font-medium">{item.total_precipitation.toFixed(3)} " </span> 
                                    <span> / </span> 
                                    <span className="font-medium">{item.precipitation_probability}% Chance</span>
                                
                                </div>
                            </TableCell>

                            <TableCell className="text-center">
                                <div className="flex items-center justify-center gap-2 text-sm/6 font-medium">
                                    <span> {item.max_wind_speed} mph</span>
                                    <span>{getWindDirection(item.dominant_wind_direction)} </span>
                                </div>
    
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
    </Card>
    )
}