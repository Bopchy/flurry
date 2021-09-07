import React from 'react';

import { ITemperatureCircleProps } from "../../utils/types";

const TemperatureCircle: React.FC<ITemperatureCircleProps> = ({ temperature }) => {
    return (
        <div className="rounded-full border-8 border-white w-72 h-72 flex justify-center">
            <div className="border-2 border-black rounded-full w-48 h-48 self-center">
                <span className="text-9xl flex p-5">{temperature}</span>
            </div>
        </div>
    )
};

export default TemperatureCircle;
