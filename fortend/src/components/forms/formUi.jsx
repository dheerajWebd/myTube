import { useState } from "react";
import { useForm } from "react-hook-form";

const RegisterForm = ({ Register, LogIn, ForgetPassword }) => {
   const [staps, setStaps] = useState(0);
   const [type, setType] = useState("button");
   const {
      register,
      handleSubmit,
      formState: {
         errors,
         isValid,
         disabled,
         isDirty,
         isReady,
         isValidating,
         dirtyFields,
         validatingFields,
      },
      reset,
      getValues,
      trigger,
      setError,
      clearErrors,
      getFieldState,
   } = useForm({
      mode: "onChange",
      shouldFocusError: true,
   });

   const handleClik = async () => {
      const valid1 = await trigger(["email", "password", "conform_password"], {
         shouldFocus: true,
      });
      const valid2 = await trigger(["userName", "fullName"], {
         shouldFocus: true,
      });
      if (!valid1) {
         setError("root", {
            type: "manual",
            message: "plz fill the all filds before goinging next stape ",
         });
         return;
      }
      clearErrors("root");

      if (!valid2) {
         setError("root", {
            type: "manual",
            message: "plz fill the all filds before goinging next stape ",
         });
         return;
      }

      clearErrors("root");
      setStaps(prev => prev + 1);
      clearErrors("root");
      if (staps == 1) {
         setType("sumbit");
      }
   };

   return (
      <>
         <div className="w-full bg-[#875d3b] md:bg-[url('./bg.webp')] bg-repeat-round bg-blend-color-burn">
            <div className=" w-full flex justify-center relative z-20 md:w-[70%] lg:w-[60%] xl:w-[50%] m-auto rounded-sm  md:pt-2 md:pb-2 ">
               <div
                  className={`w-screen md:border h-[120vh] relative z-20 bg-[#260d03] overflow-hidden ${LogIn && "bg-[#391515]"} rounded-sm shadow-[7px_7px_30px_black,-7px_-7px_30px_black]`}
               >
                  <div
                     className={`absolute text-white overflow-hidden -top-40 -right-19 z-20 rounded-[100%] w-[150%] h-60 bg-[#ae4703] sm:-right-37 `}
                  ></div>
               </div>

               {Register && (
                  <Register
                     handleClik={handleClik}
                     handleSubmit={handleSubmit}
                     register={register}
                     reset={reset}
                     errors={errors}
                     type={type}
                     getValues={getValues}
                     staps={staps}
                     isValid={isValid}
                     setStaps={setStaps}
                  />
               )}
               {LogIn && <LogIn />}
               {ForgetPassword && <ForgetPassword />}
            </div>
         </div>{" "}
      </>
   );
};

export default RegisterForm;
