import useMyContext from "../hooks/useMyContext"
import CalculatedAmount from "./CalculatedAmount"

const OutputSide = () => {
    const { tipAmount, totalAmount, resetAmounts } = useMyContext()

    return (
        <div className="bg-Green900 py-4 px-6 rounded-xl text-White flex flex-col justify-between">
            <div>
                <CalculatedAmount amount={tipAmount} type="tip" />
                <CalculatedAmount amount={totalAmount} type="total" />
            </div>
            <button type="button" onClick={resetAmounts}
                className=" bg-Green400 text-Green900 py-2 mt-4 uppercase rounded-md w-full cursor-pointer hover:bg-hover-color">reset</button>
        </div>
    )
}

export default OutputSide