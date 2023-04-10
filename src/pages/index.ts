/* split code */
import * as React from "react";

export const NotFoundPage = React.lazy(() => import("@/pages/Error/NotFoundPage"));

export const HomePage = React.lazy(() => import("@/pages/Home/HomePage"));

export const LoadingPage = React.lazy(() => import("@/pages/Loading/LoadingPage"));
