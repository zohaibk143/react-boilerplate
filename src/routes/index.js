import React, { lazy, Suspense } from "react";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Loading from "../components/loading";
import CodesListPage from '../pages/codes-definition/codesList';
import CodesMappingPage from "../pages/codes-mapping/codesMapping";
/* const CptCodesAddForm = lazy(() => import("../pages/forms/cptCodesAddForm")); */
const LoginPage = lazy(() => import("../pages/login"));

function RoutePage() {
  const privateRoutes = [
    {
      path: "/cabrige-list",
      component: CodesListPage,
    },

    {
      path: "/cabrige-mapping",
      component: CodesMappingPage,
    },
  ];
  return (
    <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="cabrige-list" element={<CodesListPage />} />
        <Route path="cabrige-mapping" element={<CodesMappingPage />} />
        {/* <Route path="codes-add-form" element={<CptCodesAddForm />} /> */}
        {/* {privateRoutes.map((route, i) => {
          return (
            <ProtectedRoute
              key={i}
              exact
              path={route.path}
              component={route.component}
            />
          );
        })} */}
      </Routes>
    </Suspense>
  </BrowserRouter>
  );
}

export default RoutePage;
