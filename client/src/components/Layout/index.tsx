import React from 'react';
import tw, { styled } from 'twin.macro';

const Wrapper = styled.div(() => [tw`m-16 rounded-lg bg-gray-50`]);

const Layout = ({ children }: { children: React.ReactNode}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
};

export default Layout;
