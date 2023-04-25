import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import ApplyNow from "../../Pages/ApplyNow/ApplyNow/ApplyNow";
import ApplyAsSchool from "../../Pages/ApplyNow/ApplyAsSchool/ApplyAsSchool";
import ApplyAsIndividual from "../../Pages/ApplyNow/ApplyAsIndividual/ApplyAsIndividual";

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
            {
                path: '/apply-now/school',
                element: <ApplyAsSchool></ApplyAsSchool>
            },
            {
                path: '/apply-now/individual',
                element: <ApplyAsIndividual></ApplyAsIndividual>
            },
        ]
    }
]);

export default router;