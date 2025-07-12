import CalculatedAmount from "./CalculatedAmount"

const OutputSide = () => {
    return (
        <div className="bg-Green900 py-4 px-6 rounded-xl text-White flex flex-col justify-between">
            <div>
                <CalculatedAmount amount={4.3} type="tip" />
                <CalculatedAmount amount={22.3} type="total" />
            </div>
            <button className=" bg-Green400 text-Green900 py-2 mt-4 uppercase rounded-md w-full cursor-pointer hover:bg-hover-color">reset</button>
        </div>
    )
}

export default OutputSide