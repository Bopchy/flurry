import React from 'react';
import tw, { styled, css } from "twin.macro";

import { ITemperatureCircleProps } from "../../utils/types";

const Circle = styled.div(() => [
    tw`rounded-full border-8 border-white w-72 h-72 flex justify-center`,
    css`
      div {
          ${[tw`border-2 border-black rounded-full w-48 h-48 self-center`]}
      }
    `
]);

const TemperatureCircle: React.FC<ITemperatureCircleProps> = ({ temperature }) => {
    return (
        <Circle>
                <span className="text-9xl flex p-5">{temperature}</span>
        </Circle>
    )
};

export default TemperatureCircle;
