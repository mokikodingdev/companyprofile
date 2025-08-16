'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {

    const [popupVisibility, setPopupVisibility] = useState(false)

    return (
        <nav className="border-1 border-gray-300 px-10 md:px-15 py-5 flex justify-between items-center text-gray-700">
            <Image
                width={130}
                height={130}
                alt="Moki Koding"
                src={"/moki-logo-dark.png"}
            />
            <div className="hidden md:flex justify-center items-center gap-5 bg-white p-3 top-20 right-10 z-10 border-1 md:border-0 border-gray-400 w-50 md:w-max rounded">
                <Link href={"/"}>
                    <p className="transition-all duration-300 ease-in-out hover:font-bold hover:border-1 md:hover:border-0 hover:border-gray-200 hover:p-2 md:hover:p-0">Layanan</p>
                </Link>
                <Link href={"/"}>
                    <p className="transition-all duration-300 ease-in-out hover:font-bold hover:border-1 md:hover:border-0 hover:border-gray-200 hover:p-2 md:hover:p-0">Portfolio</p>
                </Link>
                <Link href={"/"}>
                    <p className="transition-all duration-300 ease-in-out hover:font-bold hover:border-1 md:hover:border-0 hover:border-gray-200 hover:p-2 md:hover:p-0">Konsultasi</p>
                </Link>
                <Link href={"/"}>
                    <p className="transition-all duration-300 ease-in-out hover:font-bold hover:border-1 md:hover:border-0 hover:border-gray-200 hover:p-2 md:hover:p-0">Kontak</p>
                </Link>
            </div>
            {popupVisibility && (
                <div className="fixed md:static md:flex justify-center items-center gap-5 bg-white p-3 top-20 right-10 z-10 border-1 md:border-0 border-gray-400 w-50 md:w-max rounded">
                    <Link href={"/"}>
                        <p className="transition-all duration-300 ease-in-out hover:font-bold hover:border-1 md:hover:border-0 hover:border-gray-200 hover:p-2 md:hover:p-0">Layanan</p>
                    </Link>
                    <Link href={"/"}>
                        <p className="transition-all duration-300 ease-in-out hover:font-bold hover:border-1 md:hover:border-0 hover:border-gray-200 hover:p-2 md:hover:p-0">Portfolio</p>
                    </Link>
                    <Link href={"/"}>
                        <p className="transition-all duration-300 ease-in-out hover:font-bold hover:border-1 md:hover:border-0 hover:border-gray-200 hover:p-2 md:hover:p-0">Konsultasi</p>
                    </Link>
                    <Link href={"/"}>
                        <p className="transition-all duration-300 ease-in-out hover:font-bold hover:border-1 md:hover:border-0 hover:border-gray-200 hover:p-2 md:hover:p-0">Kontak</p>
                    </Link>
                </div>
            )}
            <Image
                width={25}
                height={25}
                alt="Moki Koding"
                src={"/icons/hamburger.svg"}
                className="block md:hidden"
                onClick={() => {popupVisibility ? setPopupVisibility(false) : setPopupVisibility(true)}}
            />
        </nav>
    )
}

export default Navbar
