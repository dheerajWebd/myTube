import { Input, Label, FcAddImage } from "@/import.js";

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

export default Step2;

export { Step1, Step2 };
