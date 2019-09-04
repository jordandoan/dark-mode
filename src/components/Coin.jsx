import React, {useState, useEffect} from "react";
import axios from "axios";

import ChartContainer from "./ChartContainer";
import "../styles.scss";

const Coin = (props) => {
  let id = props.match.params.id;
  let coinData = props.coinData;
  let coin = coinData.find(coin => coin.id == id);
  let [info, setInfo] = useState("");
  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then(res => setInfo(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (info && coin) { 
    return (
      <div className="coin-container">
        <ChartContainer coin={coin} />
        <div className="info">
          <h2>{info.name}</h2>
          <p>Coin Gecko Rank: <span>{info.coingecko_rank}</span> </p>
          <p>Date Initialized: {info.genesis_date}</p>
          <p className="description" dangerouslySetInnerHTML={{ __html: info.description.en }}></p>
        </div>
      </div>
    );
  } else {
    return (
      <h2>Cryptocurrency not found!</h2>
    );
  }
}

export default Coin;