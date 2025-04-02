import { useState } from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {ChevronUp, ChevronDown} from "lucide-react"
import {OrbitProgress} from "react-loading-indicators"
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import Map from "./map";


import TimezoneSelect, {allTimezones} from 'react-timezone-select';

interface forecastFormProps {
    onSubmit: (lat: number, lng: number, days: number) => void;
    position: {lat: number, lng: number};
    setPosition: (position: {lat: number, lng: number}) => void;
    days: number;
    setDays: (days: number) => void;
    timezone: string;
    setTimezone: (timezone: string) => void;
    isLoading: boolean
}

export function ForecastForm({ onSubmit, position, setPosition, days, setDays, timezone, setTimezone, isLoading }: forecastFormProps) {

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault(); // prevents default behavior to reload page
        onSubmit(position.lat, position.lng, days);
    }

    const incrementDays = () => {
        setDays(Math.min(16, days + 1));
    };

    const decrementDays = () => {
        setDays(Math.max(1, days - 1));
    };
    
    return (
        <Card className="h-full">
            {/* <CardHeader>
                <CardTitle className="text-theme-dark">Location Details</CardTitle>
            </CardHeader> */}
            <CardContent className="pt-6 ">
                <h2 className="text-xl font-semibold mb-4">Input Parameters</h2>
                <div className="space-y-10"> 
                    <div>
                        <Map position={position} setPosition={setPosition} />
                    </div>    
                        
                    
                    
                
                          
                    <form onSubmit={handleSubmit} className=" space-y-6 rounded-l ">
                        
                        <div className="relative ">
                        <Label
                                htmlFor="latitude"
                                className=" text-sm font-medium text-theme-medium mb-1 block "
                                >
                                Latitude
                        </Label>
                            <Input
                                id="lat"
                                type="number"
                                step="0.01"
                                min= "-90"
                                max="90"
                                className="border-theme-medium/20 focus-visible:ring-theme-medium bg-white"
                                value={position.lat}
                                onChange={(e) => setPosition({ ...position, lat: parseFloat(e.target.value) })}
                                required
                                
                            />
                        </div>

                        <div className="relative">
                            <Label
                                htmlFor="longitude"
                                className="text-sm font-medium text-theme-medium mb-1 block"
                            >
                                Longitude
                            </Label> 
                            <Input
                                id="lng"
                                type="number"
                                step="0.01"
                                min= "-180"
                                max="180"
                                className="border-theme-medium/20 focus-visible:ring-theme-medium bg-white"
                                value={position.lng}
                                onChange={(e) => setPosition({ ...position, lng: parseFloat(e.target.value) })}
                                required
                            />
                            
                        </div>


                        <div className="relative">
                            <Label
                                htmlFor="days"
                                className="text-sm font-medium text-theme-medium mb-1 block"
                            >
                                Days 
                            </Label>
                            <div className="relative">
                            <Input
                                id="days"
                                type="number"
                                value={days}
                                onChange={(e) => setDays(parseInt(e.target.value))}
                                className="border-theme-medium/20 focus-visible:ring-theme-medium bg-white pr-10"
                                
                                required
                            />

                            <div className ="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col ">

                            <button 
                                type="button"
                                onClick = {incrementDays}
                                className=" border-0 p-0 text-stone-400/[0.6] bg-transparent hover:text-stone-600 transition-colors p-1 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
                            >
                                {/* <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-tj5bde-Svg" fill="currentColor">
                                    <path d="M4.516 13.452c0.436 0.446 1.043 0.481 1.576 0l3.908-3.747 3.908 3.747c0.533 0.481 
                                    1.141 0.446 1.574 0 0.436-0.445 0.408-1.197 0-1.615-0.406-0.418-4.695-4.502-4.695-4.502-0.217-0.223-0.502-0.335-0.787-0.335s-0.57 0.112-0.789 0.335c0 0-4.287 4.084-4.695 4.502s-0.436 1.17 0 1.615z">

                                    </path>
                                </svg> */}
                                <ChevronUp className="h-5 w-5" />
                            </button>

                            <button 
                                    type="button"
                                    onClick = {decrementDays}
                                    className=" border-0 p-0 text-stone-400/[0.6] bg-transparent hover:text-stone-600 transition-colors p-1 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 "
                                    aria-label="Increase days"
                            >
                                    {/* <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-tj5bde-Svg">
                                        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 
                                        1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z">

                                        </path>
                                    </svg> */}

                                <ChevronDown className="h-5 w-5" />

                                

                            </button>
                            </div>
                        </div>
                        </div>


                            
                        
                        {/* <div className="relative">
                            <label
                                htmlFor="timezone"
                                className="text-sm font-medium text-theme-medium mb-1 block"
                            >
                                Time Zone
                            </label>
                            
                            <TimezoneSelect
                            value={timezone}
                            onChange={(value) => setTimezone(value.value)}
                            
                            timezones={allTimezones}
                            required
                            
                            />
                        
                        </div> */}
                        {isLoading ? (
                            <div className="flex justify-center items-center">
                                <OrbitProgress color="#0D5856" size="small" text="Loading" textColor="#580d0f" />
                            </div>
                        ) :
                        (
                            <button
                            type="submit"
                            className="w-full rounded-lg bg-theme-dark px-4 py-3 font-medium text-white transition-colors 
                            hover:bg-theme-dark/90 focus:outline-none focus:ring-0 focus:ring-theme-dark "
                            //disabled={isLoading}
                            >
                            Get Forecast
                            </button>
                        )

                        }
                    
                            {/* {isLoading ? (
                                <>
                                    <OrbitProgress color="#e3c4b7" size="small" text="Loading" textColor="#c4a9a9" />
                                </>
                            ) : ("Get Forecast"
                            )} */}
                        
                    </form>
                    </div>
                </CardContent> 
        </Card>
    )
}