import { lazy, Suspense, useState } from "react";
// import {
//    useForm,
//    useState,
// } from "@/import.js";

import { Controller, useForm } from "react-hook-form";

const StapsForNewPassword = lazy(() =>
   import("./formSteps").then(module => ({
      default: module.StapsForNewPassword,
   }))
);
const StapsForForgetPassword_1 = lazy(() =>
   import("./formSteps").then(module => ({
      default: module.StapsForForgetPassword_1,
   }))
);
const StepForgetPassword_2 = lazy(() =>
   import("./formSteps").then(module => ({
      default: module.StepForgetPassword_2,
   }))
);
import { useNavigate } from "react-router-dom";
import SuspenseLoading from "../loader/SuspenseLoading";

const ForgetPassword = () => {
   const [steps, setSteps] = useState(0);
   const {
      register,
      handleSubmit,
      getValues,
      control,
      formState: { errors, isValid },
      reset,
   } = useForm({
      mode: "onChange",
   });
   const navigator = useNavigate();
   const onSubmit = data => {
      console.log(data);

      if (steps == 2) {
         setSteps(0);
         navigator("/home");
      }
      reset();
   };
   return (
      <div className={`absolute  w-[90%] top-15 text-xl z-30  ml-5`}>
         <h1 className="text-xl font-bold text-white text-center mt-10 z-30 relative">
            Log in to MyTube.com
         </h1>
         <form onSubmit={handleSubmit(onSubmit)}>
            <SuspenseLoading>
               <StapsForForgetPassword_1
                  step={steps}
                  setStep={setSteps}
                  register={register}
                  errors={errors}
                  isValid={isValid}
               />
            </SuspenseLoading>

            <SuspenseLoading>
               <StepForgetPassword_2
                  steps={steps}
                  control={control}
                  errors={errors}
                  setStep={setSteps}
                  Controller={Controller}
                  isValid={isValid}
               />
            </SuspenseLoading>

            <SuspenseLoading>
               <StapsForNewPassword
                  register={register}
                  errors={errors}
                  setStep={setSteps}
                  isValid={isValid}
                  step={steps}
                  getValues={getValues}
               />
            </SuspenseLoading>
         </form>
      </div>
   );
};

export default ForgetPassword;
