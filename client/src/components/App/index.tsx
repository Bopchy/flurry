import React from 'react';

import Card from "../Card";
import DetailsList from "../DetailsList";
import TemperatureCircle from "../TemperatureCircle";

import data from "../../data";

function App() {
  return (
    <div className="bg-offWhite box-border">
      <p>Hello</p>
      <Card cards={data.cards} />
      <DetailsList detailsList={data.detailsList} />
      <TemperatureCircle temperature={data.temperature} />
    </div>
  );
}

export default App;
