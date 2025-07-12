import { useContext } from "react";
import { TipContext } from "../context/TipContext";

const useMyContext = () => {
    const tipContext = useContext(TipContext);
    if (!tipContext) {
        console.error("TipContext is not available");
        return null;
    }
    return tipContext
}

export default useMyContext