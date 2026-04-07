import { ArrowRight, Button, Input, Label, useForm } from "@/import.js";

const ForgetPassword = () => {
   const {
      register,
      handleSubmit,
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

            <Label
               htmlFor="EmailOTP"
               className={"text-sm -ml-1 mt-5 mb-1 text-[#F0F1EE]"}
            >
               Email OTP
            </Label>

            <Input
               id="EmailOTP"
               placeholder="enter your email OTP "
               className={"text-white mt-2 p-5 mb-5"}
               type={"text"}
               {...register("EmailOTP", {
                  required: "EmailOTP are required",
                  minLength: {
                     value: 4,
                     message: "minimum lenght is 3",
                  },
                  maxLength: {
                     value: 4,
                     message: "maximum lenght is 4",
                  },
               })}
               aria-invalid={!!errors.EmailOTP}
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
                  "p-5 cursor-pointer text-white w-11/12 mt-3 bg-[#926247]"
               }
               variant="destructive"
            >
               submit <ArrowRight />
            </Button>
         </form>
      </div>
   );
};

export default ForgetPassword;
