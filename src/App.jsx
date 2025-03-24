import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const HomePage = lazy(() => import("~/pages/home"));
const InvitationPage = lazy(() => import("~/pages/invitation"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...............</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/invitation/:id" element={<InvitationPage />} />
      </Routes>
    </Suspense>
  );
};
export default App;
