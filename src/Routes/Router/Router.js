import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import ApplyNow from "../../Pages/ApplyNow/ApplyNow/ApplyNow";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/apply-now',
                element: <ApplyNow></ApplyNow>
            },
        ]
    }
]);

export default router;