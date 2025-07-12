import { createContext } from "react";

export interface TipContextType {
    bill: number;
    setBill: (value: number) => void;
    percentage: number;
    setPercentage: (value: number) => void;
    people: number;
    setPeople: (value: number) => void;
    tipAmount: number;
    totalAmount: number;
    resetAmounts: () => void;
    isFocused: boolean
}

export const TipContext = createContext<TipContextType | undefined>(undefined)
