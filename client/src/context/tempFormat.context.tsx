import React, { useState, createContext } from 'react'
import { ITempFormatProvider, ITempFormatContext } from '../typings/context'

export const TempFormatContext = createContext<ITempFormatContext | undefined>(undefined);

const TempFormatContextProvider = ({ children }: ITempFormatProvider) => {
    const [format, setFormat] = useState("celsius");
    const initialContext: ITempFormatContext = {
        format: "celsius",
        update: () => {
            if (format === "celsius") {
                return setFormat("fahrenheit")
            }
            return setFormat("celsius")
        }
    };

    return (
        <TempFormatContext.Provider value={
            initialContext
        }>
            {children}
        </TempFormatContext.Provider>
    )
}

export default TempFormatContextProvider;
