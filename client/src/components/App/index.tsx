import React from 'react';

import Card from "../Card";

import data from "../../data";

function App() {
  return (
    <div className="App">
      <p>Hello</p>
      <Card cards={data.cards} />
    </div>
  );
}

export default App;
