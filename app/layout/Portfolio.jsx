import PortfolioCard from "../components/PortfolioCard"

const Portfolio = () => {
    return (
        <div className="w-full py-10 px-10 md:px-30">
            <div className="w-full flex justify-between items-center">
                <p className="font-semibold text-2xl">Portfolio</p>
                <p className="">Lihat Selengkapnya</p>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-5 mt-5">
                <PortfolioCard image="/portfolio/027-Gentelella-Alela-colorlib.com_.png" title="Aplikasi ABC" detail="Lorem Ipsum Dolor Sit Amet" url="/"/>
                <PortfolioCard image="/portfolio/027-Gentelella-Alela-colorlib.com_.png" title="Aplikasi ABC" detail="Lorem Ipsum Dolor Sit Amet" url="/"/>
                <PortfolioCard image="/portfolio/027-Gentelella-Alela-colorlib.com_.png" title="Aplikasi ABC" detail="Lorem Ipsum Dolor Sit Amet" url="/"/>
                <PortfolioCard image="/portfolio/027-Gentelella-Alela-colorlib.com_.png" title="Aplikasi ABC" detail="Lorem Ipsum Dolor Sit Amet" url="/"/>
                <PortfolioCard image="/portfolio/027-Gentelella-Alela-colorlib.com_.png" title="Aplikasi ABC" detail="Lorem Ipsum Dolor Sit Amet" url="/"/>
            </div>
        </div>
    )
}

export default Portfolio
