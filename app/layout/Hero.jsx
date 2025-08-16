import Navbar from "../components/Navbar"
import Image from "next/image"

const Hero = () => {
    return (
        <div>
            <Navbar />
            <div className="py-5 px-10 md:px-15 h-120 md:h-90 flex flex-col md:flex-row justify-center items-center">

                {/* LEFT */}
                <div className="bg-white h-full w-1/5 relative hidden md:flex justify-center items-center">
                    <div className="w-15 h-15 p-5 bg-moki-orange flex justify-center items-center rounded-md absolute top-25 right-20 shadow-lg shadow-[#EB6A3F] transition-all duration-300 ease-in-out hover:shadow-xl hover:top-20 icon-anim-top">
                        <Image
                            width={15}
                            height={15}
                            alt="Design"
                            className="w-full"
                            src={"/icons/design.svg"}
                        />
                    </div>
                    <div className="w-15 h-15 p-4 bg-moki-orange flex justify-center items-center rounded-md absolute right-0 top-50 -rotate-20 shadow-lg shadow-[#EB6A3F] transition-all duration-300 ease-in-out hover:shadow-xl hover:top-45 hover:right-5 icon-anim-bottom">
                        <Image
                            width={15}
                            height={15}
                            alt="Design"
                            className="w-full"
                            src={"/icons/tools.svg"}
                        />
                    </div>
                </div>

                <div className="bg-white h-full w-full md:w-3/5 flex flex-col justify-center items-center gap-5">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-8xl leading-20 md:leading-20 md:text-8xl font-bold text-moki-blue text-center">Moki Koding</h1>
                        <p className="text-lg md:text-2xl font-medium text-center mt-3 md:mt-0">Solusi Digital, Eksekusi Total🚀</p>
                    </div>
                    <button className="font-medium text-white bg-moki-blue px-5 py-2 rounded cursor-pointer transition-all duration-300 ease-in-out hover:px-6 hover:py-3 active:px-4 active:py-1">Konsultasi Gratis Di Sini</button>
                </div>

                {/* RIGHT */}
                <div className="bg-white h-full w-1/5 relative hidden md:flex justify-center items-center">
                    <div className="w-15 h-15 p-4 bg-moki-orange flex justify-center items-center rounded-md absolute top-25 left-20 shadow-lg shadow-[#EB6A3F] icon-anim-top">
                        <Image
                            width={15}
                            height={15}
                            alt="Design"
                            className="w-full"
                            src={"/icons/security.svg"}
                        />
                    </div>
                    <div className="w-15 h-15 p-3 bg-moki-orange flex justify-center items-center rounded-md absolute left-0 top-50 rotate-20 shadow-lg shadow-[#EB6A3F] icon-anim-bottom-2">
                        <Image
                            width={15}
                            height={15}
                            alt="Design"
                            className="w-full"
                            src={"/icons/code.svg"}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero
