import React, { useEffect } from "react";

const usenavHideAndShow = (ref, toggal = true) => {
   useEffect(() => {
      let initialScroll = 0;

      const heandleScroll = () => {
         const scrollY = window.scrollY;
         let lastScroll = initialScroll < scrollY;
         lastScroll
            ? (ref.current.className = `slide  w-full fixed z-10 ${toggal ? "-top-20" : "-bottom-20 h-10 "} left-0 flex-col shadow-black/10 ${toggal ? "-top-20" : "-bottom-20 h-13 flex items-center  justify-between"} `)
            : (ref.current.className = `slide w-full fixed z-10 left-0  text-white border-t-[#c1c1c1] bg-linear-to-tr to-[#111821] via-[#080c10] from-[#10161f] flex-col shadow-black/10 justify-between ${toggal ? "top-0" : "bottom-0 h-13 flex flex-row items-center justify-evenly "} `);

         initialScroll = scrollY;
      };
      window.addEventListener("scroll", heandleScroll);
      return () => window.removeEventListener("scroll", heandleScroll);
   });
};

export default usenavHideAndShow;
