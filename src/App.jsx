import React, { useEffect, useState } from "react";
import axios from "axios";
import Data1 from "./Data1";

const App = () => {
  const [apidata, setData] = useState([]);
  console.log(apidata);

  useEffect(() => {
    const Apidata = async () => {
      const result = await axios.get("https://dummyjson.com/products");
      setData(result.data.products);
    };
    Apidata();
  }, []);

  return (
    <div>
      <Data1 apidata={apidata} />
    </div>
  );
};

export default App;
