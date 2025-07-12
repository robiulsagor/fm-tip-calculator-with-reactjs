import InputBox from "./InputBox"
import TipSelection from "./TipSelection"

const InputSide = () => {
    return (
        <div className="flex flex-col gap-8">
            <InputBox label="bill" />
            <TipSelection />
            <InputBox label="people" />
        </div>
    )
}

export default InputSide