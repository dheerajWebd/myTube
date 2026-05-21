import React, { useRef } from "react";
import Navbar from "./Navbar/Navbar";
import BottomNav from "./Navbar/BottomNav";

const HomePage = () => {


   return (
      <main className="w-full  bg-accent">
         <Navbar />

         <div className="h-2000"></div>

         <BottomNav />
      </main>
   );
};

export default HomePage;
