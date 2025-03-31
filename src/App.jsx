import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Preloader from "~/components/preloader";

const HomePage = lazy(() => import("~/pages/home"));
const BrideInvitationPage = lazy(() => import("~/pages/invitation/bride"));
const GroomInvitationPage = lazy(() => import("~/pages/invitation/groom"));

const App = () => {
  return (
    <Suspense fallback={<Preloader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/invitation/:id" element={<BrideInvitationPage />} />
        <Route path="/invitations/:id" element={<GroomInvitationPage />} />

        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};
export default App;
