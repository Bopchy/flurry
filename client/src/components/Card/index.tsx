import React from 'react';
import tw, {styled} from "twin.macro";

import sunSvg from "../../assets/icons/sun.svg";

import { ICardProps } from "../../utils/types";  

const Card = styled.section(() => [tw`flex flex-col w-80 h-72 shadow-2xl rounded-lg px-4 border-t-8 rounded bg-white`])
const CardHeader = styled.p(() => [tw`flex items-center flex-grow flex-shrink-0 justify-center`])
const CardBody = styled.main(() => [tw`flex border-b-2 divide-x flex-grow flex-shrink-0 pb-8 justify-evenly`])
const CardFooter = styled.footer(() => [tw`flex justify-evenly flex-grow flex-shrink-0`])

const CardComponent: React.FC<ICardProps> = ({
    cards
}) => {
    return (
        <div className="flex justify-between">
            {
                cards.map((card, index) => (
                    <Card key={index}>
                        <CardHeader>{card.headerText}</CardHeader>
                        <CardBody>
                            <img
                              src={card.weatherImage}
                              alt={card.weatherImageAlt}
                              className="w-24"
                            />
                            <p className="text-8xl pl-6 self-center">{card.tempHigh}</p>
                        </CardBody>
                        <CardFooter>
                            <span className="flex items-center gap-4">
                                <img src={sunSvg} alt="Low temperature" />
                                <p>{card.tempLow}</p>
                            </span>
                            <span className="flex items-center gap-4">
                                <img src={sunSvg} alt="Humidity" />
                                <p>{card.humidity}</p>
                            </span>
                        </CardFooter>
                    </Card>
                ))
            }
        </div>
    );
};

export default CardComponent;
