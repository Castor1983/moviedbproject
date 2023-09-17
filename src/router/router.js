import {createBrowserRouter, Navigate} from "react-router-dom";
import {AppRoutes, AppRoutes as appRoutes} from "./appRoutes";
import {MainLayout} from "../layouts/MainLayout";
import {MoviesPage} from "../pages/MoviesPage";
import {MovieInfoPage} from "../pages/MovieInfoPage";
import {GenresListPage} from "../pages/GenresListPage";
import {MoviesByGenreListPage} from "../pages/MoviesByGenreListPage";
import {SearchByKeywordsPage} from "../pages/SearchByKeywordsPage";

const router = createBrowserRouter([
    {
        path: appRoutes.MAIN,
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={AppRoutes.MOVIESPAGE}/>
            },
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
            },
            {
                path: AppRoutes.SEARCH,
                element: <SearchByKeywordsPage/>
            }


        ]
    }
]);

export {
    router
}