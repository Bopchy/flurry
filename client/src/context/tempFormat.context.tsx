import React, { useState, createContext } from 'react'

export const TempFormatContext = createContext({
    format: "celsius",
});

const TempFormatContextProvider = ({ children }) => {
    const [format, setFormat] = useState("celsius");

    const update = () => {
        if (format === "celsius") {
            return setFormat("fahrenheit")
        }
        return setFormat("celsius")
    }

    return (
        <TempFormatContext.Provider value={{
            format,
            update
        }}>
            {children}
        </TempFormatContext.Provider>
    )
}

export default TempFormatContextProvider;
