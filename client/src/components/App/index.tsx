import React from 'react';
import tw, { styled } from 'twin.macro';

import Card from "../Card";
import DetailsList from "../DetailsList";
import Layout from '../Layout';
import TemperatureCircle from "../TemperatureCircle";

import data from "../../data";

const Wrapper = styled.div(() => [tw`box-border`]);

function App() {
  return (
    <Wrapper>
      <Layout>
        <Card cards={data.cards} />
        <DetailsList detailsList={data.detailsList} />
        <TemperatureCircle temperature={data.temperature} />
      </Layout>
    </Wrapper>
  );
}

export default App;
