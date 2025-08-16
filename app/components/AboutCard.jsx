import Image from "next/image"

const AboutCard = () => {
    return (
        <div className="border-1 border-gray-400 w-full md:w-4/5 rounded-md">
            <div className="flex items-center px-8 py-4 w-full border-b-1 border-b-gray-400 bg-gray-100 rounded-t-md">
                <Image
                    width={120}
                    height={120}
                    alt="Moki Koding"
                    src={"/moki-logo-dark.png"}
                />
            </div>
            <div className="px-8 py-4">
                <p className="text-justify">
                    Moki Koding adalah penyedia layanan digital kreatif yang berfokus pada pengembangan website, aplikasi, serta solusi teknologi berbasis kebutuhan klien. Kami berkomitmen untuk menghadirkan produk digital yang tidak hanya fungsional, tetapi juga memiliki nilai estetika dan pengalaman pengguna yang optimal. Dengan tim yang kompeten dan berpengalaman di bidangnya, Moki Koding siap menjadi mitra strategis dalam mewujudkan transformasi digital bisnis Anda secara profesional dan efisien.
                </p>
            </div>
        </div>
    )
}

export default AboutCard
