import { lazy, Suspense } from "react";
// import {
//    InputEmail,
//    Button,
//    ArrowRight,
//    RegisterSocilMidiea,
//    InputPassword,
//    Step1,
//    Step2,
//    createUser,
//    useDispatch,
//    useSelector,
// } from "@/import.js";
import { useDispatch, useSelector } from "react-redux";
import { InputEmail, InputPassword } from "./input";
import { Button } from "@/components/ui/button.jsx";
import RegisterSocilMidiea from "./registerSocilMidiea";
import { ArrowRight } from "lucide-react";
import { createUser } from "@/context/registerThunk/registerThunk";
import SuspenseLoading from "../loader/SuspenseLoading";
import { useNavigate } from "react-router-dom";
const Step1 = lazy(() =>
   import("./formSteps").then(module => ({
      default: module.Step1,
   }))
); // this method of named export
const Step2 = lazy(() =>
   import("./formSteps").then(module => ({
      default: module.Step2,
   }))
);

const Register = ({
   reset,
   handleSubmit,
   register,
   errors,
   getValues,
   handleClik,
   type,
   isValid,
   staps,
   setStaps,
}) => {
   const dispatch = useDispatch();
   const nevigate = useNavigate();
   const registerLoding = useSelector(state => state.register.registerLoding);

   const onSubmit = async data => {
      try {
         const formData = new FormData();
         const { email, password, avatar, userName, fullName } = data;

         formData.append("userName", userName);
         formData.append("avatar", avatar[0]);
         formData.append("password", password);
         formData.append("email", email);
         formData.append("fullName", fullName);

         dispatch(createUser(formData));
         if (registerLoding) {
            console.log("lkuklojhoi");
            nevigate("/");
            alert(
               <>
                  <h1>hii how are you</h1>
               </>
            );
            return (
               <>
                  <h1>.....</h1>
               </>
            );
         }

         reset();
      } catch (error) {}
   };

   return (
      <div className="absolute w-[90%] top-15 text-xl z-30  ml-5">
         <h1 className="text-xl font-bold text-white text-center mt-10 z-30 relative">
            Register to MyTube.com
         </h1>
         <form onSubmit={handleSubmit(onSubmit)}>
            {staps == 0 && (
               <div>
                  <InputEmail register={register} errors={errors} />

                  <InputPassword
                     register={register}
                     errors={errors}
                     getValues={getValues}
                  />

                  <div className="w-full flex items-center justify-center"></div>
               </div>
            )}
            {staps == 1 && (
               <SuspenseLoading>
                  <Step1 register={register} errors={errors} />
               </SuspenseLoading>
            )}

            {staps == 2 && (
               <SuspenseLoading>
                  <Step2 register={register} errors={errors} />
               </SuspenseLoading>
            )}

            <p
               id="root_error"
               role="alert"
               aria-live="assertive"
               className="text-red-500 text-xs"
            >
               {errors.root?.message}
            </p>
            <Button
               role="alert"
               aria-live="assertive"
               aria-invalid={!!errors.root}
               type={type}
               disabled={!isValid}
               onClick={handleClik}
               className={
                  "p-5 cursor-pointer text-white w-11/12 mt-3 bg-[#926247]"
               }
               variant="destructive"
            >
               {type === "button" ? "Next" : ""}{" "}
               {type == "sumbit" ? "sumbit" : ""} <ArrowRight />
            </Button>
         </form>
         {staps === 0 && <RegisterSocilMidiea to_link="/login" text="Login" />}
      </div>
   );
};

export default Register;
