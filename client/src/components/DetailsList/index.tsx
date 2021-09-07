import React from 'react';

import { IDetailProps, IDetailsListProps } from "../../utils/types";

const Detail: React.FC<IDetailProps> = ({ detailLogo, detailName, detailValue }) => (
    <div className="flex pb-4 gap-4">
        <img src={detailLogo} alt="logo" />
        <span>
            <p>{detailName}</p>
            <p>{detailValue}</p>
        </span>
    </div>
);

const DetailsList: React.FC<IDetailsListProps> = ({ detailsList }) => {
    return (
        <div className="">
            <p>Details</p>
            {detailsList.map((detail) => (
                <Detail key={detail.detailName} {...detail} />
            ))}
        </div>
    );
};

export default DetailsList;
