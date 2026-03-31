import {
   ArrowRight,
   Button,
   InputPassword,
   RegisterSocilMidiea,
   useForm,
} from "@/import.js";

const LogIn = () => {
   const {
      register,
      handleSubmit,   
      formState: { errors },
      getValues,
   } = useForm({
      mode: "onChange", 
   });

   const onSubmit = data => {
      console.log(data);
   };
   return (
      <div>
         <div className={`absolute  w-[90%] top-15 text-xl z-30  ml-5`}>
            <h1 className="text-xl font-bold text-white text-center mt-10 z-30 relative">
               Log in to MyTube.com
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
               <InputPassword
                  register={register}
                  errors={errors}
                  getValues={getValues}
               />
               <Button
                  role="alert"
                  aria-live="assertive"
                  aria-invalid={!!errors.root}
                  type={"sumbit"}
                  className={
                     "p-5 cursor-pointer text-white w-11/12 mt-3 bg-[#926247]"
                  }
                  variant="destructive"
               >
                  sumbit <ArrowRight />
               </Button>
            </form>
            <RegisterSocilMidiea />
         </div>
      </div>
   );
};

export default LogIn;
