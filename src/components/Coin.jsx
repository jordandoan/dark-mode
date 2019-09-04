import React from "react";

import ChartContainer from "./ChartContainer";

const Coin = (props) => {
  let id = props.match.params.id;
  let coinData = props.coinData;
  let coin = coinData.find(coin => coin.id == id);
  if (coin) { 
    return (
      <div className="coin-container">
        <ChartContainer coin={coin} />
        <p>{coin.description.en}</p>
      </div>
    );
  } else {
    return (
      <h2>Cryptocurrency not found!</h2>
    );
  }
}

export default Coin;