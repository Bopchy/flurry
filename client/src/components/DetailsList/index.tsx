import React from 'react';
import tw, { styled } from 'twin.macro';

import { IDetailProps, IDetailsListProps } from "../../utils/types";

const DetailWrapper = styled.div(() => [tw`flex pb-4 gap-4`]);

const DetailsListWrapper = styled.div(() => [tw`bg-gray-100 rounded-r-lg border-l h-full`]);

const Detail: React.FC<IDetailProps> = ({ detailLogo, detailName, detailValue }) => (
    <DetailWrapper>
        <img src={detailLogo} alt="logo" />
        <span>
            <p>{detailName}</p>
            <p>{detailValue}</p>
        </span>
    </DetailWrapper>
);

const DetailsList: React.FC<IDetailsListProps> = ({ detailsList }) => {
    return (
        <DetailsListWrapper>
            <p>Details</p>
            {detailsList.map((detail) => (
                <Detail key={detail.detailName} {...detail} />
            ))}
        </DetailsListWrapper>
    );
};

export default DetailsList;
