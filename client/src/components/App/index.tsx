import React from 'react';
import tw, { styled, css } from 'twin.macro';

import Card from "../Card";
import DetailsList from "../DetailsList";
import TemperatureCircle from "../TemperatureCircle";
import SideBar from '../Sidebar';
import NavBar from '../NavBar';

import data from "../../data";

const Wrapper = styled.div(() => [tw`box-border p-12 h-full`, css`
  background: linear-gradient(90deg, #6D28D9 0 30%, #DDD6FE 30% 100%);
  display: grid;
  grid-template-columns: 0.25fr 3fr 0.85fr;
`]);

const Layout = styled.div(() => [tw`bg-gray-50 inline-block`, css`
  display: grid;
  grid-template-rows: 0.25fr 2fr;
`]);

const Content = styled.section(() => [tw`p-12`]);

const Details = styled.section(() => [tw`flex`]);

function App() {
  return (
    <Wrapper>
      <SideBar />
      <Layout id="main">
        <NavBar />
        <Content>
          <Details>
            <TemperatureCircle temperature={data.temperature} />
            {/** Add weather images here */}
          </Details>
          <Card cards={data.cards} />
        </Content>
      </Layout>
      <DetailsList detailsList={data.detailsList} />
    </Wrapper>
  );
}

export default App;
