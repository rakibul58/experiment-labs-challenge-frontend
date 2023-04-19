import MyHelmet from "./components/MyHelmet";
import "./App.css";
import router from "./Routes/Router/Router";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto App">
      <RouterProvider router={router} ></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
