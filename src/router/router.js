import {createBrowserRouter} from "react-router-dom";
import {AppRoutes, AppRoutes as appRoutes} from "./appRoutes";
import {MainLayout} from "../layouts/MainLayout";
import {MoviesPage} from "../pages/MoviesPage";
import {MovieInfoPage} from "../pages/MovieInfoPage";
import {GenresListPage} from "../pages/GenresListPage";
import {MoviesByGenreListPage} from "../pages/MoviesByGenreListPage";

const router = createBrowserRouter([
    {
        path: appRoutes.MAIN,
        element: <MainLayout/>,
        children: [
            {
                path: AppRoutes.MOVIESPAGE,
                element: <MoviesPage/>
            },
            {
                path: AppRoutes.MOVIEINFO,
                element: <MovieInfoPage/>
            },
            {
                path: AppRoutes.GENRELIST,
                element: <GenresListPage/>
            },
            {
                path: AppRoutes.FILTERBYGENRE,
                element: <MoviesByGenreListPage/>
            }


        ]
    }
]);

export {
    router
}