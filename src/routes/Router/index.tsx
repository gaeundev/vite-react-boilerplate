import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { HomePage, NotFoundPage, LoadingPage } from "@/pages";

import CustomRouter from "./CustomRouter";

const Router = () => {
  return (
    <CustomRouter>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </CustomRouter>
  );
};

export default Router;
