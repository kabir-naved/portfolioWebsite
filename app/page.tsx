"use client";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";


const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[{ name: "Home", link: "/" }, { name: "About", link: "/Portfolio" }]} />
        <Hero />
      </div>
    </main>
  );
};

export default Home;
