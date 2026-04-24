import { FcAddImage, ArrowRight, Button, Input, Label } from "@/import.js";
import { RefreshCwIcon } from "lucide-react";
import {
   InputOTP,
   InputOTPGroup,
   InputOTPSeparator,
   InputOTPSlot,
} from "../ui/input-otp";
import { Controller } from "react-hook-form";
/**
 * @description this is steps for register users
 *
 */
const Step1 = ({ register, errors }) => {
   return (
      <div>
         <Label
            htmlFor={"userName"}
            className={"text-sm -ml-1 mt-5 text-[#F0F1EE]"}
         >
            UserName
         </Label>
         <Input
            type="text"
            id={"userName"}
            aria-required="true"
            aria-label="userName"
            aria-invalid={!!errors.userName}
            className={"text-white mt-2 p-5"}
            {...register("userName", {
               required: {
                  value: true,
                  message: "userName is required",
               },
               minLength: {
                  value: 3,
                  message: "minmumm lenght is 3",
               },
               validate: {
                  checkCaptil: value =>
                     /^[a-z_ ]+$/.test(value) ||
                     "all lovercase letter or on spacil letter expect this '_' required",

                  check: value =>
                     !/[ ]/.test(value) || "empty space is not allow",
               },
            })}
         />

         <p
            id="userName"
            role="alert"
            aria-live="assertive"
            className="text-red-500 text-xs"
         >
            {errors.userName?.message}
         </p>
         <Label
            htmlFor={"fullName"}
            className={"text-sm -ml-1 mt-5 text-[#F0F1EE]"}
         >
            FullName
         </Label>
         <Input
            type="text"
            id={"fullName"}
            aria-required="true"
            aria-invalid={!!errors.fullName}
            aria-label="fullName"
            className={"text-white mt-2 p-5 mb-5"}
            {...register("fullName", {
               required: "Full name is required",
               minLength: {
                  value: 3,
                  message: "minmum lenght is 3",
               },
            })}
         />

         <p
            role="alert"
            aria-live="assertive"
            id="fullName"
            className="text-red-500 text-xs"
         >
            {errors.fullName?.message}
         </p>
      </div>
   );
};

const Step2 = ({ register, errors }) => {
   return (
      <div>
         <Label
            htmlFor={"avatar"}
            className={"text-sm -ml-1 mt-5 text-[#F0F1EE]"}
         >
            select Avatar
         </Label>
         <div className="relative border-2 flex justify-center items-center w-[90%] h-50">
            <FcAddImage className=" text-9xl top-0 z-1" />
            <Input
               type="file"
               id={"avatar"}
               aria-required="true"
               aria-invalid={!!errors.avatar}
               aria-label="avatar"
               className={
                  "w-[90%] h-50  text-center z-2 border-none  outline-none absolute top-0  text-transparent bg-transparent"
               }
               {...register("avatar", {
                  required: "avatar is required",
                  minLength: {
                     value: 3,
                     message: "minmum lenght is 3",
                  },
               })}
            />
         </div>

         <p
            role="alert"
            aria-live="assertive"
            id="avatar"
            className="text-red-500 text-xs"
         >
            {errors.avatar?.message}
         </p>
      </div>
   );
};

/**
 * @description this is steps for forget password
 *
 */

/* 

  
            {}

*/

const StapsForForgetPassword_1 = ({
   step,
   setStep,
   register,
   errors,
   isValid,
}) => {
   return (
      step === 0 && (
         <>
            <Label
               htmlFor="userName"
               className={"text-sm -ml-1 mt-5 mb-1 text-[#F0F1EE]"}
            >
               userName/email
            </Label>

            <Input
               id="userName"
               className={"text-white mt-2 p-5 mb-5"}
               type={"text"}
               placeholder={"enter your Email / Username"}
               {...register("userName", {
                  required: "user name or email are required",
                  minLength: {
                     value: 3,
                     message: "minimum lenght is 3",
                  },
                  validate: {
                     hasCheckType: value => {
                        if (/[@]/.test(value)) {
                           if (
                              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                                 value
                              )
                           ) {
                              return true;
                           } else {
                              return "invalid email formate";
                           }
                        } else if (/^[a-z_ ]+$/.test(value)) {
                           if (!/^[a-z_ ]+$/.test(value)) {
                              return "invalid user name";
                           } else {
                              return true;
                           }
                        } else {
                           return "invalid user name or  email ";
                        }
                     },
                     check: value =>
                        !/[ ]/.test(value) || "empty space is not allow",
                  },
               })}
               aria-invalid={!!errors.userName}
            />
            {errors?.userName && (
               <p
                  role="alert"
                  aria-live="assertive"
                  className="text-red-500 text-xs"
               >
                  {errors?.userName?.message}
               </p>
            )}

            <Button
               className=" flex justify-center items-center mb-5  p-5 cursor-pointer text-white w-11/12 mt-3 bg-[#926247]"
               type="submit"
               variant="ghost"
               size="default"
               disabled={!isValid}
               onClick={() => {
                  if (isValid) {
                     setStep(1);
                  } else {
                     return;
                  }
               }}
            >
               Send OTP
               <ArrowRight className="mr-2 h-4 w-4" />
            </Button>
         </>
      )
   );
};

const StepForgetPassword_2 = ({
   steps,
   control,
   errors,
   Controller,
   isValid,
}) => {
   return (
      steps === 1 && (
         <>
            <div className="flex flex-col items-center justify-center w-[90%]">
               <Controller
                  name="EmailOTP"
                  control={control}
                  rules={{
                     required: "OTP is required",
                     minLength: {
                        value: 6,
                        message: "OTP must be 6 digits",
                     },
                     maxLength: {
                        value: 6,
                        message: "OTP must be 6 digits",
                     },
                     pattern: {
                        value: /^[0-9]+$/,
                        message: "Only numbers allowed",
                     },
                  }}
                  render={({ field }) => (
                     <InputOTP
                        maxLength={6}
                        value={field.value || ""}
                        onChange={field.onChange}
                     >
                        <div className="flex mt-8 mb-5 items-center w-[clamp(200px,40%,25rem)]">
                           <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:hover:bg-amber-50  text-white *:data-[slot=input-otp-slot]:w-[clamp(2rem ,2rem,4rem)] *:data-[slot=input-otp-slot]:text-xl">
                              <InputOTPSlot index={0} />
                              <InputOTPSlot index={1} />
                              <InputOTPSlot index={2} />
                           </InputOTPGroup>

                           <InputOTPSeparator className="mx-2 text-white" />

                           <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:hover:bg-amber-50 text-white *:data-[slot=input-otp-slot]:w-[clamp(2rem,2rem,3rem)] *:data-[slot=input-otp-slot]:text-xl">
                              <InputOTPSlot index={3} />
                              <InputOTPSlot index={4} />
                              <InputOTPSlot index={5} />
                           </InputOTPGroup>
                        </div>
                     </InputOTP>
                  )}
               />
               {errors?.EmailOTP && (
                  <p
                     role="alert"
                     aria-live="assertive"
                     className="text-red-500 text-xs"
                  >
                     {errors?.EmailOTP?.message}
                  </p>
               )}
               <Button
                  role="alert"
                  aria-live="assertive"
                  aria-invalid={!!errors.root}
                  type={"submit"}
                  disabled={!isValid}
                  className={
                     "p-5 cursor-pointer text-white  w-[clamp(200px,40%,25rem)] mt-3 bg-[#926247]"
                  }
                  variant="destructive"
               >
                  varify OTP <ArrowRight />
               </Button>
            </div>
         </>
      )
   );
};

export { Step1, Step2, StapsForForgetPassword_1, StepForgetPassword_2 };
