import { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

function App() {
   const [data, setData] = useState([]);

   useEffect(() => {
      Axios.post(
         "http://localhost:5000/kam/test/response",
         {
            name: "Amit",
            age: 25,
         },
         {
            headers: {
               "Content-Type": "application/json",
               Accept: "application/json",
            },
         }
      )
         .then(res => setData(res.data))
         .catch(err => console.log(err));
   }, []);

   return (
      <div>
         <pre>{JSON.stringify(data, "",2," ")}</pre>
      </div>
   );
}

export default App;
