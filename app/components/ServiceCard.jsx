import Image from "next/image"

const ServiceCard = (props) => {
    return (
        <div className="bg-white p-4 rounded-md w-full md:w-1/5 flex flex-col gap-3 hover:bg-gray-100">
            <div className="bg-moki-orange p-2 w-10 h-10 rounded flex justify-center items-center">
                <Image
                    width={100}
                    height={100}
                    className="w-full h-full"
                    src={props.icon}
                    alt="Service"
                />
            </div>
            <p className="font-semibold leading-4">{props.text}</p>
        </div>
    )
}

export default ServiceCard
