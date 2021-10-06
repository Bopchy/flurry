import React from 'react';
import tw, { styled } from 'twin.macro';

const Wrapper = styled.div(() => [tw`rounded-lg bg-gray-50`]);

const Layout = ({ children }: { children: React.ReactNode}) => {
    return (
        <Wrapper id="main">
            {children}
        </Wrapper>
    )
};

export default Layout;
