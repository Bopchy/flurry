import React from 'react';
import tw, { styled } from 'twin.macro';

const SideNav = styled.div(() => [tw`inline-block z-10 h-full bg-gray-100 border-r rounded-l-lg`]);

const SideBar = () => {
    return <SideNav />;
};

export default SideBar;


