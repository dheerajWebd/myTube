import { FaFacebook, FaInstagram, RiGoogleLine } from "@/import.js";
const RegisterSocilMidiea = () => {
   return (
      <>
         <div className="text-white mt-8 w-full flex justify-evenly ">
            <div className=" cursor-pointer w-12 h-12 flex justify-center items-center rounded-xl border">
               <FaInstagram className=" text-4xl" />
            </div>
            <div className="w-12 cursor-pointer h-12 flex justify-center items-center rounded-xl border">
               <FaFacebook className="text-4xl" />
            </div>
            <div className="w-12 h-12 flex cursor-pointer justify-center items-center rounded-full border">
               <RiGoogleLine className="text-4xl" />
            </div>
         </div>
         <div className="w-full flex justify-center items-center flex-col mt-4">
            <p className=" text-[#c7c7c7f4] text-sm  ">
               Don't have an account ?
               <button
                  className=" 
                     cursor-pointer
                     underline ml-1
                      text-[#ff6f00] "
               >
                  <a href=""> Log In</a>
                  {/*     add the link of log in oage after create the page    */}
               </button>
            </p>
         </div>
      </>
   );
};

export default RegisterSocilMidiea;
