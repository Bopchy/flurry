import React, { useContext } from 'react';
import { css, styled } from 'twin.macro';
import { TempFormatContext } from "../../context/tempFormat.context";
import { IButton } from "../../typings/components";

const Wrapper = styled.span(() => []);

const Button = styled.button<IButton>(() => [css`border: none; background-color: gray;`]);

const Toggle = () => {
    const temp = useContext(TempFormatContext)
    
    return (
        <Wrapper>
            <Button onClick={() => temp?.update}>{temp?.format}</Button>
        </Wrapper>
    )
};

export default Toggle;
