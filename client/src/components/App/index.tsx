import React from 'react';

import Card from "../Card";

import data from "../../data";

function App() {
  return (
    <div className="bg-offWhite box-border">
      <p>Hello</p>
      <Card cards={data.cards} />
    </div>
  );
}

export default App;
