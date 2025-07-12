import type React from "react";
import dollarSign from "../assets/icon-dollar.svg";
import personIcon from "../assets/icon-person.svg";
import useMyContext from "../hooks/useMyContext";

const InputBox = ({ label }: { label: string }) => {
    const { bill, people, setBill, setPeople, isFocused } = useMyContext()

    const icon = label === "bill" ? dollarSign : personIcon;
    const iconAlt = label === "bill" ? "Dollar Sign Icon" : "Person Icon";

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (label === "bill") {
            setBill(value ? parseFloat(value) : 0);
        }
        else {
            setPeople(value ? parseInt(value) : 0);
        }
    }

    return (
        <div className="flex flex-col gap-2 ">
            <div className="flex items-center justify-between">
                <label htmlFor="label" className="text-sm text-Grey500 font-bold">{label} </label>
                {isFocused && (label == "bill" && bill == 0 || label == "people" && people == 0) &&
                    <span className="text-red-500 text-xs"> Can't be zero</span>
                }

            </div>

            <div className="">
                <img src={icon} alt={iconAlt} className="absolute ml-3 mt-3" />
                <input type="text" name="" id={label} placeholder="0"
                    value={label === "bill" ? bill : people}
                    onChange={handleInputChange}
                    className="bg-Grey50 text-Green900 text-lg font-bold py-2 ps-10 pe-5 rounded-lg w-full px-10 outline-0 text-right border border-transparent hover:border-hover-color focus:border-hover-color" />
            </div>

        </div>
    )
}

export default InputBox