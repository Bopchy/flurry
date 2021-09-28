import React from 'react';
import tw, { styled, css } from 'twin.macro';

import Card from "../Card";
import DetailsList from "../DetailsList";
import Layout from '../Layout';
import TemperatureCircle from "../TemperatureCircle";

import data from "../../data";

const Wrapper = styled.div(() => [tw`box-border p-16 `, css`
  background: linear-gradient(90deg, #6D28D9 0 30%, #DDD6FE 30% 100%);
`]);

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
