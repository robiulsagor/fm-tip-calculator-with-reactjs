import { useContext } from "react";
import { TipContext } from "../context/TipContext";

const useMyContext = () => {
    const tipContext = useContext(TipContext);
    if (!tipContext) {
        console.error("TipContext is not available");
        throw new Error("useMyContext must be used within a TipProvider");
    }
    return tipContext
}

export default useMyContext