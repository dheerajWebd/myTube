import { Input, Label, useState } from "@/import.js";
import { Eye, EyeClosed } from "lucide-react";

const InputEmail = ({ register, errors }) => {
   return (
      <div className="email">
         <Label htmlFor="email" className={"text-sm -ml-1 mt-5 text-[#F0F1EE]"}>
            Email Address
         </Label>
         <Input
            className={"text-white mt-2 p-5"}
            id={"email"}
            type={"email"}
            placeholder={"enter your email"}
            {...register("email", {
               required: "Email required",
               pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email",
               },
            })}
            aria-invalid={!!errors.email}
            aria-describedby="email-error"
            aria-label="Email Address"
            aria-required="true"
         />
         {errors.email && (
            <p
               id="email-error"
               role="alert"
               aria-live="assertive"
               className="text-red-500 text-xs"
            >
               {errors.email?.message}
            </p>
         )}
      </div>
   );
};

const InputPassword = ({ register, errors, getValues }) => {
   const [showPassword, setShowPassword] = useState(false);
   const [showConfirmPassword, showSetConfirmPassword] = useState(false);

   return (
      <div>
         <Label
            htmlFor="password"
            className={"text-sm -ml-1 mt-5 text-[#F0F1EE]"}
         >
            password
         </Label>

         <div className="w-full items-center mt-8 mb-7  flex relative">
            <Input
               className={"text-white p-5 absolute"}
               id={"password"}
               type={showPassword ? "text" : "password"}
               placeholder={"enter your password"}
               {...register("password", {
                  required: "password is required",
                  validate: {
                     minLength: value =>
                        value.length >= 6 || "Minimum 6 characters required",

                     hasUpperCase: value =>
                        /[A-Z]/.test(value) ||
                        "At least one uppercase letter required",

                     hasNumber: value =>
                        /[0-9]/.test(value) || "At least one number required",

                     hasSpecialChar: value =>
                        /[!@#$%^&*]/.test(value) ||
                        "At least one special character required",
                  },
               })}
               aria-invalid={!!errors.password}
               aria-describedby="password-error"
               aria-label="password"
               aria-required="true"
            />
            <button
               type="button"
               onClick={e => {
                  e.preventDefault();
                  setShowPassword(!showPassword);
               }}
            >
               {showPassword ? (
                  <Eye className="text-white absolute right-3 -top-3 text-right " />
               ) : (
                  <EyeClosed className="text-white absolute right-3 -top-3 text-right " />
               )}
            </button>
         </div>
         {errors.password && (
            <p
               id="password-error"
               role="alert"
               aria-live="assertive"
               className="text-red-500 text-xs"
            >
               {errors.password?.message}
            </p>
         )}
         <Label
            htmlFor="conform_password"
            className={"text-sm -ml-1 mt-5 text-[#F0F1EE]"}
         >
            conform_password
         </Label>

         <div className="w-full items-center mt-8 mb-7 flex relative">
            <Input
               className={"text-white p-5 absolute"}
               id={"conform_password"}
               type={showConfirmPassword ? "text" : "password"}
               placeholder={"enter your conform_password"}
               {...register("conform_password", {
                  required: "conform_password is required",
                  validate: {
                     minLength: value =>
                        value.length >= 6 || "Minimum 6 characters required",

                     hasUpperCase: value =>
                        /[A-Z]/.test(value) ||
                        "At least one uppercase letter required",

                     hasNumber: value =>
                        /[0-9]/.test(value) || "At least one number required",

                     hasSpecialChar: value =>
                        /[!@#$%^&*]/.test(value) ||
                        "At least one special character required",

                     hasCompare: value => {
                        if (value !== getValues("password")) {
                           return "does'n match password or confirmPassword ";
                        } else {
                           return true;
                        }
                     },
                  },
               })}
               aria-invalid={!!errors.conform_password}
               aria-describedby="password-error"
               aria-label="password"
               aria-required="true"
            />
            <button
               type="button"
               onClick={e => {
                  e.preventDefault();
                  showSetConfirmPassword(!showConfirmPassword);
               }}
            >
               {showConfirmPassword ? (
                  <Eye className="text-white absolute right-3 -top-3 text-right " />
               ) : (
                  <EyeClosed className="text-white absolute right-3 -top-3 text-right " />
               )}
            </button>
         </div>
         {errors.conform_password && (
            <p
               id="password"
               role="alert"
               aria-live="assertive"
               className="text-red-500 text-xs"
            >
               {errors.conform_password?.message}
            </p>
         )}
      </div>
   );
};



export { InputPassword, InputEmail };
