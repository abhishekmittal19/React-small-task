import React, { useEffect, useState } from "react";
import axios from "axios";
import Data2 from "./Data2";

const Data1 = ({ apidata }) => {
  console.log(apidata);

  const [seconddata, setSeconddata] = useState([]);
  console.log(seconddata);

  useEffect(() => {
    const Apidata = async () => {
      const result = await axios.get("https://dummyjson.com/products");
      setSeconddata(result.data.products);
    };
    Apidata();
  }, []);
  return (
    <div>
      <Data2 seconddata={seconddata} apidata={apidata} />
    </div>
  );
};

export default Data1;
