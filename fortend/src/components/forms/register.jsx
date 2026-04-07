import {
   InputEmail,
   Button,
   ArrowRight,
   RegisterSocilMidiea,
   InputPassword,
   Step1,
   Step2,
   createUser,
   useDispatch,
   useSelector,
} from "@/import.js";

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

   const onSubmit = async data => {
      const formData = new FormData();
      console.log(data);
      const { email, password, avatar, userName, fullName } = data;

      console.log(avatar[0]);

      formData.append("userName", userName);
      formData.append("avatar", avatar[0]);
      formData.append("password", password);
      formData.append("email", email);
      formData.append("fullName", fullName);
      dispatch(createUser(formData));
      setStaps(0);
      reset();
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
            {staps == 1 && <Step1 register={register} errors={errors} />}

            {staps == 2 && <Step2 register={register} errors={errors} />}

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
         {staps === 0 && <RegisterSocilMidiea />}
      </div>
   );
};

export default Register;
