import {
   ArrowRight,
   Button,
   Input,
   Label,
   useForm,
   useState,
} from "@/import.js";

import { Controller } from "react-hook-form";
import {
   StapsForForgetPassword_1,
   StapsForNewPassword,
   StepForgetPassword_2,
} from "./formSteps";
import { Link, useNavigate } from "react-router-dom";

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
            <StapsForNewPassword
               register={register}
               errors={errors}
               setStep={setSteps}
               isValid={isValid}
               step={steps}
               getValues={getValues}
            />
         </form>
      </div>
   );
};

export default ForgetPassword;
