import React, { useState, useEffect } from "react";
import { Radio } from "antd";
import CardCom from "./components/card";
import TableCom from "./components/table";

import "./App.css";

function App() {
  const [size, setSize] = useState("card");
  useEffect(() => {
    console.log(size);
  }, [size]);
 
  return (
    <div className="App">
      <div className="top">
        <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
          <Radio.Button value="card">卡片</Radio.Button>
          <Radio.Button value="table">列表</Radio.Button>
        </Radio.Group>
      </div>
      <div>{size === "card" ? <CardCom className="card" /> : <TableCom />}</div>
    </div>
  );
}

export default App;
