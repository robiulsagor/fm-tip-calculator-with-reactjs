import dollarSign from "../assets/icon-dollar.svg";
import personIcon from "../assets/icon-person.svg";

const InputBox = ({ label }: { label: string }) => {
    const icon = label === "Bill" ? dollarSign : personIcon;
    const iconAlt = label === "Bill" ? "Dollar Sign Icon" : "Person Icon";

    return (
        <div className="flex flex-col gap-2 ">
            <label htmlFor="label" className="text-sm text-Grey500 font-bold">{label} </label>
            <div className="">
                <img src={icon} alt={iconAlt} className="absolute ml-3 mt-3" />
                <input type="text" name="" id={label} placeholder="0"
                    className="bg-Grey50 text-Green900 text-lg font-bold py-2 ps-10 pe-5 rounded-lg w-full px-10 outline-0 text-right border border-transparent hover:border-hover-color focus:border-hover-color" />
            </div>

        </div>
    )
}

export default InputBox