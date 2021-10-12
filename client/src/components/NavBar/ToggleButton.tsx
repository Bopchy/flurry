import React from 'react';
import tw, { styled } from 'twin.macro';

const Wrapper = styled.span(() => []);

const Button = styled.button(() => []);

const Toggle = () => {
    // get if celsius or fahrenheit from context
    return (
        <Wrapper>
            <Button>C</Button>
            <Button>F</Button>
        </Wrapper>
    )
};

export default Toggle;
