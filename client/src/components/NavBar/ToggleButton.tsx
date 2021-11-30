import React, {useContext, useState} from 'react';
import tw, { styled } from 'twin.macro';
import { AppContext } from '../../index'

const Wrapper = styled.span(() => []);

const Button = styled.button(() => []);

const Toggle = () => {
    // get if celsius or fahrenheit from context
    const { tempFormat } = useContext(AppContext)
    const [format, setFormat] = useState(tempFormat);
    // update context instaed of local state
    const updateFormat = () => {
        if (format === "celsius") {
            return setFormat("fahrenheit")
        }
        return setFormat("celsius")
    }

    return (
        <Wrapper>
            <Button onClick={updateFormat}>{format}</Button>
        </Wrapper>
    )
};

export default Toggle;
