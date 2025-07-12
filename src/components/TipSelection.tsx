import { useState } from "react";

const tipPercentages = [5, 10, 15, 25, 50];

const TipSelection = () => {
    const [selectedTip, setSelectedTip] = useState<number | null>(null);
    console.log(selectedTip);

    return (
        <div>
            <p className="text-sm text-gray-500 font-bold mb-3">Select Tip %</p>
            <div className="grid grid-cols-2 gap-3">
                {tipPercentages.map(percent => (
                    <button key={percent}
                        className={` p-2 rounded-md cursor-pointer hover:bg-Green400 hover:text-Green900 transition-colors ${selectedTip === percent ? 'bg-Green400 text-Green900' : 'bg-Green900 text-White'}`}
                        onClick={() => setSelectedTip(percent)}>
                        {percent}%
                    </button>
                ))}
                <input type="text" placeholder="Custom" onChange={(e) => setSelectedTip(e.target.value ? parseFloat(e.target.value) : null)}
                    className="p-2 bg-Grey50 text-Green900 text-center font-bold outline-none" />
            </div>
        </div>
    )
}

export default TipSelection