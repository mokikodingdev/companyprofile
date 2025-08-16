import Image from "next/image";
import Hero from "./layout/Hero";
import About from "./layout/About";
import Service from "./layout/Service";
import Portfolio from "./layout/Portfolio";

export default function Home() {
    return (
        <>
            <Hero />
            <div className="w-full px-10 md:px-15">
                <About />
            </div>
            <Service />
            <Portfolio />
        </>
    );
}
