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

export interface IDetailProps {
    detailLogo: string;
    detailName: string;
    detailValue: string;
}

export interface IDetailsListProps {
    detailsList: IDetailProps[];
}

export interface ITemperatureCircleProps {
    temperature: number;
}
