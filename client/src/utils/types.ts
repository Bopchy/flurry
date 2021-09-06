export interface ICardDetailsProps {
    headerText: string;
    weatherImage: string;
    weatherImageAlt: string;
    tempHigh: number;
    tempLow: number;
    humidity: number;
}

export interface ICardProps {
    cards: Array<ICardDetailsProps>;
}
