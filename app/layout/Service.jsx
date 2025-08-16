import ServiceCard from "../components/ServiceCard"

const Service = () => {
    return (
        <div className="w-full py-10 md:py-20 px-5 md:px-30 bg-[url(/section-bg.svg)] mt-20 bg-cover bg-center flex flex-col justify-center items-center gap-3">
            <h1 className="text-3xl text-white font-semibold">Layanan Kami</h1>
            <div className="flex flex justify-center flex-wrap items-center gap-4 mt-8">
                <ServiceCard icon="/icons/money.svg" text="Website & Aplikasi Untuk Bisnis" />
                <ServiceCard icon="/icons/tools.svg" text="Perbaikan Laptop, Komputer, Printer" />
                <ServiceCard icon="/icons/globe.svg" text="Instalasi Jaringan Internet" />
                <ServiceCard icon="/icons/server.svg" text="Instalasi Server Aplikasi & Email" />
                <ServiceCard icon="/icons/firewall.svg" text="Konfigurasi Perangkat Firewall" />
                <ServiceCard icon="/icons/design.svg" text="Desain UI/UX" />
                <ServiceCard icon="/icons/security.svg" text="Penetration Testing Aplikasi" />
                <ServiceCard icon="/icons/cctv.svg" text="Pemasangan CCTV" />
                <ServiceCard icon="/icons/cybersec.svg" text="Cyber Security" />
                <ServiceCard icon="/icons/code.svg" text="Pembuatan Aplikasi Mobile (Android & IOS)" />
            </div>
        </div>
    )
}

export default Service
