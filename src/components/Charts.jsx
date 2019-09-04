import React from "react";
import ChartContainer from "./ChartContainer";

const Charts = ({ coinData }) => {
  return (
    <div className="charts">
      {coinData.map(coin => (
        <ChartContainer coin={coin}/>
      ))}
    </div>
  );
};
export default Charts;
