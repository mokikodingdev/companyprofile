import Image from "next/image"

const PortfolioCard = (props) => {
    return (
        <div className="bg-white border-1 border-gray-500 w-full md:w-1/5 rounded">
            <Image
                width={1000}
                height={1000}
                className="w-full"
                src={props.image}
                alt={props.title}
            />
            <div className="p-3 flex flex-col gap-3">
                <div>
                    <p className="font-semibold">{props.title}</p>
                    <p className="text-sm">{props.detail}</p>
                </div>
                <button className="w-full bg-moki-blue p-2 rounded text-white font-semibold">Lihat Detail</button>
            </div>
        </div>
    )
}

export default PortfolioCard
