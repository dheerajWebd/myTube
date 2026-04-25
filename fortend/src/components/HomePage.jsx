//  create a home page fro myTube video website like a youtube home page

import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
   return (
      <main className="size-full bg-accent">
         <nav className="flex justify-center gap-4 ">
            <Link to="/register">register</Link>
            <Link to="/login">login</Link>
            <Link to="/forgetPassword">forgetPassword</Link>
         </nav>
      </main>
   );
};

export default HomePage;
