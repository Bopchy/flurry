import React from 'react';

import Card from "../Card";
import DetailsList from "../DetailsList";
import Layout from '../Layout';
import TemperatureCircle from "../TemperatureCircle";

import data from "../../data";

function App() {
  return (
    <div className="bg-offWhite box-border">
      <Layout>
        <Card cards={data.cards} />
        <DetailsList detailsList={data.detailsList} />
        <TemperatureCircle temperature={data.temperature} />
      </Layout>
    </div>
  );
}

export default App;
