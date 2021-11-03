import { useEffect } from "react";
import Chart from "chart.js";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";

export default function ChartLine({
  title = "",
  main = "",
  type,
  data,
  options,
  id
}) {
    
  useEffect(() => {
    var ctx = document.getElementById('customChartID').getContext("2d");
    if(window[id]){
        window[id].destroy();
    }
    const config = {
      type,
      data,
      options,
    };

    window[id] = new Chart(ctx, config);
  }, [type, data]);

  return (
    <Card>
      <CardHeader color="cyan" contentPosition="left">
        <h6 className="uppercase text-gray-200 text-xs font-medium">{main}</h6>
        <h2 className="text-white text-2xl">{title}</h2>
      </CardHeader>
      <CardBody>
        <div className={`relative ${type === 'radar' ? 'h-500' : 'h-96'}`}>
          <canvas id="customChartID"></canvas>
        </div>
      </CardBody>
    </Card>
  );
}
