import React from 'react';

import sunSvg from "../../assets/icons/sun.svg";

import { ICardProps } from "../../utils/types";    

const Card: React.FC<ICardProps> = ({
    cards
}) => {
    return (
        <div className="flex justify-between">
            {
                cards.map((card) => (
                    <section className="flex flex-col w-80 h-72 shadow-2xl rounded-lg px-4 border-t-8 rounded bg-white">
                        <p className="flex items-center flex-grow flex-shrink-0 justify-center">{card.headerText}</p>
                        <main className="flex border-b-2 divide-x flex-grow flex-shrink-0 pb-8 justify-evenly">
                            <img
                              src={card.weatherImage}
                              alt={card.weatherImageAlt}
                              className="w-24"
                            />
                            <p className="text-8xl pl-6 self-center">{card.tempHigh}</p>
                        </main>
                        <footer className="flex justify-evenly flex-grow flex-shrink-0">
                            <span className="flex items-center gap-4">
                                <img src={sunSvg} alt="Low temperature" />
                                <p>{card.tempLow}</p>
                            </span>
                            <span className="flex items-center gap-4">
                                <img src={sunSvg} alt="Humidity" />
                                <p>{card.humidity}</p>
                            </span>
                        </footer>
                    </section>
                ))
            }
        </div>
    );
};

export default Card;
