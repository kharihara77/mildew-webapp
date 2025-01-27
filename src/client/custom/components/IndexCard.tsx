import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {ChevronDown, ChevronUp,Minus, ArrowUp, ArrowDown} from "lucide-react"


const IndexCard = ({ date, curindex, cardColor, delta}: { date: string, curindex: number, cardColor: string, delta: number}) => {
    
   const getDeltaIcon = (delta: number) => {
       switch(delta) {
           case 0:
               return <Minus className="w-[3vw] h-[3vw] sm:w-[2vw] sm:h-[2vw] md:w-[1.5vw] md:h-[1.5vw] mr-[1vw]"/>
           case 1:
               return <ArrowUp className="w-[3vw] h-[3vw] sm:w-[2vw] sm:h-[2vw] md:w-[1.5vw] md:h-[1.5vw] mr-[1vw]"/>
           case 2:
               return <ArrowDown className="w-[3vw] h-[3vw] sm:w-[2vw] sm:h-[2vw] md:w-[1.5vw] md:h-[1.5vw] mr-[1vw]"/>
       }
   } 
    return(
        <Card key={date} className={`bg-theme-200border-theme-300 transition-shadow hover:shadow-md`}>
            <CardContent className="p-4">
            <p className="font-medium text-theme-800">{date}</p>
            <div className="mt-2 flex items-center justify-between">
                <p className="text-2xl font-bold text-theme-700">Index: {curindex}</p>    
                {getDeltaIcon(delta)} 
                        
            </div>
                    
            

            </CardContent>
        </Card>
    )
}

export default IndexCard

