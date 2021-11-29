import React, {useContext} from 'react';
import tw, { styled } from 'twin.macro';
import { AppContext } from '../../index'

const Wrapper = styled.span(() => []);

const Button = styled.button(() => []);

const Toggle = () => {
    // get if celsius or fahrenheit from context
    const {theme} = useContext(AppContext)
    return (
        <Wrapper>
            <Button>Celsius</Button>
            <Button>Fahrenheit</Button>
        </Wrapper>
    )
};

export default Toggle;
