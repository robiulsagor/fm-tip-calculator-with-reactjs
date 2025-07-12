import { useEffect, useState } from "react";
import { TipContext } from "./TipContext"

const TipContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [bill, setBill] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const [people, setPeople] = useState(0);

    const [tipAmount, setTipAmount] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)

    const [isFocused, setIsFocused] = useState(false)

    // reset all amounts to zero
    const resetAmounts = () => {
        setBill(0)
        setPercentage(0)
        setPeople(0)
        setTipAmount(0)
        setTotalAmount(0)
        setIsFocused(false)
    }

    useEffect(() => {
        if (bill && percentage && people) {
            const tip = (percentage / 100 * bill) * people
            const total = (bill + (percentage / 100 * bill)) * people

            setTotalAmount(total)
            setTipAmount(tip)
            setIsFocused(true)
        }
    }, [bill, percentage, people])


    return (
        <TipContext.Provider value={{ bill, setBill, percentage, setPercentage, people, setPeople, tipAmount, totalAmount, resetAmounts, isFocused }}>
            {children}
        </TipContext.Provider>
    )
}

export default TipContextProvider