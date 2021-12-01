import React, { useContext } from 'react';
import { styled } from 'twin.macro';
import { TempFormatContext } from "../../context/tempFormat.context";

const Wrapper = styled.span(() => []);

const Button = styled.button(() => []);

const Toggle = () => {
    const temp = useContext(TempFormatContext)
    
    return (
        <Wrapper>
            <Button onClick={temp.update}>{temp.format}</Button>
        </Wrapper>
    )
};

export default Toggle;
