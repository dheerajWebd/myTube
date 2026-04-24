import {
   ArrowRight,
   Button,
   Input,
   Label,
   useForm,
   useState,
} from "@/import.js";

import { Controller } from "react-hook-form";
import { StapsForForgetPassword_1, StepForgetPassword_2 } from "./formSteps";

const ForgetPassword = () => {
   const [steps, setSteps] = useState(0);
   const {
      register,
      handleSubmit,
      control,
      formState: { errors, isValid },
      reset,
   } = useForm({
      mode: "onChange",
   });

   const onSubmit = data => {
      console.log(data);
      reset();
   };
   return (
      <div className={`absolute  w-[90%] top-15 text-xl z-30  ml-5`}>
         <h1 className="text-xl font-bold text-white text-center mt-10 z-30 relative">
            Log in to MyTube.com
         </h1>

         <form onSubmit={handleSubmit(onSubmit)}>
            <StapsForForgetPassword_1
               step={steps}
               setStep={setSteps}
               register={register}
               errors={errors}
               isValid={isValid}
            />

            <StepForgetPassword_2
               steps={steps}
               control={control}
               errors={errors}
               setStep={setSteps}
               Controller={Controller}
               isValid={isValid}
            />
         </form>
      </div>
   );
};

export default ForgetPassword;
