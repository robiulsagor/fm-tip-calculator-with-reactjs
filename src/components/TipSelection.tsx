
import { useEffect, useState } from "react";
import useMyContext from "../hooks/useMyContext";

const tipPercentages = [5, 10, 15, 25, 50];

const TipSelection = () => {
    const { percentage, setPercentage } = useMyContext();
    // const [selectedTip, setSelectedTip] = useState<number | null>(null);

    // useEffect(() => {
    //     if (selectedTip !== 0) setPercentage(selectedTip)
    // }, [selectedTip])


    return (
        <div>
            <p className="text-sm text-gray-500 font-bold mb-3">Select Tip %</p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {tipPercentages.map(percent => (
                    <button key={percent}
                        className={` p-2 rounded-md cursor-pointer  hover:text-Green900 transition-colors ${percentage === percent ? 'bg-Green400 text-Green900' : 'bg-Green900 text-White hover:bg-hover-color'}`}
                        onClick={() => setPercentage(percent)}>
                        {percent}%
                    </button>
                ))}

                {/* custom percentage */}
                <input type="text" placeholder="Custom" onChange={(e) => setPercentage(e.target.value ? parseFloat(e.target.value) : null)}
                    className="p-2 bg-Grey50 rounded-md text-Green900 border border-transparent hover:border-hover-color focus:border-hover-color text-center font-bold outline-none" />
            </div>
        </div>
    )
}

export default TipSelection