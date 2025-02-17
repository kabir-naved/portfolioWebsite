"use client";
import Tech from "@/components/Tech";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { FaHome } from "react-icons/fa";
import Experience from "@/components/Experiences";
import Footer from "@/components/Footer";
import { Contact } from "@/components/Contact";


const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5"> 
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid/>
        <RecentProjects />
        {/* <Tech/> */}
        <Experience/>
        <Contact/>
        <Footer/>
      </div>
    </main>
  );
};

export default Home;
