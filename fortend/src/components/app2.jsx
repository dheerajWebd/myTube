import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
   name: z.string().min(1, "Name required"),
   email: z.string().email("Invalid email"),
});

export default function ButtonDemo() {
   const {
      register,
      handleSubmit,
      formState: { error },
   } = useForm({
      resolver: zodResolver(schema),
   });

   return (
      <form className="bg-amber-500" onSubmit={handleSubmit(console.log)}>
         <input {...register("name")} />

         <input {...register("email")} />
         <button type="submit">Submit</button>
      </form>
   );
}
