const CalculatedAmount = ({ type, amount }: { type: string, amount: number }) => {
    const label = type === 'tip' ? 'Tip Amount' : 'Total';

    return (
        <div className="flex justify-between items-center mt-2 lg:mt-4">
            <div>
                <h2 className="text-sm lg:text-base">{label} </h2>
                <span className="text-xs lg:text-sm text-Grey400">/ person</span>
            </div>

            <p className="text-2xl lg:text-4xl text-Green400">${amount}</p>
        </div>
    )
}

export default CalculatedAmount