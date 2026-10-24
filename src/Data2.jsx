import React, { useState } from "react";

const Data2 = ({ seconddata = [], apidata = [] }) => {
  console.log(seconddata, apidata);

  const [searchId, setSearchId] = useState("");
  console.log(searchId);

const [showResults, setShowResults] = useState(false);

  const mergedData = seconddata
    .filter((item) =>
      apidata.some((apiItem) => String(apiItem.id) === String(item.id)),
    )
    .map((item) => {
      const matchedItem = apidata.find((apiItem) => apiItem.id === item.id);
      console.log(matchedItem);
      return {
        ...item,
        ...matchedItem,
      };
    });
  console.log(mergedData);

  const filteredData = mergedData.filter((item) => {
    return String(item.id).includes(searchId);
  });
  console.log(filteredData);

  function showdata() {
    setShowResults(true);
  }

  return  (
    <div>
      <input
        type="text"
        value={searchId}
        onChange={(e) => {
          setSearchId(e.target.value);
          setShowResults(false);
        }}
        placeholder="Enter search by ID"
      />

      <button onClick={showdata}>Show Data</button>

      {showResults && (
        filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div key={item._id}>
              <p>ID: {item.id}</p>
              <p>Title: {item.title}</p>
              <p>Price: {item.price}</p>
              <hr />
            </div>
          ))
        ) : (
          <p>No data found</p>
        )
      )}
    </div>
  );
};

export default Data2;
