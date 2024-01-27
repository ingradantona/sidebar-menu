import { Navigate, Route, Routes as RoutesWrapper } from "react-router-dom";
import { NotFound } from "../pages/NotFound/intex";
import { Home } from "../pages/Home";
import { Layout } from "../pages/components/Layout";

export function Routes() {
  return (
    <RoutesWrapper>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </RoutesWrapper>
  );
}
