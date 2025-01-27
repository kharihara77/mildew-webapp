import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import IndexCard from "../components/IndexCard";

//TODO: Change so that color is relative to highest index for the time frame
interface RiskDataItem {
    date: string;
    risk_index: number;
  }

  const getCardColor = (currentIndex: number, prevIndex: number| null) => {
    //let tuple: [number, string] = [0,'w-full max-w-4xl mx-auto bg-gradient-to-b from-blue-600 to-blue-800 text-white'];
    let tuple: [number, string] = [0,'bg-gray-50'];

    if (prevIndex === null) {
      return tuple;
    } else if (currentIndex === prevIndex) {
      return tuple;
    }
      else if (currentIndex > prevIndex) {
        let num = (600).toString();
        const coloval = `bg-gradient-to-b from-green-50 to-blue-150`; //{'w-full max-w-4xl mx-auto bg-gradient-to-b from-red-600 to-red-800 text-white'}; //{'w-full max-w-4xl mx-auto bg-gradient-to-b from-red-{{num}} to-red-800 text-white'};
        console.log(coloval);
        tuple = [1,coloval]; 
        return tuple;
    } else {
      tuple= [2,'w-full max-w-4xl mx-auto bg-gradient-to-b from-blue-600 to-blue-800 text-white'];;
      return tuple;
    }
  }
export default function IndexForecast({items}: {items: RiskDataItem[]}) {
    const data = items.map((item,index) => {
        const prevIndex = index > 0 ? items[index - 1].risk_index : null; // Get the previous index 
        const [delta, cardColor] = getCardColor(item.risk_index, prevIndex);
        
        // Creates the index card for each day
        return <IndexCard key={item.date} date={item.date} curindex={item.risk_index} cardColor={cardColor} delta={delta} />
    });
    const highestIndex = Math.max(...items.map(item => item.risk_index));

    return (
        <>
           <div className=" grid gap-4 md:grid-cols-2 lg:grid-cols-3">{data}</div>
        
        </>
    )
}