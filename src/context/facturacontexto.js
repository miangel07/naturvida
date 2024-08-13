"use client";
import React, { createContext, useContext, useState } from "react";
const useContextFactura = createContext();
export const FacturaProvider = ({ children }) => {
    const [facturaFinalstate, setFacuturaFinal] = useState([]);
    console.log("contexto",facturaFinalstate)

    const FacturaProviderValue = { facturaFinalstate, setFacuturaFinal };
    return (
        <useContextFactura.Provider value={FacturaProviderValue}>
            {children}
        </useContextFactura.Provider>
    );
};

export const facturaFinal = () => {
    return useContext(useContextFactura);
};
