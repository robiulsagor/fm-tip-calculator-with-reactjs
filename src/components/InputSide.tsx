import InputBox from "./InputBox"
import TipSelection from "./TipSelection"

const InputSide = () => {
    return (
        <div className="flex flex-col gap-8">
            <InputBox label="Bill" />
            <TipSelection />
            <InputBox label="No. of People" />
        </div>
    )
}

export default InputSide