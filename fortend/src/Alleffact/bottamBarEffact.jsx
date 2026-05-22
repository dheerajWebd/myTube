import React, { useEffect } from "react";

const usenavHideAndShow = (ref, toggal = true) => {
   useEffect(() => {
      let initialScroll = 0;

      const handleScroll = () => {
         const scrollY = window.scrollY;

         if (scrollY > initialScroll) {
            /**
             * @description top nav ke liye hai
             */
            ref.current.classList.add(toggal && "-top-22");
            ref.current.classList.remove(toggal && "top-0");
            /**
             * @description bottom nav ke liye hai
             */
            ref.current.classList.add(toggal === false && "-bottom-20");
            ref.current.classList.remove(toggal === false && "bottom-0");
         } else {
            /**
             * @description top nav ke liye hai
             */
            ref.current.classList.add(toggal && "top-0");
            ref.current.classList.remove(toggal && "-top-20");

            /**
             * @description bottom nav ke liye hai
             */
            ref.current.classList.add(toggal === false && "bottom-0");
            ref.current.classList.remove(toggal === false && "-bottom-20");
         }

         initialScroll = scrollY;
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   });
};

export default usenavHideAndShow;
