import Image from "next/image"

const Footer = () => {
    return (
        <footer className="w-full py-10 px-10 md:px-30 bg-[url(/section-bg.svg)] mt-20 bg-cover bg-center flex flex-col justify-center items-center gap-5 text-white">
            <div className="w-full flex flex-col md:flex-row justify-between gap-5 md:gap-0">
                <div className="flex flex-col gap-1 md:gap-3 w-full md:w-1/3">
                    <Image
                        width={180}
                        height={130}
                        alt="Moki Koding"
                        src={"/moki-logo-light.png"}
                    />
                    <p className="leading-5">Jasa Teknologi Sebagai Solusi Digital Dengan Eksekusi Total</p>
                </div>
                <div className="flex flex-col gap-1 md:gap-3 w-full md:w-1/3">
                    <p className="font-semibold">Alamat</p>
                    <p className="leading-5">Jln. Kartowijoyo Saringan Utara Tanjung Enim Kab. Muara Enim, Sumatera Selatan</p>
                </div>
                <div className="flex flex-col gap-1 md:gap-3 w-full md:w-1/3">
                    <p className="font-semibold">Kontak</p>
                    <div className="flex gap-3">
                        <div>
                            <div className="flex gap-2">
                                <Image
                                    width={15}
                                    height={15}
                                    alt="Moki Koding"
                                    src={"/icons/email.svg"}
                                />
                                <p>info@mokikoding.my.id</p>
                            </div>
                            <div className="flex gap-2">
                                <Image
                                    width={15}
                                    height={15}
                                    alt="Moki Koding"
                                    src={"/icons/whatsapp-light.svg"}
                                />
                                <p>+6281273328123</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-2">
                                <Image
                                    width={15}
                                    height={15}
                                    alt="Moki Koding"
                                    src={"/icons/facebook-light.svg"}
                                />
                                <p>Moki Koding</p>
                            </div>
                            <div className="flex gap-2">
                                <Image
                                    width={15}
                                    height={15}
                                    alt="Moki Koding"
                                    src={"/icons/instagram-light.svg"}
                                />
                                <p>@moki_koding</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-t-1 border-gray-white w-full" />
            <div className="w-full flex justify-between items-center">
                <p>2025© All rights reserved Moki Koding</p>
                <div className="flex gap-3">
                    <div className="w-10 h-10 bg-white flex justify-center items-center rounded">
                        <Image
                            width={20}
                            height={20}
                            alt="Moki Koding"
                            src={"/icons/instagram-dark.svg"}
                        />
                    </div>
                    <div className="w-10 h-10 bg-white flex justify-center items-center rounded">
                        <Image
                            width={20}
                            height={20}
                            alt="Moki Koding"
                            src={"/icons/facebook-dark.svg"}
                        />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
