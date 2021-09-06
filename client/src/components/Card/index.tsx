import React from 'react';

import { ICardProps } from "../../utils/types";    

const Card: React.FC<ICardProps> = ({
    cards
}) => {
    return (
        <div className="flex justify-between">
            {
                cards.map((card) => (
                    <section className="flex justify-between">
                        <header><p>{card.headerText}</p></header>
                        <main>
                            <img src={card.weatherImage} alt={card.weatherImageAlt} />
                            <p>{card.tempHigh}</p>
                        </main>
                        <footer className="flex">
                            <span className="flex">
                                <img alt="Low temperature" />
                                <p>{card.tempLow}</p>
                            </span>
                            <span className="flex">
                                <img alt="Humidity" />
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
