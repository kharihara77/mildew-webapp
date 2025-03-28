import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Car } from "lucide-react";
import { CalendarDays } from 'lucide-react';




interface RiskDataItem {
    date: string;
    risk_index: number;
}
export function RiskTable({ items }: { items: RiskDataItem[] }) {
    return (
    <Card>
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
                        <TableHead className="text-base">Date</TableHead>
                        <TableHead className="text-right text-base">Risk Index</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {items.map((item) => (
                        <TableRow  key={item.date}>
                            <TableCell className="font-medium text-base " >{item.date}</TableCell>
                            <TableCell className="text-right">
                                <span className="px-2 py-1 rounded-full text-base font-normal">{item.risk_index}

                                </span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
    </Card>
    )
}