import Image from "next/image";
import Hero from "./layout/Hero";
import About from "./layout/About";
import Service from "./layout/Service";
import Portfolio from "./layout/Portfolio";
import Consultation from "./layout/Consultation";
import Footer from "./layout/Footer";

export default function Home() {
    return (
        <>
            <Hero />
            <div className="w-full px-5 md:px-30">
                <About />
            </div>
            <Service />
            <Portfolio />
            <Consultation />
            <Footer />
        </>
    );
}
