import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardTitle, CardHeader, CardContent, CardDescription } from "@/components/ui/card";
import { ChartLine } from 'lucide-react';


interface RiskDataItem {
        date: string;
        risk_index: number;
    }
interface LineChartProps {
        data: RiskDataItem[];
        days: number
    }

export function LineChartComponent({ data, days }: LineChartProps) {
    const chartData = data.map((item) => ({
        date: item.date.split(" ").slice(1).join(" "), // Remove the day of the week
        risk: item.risk_index,
      }))
    return (
        <Card>
            <CardHeader>
            <div className="flex items-center justify-left gap-3 mb-2">
                <div className="bg-gradient-to-r from-theme-dark/80 to-theme-dark/90 rounded-full p-2">
                    <ChartLine className="h-4 w-4 text-theme-light" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-200" >Mildew Risk Trend</CardTitle>
            </div>
                <CardDescription className="text-base  text-gray-600">Daily Risk index forecast for the next {days} days</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={{
                    risk: {
                    label: "Risk Index",
                    color: "hsl(var(--chart-1))",
                    },
                }}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                        
                        <XAxis dataKey="date" dy={15} tick={{ fontSize: 12 }} tickFormatter={(value) => value.split(",")[0]} />
                        <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Line type="monotone" dataKey="risk" stroke="#0D5856" strokeWidth={2} activeDot={{ r: 8 }} />
                    </LineChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </CardContent>
        </Card>
        
    )



}