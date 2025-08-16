import PortfolioCard from "../components/PortfolioCard"

const Portfolio = () => {
    return (
        <div className="w-full py-20 px-10 md:px-30 flex justify-center">
            <div className="flex flex-col items-center">
                <div className="w-full flex justify-between items-center">
                    <p className="font-semibold text-2xl">Portfolio</p>
                    <p className="">Lihat Selengkapnya</p>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-5 mt-5">
                    <PortfolioCard image="/portfolio/027-Gentelella-Alela-colorlib.com_.png" title="Aplikasi ABC" detail="Lorem Ipsum Dolor Sit Amet" url="/" />
                    <PortfolioCard image="/portfolio/027-Gentelella-Alela-colorlib.com_.png" title="Aplikasi ABC" detail="Lorem Ipsum Dolor Sit Amet" url="/" />
                    <PortfolioCard image="/portfolio/027-Gentelella-Alela-colorlib.com_.png" title="Aplikasi ABC" detail="Lorem Ipsum Dolor Sit Amet" url="/" />
                    <PortfolioCard image="/portfolio/027-Gentelella-Alela-colorlib.com_.png" title="Aplikasi ABC" detail="Lorem Ipsum Dolor Sit Amet" url="/" />
                </div>
            </div>
        </div>
    )
}

export default Portfolio
