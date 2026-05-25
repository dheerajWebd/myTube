import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label.jsx";
import { Input } from "@/components/ui/input.jsx";
import { InputPassword } from "./input";
import { Button } from "@/components/ui/button.jsx";
import RegisterSocilMidiea from "./registerSocilMidiea";
import LoginThunk from "@/context/registerThunk/LoginThunk";
import { ArrowRight } from "lucide-react";

const LogIn = () => {
   const {
      register,
      handleSubmit,
      formState: { errors, isValid, isSubmitting, isSubmitted, isLoading },
      getValues,
      reset,
   } = useForm({
      mode: "onChange",
   });

   console.log(isSubmitting, isSubmitted, isLoading);

   const dispatch = useDispatch();
   const isLogin = useSelector(state => state.register.LogInData);
   const loading = useSelector(state => state.register.LoginLoding);
   const navigate = useNavigate();
   const onSubmit = async data => {
      if (isValid) {
         const isLogin2 = await dispatch(LoginThunk(data));
         console.log(isLogin2);
         if (isLogin2?.payload?.success === true) {
            console.log("dheeraj");
         }
      }
   };

   if (isLogin?.success === true) {
      navigate("/");
      return  window.location.reload();
   }
   if (loading) {
      return (
         <div className="bg-black/60 absolute flex-center justify-center size-full -top-1 rounded-2xl text-xl z-40 ">
            <h1>loading</h1>
         </div>
      );
   } else {
      return (
         <div className={`absolute w-[90%] top-15 text-xl z-30  ml-5`}>
            <h1 className="text-xl font-bold text-white text-center mt-10 z-30 relative">
               Log in to MyTube.com
            </h1>

            <form onSubmit={handleSubmit(onSubmit)}>
               <Label
                  htmlFor="userName"
                  className={"text-sm -ml-1 mt-5  text-[#F0F1EE]"}
               >
                  userName/email
               </Label>

               <Input
                  placeholder={"enter yor email / username "}
                  id="userName"
                  className={"text-white mt-2 p-5 cursor-pointer "}
                  type={"text"}
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
                  aria-invalid={errors.userName}
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
               <InputPassword
                  register={register}
                  errors={errors}
                  getValues={getValues}
               />
               <Link
                  to="/forgetPassword"
                  className="text-sm text-[#F0F1EE] mt-3 underline"
               >
                  forgetPassword
               </Link>
               <Button
                  role="alert"
                  aria-live="assertive"
                  aria-invalid={!!errors.root}
                  disabled={!isValid || loading || isSubmitting}
                  type={"sumbit"}
                  className={
                     "p-5 cursor-pointer text-white w-11/12 mt-3 bg-[#926247]"
                  }
                  variant="destructive"
               >
                  sumbit <ArrowRight />
               </Button>
            </form>
            <RegisterSocilMidiea to_link="/register" text={"register"} />
         </div>
      );
   }
};

export default LogIn;
