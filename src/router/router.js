import {createBrowserRouter} from "react-router-dom";
import {AppRoutes as appRoutes} from "./appRoutes";
import {MainLayout} from "../layouts/MainLayout";
import {MoviesPage} from "../pages/MoviesPage";
import {moviesListService} from "../services/moviesListService";

const router = createBrowserRouter([
    {
        path: appRoutes.MAIN,
        element: <MainLayout/>,
        children: [

            {
                path: appRoutes.MAIN,
                element: <MoviesPage/>,
            },

        ]
    }
]);

export {
    router
}