import { useDispatch, useSelector } from "react-redux";
import "./index.css";

// import { register } from "./context/slice/registerSlice.js";
// import { Button } from "@/components/ui/button.jsx";
// import { createUser } from "./context/registerThunk/registerThunk.js";
// import { Input } from "@/components/ui/input.jsx";
import RegisterForm from "./components/forms/formUi.jsx";

const App = () => {
   // const state = useSelector(state => state.register);
   // const [file, setfile] = useState(null);
   // const dispatch = useDispatch();
   // const change = e => {
   //    setfile(e.target.files[0]);
   // };
   // const formData = new FormData();

   // formData.append("avatar", file);
   // formData.append("userName", "dhee7uyui4khgfjkhgrgajjhg");
   // formData.append("fullName", "fkhg45dg");
   // formData.append("email", "dheerukauyiyujlufgg54ukgkhgghkjh08997@gmail.com");
   // formData.append("password", "dheeDruyiyu4ajhk$kd534");

   // // for (const pair of formData.entries()) {
   // //    console.log(pair);
   // // }

   // const heandleClick = () => {
   //    dispatch(createUser(formData));
   // };
   // console.log(state);

   // return (
   //    <div>
   //       <Input
   //          className={"text-red-50"}
   //          onChange={change}
   //          variant="destructive"
   //          type="file"
   //          placeholder="select file"
   //       ></Input>
   //       <Button onClick={heandleClick} variant="destructive">
   //          click me
   //       </Button>
   //    </div>
   // );
   return (
      <>
         <RegisterForm />
      </>
   );
};

export default App;
